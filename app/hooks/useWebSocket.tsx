"use client";
import { Task } from '@/types/task';
import React, { createContext, useState, useEffect, useRef, useContext } from 'react';
import useLocalStorage from './useLocalStorage';
import { User } from '@/types/user';
import { Team } from '@/types/team';

interface WebSocketContextValue {
  tasks: Task[] | null;
  sendLockTask: (taskId: string) => void;
  sendUnlockTask: (taskId: string) => void;
  teamMembers: User[];
  teamInfo: Team | null;
  isConnected: boolean;
}

interface WebSocketProviderProps {
  url: string;
  children: React.ReactNode;
}

const WebSocketContext = createContext<WebSocketContextValue | undefined>(undefined);

export const WebSocketProvider = ({ url, children }: WebSocketProviderProps) => {
  const {value: token} = useLocalStorage<string>("token", "");

  const [tasks, setTasks] = useState<Task[]>([]);
  const [teamMembers, setTeamMembers] = useState<User[]>([])
  const [teamInfo, setTeamInfo] = useState<Team | null>(null)
  const [isConnected, setIsConnected] = useState(false);
  const websocket = useRef<WebSocket | null>(null);
  const reconnectInterval = useRef<NodeJS.Timeout | null>(null);
  const reconnectionAttempts = useRef(0);
  const maxReconnectionAttempts = 5;
  const initialReconnectDelay = 1000;

  

  useEffect(() => {
    const connect = () => {
    websocket.current = new WebSocket(url);

    websocket.current.onopen = () => {
      console.log('WebSocket connected in Context');
      setIsConnected(true);
      if (websocket.current?.readyState === WebSocket.OPEN) {
        websocket.current.send(JSON.stringify({ type: 'auth', token: `Bearer ${token}`}));
      } else {
        console.warn('Could not send message to authenticate WebSocket session.');
      }
      console.log('WebSocket connection authentication send.');
      reconnectionAttempts.current = 0;
      if (reconnectInterval.current) {
        clearInterval(reconnectInterval.current);
        reconnectInterval.current = null;
      }
    };

    websocket.current.onclose = () => {
      console.log('WebSocket disconnected in Context');
      setIsConnected(false);
      if (token && !reconnectInterval.current && reconnectionAttempts.current < maxReconnectionAttempts) {
        reconnectInterval.current = setTimeout(() => {
          console.log(`Attempting to reconnect WebSocket (${reconnectionAttempts.current + 1}/${maxReconnectionAttempts})...`);
          connect();
          reconnectionAttempts.current++;
        }, initialReconnectDelay * Math.pow(2, reconnectionAttempts.current));
      } else if (reconnectionAttempts.current >= maxReconnectionAttempts) {
        console.warn('Max WebSocket reconnection attempts reached.');
      }
    };

    websocket.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.entityType) {
          switch (data.entityType) {
            case 'TASKS':
              setTasks(data.payload);
              break;
            case 'MEMBERS':
              setTeamMembers(data.payload);
              break;
            case 'TEAM':
              setTeamInfo(data.payload);
              break;
            default:
              console.log('Received unhandled message entityType:', data.entityType);
          }
        }
        if (data.type) {
          switch (data.type) {
            case 'auth_failure':
              console.log("Websocket session authentication failed:", data.message)
            case 'auth_success':
              console.log("Websocket session authentication succeeded")
            default:
              console.log('Recieved unhandled message type:', data.type);
          }
        }
      } catch (error) {
        console.error('Failed to parse WebSocket message:', error, event.data);
      }
    };

    websocket.current.onerror = (error) => {
      console.error('WebSocket error in Context:', error);
      setIsConnected(false);
      if (!reconnectInterval.current && reconnectionAttempts.current < maxReconnectionAttempts) {
        reconnectInterval.current = setTimeout(() => {
          console.log(`Attempting to reconnect WebSocket after error (${reconnectionAttempts.current + 1}/${maxReconnectionAttempts})...`);
          connect();
          reconnectionAttempts.current++;
        }, initialReconnectDelay * Math.pow(2, reconnectionAttempts.current));
      }
    };
  };

    if(token) {
        connect();

      return () => {
      if (websocket.current?.readyState === WebSocket.OPEN) { 
          websocket.current.close();
      }
      if (reconnectInterval.current) {
          clearInterval(reconnectInterval.current);
      }
      };
    }
  }, [token, url]);

  const sendLockTask = (taskId: string) => {
    if (websocket.current?.readyState === WebSocket.OPEN) {
      websocket.current.send(JSON.stringify({ type: 'LOCK', payload: {"taskId": taskId}}));
      console.log("send lock")
    } else {
      console.warn('WS not open, cannot send block task update.');
    }
  };

  const sendUnlockTask = (taskId: string) => {
    if (websocket.current?.readyState === WebSocket.OPEN) {
      websocket.current.send(JSON.stringify({ type: 'UNLOCK', payload: {"taskId": taskId}}));
    } else {
      console.warn('WS not open, cannot send block task update.');
    }
  };

  return (
    <WebSocketContext.Provider value={{ tasks, teamMembers, teamInfo, sendLockTask, sendUnlockTask, isConnected }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = (): WebSocketContextValue => {
    const context = useContext(WebSocketContext);
    if (!context) {
      throw new Error('useAppWebSocket must be used within a WebSocketProvider');
    }
    return context;
  };
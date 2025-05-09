import { Task } from '@/types/task';
import React, { createContext, useState, useEffect, useRef, useContext } from 'react';
import useLocalStorage from './useLocalStorage';

interface WebSocketContextValue {
  tasks: Task[] | null;
  sendTasksUpdate: (newtasks: Task[]) => void;
//   valueTwo: any | null;
//   sendValueTwoUpdate: (newValue: any) => void;
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
//   const [valueTwo, setValueTwo] = useState<any | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const websocket = useRef<WebSocket | null>(null);
  const reconnectInterval = useRef<NodeJS.Timeout | null>(null);
  const reconnectionAttempts = useRef(0);
  const maxReconnectionAttempts = 5;
  const initialReconnectDelay = 1000;

  const connect = () => {
    websocket.current = new WebSocket(url);

    websocket.current.onopen = () => {
      console.log('WebSocket connected in Context');
      setIsConnected(true);
      if (websocket.current?.readyState === WebSocket.OPEN) {
        websocket.current.send(JSON.stringify({ type: 'auth', token: `Bearer ${token}`}));
      } else {
        console.warn('Could not authenticate WebSocket session.');
      }
      console.log('WebSocket connection authenticated.');
      reconnectionAttempts.current = 0;
      if (reconnectInterval.current) {
        clearInterval(reconnectInterval.current);
        reconnectInterval.current = null;
      }
    };

    websocket.current.onclose = () => {
      console.log('WebSocket disconnected in Context');
      setIsConnected(false);
      if (!reconnectInterval.current && reconnectionAttempts.current < maxReconnectionAttempts) {
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
        switch (data.type) {
          case 'valueOneUpdate':
            setTasks(data.value);
            break;
        //   case 'valueTwoUpdate':
        //     setValueTwo(data.value);
        //     break;
          default:
            console.log('Received unhandled message type:', data);
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

  useEffect(() => {
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
  }, [token]);

  const sendTasksUpdate = (newTasks: Task[]) => {
    if (websocket.current?.readyState === WebSocket.OPEN) {
      websocket.current.send(JSON.stringify({ entityType: 'task', payload: newTasks}));
    } else {
      console.warn('WS not open, cannot send tasks update.');
    }
  };

  return (
    <WebSocketContext.Provider value={{ tasks, sendTasksUpdate, isConnected }}>
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
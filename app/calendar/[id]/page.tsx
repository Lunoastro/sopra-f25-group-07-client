"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import Calendar from "./calendar";
import { Task } from "@/types/task";
import { useApi } from "@/hooks/useApi";
import { getServerWeekDays } from "@/utils/dateHelperFuncs";
import Logout from "@/components/logout";
import TeamInfo from "@/components/teamInfo";
import PinboardCalendarToggle from "@/components/pinboardCalendarToggle";
import PopUp, { PopUpAttributes } from "@/components/popUp";
import { FormValue } from "@/components/form/form";
import { User } from "@/types/user";
import TaskCard from "@/components/taskCard";
import AuthWrapper from "@/hooks/authWrapper";
import { useWebSocket } from "@/hooks/useWebSocket";


const CalendarPage: React.FC = () => {

  const [initialWeekDays, setInitialWeekDays] = useState<string[]>([]);

  useEffect(() => {
    async function fetchInitialData() {
      const weekDays = await getServerWeekDays();
      setInitialWeekDays(weekDays);
    }

    fetchInitialData();
  }, []);
  
  const apiService = useApi();
  const router = useRouter();

  const { value: token } = useLocalStorage<string>("token", "");

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
      const getCurrentUser = async () => {
        try {
          const result: User | null = await apiService.get("/users/me", token);
          setCurrentUser(result);
        } catch (error) {
          console.error("Error fetching tasks:", error);
        }
      };
  
      if (token) {
        getCurrentUser();
      }
    }, [apiService, token]);

  // Start - tasks logic
    // Get websocket tasks and connection status
    const { tasks: websocketTasks, isConnected } = useWebSocket();
  
    const [tasks, setTasks] = useState<Task[]>([]);
    const [inspectedTask, setInspectedTask] = useState<Task | null>(null);
  
    // setting initial tasks (will get changed via websocket on server notifications)
    useEffect(() => {
      const getTasks = async () => {
        try {
          const result: Task[] | null = await apiService.get("/tasks?isActive=true", token);
          if (result) {
            setTasks(result);
          }
        } catch (error) {
          console.error("Error fetching tasks:", error);
        }
      };
  
      if (token) {
        getTasks();
      }
    }, [apiService, token]);
  
    // Update tasks from websocket when connected and data changes
    useEffect(() => {
      if (isConnected && websocketTasks) {
        setTasks(websocketTasks);
        if (inspectedTask) {
          setInspectedTask(websocketTasks.find((task) => task.id == inspectedTask.id) ?? null)
        }
      }
    }, [websocketTasks, isConnected, tasks, inspectedTask]);
  
    // End -tasks logic

  const defaultPopUpAttributes = useMemo(() => {
      return {
          contentElement: <div>No content loaded</div>,
          closeVisible: true,
          onClose: () => {
          setPopUpIsVisible(false);
          },
          frameElement: false
  };
  }, []);

  const [popUpAttributes, setPopUpAttributes] = useState<PopUpAttributes>(defaultPopUpAttributes);
  const [popUpIsVisible, setPopUpIsVisible] = useState<boolean>(false);

  const closePopUp = useCallback(() => {
      setPopUpIsVisible(false);
      setPopUpAttributes(defaultPopUpAttributes);
      setInspectedTask(null);
    }, [defaultPopUpAttributes]);

  const openTaskView = useCallback(
      async (taskId: string) => {
        try {
          closePopUp()
          const task = await apiService.get<Task>(`/tasks/${taskId}`, token)
          setInspectedTask(task);
          if (!task) {
            closePopUp();
          } else if (task.luckyDraw && !task.isAssignedTo) {
            alert("Psst! You can not cheat in lucky draw ;)\n\nIf you want to know what hides underneath here you have to find it on the pinboard page.\n\nBut remember; once you claimed a lucky draw task you cannot drop it!")
            closePopUp()
          } else {
            setPopUpAttributes({
              contentElement: <TaskCard
              type={task?.frequency ? "recurring" : "additional"}
              backgroundColor={
                task?.color
                  ? `var(--member-color-${task?.color})`
                  : "white"
              }
              startsAsView={true}
              isEditMode={false}
              initialValues={Object.entries(task ? (task as Task) : {}).reduce(
                              (result: Record<string, FormValue>, [key, value]) => {
                                result[key] = value as FormValue;
                                return result;
                              },
                              {}
                            )}
              buttonAreaStyle={{ display: "flex", justifyContent: "end" }}
            />,
              onClose: closePopUp,
              frameVisible: false,
              maxWidthContent: "700px",
            });
            setPopUpIsVisible(true);
          }
        } catch (error) {
          console.error(
            "An unexpected error occurred while fetching task: ",
            error
          );
        }
      },
      [closePopUp, apiService, token]
    );
  

  return (
    <AuthWrapper onlyTeam={true} currentUser={currentUser}>
      <div className="calendar-page">
        <PopUp {...popUpAttributes} isVisible={popUpIsVisible} />
        <div className="calendar-top-nav">
          {/* Toggle with labels */}
          <PinboardCalendarToggle location={"calendar"} router={router}/>
          {/* Team info in the top-right with edit button */}
          <TeamInfo />
          {/* Logout button */}
          <Logout router={router}/>
        </div>
          <Calendar initialWeekDays={initialWeekDays} tasks={tasks} openTaskView={openTaskView} router={router}/>
      </div>
    </AuthWrapper>
  );
};

export default CalendarPage;

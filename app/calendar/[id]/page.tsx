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
import { Button } from "@/components/customButton";
import { FormValue } from "@/components/form/form";
import { User } from "@/types/user";
import TaskCard from "@/components/taskCard";
import AuthWrapper from "@/hooks/authWrapper";


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

  const [tasks, setTasks] = useState<Task[]>([]);
  const [inspectedTask, setInspectedTask] = useState<Task | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
      const getTasks = async () => {
        const result : Task[] = await apiService.get("/tasks", token) ?? []
        setTasks(result ?? [])
      }
      getTasks()
      
    }, [apiService, token])

  useEffect(() => {
      const getCurrentUser = async () => {
        try {
          const result : User | null = await apiService.get("/users/me", token)
          setCurrentUser(result);
        } catch (error) {
          console.error("Error fetching tasks:", error);
        }
      };
  
      if (token) {
        getCurrentUser();
      }
    }, [apiService, token]);

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
  const [popUpAttributes, setPopUpAttributes] = useState<PopUpAttributes>(
  defaultPopUpAttributes
  );
  const [popUpIsVisible, setPopUpIsVisible] = useState<boolean>(false);

  const closePopUp = useCallback(() => {
      setPopUpIsVisible(false);
      setPopUpAttributes(defaultPopUpAttributes);
    }, [defaultPopUpAttributes]);

  const openTaskView = useCallback(
      async (taskId: string) => {
        try {
          setInspectedTask(await apiService.get<Task>(`/tasks/${taskId}`, token));
          if (!inspectedTask) {
            closePopUp();
          }
          if (inspectedTask?.luckyDraw && !inspectedTask.isAssignedTo) {
            try {
              await apiService.patch<Task>(`/tasks/${taskId}/claim`, token)
              setInspectedTask(await apiService.get<Task>(`/tasks/${taskId}`, token));
            } catch (error) {
              console.error(
                "An unexpected error occurred while claiming task through lucky draw: ",
                error
              )
            }
          }
          setPopUpIsVisible(true);
        } catch (error) {
          console.error(
            "An unexpected error occurred while fetching task: ",
            error
          );
        }
      },
      [
        apiService,
        inspectedTask,
        setInspectedTask,
        token,
        closePopUp,
      ]
    );
  
    const initialValues = useMemo(() => {
      return Object.entries(inspectedTask ? (inspectedTask as Task) : {}).reduce(
        (result: Record<string, FormValue>, [key, value]) => {
          result[key] = value as FormValue;
          return result;
        },
        {}
      );
    }, [inspectedTask]);

    useEffect(() => {
    if (inspectedTask) {
      const claimTask = async () => {
        try {
          await apiService.patch<null>(
            `/tasks/${inspectedTask?.id}/claim`,
            token
          );
          setInspectedTask(
            await apiService.get<Task>(`/tasks/${inspectedTask?.id}`, token)
          );
        } catch (error) {
          console.error(
            "An unexpected error occurred while claiming task: ",
            error
          );
        }
      };

      const dropTask = async () => {
        try {
          await apiService.put<Task>(`/tasks/${inspectedTask?.id}/quit`, token);
          setInspectedTask(null);
          setPopUpIsVisible(false);
        } catch (error) {
          console.error(
            "An unexpected error occurred while dropping/quitting task: ",
            error
          );
        }
      };

      const finishTask = async () => {
        try {
          await apiService.patch<Task>(
            `/tasks/${inspectedTask?.id}/finish`,
            token
          );
          setInspectedTask(null);
          setPopUpIsVisible(false);
        } catch (error) {
          console.error(
            "An unexpected error occurred while finishing task: ",
            error
          );
        }
      };

      const getButtons = () => {
        let buttons: Button[] = [];
        if (!inspectedTask?.color) {
          buttons = [
            {
              type: "button",
              text: "CLAIM",
              style: { width: "5rem", height: "2.5rem" },
              onClick: async () => await claimTask(),
            },
          ];
        } else if (currentUser && inspectedTask?.isAssignedTo == currentUser.id && inspectedTask.luckyDraw) {
          buttons = [
            {
              type: "button",
              text: "DONE",
              style: { width: "5rem", height: "2.5rem" },
              onClick: async () => await finishTask(),
            },
          ];
        } else if (currentUser && inspectedTask?.isAssignedTo == currentUser.id) {
          buttons = [
            {
              type: "button",
              text: "DROP",
              style: { width: "5rem", height: "2.5rem", marginRight: "1rem" },
              onClick: async () => await dropTask(),
            },
            {
              type: "button",
              text: "DONE",
              style: { width: "5rem", height: "2.5rem" },
              onClick: async () => await finishTask(),
            },
          ];
        }
        return buttons
      }
      

      const inspectTaskPopUpContent = <TaskCard
            type={inspectedTask?.frequency ? "recurring" : "additional"}
            backgroundColor={
              inspectedTask?.color
                ? `var(--member-color-${inspectedTask?.color})`
                : "white"
            }
            startsAsView={true}
            isEditMode={false}
            initialValues={initialValues}
            buttons={getButtons()}
            buttonAreaStyle={{ display: "flex", justifyContent: "end" }}
          />

      setPopUpAttributes({
        contentElement: inspectTaskPopUpContent,
        onClose: closePopUp,
        frameVisible: false,
        maxWidthContent: "700px",
      });
    }}, [inspectedTask, defaultPopUpAttributes, apiService, token, closePopUp, initialValues, currentUser]);


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

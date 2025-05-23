"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";
import LuckyDrawSVG from "@/svgs/pinboard_svg/luckydraw_svg";
import LeaderboardSVG from "@/svgs/pinboard_svg/leaderboard";
import RecurringTasksSVG from "@/svgs/pinboard_svg/recurring_task_svg";
import AdditionalTasksSVG from "@/svgs/pinboard_svg/additional_task_svg";
import IconButton from "@/components/iconButton";
import { RecurringTaskOverview } from "./recurringTaskOverview";
import PopUp, { PopUpAttributes } from "@/components/popUp";
import TaskCard from "@/components/taskCard";
import { useApi } from "@/hooks/useApi";
import { Task } from "@/types/task";
import { Button } from "@/components/customButton";
import { FormValue } from "@/components/form/form";
import { useWebSocket } from "@/hooks/useWebSocket";
import { addDays, dateTodayFormatted } from "@/utils/dateHelperFuncs";
import LeaderboardPopup from "@/components/leaderboardPopup";
import KarmaHandSVG from "@/svgs/pinboard_svg/karma_hand_svg";
import TaskList from "./taskList";
import { User } from "@/types/user";
import Logout from "@/components/logout";
import TeamInfo from "@/components/teamInfo";
import PinboardCalendarToggle from "@/components/pinboardCalendarToggle";
import LuckyDrawManager from "@/components/luckyDrawManager";
import KarmasHandManager from "@/components/karmasHandManager";
import AuthWrapper from "@/hooks/authWrapper";

const Pinboard: React.FC = () => {
  const router = useRouter();
  const apiService = useApi();

  const { value: token } = useLocalStorage<string>("token", "");

  // Start - tasks logic
  // Get websocket tasks and connection status
  const {
    tasks: websocketTasks,
    sendLockTask,
    sendUnlockTask,
    isConnected,
  } = useWebSocket();

  const [luckyDrawExplainVisible, setLuckyDrawExplainVisible] = useState(false);
  const [karmaHandExplainVisible, setKarmaHandExplainVisible] = useState(false);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [inspectedTask, setInspectedTask] = useState<Task | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

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

  // setting initial tasks (will get changed via websocket on server notifications)
  useEffect(() => {
    const getTasks = async () => {
      try {
        const result: Task[] | null = await apiService.get(
          "/tasks?isActive=true",
          token
        );
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
      setTasks(
        websocketTasks.filter(
          (task) =>
            !task.frequency ||
            (task.deadline &&
              task.daysVisible &&
              !(
                addDays(new Date(task.deadline), -task.daysVisible) > new Date()
              ))
        )
      );
      if (inspectedTask) {
        setInspectedTask(
          websocketTasks.find((task) => task.id == inspectedTask.id) ?? null
        );
      }
    }
  }, [websocketTasks, isConnected, inspectedTask]);

  const getEditingUser = useCallback(
    async (editingUserId: string) => {
      try {
        const response: User | null = await apiService.get(
          `/users/${editingUserId}`,
          token
        );
        return response?.username;
      } catch (error) {
        console.warn(
          "Something went wrong while fetching currently editing user:",
          error
        );
        return "someone";
      }
    },
    [apiService, token]
  );

  // End -tasks logic

  // Start - popup logic

  const defaultPopUpAttributes = useMemo(() => {
    return {
      contentElement: <div>No content loaded</div>,
      closeVisible: true,
      onClose: () => {
        setPopUpIsVisible(false);
      },
      frameElement: false,
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

  // End - popup logic

  // Start - task overview pop up logic
  const closeRecurringTaskOverview = useCallback(() => {
    tasks
      .filter((task) => task.frequency)
      .map((task) => sendUnlockTask(task.id));
    closePopUp();
  }, [closePopUp, sendUnlockTask, tasks]);

  const openRecurringTaskOverview = useCallback(async () => {
    const userEditingRecurringTasksId =
      tasks.find((task) => task.frequency && task.lockedByUser)?.lockedByUser ??
      "";
    if (
      userEditingRecurringTasksId &&
      userEditingRecurringTasksId != currentUser?.id
    ) {
      const userName = await getEditingUser(userEditingRecurringTasksId);
      alert(
        `${userName} is currently editing recurring tasks. Please try again later :)`
      );
      return;
    }

    tasks.filter((task) => task.frequency).map((task) => sendLockTask(task.id));

    setPopUpAttributes({
      contentElement: (
        <RecurringTaskOverview
          onSubmitAll={closeRecurringTaskOverview}
          style={{ maxHeight: "80vh" }}
        />
      ),
      closeVisible: false,
    });
    setPopUpIsVisible(true);
  }, [
    closeRecurringTaskOverview,
    currentUser?.id,
    getEditingUser,
    sendLockTask,
    tasks,
  ]);

  // End - task overview pop up logic

  // Start - additional task creation pop up logic

  const openAdditionalTaskCreation = () => {
    setPopUpAttributes({
      contentElement: (
        <TaskCard
          type="additional"
          onSubmit={createAdditionalTask}
          initialValues={{ value: 10, deadline: dateTodayFormatted() }}
          editViewButtons={[
            {
              type: "submit",
              text: "CREATE",
              style: { width: "5rem", height: "2.5rem" },
            },
          ]}
          buttonAreaStyle={{ display: "flex", justifyContent: "end" }}
        />
      ),
      onClose: closePopUp,
      frameVisible: false,
      maxWidthContent: "700px",
    });
    setPopUpIsVisible(true);
  };

  const createAdditionalTask = async (
    data: Record<string, unknown>
  ): Promise<void> => {
    try {
      await apiService.post<Task>(`/tasks`, data, token);
    } catch (error) {
      console.error(
        "An unexpected error occurred while creating task: ",
        error
      );
      alert("Failed to create task. Please try again.");
    }
    closePopUp();
  };

  // End - additional task creation pop up logic

  // Start - inspect task pop up logic

  const openTaskView = useCallback(
    async (taskId: string) => {
      try {
        closePopUp();
        const task = await apiService.get<Task>(`/tasks/${taskId}`, token);
        setInspectedTask(task);
        if (!task) {
          closePopUp();
        }
        if (task?.luckyDraw && !task.isAssignedTo) {
          try {
            await apiService.patch<Task>(`/tasks/${taskId}/claim`, token);
            setInspectedTask(
              await apiService.get<Task>(`/tasks/${taskId}`, token)
            );
          } catch (error) {
            console.error(
              "An unexpected error occurred while claiming task through lucky draw: ",
              error
            );
          }
        }
        setIsEditMode(false);
        setPopUpIsVisible(true);
      } catch (error) {
        console.error(
          "An unexpected error occurred while fetching task: ",
          error
        );
      }
    },
    [apiService, token, closePopUp]
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

  const closeTaskView = useCallback(() => {
    if (inspectedTask) {
      sendUnlockTask(inspectedTask?.id);
    }
    setInspectedTask(null);
    closePopUp();
  }, [closePopUp, inspectedTask, sendUnlockTask]);

  useEffect(() => {
    if (inspectedTask) {
      const claimTask = async () => {
        try {
          if (
            inspectedTask?.lockedByUser &&
            inspectedTask?.lockedByUser != currentUser?.id
          ) {
            const userName = await getEditingUser(inspectedTask?.lockedByUser);
            alert(
              `${userName} is currently editing this task. Please try again later :)`
            );
            return;
          }

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
          if (
            inspectedTask?.lockedByUser &&
            inspectedTask?.lockedByUser != currentUser?.id
          ) {
            const userName = await getEditingUser(inspectedTask?.lockedByUser);
            alert(
              `${userName} is currently editing this task. Please try again later :)`
            );
            return;
          }

          await apiService.patch<Task>(
            `/tasks/${inspectedTask?.id}/quit`,
            token
          );
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
        if (
          inspectedTask?.lockedByUser &&
          inspectedTask?.lockedByUser != currentUser?.id
        ) {
          const userName = await getEditingUser(inspectedTask?.lockedByUser);
          alert(
            `${userName} is currently editing this task. Please try again later :)`
          );
          return;
        }

        try {
          await apiService.delete<Task>(
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

      const deleteTask = async () => {
        try {
          await apiService.delete(`/tasks/${inspectedTask?.id}`, token);
          setInspectedTask(null);
          setPopUpIsVisible(false);
        } catch (error) {
          console.error(
            "An unexpected error occurred while deleting task: ",
            error
          );
        }
      };

      const updateTask = async (
        data: Record<string, unknown>
      ): Promise<void> => {
        try {
          await apiService.put(`/tasks/${inspectedTask?.id}`, data, token);
          setInspectedTask(
            await apiService.get<Task>(`/tasks/${inspectedTask?.id}`, token)
          );
          setIsEditMode(false);
        } catch (error) {
          console.error(
            "An unexpected error occurred while updating task: ",
            error
          );
        }
      };

      const lockInspectedTask = () => {
        sendLockTask(inspectedTask.id);
      };

      const unlockInspectedTask = () => {
        sendUnlockTask(inspectedTask.id);
      };

      const getButtons = () => {
        let buttons: Button[] = [];
        if (!inspectedTask?.color) {
          buttons = [
            {
              type: "button",
              text: "CLAIM",
              style: { width: "5rem", height: "2.5rem" },
              onClick: () => claimTask(),
            },
          ];
        } else if (
          currentUser &&
          inspectedTask?.isAssignedTo == currentUser.id &&
          inspectedTask.luckyDraw
        ) {
          buttons = [
            {
              type: "button",
              text: "DONE",
              style: { width: "5rem", height: "2.5rem" },
              onClick: () => finishTask(),
            },
          ];
        } else if (
          currentUser &&
          inspectedTask?.isAssignedTo == currentUser.id
        ) {
          buttons = [
            {
              type: "button",
              text: "DROP",
              style: { width: "5rem", height: "2.5rem", marginRight: "1rem" },
              onClick: () => dropTask(),
            },
            {
              type: "button",
              text: "DONE",
              style: { width: "5rem", height: "2.5rem" },
              onClick: () => finishTask(),
            },
          ];
        }
        return buttons;
      };

      const editViewButtons: Button[] = [
        {
          type: "button",
          text: "DELETE",
          style: { width: "5rem", height: "2.5rem", marginRight: "1rem" },
          onClick: () => deleteTask(),
        },
        {
          type: "submit",
          text: "SAVE",
          style: { width: "5rem", height: "2.5rem" },
        },
      ];

      const inspectTaskPopUpContent = (
        <TaskCard
          type={"inspect"}
          backgroundColor={
            inspectedTask?.color
              ? `var(--member-color-${inspectedTask?.color})`
              : "white"
          }
          startsAsView={true}
          editVisible={inspectedTask?.creatorId == currentUser?.id}
          isEditMode={isEditMode}
          onOpenEdit={lockInspectedTask}
          onCloseEdit={unlockInspectedTask}
          initialValues={initialValues}
          buttons={getButtons()}
          editViewButtons={editViewButtons}
          onSubmit={updateTask}
          buttonAreaStyle={{ display: "flex", justifyContent: "end" }}
        />
      );

      setPopUpAttributes({
        contentElement: inspectTaskPopUpContent,
        onClose: closeTaskView,
        frameVisible: false,
        maxWidthContent: "700px",
      });
    }
  }, [
    inspectedTask,
    defaultPopUpAttributes,
    apiService,
    token,
    closePopUp,
    isEditMode,
    initialValues,
    currentUser,
    closeTaskView,
    getEditingUser,
    sendLockTask,
    sendUnlockTask,
  ]);

  // End - inspect task pop up logic

  // Start - leaderboard pop up logic

  const openLeaderboard = () => {
    setPopUpAttributes({
      contentElement: (
        <LeaderboardPopup onClose={closePopUp} style={{ maxHeight: "80vh" }} />
      ),
      closeVisible: false,
      frameVisible: false, // Change this to false to avoid double frames
    });
    setPopUpIsVisible(true);
  };

  // End - leaderboard pop up logic

  const handleLuckyDraw = () => {
    //apiService.post("/tasks/luckyDraw", {}, token);
    setLuckyDrawExplainVisible(true);
  };

  const handleKarmaHand = () => {
    setKarmaHandExplainVisible(true);
  };

  return (
    <AuthWrapper onlyTeam={false} currentUser={currentUser}>
      <div className="pinboard-page">
        <PopUp {...popUpAttributes} isVisible={popUpIsVisible} />
        <LuckyDrawManager
          tasks={tasks}
          token={token}
          apiService={apiService}
          explainPopupVisible={luckyDrawExplainVisible}
          setExplainPopupVisible={setLuckyDrawExplainVisible}
        />

        <KarmasHandManager
          tasks={tasks}
          token={token}
          apiService={apiService}
          explainPopupVisible={karmaHandExplainVisible}
          setExplainPopupVisible={setKarmaHandExplainVisible}
          currentUser={currentUser}
        />

        {/* Top Navigation */}
        <div className="top-nav">
          <LuckyDrawManager
            tasks={tasks}
            token={token}
            apiService={apiService}
            explainPopupVisible={luckyDrawExplainVisible}
            setExplainPopupVisible={setLuckyDrawExplainVisible}
          />

          <KarmasHandManager
            tasks={tasks}
            token={token}
            apiService={apiService}
            explainPopupVisible={karmaHandExplainVisible}
            setExplainPopupVisible={setKarmaHandExplainVisible}
            currentUser={currentUser}
          />

          {/* Toggle to switch between pinboard & calendar page */}
          <PinboardCalendarToggle location={"pinboard"} router={router} />

          {/* Team info display with edit functionality */}
          <TeamInfo />

          {/* Logout button */}
          <Logout router={router} />
        </div>
        {/* Content Area */}
        <div className="content-area">
          {/* Left Sidebar */}
          <div className="left-sidebar">
            <div className="menu-item">
              <IconButton
                iconElement={<LuckyDrawSVG />}
                onClick={handleLuckyDraw}
                colorOnHover="#83cf5d"
                width={"6rem"}
              />
              <div>Lucky Draw</div>
            </div>

            <div className="menu-item">
              <IconButton
                iconElement={<KarmaHandSVG />}
                onClick={handleKarmaHand}
                colorOnHover="#83cf5d"
                width={"6rem"}
              />
              <div>Karma&apos;s Hand</div>
            </div>
          </div>
          {/* Main Container for Task Grid and Bottom Actions */}
          <div className="container">
            {/* Task Grid */}
            <div
              className="task-grid"
              style={{ overflowX: "auto", height: "100%" }}
            >
              <TaskList
                tasks={tasks}
                taskOnClick={openTaskView}
                taskWidth="calc(25% - 15px)"
                taskHeight="8.5em"
                height="80%"
                token={token}
              />
            </div>

            {/* Bottom Actions */}
            <div className="bottom-actions">
              <div className="menu-item">
                <IconButton
                  iconElement={<LeaderboardSVG />}
                  onClick={openLeaderboard}
                  colorOnHover="#83cf5d"
                  width={"6rem"}
                />
                <div>Leaderboard</div>
              </div>
              <div className="menu-item">
                <IconButton
                  iconElement={<AdditionalTasksSVG />}
                  onClick={openAdditionalTaskCreation}
                  colorOnHover="#83cf5d"
                  width={"6rem"}
                />
                <div>Additional Tasks</div>
              </div>
              <div className="menu-item">
                <IconButton
                  iconElement={<RecurringTasksSVG />}
                  onClick={openRecurringTaskOverview}
                  colorOnHover="#83cf5d"
                  width={"6rem"}
                />
                <div>Recurring Tasks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Pinboard;

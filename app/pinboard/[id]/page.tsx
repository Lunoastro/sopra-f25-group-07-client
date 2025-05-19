"use client";
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { useRouter } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";
import isAuth from "@/isAuth";
import LuckyDrawSVG from "@/svgs/pinboard_svg/luckydraw_svg";
import LeaderboardSVG from "@/svgs/pinboard_svg/leaderboard";
import RecurringTasksSVG from "@/svgs/pinboard_svg/recurring_task_svg";
import AdditionalTasksSVG from "@/svgs/pinboard_svg/additional_task_svg";
import PauseSVG from "@/svgs/pinboard_svg/pause_svg";
import IconButton from "@/components/iconButton";
import { RecurringTaskOverview } from "./recurringTaskOverview";
import PopUp, { PopUpAttributes } from "@/components/popUp";
import TaskCard from "@/components/taskCard";
import { useApi } from "@/hooks/useApi";
import { Task } from "@/types/task";
import { Button } from "@/components/customButton";
import ComingSoonOverlay from "@/components/comingSoon";
import { FormValue } from "@/components/form";
import { useWebSocket } from "@/hooks/useWebSocket";
import { dateTomorrowFormatted } from "@/utils/dateHelperFuncs";
import LeaderboardPopup from "@/components/leaderboardPopup";
import KarmaHandSVG from "@/svgs/pinboard_svg/karma_hand_svg";
import TaskList from "./taskList";
import { User } from "@/types/user";
import Logout from "@/components/logout";
import TeamInfo from "@/components/teamInfo";
import PinboardCalendarToggle from "@/components/pinboardCalendarToggle";

const Pinboard: React.FC = () => {
  const router = useRouter();
  const apiService = useApi();

  const { value: token } = useLocalStorage<string>("token","");

  // Start - tasks logic
  // Get websocket tasks and connection status
  const { tasks: websocketTasks, isConnected } = useWebSocket();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [inspectedTask, setInspectedTask] = useState<Task | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  // TODO: would need to be in websocket to work!
  const { set: setEditingRecurringTasks, clear: deleteEditingRecurringTasks } =
    useLocalStorage<string>("editingRecurringTask", "");

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

  // setting initial tasks (will get changed via websocket on server notifications)
  useEffect(() => {
    const getTasks = async () => {
      try {
        const result : Task[] | null = await apiService.get("/tasks", token)
        setTasks(result ?? []);
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
    if (isConnected && websocketTasks && websocketTasks.length > 0) {
      setTasks(websocketTasks);
    }
  }, [websocketTasks, isConnected]);

  // End -tasks logic

  // Start - popup logic

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

  // End - popup logic

  // Start - task overview pop up logic
  const openRecurringTaskOverview = () => {
    setEditingRecurringTasks(token);
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
  };

  const closeRecurringTaskOverview = () => {
    deleteEditingRecurringTasks();
    closePopUp();
  };

  // End - task overview pop up logic

  // Start - additional task creation pop up logic

  const openAdditionalTaskCreation = () => {
    setPopUpAttributes({
      contentElement: (
        <TaskCard
          type="additional"
          onSubmit={createAdditionalTask}
          initialValues={{ value: 10, deadline: dateTomorrowFormatted() }}
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
        setIsEditMode(false);
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
      setIsEditMode,
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
          await apiService.patch<Task>(`/tasks/${inspectedTask?.id}/quit`, token);
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
        } else if (currentUser && inspectedTask?.isAssignedTo == currentUser.id && inspectedTask.luckyDraw) {
          buttons = [
            {
              type: "button",
              text: "DONE",
              style: { width: "5rem", height: "2.5rem" },
              onClick: () => finishTask(),
            },
          ];
        } else if (currentUser && inspectedTask?.isAssignedTo == currentUser.id) {
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
        return buttons
      }
      

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

      const inspectTaskPopUpContent = <TaskCard
            type={inspectedTask?.frequency ? "recurring" : "additional"}
            backgroundColor={
              inspectedTask?.color
                ? `var(--member-color-${inspectedTask?.color})`
                : "white"
            }
            startsAsView={true}
            editVisible={inspectedTask?.creatorId == currentUser?.id}
            isEditMode={isEditMode}
            initialValues={initialValues}
            buttons={getButtons()}
            editViewButtons={editViewButtons}
            onSubmit={updateTask}
            buttonAreaStyle={{ display: "flex", justifyContent: "end" }}
          />

      setPopUpAttributes({
        contentElement: inspectTaskPopUpContent,
        onClose: closePopUp,
        frameVisible: false,
        maxWidthContent: "700px",
      });
    }}, [inspectedTask, defaultPopUpAttributes, apiService, token, closePopUp, isEditMode, initialValues, currentUser]);

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
    apiService.post("/tasks/luckyDraw", {}, token)
  }

  const handleKarmaHand = () => {
    apiService.post("/tasks/autodistribute", {}, token);
  }

  return (
    <div className="pinboard-page">
      <PopUp {...popUpAttributes} isVisible={popUpIsVisible} />
      {/* Top Navigation */}
      <div className="top-nav">

        {/* Toggle to switch between pinboard & calendar page */}
        <PinboardCalendarToggle location={"pinboard"}/>

        {/* Team info display with edit functionality */}
        <TeamInfo />

        {/* Logout button */}
        <Logout router={router}/>
        
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
            style={{ overflowX: "auto", height: "80%" }}
          >
          <TaskList
              tasks={tasks}
              taskOnClick={openTaskView}
              taskWidth="calc(25% - 15px)"
              taskHeight="8.5em"
              height="80%"
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
                iconElement={<RecurringTasksSVG />}
                onClick={openRecurringTaskOverview}
                colorOnHover="#83cf5d"
                width={"6rem"}
              />
              <div>Recurring Tasks</div>
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
              <ComingSoonOverlay>
                <PauseSVG />
              </ComingSoonOverlay>
              <div>Pause</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default isAuth(Pinboard, true);

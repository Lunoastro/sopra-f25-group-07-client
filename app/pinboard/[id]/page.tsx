"use client";
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { useParams, useRouter } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";
import isAuth from "@/isAuth";
import LogoutSVG from "@/svgs/logout_button_svg";
import LuckyDrawSVG from "@/svgs/pinboard_svg/luckydraw_svg";
import LeaderboardSVG from "@/svgs/pinboard_svg/leaderboard";
import RecurringTasksSVG from "@/svgs/pinboard_svg/recurring_task_svg";
import AdditionalTasksSVG from "@/svgs/pinboard_svg/additional_task_svg";
import PauseSVG from "@/svgs/pinboard_svg/pause_svg";
import EditButton from "@/svgs/pinboard_svg/edit_button_svg";
import DoodleToggle from "@/components/toggle";
import IconButton from "@/components/iconButton";
import { RecurringTaskOverview } from "./recurringTaskOverview";
import PopUp, { PopUpAttributes } from "@/components/popUp";
import TaskCard from "@/components/taskCard";
import { useApi } from "@/hooks/useApi";
import { Task } from "@/types/task";
import { Button } from "@/components/customButton";
import ComingSoonOverlay from "@/components/comingSoon";
import { User } from "@/types/user";
import { FormValue } from "@/components/form";
import { useWebSocket } from "@/hooks/useWebSocket";
import { Team } from "@/types/team";
import LuckyDraw from "@/components/luckydraw";
import { dateTomorrowFormatted } from "@/utils/dateHelperFuncs";
import LeaderboardPopup from "@/components/leaderboardPopup";
import KarmaHand from "@/components/karmashand";
import KarmaHandSVG from "@/svgs/pinboard_svg/karma_hand_svg";

const Pinboard: React.FC = () => {
  const router = useRouter();
  const apiService = useApi();

  // Get websocket tasks and connection status
  const { tasks: websocketTasks, isConnected } = useWebSocket();

  const { value: token, clear: clearToken } = useLocalStorage<string>(
    "token",
    ""
  );

  const { clear: clearisDoodleOn } = useLocalStorage<string>("token", "");

  const {
    value: calendarMode,
    set: setCalendarMode,
    clear: clearCalendarMode,
  } = useLocalStorage<boolean>("calendarMode", false);

  const params = useParams();
  const teamId = params.id;

  interface LuckyDrawRef {
    activateLuckyDrawFromOutside: () => void;
  }

  const luckyDrawRef = useRef<LuckyDrawRef>(null);

  interface KarmaHandRef {
    activateKarmaHandFromOutside: () => void;
  }

  const karmaHandRef = useRef<KarmaHandRef>(null);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [inspectedTask, setInspectedTask] = useState<Task | null>(null);
  const [isAllowedToEdit, setIsAllowedToEdit] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isRefreshingTasks, setIsRefreshingTasks] = useState<boolean>(false);
  const [taskLoadingError, setTaskLoadingError] = useState<string | null>(null);

  // TODO: get rid of this as soon as endpoint for if allowed to finish is implemented
  const { value: user, clear: clearUser } = useLocalStorage<User | null>(
    "user",
    null
  );

  // TODO: would need to be in websocket to work!
  const { set: setEditingRecurringTasks, clear: deleteEditingRecurringTasks } =
    useLocalStorage<string>("editingRecurringTask", "");

  const defaultPopUpAttributes = useMemo(() => {
    return {
      contentElement: <div>No content loaded</div>,
      closeVisible: true,
      onClose: () => {
        setPopUpIsVisible(false);
      },
    };
  }, []);
  const [popUpAttributes, setPopUpAttributes] = useState<PopUpAttributes>(
    defaultPopUpAttributes
  );
  const [popUpIsVisible, setPopUpIsVisible] = useState<boolean>(false);

  // Team state
  const [teamName, setTeamName] = useState<string>("Loading...");
  const [teamCode, setTeamCode] = useState<string>("Loading...");
  const [isEditingTeamName, setIsEditingTeamName] = useState<boolean>(false);
  const [newTeamName, setNewTeamName] = useState<string>("");

  // Task loading function with proper error handling and logging
  useEffect(() => {
    const getTasks = async () => {
      if (!teamId) {
        console.warn("No teamId available for fetching tasks");
        return;
      }

      try {
        // Keep using the original /tasks endpoint, but log the team ID for debugging
        console.log("Fetching tasks for team ID:", teamId);

        // Use the original API endpoint that was working before
        const result: Task[] = (await apiService.get(`/tasks`, token)) ?? [];
        console.log("Tasks fetched successfully:", result.length);

        // Filter tasks by team ID on the client side if needed
        // This is a fallback in case your API doesn't support filtering by team
        // const filteredTasks = result.filter(task => task.teamId === teamId);
        // setTasks(filteredTasks ?? []);

        setTasks(result ?? []);
        setTaskLoadingError(null);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        // More descriptive error for debugging
        setTaskLoadingError(`Error loading tasks: ${String(error)}`);
      }
    };

    if (token) {
      getTasks();
    }
  }, [apiService, token, teamId, isRefreshingTasks]);

  // Update tasks from websocket when connected and data changes
  useEffect(() => {
    if (isConnected && websocketTasks && websocketTasks.length > 0) {
      setTasks(websocketTasks);
    }
  }, [websocketTasks, isConnected]);

  const switchToCalendarView = () => {
    setCalendarMode(true);
    router.push(`/calendar/${teamId}`);
  };

  const handleLogout = async (): Promise<void> => {
    try {
      await apiService.put("/logout", {}, token);

      clearToken();
      clearisDoodleOn();
      clearUser();
      clearCalendarMode();

      // Force redirect
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);

      // Even if there's an error, clear local storage and redirect
      clearToken();
      localStorage.removeItem("user");
      localStorage.removeItem("isDoodleOn");
      router.push("/login");
    }
  };
  // Function to refresh tasks after lucky draw
  const refreshTasks = useCallback(async () => {
    setIsRefreshingTasks((prev) => !prev); // Toggle to trigger useEffect
  }, []);

  // Function to start editing team name
  const handleStartEditTeamName = () => {
    setNewTeamName(teamName);
    setIsEditingTeamName(true);
  };

  // Function to cancel editing
  const handleCancelEdit = () => {
    setIsEditingTeamName(false);
  };

  // Function to save edited team name
  const handleSaveTeamName = async () => {
    try {
      if (!teamId) return;
      await apiService.put(`/teams/${teamId}`, { name: newTeamName }, token);
      setTeamName(newTeamName);
      setIsEditingTeamName(false);
    } catch (error) {
      console.error("Error updating team name:", error);
      alert("Failed to update team name. Please try again.");
    }
  };

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
      // Use the original approach for creating tasks
      // Only include teamId if your API specifically requires it
      // Uncomment the next lines if your API needs teamId explicitly
      // const taskData = {
      //   ...data,
      //   teamId: teamId
      // };

      // Use original API approach that was working
      await apiService.post<Task>(`/tasks`, data, token);
      refreshTasks(); // Refresh tasks after creating a new one
    } catch (error) {
      console.error(
        "An unexpected error occurred while creating task: ",
        error
      );
      alert("Failed to create task. Please try again.");
    }
    closePopUp();
  };

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
        setIsAllowedToEdit(
          (await apiService.get<boolean>(
            `/tasks/${taskId}/isEditable`,
            token
          )) ?? false
        );
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
      setIsAllowedToEdit,
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

  // Fetch team data when component mounts
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        if (!teamId) return;

        const team: Team | null = await apiService.get(
          `/teams/${teamId}`,
          token
        );

        if (team) {
          setTeamName(team.name as string);
          setTeamCode(team.code as string);
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    if (token) {
      fetchTeamData();
    }
  }, [token, teamId, apiService]);

  useEffect(() => {
    if (inspectedTask) {
      const updateTask = async (
        data: Record<string, unknown>
      ): Promise<void> => {
        try {
          await apiService.put(`/tasks/${inspectedTask?.id}`, data, token);
          setInspectedTask(
            await apiService.get<Task>(`/tasks/${inspectedTask?.id}`, token)
          );
          setIsEditMode(false);
          refreshTasks(); // Refresh tasks after updating
        } catch (error) {
          console.error(
            "An unexpected error occurred while updating task: ",
            error
          );
        }
      };

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
      } else if (user && inspectedTask?.isAssignedTo == user.id) {
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

      // Add warning note for lucky draw tasks in edit mode
      if (inspectedTask.luckyDraw === true) {
        editViewButtons.push({
          type: "button",
          text: "Note: Lucky Draw tasks cannot be deleted",
          style: { color: "red", fontSize: "0.8rem", width: "100%" },
        });
      }

      const claimTask = async () => {
        try {
          await apiService.patch<null>(
            `/tasks/${inspectedTask?.id}/claim`,
            token
          );
          setInspectedTask(
            await apiService.get<Task>(`/tasks/${inspectedTask?.id}`, token)
          );
          refreshTasks(); // Refresh tasks after claiming
        } catch (error) {
          console.error(
            "An unexpected error occurred while claiming task: ",
            error
          );
        }
      };

      const dropTask = async () => {
        try {
          // Check if task is in lucky draw mode
          if (inspectedTask.luckyDraw === true) {
            alert("Lucky Draw tasks cannot be dropped!");
            return;
          }

          await apiService.put<Task>(`/tasks/${inspectedTask?.id}/quit`, token);
          setInspectedTask(null);
          setPopUpIsVisible(false);
          refreshTasks(); // Refresh tasks after dropping
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
          refreshTasks(); // Refresh tasks after finishing
        } catch (error) {
          console.error(
            "An unexpected error occurred while finishing task: ",
            error
          );
        }
      };

      const deleteTask = async () => {
        try {
          // Check if task is in lucky draw mode
          if (inspectedTask.luckyDraw === true) {
            alert("Lucky Draw tasks cannot be deleted!");
            return;
          }

          await apiService.delete(`/tasks/${inspectedTask?.id}`, token);
          setInspectedTask(null);
          setPopUpIsVisible(false);
          refreshTasks(); // Refresh tasks after deleting
        } catch (error) {
          console.error(
            "An unexpected error occurred while deleting task: ",
            error
          );
        }
      };

      setPopUpAttributes({
        contentElement: (
          <TaskCard
            type={inspectedTask?.frequency ? "recurring" : "additional"}
            backgroundColor={
              inspectedTask?.color
                ? `var(--member-color-${inspectedTask?.color})`
                : "white"
            }
            startsAsView={true}
            editVisible={isAllowedToEdit ?? false}
            isEditMode={isEditMode}
            initialValues={initialValues}
            buttons={buttons}
            editViewButtons={editViewButtons}
            onSubmit={updateTask}
            buttonAreaStyle={{ display: "flex", justifyContent: "end" }}
          />
        ),
        onClose: closePopUp,
        frameVisible: false,
        maxWidthContent: "700px",
      });
    }
  }, [
    inspectedTask,
    isAllowedToEdit,
    user,
    defaultPopUpAttributes,
    apiService,
    token,
    closePopUp,
    isEditMode,
    initialValues,
    refreshTasks,
  ]);

  const handleLuckyDrawClick = () => {
    if (luckyDrawRef.current) {
      luckyDrawRef.current.activateLuckyDrawFromOutside();
    }
  };

  const handleKarmaHandClick = () => {
    // Activate the karma hand's functionality when its icon is clicked
    if (karmaHandRef.current) {
      karmaHandRef.current.activateKarmaHandFromOutside();
    }
  };

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

  return (
    <div className="pinboard-page">
      <PopUp {...popUpAttributes} isVisible={popUpIsVisible} />
      {/* Top Navigation */}
      <div className="top-nav">
        <div className="toggle-wrapper">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                marginRight: "1rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Calendar
            </div>
            <DoodleToggle
              isOn={calendarMode ?? undefined}
              onChange={switchToCalendarView}
              size="md"
            />
            <div
              style={{
                marginLeft: "1rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Pinboard
            </div>
          </div>
        </div>

        {/* Team info display with edit functionality */}
        <div
          className="team-info"
          style={{ position: "absolute", top: "20px", left: "20px" }}
        >
          {isEditingTeamName ? (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <input
                type="text"
                value={newTeamName}
                onChange={(e) => setNewTeamName(e.target.value)}
                style={{
                  fontWeight: "bold",
                  padding: "4px",
                  marginRight: "8px",
                  fontSize: "1rem",
                }}
              />
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={handleSaveTeamName}
                  style={{
                    backgroundColor: "#83cf5d",
                    border: "none",
                    borderRadius: "4px",
                    padding: "4px 8px",
                    cursor: "pointer",
                  }}
                >
                  Save
                </button>
                <button
                  onClick={handleCancelEdit}
                  style={{
                    backgroundColor: "#f0a59c",
                    border: "none",
                    borderRadius: "4px",
                    padding: "4px 8px",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold" }}>Team Name: {teamName}</div>
              <div
                onClick={handleStartEditTeamName}
                style={{ cursor: "pointer", marginLeft: "8px" }}
              >
                <EditButton width="1.3rem" />
              </div>
            </div>
          )}
          <div style={{ fontWeight: "bold" }}>Team Code: {teamCode}</div>
        </div>

        {/* Logout button */}
        <div
          onClick={handleLogout}
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "20px",
            right: "20px",
          }}
        >
          <LogoutSVG />
        </div>
      </div>

      {/* Content Area */}
      <div className="content-area">
        {/* Left Sidebar */}
        <div className="left-sidebar">
          <div className="menu-item">
            <IconButton
              iconElement={<LuckyDrawSVG />}
              onClick={handleLuckyDrawClick}
              colorOnHover="#83cf5d"
              width={"6rem"}
            />
            <div>Lucky Draw</div>
          </div>

          <div className="menu-item">
            <IconButton
              iconElement={<KarmaHandSVG />}
              onClick={handleKarmaHandClick}
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
            {taskLoadingError ? (
              <div
                style={{ color: "red", textAlign: "center", margin: "20px" }}
              >
                {taskLoadingError}
                <div style={{ marginTop: "10px" }}>
                  <button
                    onClick={refreshTasks}
                    style={{
                      backgroundColor: "#83cf5d",
                      border: "none",
                      borderRadius: "4px",
                      padding: "8px 16px",
                      cursor: "pointer",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Retry
                  </button>
                </div>
              </div>
            ) : (
              <>
                <LuckyDraw
                  ref={luckyDrawRef}
                  tasks={tasks}
                  token={token ?? ""}
                  onTaskClaimed={refreshTasks}
                  onTaskClick={openTaskView}
                  userId={user?.id || undefined}
                  taskWidth="calc(25% - 15px)"
                  taskHeight="8.5em"
                />
                <KarmaHand
                  ref={karmaHandRef}
                  tasks={tasks}
                  token={token ?? ""}
                  onTasksDistributed={refreshTasks}
                  userId={user?.id || undefined}
                />
              </>
            )}
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

export default isAuth(Pinboard);

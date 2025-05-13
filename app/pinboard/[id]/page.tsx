"use client";

import { getApiDomain } from "@/utils/domain";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";
import isAuth from "@/isAuth";
///////
import LogoutSVG from "@/svgs/logout_button_svg";
import LuckyDrawSVG from "@/svgs/pinboard_svg/luckydraw_svg";
import FirstComeSVG from "@/svgs/pinboard_svg/first_come_svg";
import KarmaHandSVG from "@/svgs/pinboard_svg/karma_hand_svg";
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
import { dateTomorrowFormatted } from "@/components/dateInput";
import { LeaderboardPopup } from "@/components/leaderboardPopup";
import LuckyDraw from "@/components/luckydraw";
import { useRef } from "react";
import CustomButton from "@/components/customButton";

const Pinboard: React.FC = () => {
  const router = useRouter();
  const apiService = useApi();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [inspectedTask, setInspectedTask] = useState<Task | null>(null);
  const [isAllowedToEdit, setIsAllowedToEdit] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [triggerTasksState, setTriggerTasksUpdate] = useState<boolean>(false);
  const triggerUpdateTasks = useCallback(() => {
    setTriggerTasksUpdate(!triggerTasksState);
  }, [triggerTasksState]);

  const params = useParams();
  const teamId = params.id; // Assuming the parameter is named 'id' in your route

  interface LuckyDrawRef {
    activateLuckyDrawFromOutside: () => void;
    uncoverAllTasks: () => void;
  }

  // Update the ref declaration
  const luckyDrawRef = useRef<LuckyDrawRef>(null);

  const { value: token, clear: clearToken } = useLocalStorage<string>(
    "token",
    ""
  );
  // TODO: get rid of this as soon as endpoint for if allowed to finish is implemented
  const { value: user } = useLocalStorage<User | null>("user", null);
  const { set: setEditingRecurringTasks, clear: deleteEditingRecurringTasks } =
    useLocalStorage<string>("editingRecurringTask", "");

  // Use localStorage to persist toggle state between pages
  const [isDoodleOn, setIsDoodleOn] = useState(true);

  const [loading] = useState<boolean>(true);
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

  // Fetch team data when component mounts
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        if (!teamId) return;

        const response = await fetch(`${getApiDomain()}/teams/${teamId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch team data");

        const data = await response.json();
        setTeamName(data.name);
        setTeamCode(data.code);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    if (token) {
      fetchTeamData();
    }
  }, [token, teamId]);

  // Update localStorage when toggle changes
  useEffect(() => {
    localStorage.setItem("isDoodleOn", JSON.stringify(isDoodleOn));
  }, [isDoodleOn]);

  // Handle toggle change - navigate to Calendar when toggled off
  const handleToggleChange = (newValue: boolean) => {
    setIsDoodleOn(newValue);
    if (!newValue) {
      router.push(`/calendar/${teamId}`);
    }
  };

  const handleLogout = async (): Promise<void> => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
      const storedToken = localStorage.getItem("token");
      const actualToken = storedToken
        ? storedToken.startsWith('"')
          ? JSON.parse(storedToken)
          : storedToken
        : "";

      // Only attempt server logout if we have valid user data
      if (storedUser.id && actualToken) {
        await fetch(`${getApiDomain()}/logout`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${actualToken}`,
          },
          body: JSON.stringify({
            username: storedUser.username,
            id: storedUser.id,
          }),
        }).catch((err) => console.error("Logout server error:", err));
      }

      // Always clear local storage, even if server request fails
      clearToken();
      localStorage.removeItem("user");
      localStorage.removeItem("isDoodleOn");

      // Force redirect
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);

      // Even if there's an error, clear local storage and redirect
      clearToken();
      localStorage.removeItem("user");
      localStorage.removeItem("isDoodleOn");
      router.push("/login");

      alert(`Logout had an issue, but you've been signed out locally.`);
    }
  };

  // Function to start editing team name
  const handleStartEditTeamName = () => {
    setNewTeamName(teamName);
    setIsEditingTeamName(true);
  };

  // Function to save edited team name
  const handleSaveTeamName = async () => {
    try {
      if (!teamId) return;

      const response = await fetch(`${getApiDomain()}/teams/${teamId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: newTeamName }),
      });

      if (!response.ok) throw new Error("Failed to update team name");

      setTeamName(newTeamName);
      setIsEditingTeamName(false);
    } catch (error) {
      console.error("Error updating team name:", error);
      alert("Failed to update team name. Please try again.");
    }
  };

  // Function to cancel editing
  const handleCancelEdit = () => {
    setIsEditingTeamName(false);
  };

  if (loading) {
    //return <Spin size="large" style={{ display: "block", margin: "50px auto" }} />;
  }

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
    triggerUpdateTasks();
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
      await apiService.post<Task>(`/tasks`, data, token);
    } catch (error) {
      console.error("An unexpected error occured while updating task: ", error);
    }
    closePopUp();
  };

  const closePopUp = useCallback(() => {
    triggerUpdateTasks();
    setPopUpIsVisible(false);
    setPopUpAttributes(defaultPopUpAttributes);
  }, [defaultPopUpAttributes, triggerUpdateTasks]);

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
          "An unexpected error occured while fetching task: ",
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
    console.log("initialValue recalculated");
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
      const updateTask = async (
        data: Record<string, unknown>
      ): Promise<void> => {
        try {
          await apiService.put(`/tasks/${inspectedTask?.id}`, data, token);
          setInspectedTask(
            await apiService.get<Task>(`/tasks/${inspectedTask?.id}`, token)
          );
          triggerUpdateTasks();
          setIsEditMode(false);
        } catch (error) {
          console.error(
            "An unexpected error occured while deleting task: ",
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
      }
      // } else if (user && inspectedTask?.isAssignedTo == user.id) {
      //   buttons = [{type: "button", text: "DONE", style: {width: "5rem", height:"2.5rem"}, onClick: (() => finishTask())}]
      // }

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
      const claimTask = async () => {
        try {
          await apiService.patch<null>(
            `/tasks/${inspectedTask?.id}/claim`,
            token
          );
          setInspectedTask(
            await apiService.get<Task>(`/tasks/${inspectedTask?.id}`, token)
          );
          triggerUpdateTasks();
        } catch (error) {
          console.error(
            "An unexpected error occured while claiming task: ",
            error
          );
        }
      };

      // const finishTask = async () => {
      //   try {
      //     await apiService.patch<Task>(`/tasks/${inspectedTask?.id}/finish`, token);
      //     triggerUpdateTasks()
      //     setInspectedTask(null)
      //     setPopUpIsVisible(false)
      //   } catch (error) {
      //     console.error("An unexpected error occured while finishing task: ", error);
      //   }
      // }

      const deleteTask = async () => {
        try {
          await apiService.delete(`/tasks/${inspectedTask?.id}`, token);
          triggerUpdateTasks();
          setInspectedTask(null);
          setPopUpIsVisible(false);
        } catch (error) {
          console.error(
            "An unexpected error occured while deleting task: ",
            error
          );
        }
      };

      console.log("setting up attributes");
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
    triggerUpdateTasks,
    closePopUp,
    isEditMode,
    initialValues,
  ]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await apiService.get<Task[]>("/tasks?isActive=true", token);
        if (!res) {
          setTasks([]);
        } else {
          setTasks(res);
        }
      } catch (error) {
        console.error(
          "An unexpected error occured while fetching tasks: ",
          error
        );
      }
    };
    getTasks();
  }, [apiService, token, tasks, triggerTasksState]);

  const handleLuckyDrawClick = () => {
    if (luckyDrawRef.current) {
      luckyDrawRef.current.activateLuckyDrawFromOutside();
    }
  };

  // Add a handler for First Come First Serve button
  const handleFirstComeFirstServeClick = () => {
    setPopUpAttributes({
      contentElement: (
        <SimplePopup
          isVisible={true}
          title="First Come First Serve"
          content={
            <div>
              <p>
                First Come First Serve is the default game of our app. It allows
                all team members to see all available tasks and claim them on a
                first-come, first-served basis.
              </p>
              <p>
                <strong>Note:</strong>This will uncover all covered tasks if you
                have used Lucky Draw before.
              </p>
            </div>
          }
          buttons={[
            {
              text: "Cancel",
              onClick: () => closePopUp(),
              color: "#f0a59c",
            },
            {
              text: "Start",
              onClick: () => {
                if (luckyDrawRef.current) {
                  luckyDrawRef.current.uncoverAllTasks();
                }
                closePopUp();
              },
              color: "#83cf5d",
            },
          ]}
          onClose={() => closePopUp()}
        />
      ),
      frameVisible: false,
      closeVisible: false,
      maxWidthContent: "600px",
      style: {
        // Add styling to center the popup

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      },
    });
    setPopUpIsVisible(true);
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

  // Extract SimplePopup component for reuse
  const SimplePopup = ({
    isVisible,
    title,
    content,
    buttons,
    onClose,
  }: {
    isVisible: boolean;
    title: string;
    content: React.ReactNode;
    buttons: { text: string; onClick: () => void; color: string }[];
    onClose: () => void;
  }) => {
    if (!isVisible) return null;

    return (
      <div className="simple-popup-overlay" onClick={onClose}>
        <div
          className="simple-popup-container"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="simple-popup-header">
            <h2 style={{ textAlign: "center", width: "100%" }}>{title}</h2>
            <button className="simple-popup-close" onClick={onClose}>
              ×
            </button>
          </div>
          <div className="simple-popup-content">{content}</div>
          <div className="simple-popup-buttons" style={{ gap: "6rem" }}>
            {buttons.map((button, index) => (
              <CustomButton
                key={index}
                onClick={button.onClick}
                text={button.text}
                width="90px"
                height="50px"
                backgroundColor={button.color}
                style={{
                  fontSize: "1.1rem",
                  padding: "10px",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
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
              isOn={isDoodleOn}
              onChange={handleToggleChange}
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
              iconElement={<FirstComeSVG />}
              onClick={handleFirstComeFirstServeClick}
              colorOnHover="#83cf5d"
              width={"6rem"}
            />
            <div>First Come First Serve</div>
          </div>
          <div className="menu-item">
            <ComingSoonOverlay>
              <KarmaHandSVG />
            </ComingSoonOverlay>
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
            <LuckyDraw
              ref={luckyDrawRef}
              tasks={tasks}
              token={token}
              onTaskClaimed={triggerUpdateTasks}
              onTaskClick={openTaskView}
              userId={user?.id || undefined}
              taskWidth="calc(25% - 15px)"
              taskHeight="8.5em"
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

export default isAuth(Pinboard);

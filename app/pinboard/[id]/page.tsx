"use client";

import { getApiDomain } from "@/utils/domain";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
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
import DoodleToggle from "@/components/toggle";
import TaskList from "./taskList";
import IconButton from "@/components/iconButton";
import { RecurringTaskOverview } from "./recurringTaskOverview";
import PopUp, { PopUpAttributes } from "@/components/popUp";
import TaskCard from "@/components/taskCard";
import { useApi } from "@/hooks/useApi";
import { Task } from "@/types/task";

const Pinboard: React.FC = () => {
  const router = useRouter();
  const apiService = useApi();
  
  const { value: token, clear: clearToken } = useLocalStorage<string>("token", "");
  const { set: setEditingRecurringTasks, clear: deleteEditingRecurringTasks } = useLocalStorage<string>("editingRecurringTask", "");

  const [loading] = useState<boolean>(true);
  const [isDoodleOn, setIsDoodleOn] = useState<boolean>(false);
  const defaultPopUpAttributes = {contentElement: (<div>No content loaded</div>), closeVisible: true, onClose: () => {setPopUpIsVisible(false)}};
  const [popUpIsVisible, setPopUpIsVisible] = useState<boolean>(false);
  const [popUpAttributes, setPopUpAttributes] = useState<PopUpAttributes>(defaultPopUpAttributes);

  const handleLogout = async (): Promise<void> => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
      if (!storedUser.username || !storedUser.id)
        throw new Error("User information is missing.");

      let token = localStorage.getItem("token");

      // Remove any surrounding quotes from the token (if present)
      if (token) {
        token = token.replace(/^"(.*)"$/, "$1");
      }

      const response = await fetch(`${getApiDomain()}/logoff`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: storedUser.username,
          id: storedUser.id,
        }),
      });

      if (!response.ok)
        throw new Error(`Logout failed: ${response.statusText}`);

      clearToken();
      localStorage.removeItem("user");
      router.push("/login");
    } catch (error) {
      alert(
        `Logout failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  };

  if (loading) {
    //return <Spin size="large" style={{ display: "block", margin: "50px auto" }} />;
  }

  const openRecurringTaskOverview = () => {
    setEditingRecurringTasks(token)
    setPopUpAttributes({
      contentElement: <RecurringTaskOverview onSubmitAll={closeRecurringTaskOverview} style={{maxHeight: "80vh"}}/>,
      closeVisible: false,
    })
    setPopUpIsVisible(true)
  }
  
  const closeRecurringTaskOverview = () => {
    deleteEditingRecurringTasks()
    setPopUpAttributes(defaultPopUpAttributes)
    setPopUpIsVisible(false)
  };

  const openAdditionalTaskCreation = () => {
    setPopUpAttributes({
      contentElement: <TaskCard type="additional" onSubmit={createAdditionalTask} 
      buttons={[{type: "submit", text: "CREATE", style: {width: "5rem", height:"2.5rem"}}]} 
      buttonAreaStyle={{display: "flex", justifyContent: "end" }}
      />,
      onClose: closeAdditionalTaskCreation,
      frameVisible: false,
      maxWidthContent: "700px"
    })
    setPopUpIsVisible(true)
  }

  const createAdditionalTask = async (data: Record<string, unknown>): Promise<void> => {
    try {
        await apiService.post<Task>(`/tasks`, data, token);
    } catch (error) {
        console.error("An unexpected error occured while updating task: ", error);
    }
    closeAdditionalTaskCreation()
  }
  
  const closeAdditionalTaskCreation = () => {
    setPopUpAttributes(defaultPopUpAttributes)
    setPopUpIsVisible(false)
  };

  return (
    <div className="pinboard-page">
      <PopUp {...popUpAttributes} isVisible={popUpIsVisible}/>
      {/* Top Navigation */}
      <div className="top-nav">
        <div style={{ width: "32px" }} />
        <div
          style={{
            marginRight: "1rem",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          Calendar
        </div>
        <div>
          <DoodleToggle isOn={isDoodleOn} onChange={setIsDoodleOn} size="md" />
        </div>
        <div
          style={{ marginLeft: "1rem", fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Pinboard
        </div>
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
            <LuckyDrawSVG />
            <div>Lucky Draw</div>
          </div>
          <div className="menu-item">
            <FirstComeSVG />
            <div>First Come First Serve</div>
          </div>
          <div className="menu-item">
            <KarmaHandSVG />
            <div>Karma&apos;s Hand</div>
          </div>
        </div>

        {/* Main Container for Task Grid and Bottom Actions */}
        <div className="container">
          {/* Task Grid */}
          <div className="task-grid" style={{ overflowX: "auto" }}>
            {/* Task Cards */}
            <TaskList
              taskWidth="calc(25% - 15px)"
              taskHeight="8.5em"
              height="80%"
            />
          </div>

          {/* Bottom Actions */}
          <div className="bottom-actions">
            <div className="menu-item">
              <IconButton iconElement={<RecurringTasksSVG />} onClick={openRecurringTaskOverview} colorOnHover="#83cf5d" width={"6rem"}/>
              <div>Recurring Tasks</div>
            </div>
            <div className="menu-item">
              <IconButton iconElement={<AdditionalTasksSVG />} onClick={openAdditionalTaskCreation} colorOnHover="#83cf5d" width={"6rem"}/>
              <div>Additional Tasks</div>
            </div>
            <div className="menu-item">
              <PauseSVG />
              <div>Pause</div>
            </div>
            <div className="menu-item">
                <LeaderboardSVG />
                <div>Leaderboard</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default isAuth(Pinboard);

"use client";

import { getApiDomain } from "@/utils/domain";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";
import isAuth from "@/isAuth";
///////
import LogoutSVG from "@/svgs/logout_button_svg";
import ScrollBarSVG from "@/svgs/pinboard_svg/scroll_bar_svg";
import LuckyDrawSVG from "@/svgs/pinboard_svg/luckydraw_svg";
import FirstComeSVG from "@/svgs/pinboard_svg/first_come_svg";
import KarmaHandSVG from "@/svgs/pinboard_svg/karma_hand_svg";
import LeaderboardSVG from "@/svgs/pinboard_svg/leaderboard";
import RecurringTasksSVG from "@/svgs/pinboard_svg/recurring_task_svg";
import AdditionalTasksSVG from "@/svgs/pinboard_svg/additional_task_svg";
import PauseSVG from "@/svgs/pinboard_svg/pause_svg";
import DoodleToggle from "@/components/toggle";
import TaskList from "./taskList";

const Pinboard: React.FC = () => {
  const router = useRouter();
  //const apiService = useApi();
  const [loading] = useState<boolean>(true);

  const { clear: clearToken } = useLocalStorage<string>("token", "");

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
  const [isDoodleOn, setIsDoodleOn] = useState(false);

  return (
    <div className="pinboard-page">
      {/* Top Navigation */}
      <div className="top-nav">
        <div style={{ width: "32px" }} />
        <div>
          <DoodleToggle isOn={isDoodleOn} onChange={setIsDoodleOn} size="md" />
        </div>
        <div
          onClick={handleLogout}
          style={{
            cursor: "pointer",
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
          <div className="menu-item">
            <LeaderboardSVG />
            <div>Leaderboard</div>
          </div>
        </div>

        {/* Task Grid */}
        <div className="task-grid">
          {/* Task Cards */}
          <TaskList taskWidth="30%" taskHeight="4rem" />
        </div>

        {/* Bottom Actions */}
        <div className="bottom-actions">
          <div className="menu-item">
            <RecurringTasksSVG />
            <div>Recurring Tasks</div>
          </div>
          <div className="menu-item">
            <AdditionalTasksSVG />
            <div>Additional Tasks</div>
          </div>
          <div className="menu-item">
            <PauseSVG />
            <div>Pause</div>
          </div>
        </div>

        {/* Right Line */}
        <div className="right-line">
          <ScrollBarSVG
            style={{ position: "absolute", top: "200px", right: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default isAuth(Pinboard);

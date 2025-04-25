"use client";

import React, { useEffect, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { getApiDomain } from "@/utils/domain";
import DayCellSVG from "@/svgs/calendar_svg/day_cell_svg";
import DoodleToggle from "@/components/toggle";
import WeekFrameSVG from "@/svgs/calendar_svg/week_frame_svg";
import { useParams, useRouter } from "next/navigation";
import isAuth from "@/isAuth";
import LogoutSVG from "@/svgs/logout_button_svg";
import EditButton from "@/svgs/pinboard_svg/edit_button_svg";
import LeftArrowSVG from "@/svgs/calendar_svg/left_arrow_svg";
import ComingSoonOverlay from "@/components/comingSoon";

const CalendarPage: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const teamId = params.id;

  const { value: token } = useLocalStorage<string>("token", "");

  const [currentWeek, setCurrentWeek] = useState(1);
  const [weekDates, setWeekDates] = useState<Date[]>([]);

  // Team state
  const [teamName, setTeamName] = useState<string>("Loading...");
  const [teamCode, setTeamCode] = useState<string>("Loading...");
  const [isEditingTeamName, setIsEditingTeamName] = useState<boolean>(false);
  const [newTeamName, setNewTeamName] = useState<string>("");

  // Initialize toggle state from localStorage to maintain consistency
  const [isDoodleOn, setIsDoodleOn] = useState<boolean>(false);

  // Calculate the dates for the current week
  useEffect(() => {
    const calculateWeekDates = () => {
      const today = new Date();
      const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

      // Calculate how many days to subtract to get to Sunday (start of week)
      // If today is Sunday (0), subtract 0 days
      // If today is Monday (1), subtract 1 day, etc.
      const daysToSubtract = currentDay;

      // Start with Sunday of current week
      const sunday = new Date(today);
      sunday.setDate(today.getDate() - daysToSubtract);

      // Create array with all 7 days of the week
      const weekDays = [];
      for (let i = 0; i < 7; i++) {
        const day = new Date(sunday);
        day.setDate(sunday.getDate() + i);
        weekDays.push(day);
      }

      setWeekDates(weekDays);
    };

    calculateWeekDates();
  }, []);

  // Format date to display day name and date
  const formatDate = (date: Date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayName = days[date.getDay()];
    const dayNumber = date.getDate();
    const month = date.getMonth() + 1; // Months are 0-indexed

    return `${dayName} ${dayNumber}/${month}`;
  };

  // Navigate to previous week with a check to prevent going below week 1
  const goToPreviousWeek = () => {
    // Only allow navigating back if we're not already at week 1
    if (currentWeek > 1 && weekDates.length > 0) {
      const newDates = weekDates.map((date) => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() - 7);
        return newDate;
      });
      setWeekDates(newDates);
      setCurrentWeek(currentWeek - 1);
    }
  };

  // Navigate to next week
  const goToNextWeek = () => {
    if (weekDates.length > 0) {
      const newDates = weekDates.map((date) => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() + 7);
        return newDate;
      });
      setWeekDates(newDates);
      setCurrentWeek(currentWeek + 1);
    }
  };

  // Fetch team data
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

  // Handle toggle change - navigate to Pinboard when toggled on
  const handleToggleChange = (newValue: boolean) => {
    setIsDoodleOn(newValue);
    if (newValue) {
      router.push(`/pinboard/${teamId}`);
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
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("isDoodleOn");

      // Force redirect
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);

      // Even if there's an error, clear local storage and redirect
      localStorage.removeItem("token");
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

  return (
    <div className="calendar-page">
      <div className="calendar-top-nav">
        {/* Toggle with labels */}
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
          <div className="week-indicator">
            {/* Added navigation buttons for weeks */}
            <button
              onClick={goToPreviousWeek}
              disabled={currentWeek <= 1}
              style={{
                background: "none",
                border: "none",
                cursor: currentWeek > 1 ? "pointer" : "not-allowed",
                opacity: currentWeek > 1 ? 1 : 0.5,
                display: "flex",
                alignItems: "center",
                padding: 0,
              }}
            >
              <LeftArrowSVG
                width="24px"
                style={{
                  position: "relative",
                  top: "1px",
                }}
              />
            </button>

            <div className="week-indicator-wrapper">
              <ComingSoonOverlay>
                <WeekFrameSVG />
              </ComingSoonOverlay>
              <div className="week-text">Week {currentWeek}</div>
            </div>

            <button
              onClick={goToNextWeek}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                padding: 0,
              }}
            >
              <LeftArrowSVG
                width="24px"
                style={{
                  transform: "scaleX(-1)", // Flip horizontally for the left arrow
                  position: "relative",
                  top: "1px",
                }}
              />
            </button>
          </div>
        </div>

        {/* Team info in the top-right with edit button */}
        <div className="team-info">
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
      <div className="calendar-content-area">
        {weekDates.length > 0 ? (
          weekDates.map((date, index) => (
            <div key={index} className="day-cell">
              <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
                {formatDate(date)}
              </div>
              <DayCellSVG lengthFactor={1.3} />
            </div>
          ))
        ) : (
          <div>Loading calendar...</div>
        )}
      </div>
    </div>
  );
};

export default isAuth(CalendarPage);

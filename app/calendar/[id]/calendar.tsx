"use client";

import { useApi } from "@/hooks/useApi";
import useLocalStorage from "@/hooks/useLocalStorage";
import DayCellSVG from "@/svgs/calendar_svg/day_cell_svg";
import LeftArrowSVG from "@/svgs/calendar_svg/left_arrow_svg";
import WeekFrameSVG from "@/svgs/calendar_svg/week_frame_svg";
import CardSVG from "@/svgs/pinboard_svg/card_svg";
import { ApplicationError } from "@/types/error";
import { Task } from "@/types/task";
import {
  addDays,
  dateFormatted,
  dateOfWeekFormatted,
} from "@/utils/dateHelperFuncs";
import { useCallback, useEffect, useState } from "react";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type GoogleAuthResponse = {
  authUrl: string;
};

type CalendarProps = {
  initialWeekDays: string[];
  tasks: Task[];
  openTaskView: (taskId: string) => void;
  router: AppRouterInstance; // Added router with proper type
};

const Calendar = ({
  initialWeekDays,
  tasks,
  openTaskView,
  router,
}: CalendarProps) => {
  const apiService = useApi();
  const { value: token } = useLocalStorage<string>("token", "");

  // Calculate the current week number
  const getCurrentWeekNumber = () => {
    if (!initialWeekDays || initialWeekDays.length === 0) return 1;

    const firstDate = new Date(initialWeekDays[0]);
    const today = new Date();

    // Calculate weeks difference
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    const weeksDiff = Math.round(
      (today.getTime() - firstDate.getTime()) / msInWeek
    );

    return Math.max(1, weeksDiff + 1); // Ensure we never go below week 1
  };

  const [currentWeek, setCurrentWeek] = useState(() => getCurrentWeekNumber());
  const [weekDates, setWeekDates] = useState<Date[]>([]);
  const [googleEvents, setGoogleEvents] = useState<Task[]>([]);

  const getInitialWeekDays = useCallback(() => {
    if (initialWeekDays && initialWeekDays.length > 0) {
      // If we're not on the current week (based on currentWeek state), adjust to show current week
      if (currentWeek > 1) {
        // Add (currentWeek - 1) weeks to the initial date
        const adjustedDates = initialWeekDays.map((dateString) => {
          const date = new Date(dateString);
          date.setDate(date.getDate() + (currentWeek - 1) * 7);
          return date;
        });
        return adjustedDates;
      }
      return initialWeekDays.map((dateString) => new Date(dateString));
    }
    return []; // Return empty if initialWeekDays is not yet available
  }, [initialWeekDays, currentWeek]);

  useEffect(() => {
    setWeekDates(getInitialWeekDays());
  }, [initialWeekDays, getInitialWeekDays]);

  useEffect(() => {
    const getGoogleEvents = async () => {
      try {
        const events: Task[] | null = await apiService.get(
          `/calendar/events?startDate=${dateFormatted(
            addDays(weekDates[0], -7)
          )}&endDate=${dateFormatted(addDays(weekDates[0], 7))}`,
          token
        );
        setGoogleEvents(events ?? []);
      } catch (error) {
        if (error instanceof ApplicationError && error.status == 404) {
          setGoogleEvents([]);
        } else {
          console.error(
            "An unexpected error occured while trying to fetch google events:",
            error
          );
          setGoogleEvents([]);
        }
      }
    };
    getGoogleEvents();
  }, [apiService, token, weekDates]);

  // Navigate to previous week with a check to prevent going below week 1
  const goToPreviousWeek = () => {
    // Only allow navigating back if we're not already at week 1
    if (currentWeek > 1 && weekDates.length > 0) {
      const newDates = weekDates.map((date) => {
        return addDays(date, -7);
      });
      setWeekDates(newDates);
      setCurrentWeek(currentWeek - 1);
    }
  };

  // Navigate to next week
  const goToNextWeek = () => {
    if (weekDates.length > 0) {
      const newDates = weekDates.map((date) => {
        return addDays(date, 7);
      });
      setWeekDates(newDates);
      setCurrentWeek(currentWeek + 1);
    }
  };

  const syncGoogleAccount = async () => {
    const response: GoogleAuthResponse | null = await apiService.get(
      "/calendar/auth-url",
      token
    );
    if (response) {
      router.push(response.authUrl);
    }
  };

  return (
    <div>
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
          <WeekFrameSVG />
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
              transform: "scaleX(-1)", // Flip horizontally for the right arrow
              position: "relative",
              top: "1px",
            }}
          />
        </button>
      </div>
      <button onClick={syncGoogleAccount}>Sync Google Calendar</button>
      <div className="calendar-content-area">
        {weekDates.length > 0 ? (
          weekDates.map((date, index) => (
            <div
              key={index}
              className="day-cell"
              style={{ overflow: "hidden" }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  marginBottom: "5px",
                  textAlign: "center",
                }}
              >
                {dateOfWeekFormatted(date)}
              </div>
              <div
                className="day-cell-content"
                style={{
                  position: "relative",
                  width: "100%",
                  minHeight: "420px",
                  maxHeight: "420px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                {/* Day cell SVG as background - maintain full size */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1,
                    pointerEvents: "none",
                  }}
                >
                  <DayCellSVG lengthFactor={1.3} />
                </div>

                {/* Task container positioned absolutely over the SVG */}
                <div
                  className="tasks-container"
                  style={{
                    position: "absolute",
                    top: "50px",
                    bottom: "50px",
                    left: "20px",
                    right: "20px",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent:
                      tasks &&
                      tasks.filter((x) => x.deadline == dateFormatted(date))
                        .length <= 2
                        ? "center"
                        : "flex-start",
                    overflowY: "auto",
                    maxHeight: "calc(100% - 100px)",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: "8px",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                  }}
                >
                  {tasks &&
                  tasks.filter((x) => x.deadline == dateFormatted(date))
                    .length > 0 ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                        padding: "5px 0",
                      }}
                    >
                      {tasks
                        .filter((x) => x.deadline == dateFormatted(date))
                        .map((task) => (
                          <div
                            key={task.id}
                            onClick={() => openTaskView(task.id)}
                            className="task-card"
                            style={{
                              width: "90%",
                              position: "relative",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              cursor: "pointer",
                              marginBottom: "12px",
                              marginTop: "6px",
                            }}
                          >
                            <CardSVG
                              width="100%"
                              height="6.5rem"
                              color={
                                task.id
                                  ? `var(--member-color-${task.color})`
                                  : "#000000"
                              }
                              style={{ position: "relative" }}
                              splashColor={
                                task.color
                                  ? `var(--member-color-${task.color})`
                                  : "white"
                              }
                            />
                            <div
                              style={{
                                position: "absolute",
                                textAlign: "center",
                                width: "80%",
                                fontWeight: "bold",
                                color: "#333",
                                fontSize: "1.2rem",
                                lineHeight: "1.4rem",
                                padding: "10px",
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                wordBreak: "break-word",
                                maxHeight: "5rem",
                              }}
                            >
                              {task.luckyDraw && !task.isAssignedTo
                                ? "???"
                                : task.name}
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div style={{ height: "10px" }}></div>
                  )}

                  {googleEvents &&
                    googleEvents.filter(
                      (x) => x.deadline == dateFormatted(date)
                    ).length > 0 && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          width: "100%",
                          padding: "5px 0",
                        }}
                      >
                        {googleEvents
                          .filter((x) => x.deadline == dateFormatted(date))
                          .map((task, idx) => (
                            <div
                              key={`ge-${idx}`}
                              style={{
                                marginBottom: "8px",
                                fontSize: "1rem",
                                textAlign: "center",
                                width: "85%",
                                padding: "5px",
                                backgroundColor: "rgba(255,255,255,0.7)",
                                borderRadius: "4px",
                              }}
                            >
                              {task.name}
                            </div>
                          ))}
                      </div>
                    )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Loading calendar...</div>
        )}
      </div>
    </div>
  );
};

export default Calendar;

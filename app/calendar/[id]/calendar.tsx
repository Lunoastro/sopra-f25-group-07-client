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
  dateDayMonthFormatted,
  dateFormatted,
  dateOfWeekFormatted,
} from "@/utils/dateHelperFuncs";
import { useCallback, useEffect, useState } from "react";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { GoogleEvent } from "@/types/googleEvent";
import SyncGoogleCalendarSVG from "@/svgs/calendar_svg/sync_google_event_icon_svg";
import CalendarCardSVG from "@/svgs/calendar_svg/calendar_card_svg";

type GoogleAuthResponse = {
  authUrl: string;
};

type CalendarProps = {
  initialWeekDays: string[];
  tasks: Task[];
  openTaskView: (taskId: string) => void;
  openGoogleEventView: (event: GoogleEvent) => void;
  router: AppRouterInstance; // Added router with proper type
};

const Calendar = ({
  initialWeekDays,
  tasks,
  openTaskView,
  openGoogleEventView,
  router,
}: CalendarProps) => {
  const apiService = useApi();
  const { value: token } = useLocalStorage<string>("token", "");

  const [currentWeekLabel, setCurrentWeekLabel] =
    useState<string>("Loading...");
  const [weekDates, setWeekDates] = useState<Date[]>([]);
  const [googleEvents, setGoogleEvents] = useState<GoogleEvent[]>([]);

  const getInitialWeekDays = useCallback(() => {
    if (initialWeekDays && initialWeekDays.length > 0) {
      return initialWeekDays.map((dateString) => new Date(dateString));
    }
    return []; // Return empty if initialWeekDays is not yet available
  }, [initialWeekDays]);

  useEffect(() => {
    setWeekDates(getInitialWeekDays());
  }, [initialWeekDays, getInitialWeekDays]);

  useEffect(() => {
    const getNewWeekLabel = () => {
      const startOfWeek = dateDayMonthFormatted(weekDates[0]);
      const endOfWeek = dateDayMonthFormatted(weekDates[6]);
      return `${startOfWeek} - ${endOfWeek}`;
    };
    if (weekDates[0] && weekDates[6]) {
      setCurrentWeekLabel(getNewWeekLabel());
    }
  }, [weekDates, setCurrentWeekLabel]);

  useEffect(() => {
    const getGoogleEvents = async () => {
      if (!weekDates || weekDates.length === 0) {
        return; // Exit early if weekDates is not ready
      }

      try {
        const events: GoogleEvent[] | null = await apiService.get(
          `/calendar/events?startDate=${dateFormatted(
            addDays(weekDates[0], -7)
          )}&endDate=${dateFormatted(addDays(weekDates[0], 13))}`,
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
    const newDates = weekDates.map((date) => {
      return addDays(date, -7);
    });
    setWeekDates(newDates);
  };

  // Navigate to next week
  const goToNextWeek = () => {
    const newDates = weekDates.map((date) => {
      return addDays(date, 7);
    });
    setWeekDates(newDates);
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
    <div style={{ overflowY: "hidden",  }}>
      <div className="week-indicator">
        {/* Added navigation buttons for weeks */}
        <button
          onClick={goToPreviousWeek}
          style={{
            background: "none",
            border: "none",
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
          <div className="week-text">{currentWeekLabel}</div>
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
      <div
        style={{
          display: "flex",
          flexDirection: "row", // Changed from "column" to "row"
          alignItems: "center", // Changed to "center" to vertically align icon and text
          padding: "10px",
        }}
      >
        <div
          onClick={syncGoogleAccount}
          style={{
            cursor: "pointer",
            marginRight: "8px", // Changed from marginBottom to marginRight
          }}
        >
          <SyncGoogleCalendarSVG width="30px" height="30px" />
        </div>
        <div
          style={{
            fontSize: "1rem",
          }}
        >
          Sync Google Calendar
        </div>
      </div>
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
                      (x) =>
                        x.endDate == dateFormatted(date) &&
                        !x?.name?.startsWith("[TASK]")
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
                          .filter(
                            (x) =>
                              x.endDate == dateFormatted(date) &&
                              !x?.name?.startsWith("[TASK]")
                          )
                          .map((task, idx) => (
                            <div
                              key={`ge-${idx}`}
                              onClick={() => openGoogleEventView(task)}
                              className="google-calendar-card"
                              style={{
                                width: "90%",
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: "12px",
                                marginTop: "6px",
                              }}
                            >
                              <CalendarCardSVG
                                width="100%"
                                height="6.5rem"
                                style={{ position: "relative" }}
                              />
                              <div
                                style={{
                                  position: "absolute",
                                  top: "5px",
                                  right: "10px",
                                  backgroundColor: "#4285f4", // Google blue
                                  color: "white",
                                  fontSize: "0.7rem",
                                  fontWeight: "bold",
                                  padding: "2px 6px",
                                  borderRadius: "8px",
                                  zIndex: 3,
                                }}
                              >
                                GOOGLE
                              </div>
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
                                {task.name}
                              </div>
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

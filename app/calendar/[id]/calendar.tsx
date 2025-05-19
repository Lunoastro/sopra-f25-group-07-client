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

type CalendarProps = {
  initialWeekDays: string[];
  tasks: Task[];
  openTaskView: (taskId: string) => void;
};

const Calendar = ({ initialWeekDays, tasks, openTaskView }: CalendarProps) => {
  const apiService = useApi();
  const { value: token } = useLocalStorage<string>("token", "");

  const [currentWeek, setCurrentWeek] = useState(1);
  const [weekDates, setWeekDates] = useState<Date[]>([]);
  const [googleEvents, setGoogleEvents] = useState<Task[]>([]);

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
    await apiService.get("/calendar/auth-url", token);
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

      {/* Calendar content with 7-day grid */}
      <div
        className="calendar-content-area"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "15px",
          padding: "10px",
        }}
      >
        {weekDates.length > 0 ? (
          weekDates.map((date, index) => (
            <div key={index} className="day-cell">
              <div
                style={{
                  fontWeight: "bold",
                  marginBottom: "5px",
                  textAlign: "center",
                }}
              >
                {dateOfWeekFormatted(date)}
              </div>

              {/* Day cell container with fixed aspect ratio */}
              <div
                className="day-cell-wrapper"
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "100%" /* Creates a 1:1 aspect ratio */,
                }}
              >
                {/* SVG background container (full size) */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <DayCellSVG lengthFactor={1.3} width="100%" height="100%" />
                </div>

                {/* Content container that sits on top of the SVG */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    padding: "15%" /* Padding as percentage of container */,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    overflow: "auto",
                  }}
                >
                  {/* Render tasks */}
                  {tasks &&
                    tasks.filter((x) => x.deadline == dateFormatted(date))
                      .length > 0 && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          width: "100%",
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
                                width: "100%",
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                                marginBottom: "10px",
                              }}
                            >
                              <CardSVG
                                width="100%"
                                height="2rem"
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
                                  width: "60%",
                                  fontWeight: "bold",
                                  color: "#333",
                                  fontSize: "1rem",
                                  padding: "5px",
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  wordBreak: "break-word",
                                }}
                              >
                                {task.luckyDraw && !task.isAssignedTo
                                  ? "???"
                                  : task.name}
                              </div>
                            </div>
                          ))}
                      </div>
                    )}

                  {/* Render Google events */}
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
                        }}
                      >
                        {googleEvents
                          .filter((x) => x.deadline == dateFormatted(date))
                          .map((task, idx) => (
                            <div
                              key={`ge-${idx}`}
                              style={{
                                marginBottom: "5px",
                                fontSize: "0.8rem",
                                textAlign: "center",
                                width: "100%",
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

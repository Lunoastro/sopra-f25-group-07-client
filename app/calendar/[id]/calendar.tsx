"use client";

import { useApi } from "@/hooks/useApi";
import useLocalStorage from "@/hooks/useLocalStorage";
import DayCellSVG from "@/svgs/calendar_svg/day_cell_svg";
import LeftArrowSVG from "@/svgs/calendar_svg/left_arrow_svg";
import WeekFrameSVG from "@/svgs/calendar_svg/week_frame_svg";
import CardSVG from "@/svgs/pinboard_svg/card_svg";
import { ApplicationError } from "@/types/error";
import { Task } from "@/types/task";
import { addDays, dateFormatted, dateOfWeekFormatted } from "@/utils/dateHelperFuncs";
import { useCallback, useEffect, useState } from "react";

type CalendarProps = {
    initialWeekDays: string[];
    tasks: Task[]
    openTaskView: (taskId: string) => void;
}

const Calendar = ({
    initialWeekDays,
    tasks,
    openTaskView
}: CalendarProps) => {

    const apiService = useApi()
    const { value: token } = useLocalStorage<string>("token", "");

    const [currentWeek, setCurrentWeek] = useState(1);
    const [weekDates, setWeekDates] = useState<Date[]>([]);
    const [googleEvents, setGoogleEvents] = useState<Task[]>([])

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
                const events : Task[] | null = await apiService.get(`/calendar/events?startDate=${dateFormatted(addDays(weekDates[0], -7))}&endDate=${dateFormatted(addDays(weekDates[0], 7))}`, token)
                setGoogleEvents(events ?? [])
            } catch (error) {
                if (error instanceof ApplicationError && error.status == 404) {
                    setGoogleEvents([])
                } else {
                    console.error("An unexpected error occured while trying to fetch google events:", error)
                    setGoogleEvents([])
                }
            } 
        }
        getGoogleEvents()
    }, [apiService, token, weekDates])

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
        await apiService.get("/calendar/auth-url", token) 
    }

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
                        transform: "scaleX(-1)", // Flip horizontally for the left arrow
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
                <div key={index} className="day-cell">
                    <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
                    {dateOfWeekFormatted(date)}
                    </div>
                    {tasks && <div>{tasks.filter((x) => (x.deadline == dateFormatted(date))).map((task) => (
                        <div
                            key={task.id}
                            onClick={() => openTaskView(task.id)}
                            className="task-card"
                            style={{
                            width: "5rem",
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            }}
                        > 
                            <CardSVG
                            width="100%"
                            height="2rem"
                            color={
                                task.id ? `var(--member-color-${task.color})` : "#000000"
                            }
                            style={{ position: "relative" }}
                            splashColor={
                                task.color ? `var(--member-color-${task.color})` : "white"
                            }
                            />
                            <div
                            style={{
                                position: "absolute",
                                textAlign: "center",
                                width: "60%",
                                fontWeight: "bold",
                                color: "#333",
                                fontSize: "1.5rem",
                                padding: "10px",
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                wordBreak: "break-word",
                            }}
                            >
                            {(task.luckyDraw && !task.isAssignedTo)? "???" : task.name}
                            </div>
                        </div>
                        ))}</div>}
                    {googleEvents && <div>{googleEvents.filter((x) => (x.deadline == dateFormatted(date))).map((task) => task.name)}</div>}
                    <DayCellSVG lengthFactor={1.3} />
                </div>
                ))
            ) : (
                <div>Loading calendar...</div>
            )}
            </div>
        </div>      
    )
}

export default Calendar;
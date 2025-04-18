import { useEffect, useState } from "react";
import { useApi } from "@/hooks/useApi";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Task } from "@/types/task";
import CardSVG from "@/svgs/pinboard_svg/card_svg";

interface taskListProps {
  height?: string;
  width?: string;
  taskWidth?: string;
  taskHeight?: string;
}

export const TaskList = ({
  height = "100%",
  width = "100%",
  taskHeight = "4rem",
  taskWidth = "33%",
}: taskListProps) => {
  const apiService = useApi();
  const { value: token } = useLocalStorage<string>("token", "");
  const [tasks, setTasks] = useState<Task[]>([]);

  // List of colors to randomly assign to tasks without a colorId
  const splashColors = [
    "#c3e8c6", // original color
    "#ffcccb", // light red
    "#ffdfba", // light orange
    "#ffffba", // light yellow
    "#baffc9", // light green
    "#bae1ff", // light blue
    "#e2baff", // light purple
  ];

  useEffect(() => {
    // const getTasks = async () => {
    //   try {
    //     setTasks(
    //       await apiService.get<Task[]>("/tasks?activeStatus=true", token)
    //     );
    //   } catch (error) {
    //     console.error(
    //       "An unexpected error occured while fetching tasks: ",
    //       error
    //     );
    //   }
    // };
    // getTasks();
    setTasks([
      { id: "1", name: "Clean Toilet" },
      { id: "2", name: "Wash Dishes" },
      { id: "3", name: "Take Out Trash" },
      { id: "4", name: "Sweep Floor" },
      { id: "5", name: "Dust Shelves" },
      { id: "6", name: "Do Laundry" },
      { id: "7", name: "Water Plants" },
      {
        id: "8",
        name: "Vacuum Living Rooms and VXXXXX xxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      },
      { id: "9", name: "Clean Windows" },
      { id: "10", name: "Mop Kitchen" },
      { id: "11", name: "Empty Dishwasher" },
      { id: "12", name: "Organize Closet" },
      {
        id: "13",
        name: "Empty Dishwasher Empty Dishwasher assasasasa vjvhgvjvjhvjhv",
      },
    ]);
  }, [apiService, token, setTasks]);

  // Get a consistent splash color based on task id
  const getTaskSplashColor = (taskId: string): string => {
    // Use the task id to deterministically get a color
    const colorIndex = parseInt(taskId, 10) % splashColors.length;
    return splashColors[colorIndex];
  };

  return (
    <div style={{ position: "relative", height, width }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          overflowY: "auto",
          gap: "1rem",
          padding: "0.5rem",
          position: "relative",
        }}
      >
        {tasks.map((task) => (
          <div
            key={task.id}
            className="task-card"
            style={{
              width: taskWidth,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardSVG
              width="100%"
              height={taskHeight}
              color={
                task.colorId ? `var(--member-color-${task.colorId})` : "#000000"
              }
              style={{ position: "relative" }}
              splashColor={getTaskSplashColor(task.id)}
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
              {task.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;

import { useEffect, useState } from "react";
import { useApi } from "@/hooks/useApi";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Task } from "@/types/task";
import CardSVG from "@/svgs/pinboard_svg/card_svg";

interface taskListProps {
  taskOnClick: (id: string) => void;
  height?: string;
  width?: string;
  taskWidth?: string;
  taskHeight?: string;
}

export const TaskList = ({
  taskOnClick,
  height = "100%",
  width = "100%",
  taskHeight = "4rem",
  taskWidth = "33%",
}: taskListProps) => {
  const apiService = useApi();
  const { value: token } = useLocalStorage<string>("token", "");
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // const getTasks = async () => {
    //   try {
    //     setTasks(
    //       await apiService.get<Task[]>("/tasks?isActive=true", token)
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
      { id: "1", name: "Clean Toilet", colorId: "C1" },
      { id: "2", name: "Wash Dishes", colorId: "C2" },
      { id: "3", name: "Take Out Trash", colorId: "C3" },
      { id: "4", name: "Sweep Floor", colorId: "C4" },
      { id: "5", name: "Dust Shelves", colorId: "C5" },
      { id: "6", name: "Do Laundry", colorId: "C6" },
      { id: "7", name: "Water Plants", colorId: "C7" },
      {
        id: "8",
        name: "Vacuum Living Rooms and VXXXXX xxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      },
      { id: "9", name: "Clean Windows", colorId: "C8" },
      { id: "10", name: "Mop Kitchen", colorId: "C9" },
      { id: "11", name: "Empty Dishwasher", colorId: "C10" },
      { id: "12", name: "Organize Closet" },
      {
        id: "13",
        name: "Empty Dishwasher Empty Dishwasher assasasasa vjvhgvjvjhvjhv",
      },
    ]);
  }, [apiService, token, setTasks]);

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
            onClick={() => taskOnClick(task.id)}
            className="task-card"
            style={{
              width: taskWidth,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <CardSVG
              width="100%"
              height={taskHeight}
              color={
                task.colorId ? `var(--member-color-${task.colorId})` : "#000000"
              }
              style={{ position: "relative" }}
              splashColor={
                task.colorId ? `var(--member-color-${task.colorId})` : "white"
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
              {task.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;

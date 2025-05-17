import { Task } from "@/types/task";
import CardSVG from "@/svgs/pinboard_svg/card_svg";
import { CSSProperties } from "react";

interface taskListProps {
  tasks: Task[];
  taskOnClick: (id: string) => void;
  height?: string;
  width?: string;
  taskWidth?: string;
  taskHeight?: string;
  style?: CSSProperties;
}

export const TaskList = ({
  tasks,
  taskOnClick,
  height = "100%",
  width = "100%",
  taskHeight = "4rem",
  taskWidth = "33%",
  style
}: taskListProps) => {

  return (
    <div style={{ position: "relative", height, width, ...style }}>
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
        ))}
      </div>
    </div>
  );
};

export default TaskList;

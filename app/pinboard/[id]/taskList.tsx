import { useEffect, useState } from "react";
import { useApi } from "@/hooks/useApi";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Task } from "@/types/task";



interface taskListProps {
  height?: string,
  width?: string,
  taskWidth?: string,
  taskHeight?: string
}

export const TaskList = (
  ({ 
    height = "100%",
    width = "100%", 
    taskHeight = "4rem",
    taskWidth = "33%"
    }:taskListProps) => {
    
    const apiService = useApi();
    const { value: token} = useLocalStorage<string>("token", "");
    const [tasks, setTasks] = useState<Task[]>([])
      


    useEffect(() => {
        const getTasks = async () => {
            try {
              setTasks(await apiService.get<Task[]>("/tasks?activeStatus=true", token));
            } catch (error) {
                console.error("An unexpected error occured while fetching tasks: ", error);
            }
          };
        getTasks()
    }, [apiService, token, setTasks])


    return (
      <div style={{
        width: width, 
        height: height, 
        display: "flex", 
        flexDirection: "row", 
        flexWrap: "wrap", 
        overflow: "auto",
        }}>
        {
            tasks.map((task) => (
                <div key={task.id} style={{
                  width: taskWidth, 
                  height: taskHeight, 
                  backgroundColor: task.colorId ? `var(--member-color-${task.colorId})`: "var(--unassigned)"
                  }}>
                    <p>{task.name}</p>
                </div>
            ))
        }
      </div>
    );
  }
);

export default TaskList;

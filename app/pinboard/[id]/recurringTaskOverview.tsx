import CustomButton from "@/components/customButton";
import { FormValue } from "@/components/form";
import { RecurringTask } from "@/components/recurringTask";
import { useApi } from "@/hooks/useApi";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Task } from "@/types/task";
import { CSSProperties, useEffect, useRef, useState } from "react";

export interface RecurringTaskOverviewProps {
    width?: string,
    height?: string,
    taskClassName?: string;
    taskStyle?: CSSProperties;
    className?: string;
    style?: CSSProperties;
}

export const RecurringTaskOverview = (
    {
        width = "100%",
        height = "100%",
        taskClassName,
        taskStyle,
        className,
        style,
    }: RecurringTaskOverviewProps) => {

        const apiService = useApi();
        const { value: token} = useLocalStorage<string>("token", "");
        const [recurringTasks, setRecurringTasks] = useState<Task[]>([]);

        useEffect(() => {
            const getRecurringTasks = async () => {
                        try {
                          setRecurringTasks(await apiService.get<Task[]>('/tasks?type="recurring"', token));
                        } catch (error) {
                            console.error("An unexpected error occured while fetching tasks: ", error);
                        }
                      };
            getRecurringTasks()
        }, [apiService, token, setRecurringTasks])

        const formRefs = useRef<Record<string, HTMLFormElement>>({});

        const getFormRef = (taskId : string) => (form : HTMLFormElement) => {
            formRefs.current[taskId] = form;
        };


        const submitAll = async () => {
            for (const taskId in formRefs.current) {
                const formData = new FormData(formRefs.current[taskId]);
                const data = Object.fromEntries(formData.entries());
                try {
                    await apiService.put<Task>(`/tasks/${taskId}`, data, token);
                } catch (error) {
                    console.error("An unexpected error occured while fetching tasks: ", error);
                }
            }
        }

        return (
            <div className={className} style={{
                width: width, 
                height: height, 
                display: "flex", 
                flexDirection: "column",  
                overflow: "auto",
                ...style,
                }}>
                <CustomButton text={"Update"} type={"button"} onClick={submitAll} width={"5rem"}/>
                {
                    recurringTasks.map((task) => (
                        <div key={task.id}>
                            <RecurringTask ref={getFormRef(task.id)} onSubmit={() => {}} className={taskClassName} style={taskStyle}
                            initialValues={{
                                "name": task.name as FormValue,
                                "description": task.description as FormValue,
                                "startDate": task.startDate?.toISOString().split('T')[0] as string,
                                "frequency": task.frequency as FormValue,
                                "reminder": task.reminder as FormValue,
                                "value": task.value as FormValue,
                                
                            }}/>
                        </div>
                    ))
                }
              </div>
        )
    }
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

// Important: 
// Make sure to set editingRecurringTasks to the token of the user/session 
// whenever RecurringTaskOverview gets displayed
// s.t. no other session/user can interfere
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
        const { value: editingRecurringTasks, set: setEditingRecurringTasks, clear: deleteEditingRecurringTasks} = useLocalStorage<string>("editingRecurringTasks", "");
        const [recurringTasks, setRecurringTasks] = useState<Task[]>([]);
        const [blockEdit, setBlockEdit] = useState<boolean>(false)
        const [deletedIds, setDeletedIds] = useState<string[]>([]);
        const [addedId, setAddedId] = useState<number>(0);

        // keeps track of the forms currently in the overview in order to trigger their submit
        const formRefs = useRef<Record<string, HTMLFormElement>>({});
        const setFormRef = (formElement: HTMLFormElement | null, taskId: string) => {
            if (formElement) {
              formRefs.current[taskId] = formElement;
            } else {
              delete formRefs.current[taskId]; // Cleanup when the component unmounts
            }
        };

        useEffect(() => {
            // set initial tasks that get displayed (state in database)
            const setInitialState = async () => {
                try {
                    setRecurringTasks(await apiService.get<Task[]>('/tasks?type="recurring"', token));
                } catch (error) {
                    console.error("An unexpected error occured while fetching tasks: ", error);
                }
            };
            setInitialState()
        }, [apiService, token])
        

        useEffect(() => {
            if (editingRecurringTasks && token != editingRecurringTasks){
                setBlockEdit(true)
            } else {
                setBlockEdit(false)
            }
        }, [token, editingRecurringTasks]) 
        

        const submitPendingDeletions = async () => {
            for (const deletedId of deletedIds) {
                if (!deletedId.startsWith("added")){
                    try {
                        await apiService.delete<Task>(`/tasks/${deletedId}`, token);
                    } catch (error) {
                        console.error("An unexpected error occured while deleting task: ", error);
                    }
                }
            }
        }

        const submitAll = async () => {
            for (const taskId in formRefs.current) {
                const formData = new FormData(formRefs.current[taskId]);
                const data = Object.fromEntries(formData.entries());
                if (taskId.startsWith("added")) {
                    try {
                        delete data["id"]
                        await apiService.post<Task>(`/tasks`, data, token);
                    } catch (error) {
                        console.error("An unexpected error occured while creating task: ", error);
                    }
                } else {
                    try {
                        await apiService.put<Task>(`/tasks/${taskId}`, data, token);
                    } catch (error) {
                        console.error("An unexpected error occured while updating task: ", error);
                    }
                }
            }
            submitPendingDeletions()
        }

        const addRecurringTask = async () => {
            setRecurringTasks([...recurringTasks, {
                id: `added${addedId}`, 
                name: "", 
                description: undefined,
                startDate: undefined,
                frequency: undefined,
                reminder: undefined,
                value: undefined,
            }])
            setAddedId(addedId + 1)
        }

        const deleteRecurringTask = (taskId: string) => {
            setDeletedIds([...deletedIds, taskId])
            setRecurringTasks(recurringTasks.filter(task => task.id != taskId))
        }

        {/* start - showcase functionality to be implemented in context */}
        const openEdit = () => {
            setEditingRecurringTasks(token)
        }
        const closeEdit = () => {
            deleteEditingRecurringTasks()
        }
        {/* end - showcase functionality to be implemented in context */}

        return (
            <>
            {/* start - showcase functionality to be implemented in context */}
            <CustomButton text={"Temp. Open"} type={"button"} onClick={openEdit} width={"5rem"}/>
            <CustomButton text={"Temp. Close"} type={"button"} onClick={closeEdit} width={"5rem"}/>
            {/* end - showcase functionality to be implemented in context */}
            <div className={className} style={{
                width: width, 
                height: height, 
                display: "flex", 
                flexDirection: "column",  
                overflow: "auto",
                ...style,
                }}>
                
                {/* overlay to block edit view (potentially later additional measures to block form editing and submitting) */}
                {
                    (blockEdit) && (
                        <div style={{position: "absolute", zIndex: "10", height: "100%", width: "100%", backgroundColor: "rgba(255, 255, 255, 0.5)"}}>
                            <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", fontSize: "2rem"}}>
                            <div>{`Someone is currently editing...`}</div>
                            </div>
                        </div>
                    )
                }
                <CustomButton text={"Update"} type={"button"} onClick={submitAll} width={"5rem"}/>
                {
                    recurringTasks.map((task) => (
                        <div key={task.id}>
                            <RecurringTask ref={(el) => setFormRef(el, task.id)} onSubmit={() => {}} className={taskClassName} style={taskStyle}
                            initialValues={{
                                "name": task.name as FormValue,
                                "description": task.description as FormValue,
                                "startDate": task.startDate?.toISOString().split('T')[0] as string,
                                "frequency": task.frequency as FormValue,
                                "reminder": task.reminder as FormValue,
                                "value": task.value as FormValue,
                                
                            }}
                            buttons={[{text: "Delete", type: "button", onClick: () => deleteRecurringTask(task.id), style: {width: "5rem"}}]}
                            />
                        </div>
                    ))
                }
                <CustomButton text={"Add"} type={"button"} onClick={addRecurringTask} width={"5rem"}/>
              </div>
            </>
        )
    }
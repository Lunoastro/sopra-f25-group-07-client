import CustomButton from "@/components/customButton";
import { FormHandle, FormValue } from "@/components/form";
import IconButton from "@/components/iconButton";
import TaskCard from "@/components/taskCard";
import { useApi } from "@/hooks/useApi";
import useLocalStorage from "@/hooks/useLocalStorage";
import AddButtonSVG from "@/svgs/pinboard_svg/add_button_svg";
import { Task } from "@/types/task";
import { CSSProperties, useEffect, useRef, useState } from "react";

export interface RecurringTaskOverviewProps {
  width?: string;
  height?: string;
  onSubmitAll: () => void;
  taskClassName?: string;
  taskStyle?: CSSProperties;
  className?: string;
  style?: CSSProperties;
}

// Important:
// Make sure to set editingRecurringTasks to the token of the user/session
// whenever RecurringTaskOverview gets displayed
// s.t. no other session/user can interfere
export const RecurringTaskOverview = ({
  width = "100%",
  height = "100%",
  onSubmitAll,
  taskClassName,
  taskStyle,
  className,
  style,
}: RecurringTaskOverviewProps) => {
  const apiService = useApi();
  const { value: token } = useLocalStorage<string>("token", "");
  const { value: editingRecurringTasks } = useLocalStorage<string>(
    "editingRecurringTasks",
    ""
  );
  const [recurringTasks, setRecurringTasks] = useState<Task[]>([]);
  const [blockEdit, setBlockEdit] = useState<boolean>(false);
  const [deletedIds, setDeletedIds] = useState<string[]>([]);
  const [addedId, setAddedId] = useState<number>(0);

  // keeps track of the forms currently in the overview in order to trigger their submit
  const formRefs = useRef<Record<string, HTMLFormElement | FormHandle>>({});
  const setFormRef = (formElement: HTMLFormElement | FormHandle | null, taskId: string) => {
    if (formElement) {
      formRefs.current[taskId] = formElement;
    } else {
      delete formRefs.current[taskId]; // Cleanup when the component unmounts
    }
  };
  
  const submitPendingDeletions = async () => {
    for (const deletedId of deletedIds) {
      if (deletedId && !String(deletedId).startsWith("added")) {
        try {
          await apiService.delete<Task>(`/tasks/${deletedId}`, token);
        } catch (error) {
          console.error(
            "An unexpected error occured while deleting task: ",
            error
          );
        }
      }
    }
  };

  const submitAll = async () => {
    const allFormErrors: Record<string, string>[] = [];
    for (const taskId in formRefs.current) {
      const formHandle = formRefs.current[taskId]
      const errors =  formHandle.validateAll()
      if (Object.keys(errors).length != 0) {
        allFormErrors.push(errors)
      }
    }
    if (allFormErrors.length == 0) {
      for (const taskId in formRefs.current) {
        const formHandle = formRefs.current[taskId]
        const formElement = formHandle.formElement;
        const formData = new FormData(formElement ?? undefined);
        const data = Object.fromEntries(formData.entries());
        if (taskId.startsWith("added")) {
          try {
            delete data["id"];
            await apiService.post<Task>(`/tasks`, data, token);
          } catch (error) {
            console.error(
              "An unexpected error occured while creating task: ",
              error
            );
          }
        } else {
          try {
            await apiService.put<Task>(`/tasks/${taskId}`, data, token);
          } catch (error) {
            console.error(
              "An unexpected error occured while updating task: ",
              error
            );
          }
        }
      }
      submitPendingDeletions(); 
      onSubmitAll();
    } else {
      alert("There are still invalid input fields. Please have a look at them again!")
    }
  };

  const addRecurringTask = async () => {
    setRecurringTasks([
      ...recurringTasks,
      {
        id: `added${addedId}`,
        name: "",
        description: undefined,
        // startDate: undefined,
        frequency: 7,
        daysVisible: 2,
        value: 10,
      },
    ]);
    setAddedId(addedId + 1);
  };

  const deleteRecurringTask = (taskId: string) => {
    setDeletedIds([...deletedIds, taskId]);
    delete formRefs.current[taskId]
    setRecurringTasks(recurringTasks.filter((task) => task.id != taskId));
  };

  useEffect(() => {
    // set initial tasks that get displayed (state in database)
    const setInitialState = async () => {
      try {
        const response = await apiService.get<Task[]>('/tasks?type=recurring', token)
        if (response) {
          setRecurringTasks(response)
        } else {
          setRecurringTasks([]);
        } 
      } catch (error) {
        console.error(
          "An unexpected error occured while fetching recurring tasks: ",
          error
        );
      }
    };
    setInitialState();
  }, [apiService, token]);

  useEffect(() => {
    if (editingRecurringTasks && token != editingRecurringTasks) {
      setBlockEdit(true);
    } else {
      setBlockEdit(false);
    }
  }, [token, editingRecurringTasks]);

  return (
    <div
      className={className}
      style={{
        width: width,
        height: height,
        display: "flex",
        flexDirection: "column",
        fontSize: "1.2rem",
        ...style,
      }}
    >
      {/* overlay to block edit view (potentially later additional measures to block form editing and submitting) */}
      {blockEdit && (
        <div
          style={{
            position: "absolute",
            zIndex: "10",
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              fontSize: "2rem",
            }}
          >
            <div>{`Someone is currently editing...`}</div>
          </div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          width: "100%",
          paddingRight: "5vw",
          paddingTop: "1.5vh",
        }}
      >
        <CustomButton
          text={"Save"}
          type={"button"}
          onClick={submitAll}
          width={"6rem"}
          backgroundColor="none"
        />
      </div>
      <div
        className={className}
        style={{
          width: width,
          height: height,
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
          ...style,
        }}
      >
        {recurringTasks.map((task) => (
          <div key={task.id} style={{ padding: "0 2rem" }}>
            <TaskCard
              type={"recurring"}
              ref={(el) => setFormRef(el, task.id)}
              onSubmit={async () => {}}
              className={taskClassName}
              style={taskStyle}
              initialValues={{
                name: task.name as FormValue,
                description: task.description as FormValue,
                // startDate: task.startDate
                //   ?.toISOString()
                //   .split("T")[0] as string,
                frequency: task.frequency as FormValue,
                daysVisible: task.daysVisible as FormValue,
                value: task.value as FormValue,
              }}
              editViewButtons={[
                {
                  text: "Delete",
                  type: "button",
                  onClick: () => deleteRecurringTask(task.id),
                  style: { width: "5rem", height: "2rem" },
                },
              ]}
              buttonAreaStyle={{ position: "relative", display: "flex", justifyContent: "end"}}
            />
          </div>
        ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", paddingTop: "1vh" }}
      >
        <IconButton
          iconElement={<AddButtonSVG width={"5rem"} />}
          colorOnHover={"#83cf5d"}
          onClick={addRecurringTask}
          width={"5rem"}
        />
      </div>
    </div>
  );
};


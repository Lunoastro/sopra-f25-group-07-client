import { CSSProperties, Ref, useEffect, useState } from "react";
import Form, { AnyFormField, FormValue } from "./form";
import { Button } from "./customButton";
import TaskCardSVG from "@/svgs/pinboard_svg/task_card_svg";
import EditButtonSVG from "@/svgs/pinboard_svg/edit_button_svg";
import IconButton from "./iconButton";

export interface TaskCardProps {
  type: "additional" | "recurring";
  onSubmit?: (data: Record<string, unknown>) => Promise<void>;
  startsAsView?: boolean;
  editVisible?: boolean;
  isEditMode?: boolean;
  ref?: Ref<HTMLFormElement>;
  initialValues?: Record<string, FormValue>;
  buttons?: Button[];
  editViewButtons?: Button[];
  buttonAreaStyle?: CSSProperties;
  backgroundColor?: string;
  className?: string;
  style?: CSSProperties;
}

const TaskCard = ({
  type,
  onSubmit,
  startsAsView = false,
  editVisible = false,
  isEditMode : isEditModeProp,
  ref,
  initialValues,
  buttons,
  editViewButtons,
  buttonAreaStyle,
  backgroundColor,
  className,
  style,
}: TaskCardProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(!startsAsView);
  
  useEffect(()=>{
    if (isEditModeProp) {
      setIsEdit(isEditModeProp)
    }
  }, [isEditModeProp])

  const recurringTaskFields: AnyFormField[] = [
    {
      label: "Task",
      labelInline: true,
      placeholder: "What needs to be done?",
      name: "name",
      type: "text",
      isRequired: true,
      fontSize: "1.2rem",
      height: "3rem",
      width: "100%",
    },
    {
      label: "Description",
      labelInline: true,
      name: "description",
      type: "textarea",
      fontSize: "1.1rem",
      width: "100%",
    },
    // {
    //   label: "Start Date",
    //   labelInline: true,
    //   name: "startDate",
    //   type: "date",
    //   min: "today",
    //   fontSize: "1.2rem",
    //   height: "3rem",
    //   width: "50%",
    //   style: { paddingRight: "1rem" },
    // },
    {
      label: "Frequency (in days)",
      labelInline: true,
      name: "frequency",
      type: "number",
      isRequired: true,
      min: 1,
      step: 1,
      fontSize: "1.2rem",
      height: "3rem",
      width: "40%",
      style: { paddingRight: "1rem" },
    },
    {
      label: "Days to complete",
      labelInline: true,
      name: "daysVisible",
      type: "number",
      min: 1,
      step: 1,
      fontSize: "1.2rem",
      height: "3rem",
      width: "40%",
      style: { paddingRight: "1rem" },
    },
    {
      label: "XP",
      labelInline: true,
      name: "value",
      type: "number",
      isRequired: true,
      min: 1,
      max: 500,
      step: 1,
      fontSize: "1.2rem",
      height: "3rem",
      width: "20%",
    },
  ];

  const additionalTaskFields: AnyFormField[] = [
    {
      label: "Task",
      labelInline: true,
      placeholder: "What needs to be done?",
      name: "name",
      type: "text",
      isRequired: true,
      fontSize: "1.2rem",
      height: "3rem",
      width: "100%",
    },
    {
      label: "Description",
      labelInline: true,
      name: "description",
      type: "textarea",
      fontSize: "1.1rem",
      width: "100%",
    },
    {
      label: "Deadline",
      labelInline: true,
      name: "deadline",
      type: "date",
      isRequired: true,
      min: "today",
      fontSize: "1.2rem",
      height: "3rem",
      width: "50%",
      style: { paddingRight: "1rem" },
    },
    {
      label: "XP",
      labelInline: true,
      name: "value",
      type: "number",
      isRequired: true,
      min: 1,
      max: 500,
      step: 1,
      fontSize: "1.2rem",
      height: "3rem",
      width: "50%",
      style: { paddingLeft: "1rem" },
    },
  ];

  const submitForm = async (data: Record<string, unknown>): Promise<void> => {
    if (onSubmit) {
      await onSubmit(data)
    }
    setIsEdit(false)
  }

  return (
    <div
      className={className}
      style={{ position: "relative", alignSelf: "start", ...style }}
    >
      {editVisible && !isEdit && (
        <div
          style={{
            position: "absolute",
            zIndex: 12,
            top: "4rem",
            right: "5rem",
            height: 0,
          }}
        >
          <IconButton
            iconElement={<EditButtonSVG />}
            onClick={() => setIsEdit(true)}
            width={"2.5rem"}
          />
        </div>
      )}
      <Form
        fields={
          type == "recurring" ? recurringTaskFields : additionalTaskFields
        }
        onSubmit={submitForm}
        ref={ref}
        isView={!isEdit}
        buttons={isEdit? editViewButtons : buttons}
        buttonAreaStyle={buttonAreaStyle}
        initialValues={initialValues}
        style={{ padding: "2rem", paddingTop: "6rem" }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
        }}
      >
        <TaskCardSVG backgroundColor={backgroundColor}/>
      </div>
    </div>
  );
};

export default TaskCard;

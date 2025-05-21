import { CSSProperties, Ref, useEffect, useState } from "react";
import Form, { AnyFormField, FormValue } from "./form";
import { Button } from "./customButton";
import TaskCardSVG from "@/svgs/pinboard_svg/task_card_svg";
import EditButtonSVG from "@/svgs/pinboard_svg/edit_button_svg";
import IconButton from "./iconButton";
import {
  isLessThan,
  isMax,
  isMin,
  isRequired,
  noWhiteSpaceString,
} from "@/utils/fieldValidation";

export interface TaskCardProps {
  type: "additional" | "recurring" | "google";
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
  inspectMode?: boolean;
}

const TaskCard = ({
  type,
  onSubmit,
  startsAsView = false,
  editVisible = false,
  isEditMode: isEditModeProp,
  ref,
  initialValues,
  buttons,
  editViewButtons,
  buttonAreaStyle,
  backgroundColor,
  className,
  style,
  inspectMode = false,
}: TaskCardProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(!startsAsView);

  // Track view vs edit mode
  useEffect(() => {
    if (isEditModeProp !== undefined) {
      setIsEdit(isEditModeProp);
    }
  }, [isEditModeProp]);

  const recurringTaskFields: AnyFormField[] = [
    {
      label: "Task",
      name: "name",
      type: "text",
      validationFuncs: [
        { func: isRequired, errorMessage: "Please enter a task name" },
        { func: noWhiteSpaceString },
      ],
      placeholder: "What needs to be done?",
      labelInline: true,
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
    //   validationFuncs: [
    //   {func: isRequired, errorMessage: "Please enter a task name"},
    //   {func: isMin, min: "today"},
    // ],
    // min: "today", // used for date picker restriction
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
      validationFuncs: [
        { func: isRequired, errorMessage: "Please enter the number of days" },
        { func: isMin, min: 1 },
      ],
      step: 1, // used for option to input via arrows
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
      validationFuncs: [
        { func: isMin, min: 1 },
        {
          func: isLessThan,
          comparisonValue: "frequency",
          errorMessage: "Needs to be less than frequency!",
        },
      ],
      step: 1, // used for option to input via arrows
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
      validationFuncs: [
        { func: isRequired, errorMessage: "Please enter the amount of XP" },
        { func: isMin, min: 1 },
        { func: isMax, max: 500 },
      ],
      step: 1, // used for option to input via arrows
      fontSize: "1.2rem",
      height: "3rem",
      width: "20%",
    },
  ];

  const recurringTaskFieldsInspectModes: AnyFormField[] = [
    {
      label: "Task",
      name: "name",
      type: "text",
      validationFuncs: [
        { func: isRequired, errorMessage: "Please enter a task name" },
        { func: noWhiteSpaceString },
      ],
      placeholder: "What needs to be done?",
      labelInline: true,
      fontSize: "1.2rem",
      height: "3rem",
      width: "100%",
    },
    {
      label: "Created By",
      name: "createdBy",
      type: "text",
      labelInline: true,
      fontSize: "1.2rem",
      height: "3rem",
      width: "30%",
    },
    {
      label: "Claimed By",
      name: "ClaimedBy",
      type: "text",
      labelInline: true,
      fontSize: "1.2rem",
      height: "3rem",
      width: "30%",
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
    //   validationFuncs: [
    //   {func: isRequired, errorMessage: "Please enter a task name"},
    //   {func: isMin, min: "today"},
    // ],
    // min: "today", // used for date picker restriction
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
      validationFuncs: [
        { func: isRequired, errorMessage: "Please enter the number of days" },
        { func: isMin, min: 1 },
      ],
      step: 1, // used for option to input via arrows
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
      validationFuncs: [
        { func: isMin, min: 1 },
        {
          func: isLessThan,
          comparisonValue: "frequency",
          errorMessage: "Needs to be less than frequency!",
        },
      ],
      step: 1, // used for option to input via arrows
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
      validationFuncs: [
        { func: isRequired, errorMessage: "Please enter the amount of XP" },
        { func: isMin, min: 1 },
        { func: isMax, max: 500 },
      ],
      step: 1, // used for option to input via arrows
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
      validationFuncs: [
        { func: isRequired, errorMessage: "Please enter a task name" },
        { func: noWhiteSpaceString },
      ],
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
      validationFuncs: [
        { func: isRequired, errorMessage: "Please enter a deadline" },
        { func: isMin, min: "today" },
      ],
      min: "today", // used for date picker restriction
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
      validationFuncs: [
        { func: isMin, min: 1 },
        { func: isRequired, errorMessage: "Please enter the amount of XP" },
        { func: isMax, max: 500 },
      ],
      step: 1, // used for option to input via arrows
      fontSize: "1.2rem",
      height: "3rem",
      width: "50%",
      style: { paddingLeft: "1rem" },
    },
  ];

  // Create additionalTaskFieldsInspectModes with Created By and Claimed By fields
  const additionalTaskFieldsInspectModes: AnyFormField[] = [
    {
      label: "Task",
      labelInline: true,
      placeholder: "What needs to be done?",
      name: "name",
      type: "text",
      validationFuncs: [
        { func: isRequired, errorMessage: "Please enter a task name" },
        { func: noWhiteSpaceString },
      ],
      fontSize: "1.2rem",
      height: "3rem",
      width: "100%",
    },
    {
      label: "Created By",
      name: "createdBy",
      type: "text",
      labelInline: true,
      fontSize: "1.2rem",
      height: "3rem",
      width: "30%",
    },
    {
      label: "Claimed By",
      name: "ClaimedBy",
      type: "text",
      labelInline: true,
      fontSize: "1.2rem",
      height: "3rem",
      width: "30%",
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
      validationFuncs: [
        { func: isRequired, errorMessage: "Please enter a deadline" },
        { func: isMin, min: "today" },
      ],
      min: "today", // used for date picker restriction
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
      validationFuncs: [
        { func: isMin, min: 1 },
        { func: isRequired, errorMessage: "Please enter the amount of XP" },
        { func: isMax, max: 500 },
      ],
      step: 1, // used for option to input via arrows
      fontSize: "1.2rem",
      height: "3rem",
      width: "50%",
      style: { paddingLeft: "1rem" },
    },
  ];

  // Google Calendar tasks fields
  const googleTaskFieldsInspectModes: AnyFormField[] = [
    {
      label: "Name",
      name: "name",
      type: "text",
      labelInline: true,
      fontSize: "1.2rem",
      height: "3rem",
      width: "100%",
    },
    {
      label: "Location",
      name: "location",
      type: "text",
      labelInline: true,
      fontSize: "1.2rem",
      height: "3rem",
      width: "100%",
    },
    {
      label: "Description",
      name: "description",
      type: "textarea",
      labelInline: true,
      fontSize: "1.1rem",
      width: "100%",
    },
    {
      label: "End Date",
      name: "endDate",
      type: "date",
      labelInline: true,
      fontSize: "1.2rem",
      height: "3rem",
      width: "50%",
    },
  ];

  const submitForm = async (data: Record<string, unknown>): Promise<void> => {
    if (onSubmit) {
      await onSubmit(data);
    }
    setIsEdit(false);
  };

  // Updated getFieldsToRender function to handle all task types with the same logic
  const getFieldsToRender = () => {
    if (type === "recurring") {
      // If we're viewing (not editing) an existing task, show the inspect fields
      // This ensures Created By and Claimed By are visible when viewing tasks
      return !isEdit || inspectMode
        ? recurringTaskFieldsInspectModes
        : recurringTaskFields;
    } else if (type === "additional") {
      // Same logic for additional tasks
      return !isEdit || inspectMode
        ? additionalTaskFieldsInspectModes
        : additionalTaskFields;
    } else if (type === "google") {
      // Google Calendar tasks are always in inspect mode (view only)
      return googleTaskFieldsInspectModes;
    }

    // Default fallback (should never happen given the type constraints)
    return additionalTaskFields;
  };

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
        fields={getFieldsToRender()}
        onSubmit={submitForm}
        ref={ref}
        isView={!isEdit}
        buttons={isEdit ? editViewButtons : buttons}
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
        <TaskCardSVG backgroundColor={backgroundColor} />
      </div>
    </div>
  );
};

export default TaskCard;

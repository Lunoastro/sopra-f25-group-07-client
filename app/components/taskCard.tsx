import { CSSProperties, Ref } from "react";
import Form, { AnyFormField, FormValue } from "./form";
import { Button } from "./customButton";
import TaskCardSVG from "@/svgs/pinboard_svg/task_card_svg";

export interface TaskCardProps {
    type: "additional" | "recurring";
    onSubmit?: (data: Record<string, unknown>) => Promise<void>;
    startsAsView?: boolean;
    ref?: Ref<HTMLFormElement>;
    initialValues?: Record<string, FormValue>
    buttons?: Button[];
    buttonAreaStyle?: CSSProperties;
    className?: string;
    style?: CSSProperties;
}

const TaskCard = (
    {
        type,
        onSubmit,
        startsAsView = false,
        ref,
        initialValues,
        buttons,
        buttonAreaStyle,
        className,
        style,
    }: TaskCardProps) => {

        const recurringTaskFields: AnyFormField[] = [
            {label: "Task", labelInline: true, name: "name", type: "text", fontSize: "1.2rem", height: "3rem", width:"100%"},
            {label: "Description", labelInline: true, name: "description", type: "textarea", fontSize: "1.2rem", width:"100%"},
            {label: "Start Date", labelInline: true, name: "startDate", type: "date", fontSize: "1.2rem", height: "3rem", width: "50%", style: {paddingRight: "1rem"}},
            {label: "Frequency", labelInline: true, name: "frequency", type: "number", fontSize: "1.2rem", height: "3rem", width: "50%", style: {paddingLeft: "1rem"}}, 
            {label: "Days to complete", labelInline: true, name: "daysVisible", type: "number", fontSize: "1.2rem", height: "3rem", width: "50%", style: {paddingRight: "1rem"}}, 
            {label: "XP", labelInline: true, name: "value", type: "number", fontSize: "1.2rem", height: "3rem", width: "50%", style: {paddingLeft: "1rem"}}, 
        ]

        const additionalTaskFields: AnyFormField[] = [
            {label: "Task", labelInline: true, name: "name", type: "text", fontSize: "1.2rem", height: "3rem", width:"100%"},
            {label: "Description", labelInline: true, name: "description", type: "textarea", fontSize: "1.2rem", width:"100%"},
            {label: "Deadline", labelInline: true, name: "deadline", type: "date", fontSize: "1.2rem", height: "3rem", width: "50%", style: {paddingRight: "1rem"}},
            {label: "XP", labelInline: true, name: "value", type: "number", fontSize: "1.2rem", height: "3rem", width: "50%", style: {paddingLeft: "1rem"}}, 
        ]

        return (
            <div className={className} style={{position:"relative", alignSelf: "start", ...style}}>
                <Form fields={(type == "recurring") ? recurringTaskFields : additionalTaskFields} onSubmit={onSubmit} ref={ref} isView={startsAsView} buttons={buttons} buttonAreaStyle={buttonAreaStyle} initialValues={initialValues} style={{padding: "2rem", paddingTop:"6rem"}}/>
                <div style={{position: "absolute", top: 0, zIndex: -1, width: "100%", height: "100%"}}>
                    <TaskCardSVG />
                </div>
            </div>
        )
    }

export default TaskCard;
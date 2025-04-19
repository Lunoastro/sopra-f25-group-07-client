import { CSSProperties, Ref } from "react";
import Form, { AnyFormField, FormValue } from "./form";
import { Button } from "./customButton";
import TaskCard from "@/svgs/pinboard_svg/task_card";

export interface RecurringTaskProps {
    onSubmit: () => void;
    ref?: Ref<HTMLFormElement>;
    initialValues?: Record<string, FormValue>
    buttons?: Button[];
    buttonAreaStyle?: CSSProperties;
    className?: string;
    style?: CSSProperties;
}

export const RecurringTask = (
    {
        onSubmit,
        ref,
        initialValues,
        buttons,
        buttonAreaStyle,
        className,
        style,
    }: RecurringTaskProps) => {

        const fields: AnyFormField[] = [
            {label: "Task", labelInline: true, name: "name", type: "text", fontSize: "1.2rem", height: "3rem", width:"100%"},
            {label: "Description", labelInline: true, name: "description", type: "textarea", fontSize: "1.2rem", width:"100%"},
            {label: "Start Date", labelInline: true, name: "startDate", type: "date", fontSize: "1.2rem", height: "3rem", width: "50%", style: {paddingRight: "1rem"}},
            {label: "Frequency", labelInline: true, name: "frequency", type: "number", fontSize: "1.2rem", height: "3rem", width: "50%", style: {paddingLeft: "1rem"}}, 
            {label: "Days to complete", labelInline: true, name: "daysVisible", type: "number", fontSize: "1.2rem", height: "3rem", width: "50%", style: {paddingRight: "1rem"}}, 
            {label: "XP", labelInline: true, name: "value", type: "number", fontSize: "1.2rem", height: "3rem", width: "50%", style: {paddingLeft: "1rem"}}, 
        ]

        return (
            <div className={className} style={{position:"relative", ...style}}>
                <Form fields={fields} onSubmit={onSubmit} ref={ref} buttons={buttons} buttonAreaStyle={buttonAreaStyle} initialValues={initialValues} style={{padding: "2rem", paddingTop:"4.5rem"}}/>
                <div style={{position: "absolute", top: 0, zIndex: -1, width: "100%", height: "100%"}}>
                    <TaskCard />
                </div>
            </div>
        )
    }
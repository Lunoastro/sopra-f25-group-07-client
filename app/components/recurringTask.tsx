import { CSSProperties, Ref } from "react";
import Form, { AnyFormField, FormValue } from "./form";
import { Button } from "./customButton";

export interface RecurringTaskProps {
    onSubmit: () => void;
    ref?: Ref<HTMLFormElement>;
    initialValues?: Record<string, FormValue>
    buttons?: Button[];
    className?: string;
    style?: CSSProperties;
}

export const RecurringTask = (
    {
        onSubmit,
        ref,
        initialValues,
        buttons,
        className,
        style,
    }: RecurringTaskProps) => {

        const fields: AnyFormField[] = [
            {label: "Task", name: "name", type: "text", height: "3rem"},
            {label: "Description", name: "description", type: "textarea"},
            {label: "Start Date", name: "startDate", type: "date", height: "3rem"},
            {label: "Frequency", name: "frequency", type: "number", height: "3rem"}, 
            {label: "Reminder", name: "reminder", type: "number", height: "3rem"}, 
            {label: "XP", name: "value", type: "number", height: "3rem"}, 
        ]

        return (
            <div className={className} style={style}>
                <Form fields={fields} onSubmit={onSubmit} ref={ref} buttons={buttons} initialValues={initialValues} />
            </div>
        )
    }
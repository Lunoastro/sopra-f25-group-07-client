import React, { ChangeEvent, CSSProperties, FormEvent, Ref, useState } from "react";
import TextInput, { TextFormField } from "./textInput";
import TextAreaInput, { TextAreaFormField } from "./textAreaInput";
import ButtonArea from "./buttonArea";
import { Button } from "./customButton";
import NumberInput, { NumberFormField } from "./numberInput";
import DateInput, { DateFormField } from "./dateInput";

export type FormValue = string | number | readonly string[] | undefined;
export type AnyFormField = TextFormField | TextAreaFormField | NumberFormField | DateFormField;

// structure of the form field
export interface FormField {
  label: string;
  name: string;
  labelInline?: boolean;
  width?: string;
  height?: string;
  fontSize?: string;
  className?: string;
  style?: CSSProperties;
}

// properties the form will take
interface FormProps {
  fields: AnyFormField[];
  onSubmit: (data: Record<string, unknown>) => void;
  ref?: Ref<HTMLFormElement>;
  initialValues?: Record<string, FormValue>;
  buttons?: Button[];
  className?: string;
  style?: CSSProperties;
  buttonAreaClassName?: string;
  buttonAreaStyle?: CSSProperties;
}

export const Form = ({
  fields,
  onSubmit,
  ref,
  initialValues,
  buttons = [],
  className,
  style,
  buttonAreaClassName,
  buttonAreaStyle,
} : FormProps) => {
  const initialFormData: Record<string, FormValue> = fields.reduce(
    (result: Record<string, FormValue>, field) => {
      result[field.name] = initialValues && initialValues[field.name] !== undefined ? initialValues[field.name] : "";
      return result;
    },
    {}
  );

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = <T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>( 
    e: ChangeEvent<T>
  ) : void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialFormData); // reset form
  };

  return (
    <div className={className} style={style}>
      <form onSubmit={handleSubmit} ref={ref}>
        <div style={{display: "flex", flexWrap: "wrap"}}>
          {fields.map((field) => (
            <div key={field.name} style={{ display: "flex", flexDirection: field.labelInline ? "row": "column", width: field.width, margin: field.labelInline ? "1rem 0": "",...field.style}}>
              <label
                htmlFor={field.name}
                style={{
                  display: "flex",
                  whiteSpace: "nowrap",
                  alignItems: "center",
                  marginBottom: field.labelInline ? "" : "0.5rem",
                  marginRight: field.labelInline ? "0.5rem" : "",
                }}
              >
                {field.label}
              </label>

              {field.type === "textarea" ? (
                <TextAreaInput 
                field={field as TextAreaFormField} 
                formData={formData} 
                onChange={handleChange}
                />
              ) : field.type === "text" ? (
                <TextInput 
                field={field as TextFormField} 
                formData={formData} 
                onChange={handleChange}
                />
              ) : field.type === "number" ? (
                <NumberInput 
                field={field as NumberFormField} 
                formData={formData} 
                onChange={handleChange}
                />
              ) : field.type === "date" ? (
                <DateInput 
                field={field as DateFormField} 
                formData={formData} 
                onChange={handleChange}
                />
              ) : null}
            </div>
          ))}
        </div>
        {/* Use CustomButton with the text passed as a prop */}
        <ButtonArea buttons={buttons} className={buttonAreaClassName} style={buttonAreaStyle} /> 
        {/* className="button-hover-effect" fillColor={primaryButtonFill} */}
      </form>
    </div>
  );
};

export default Form;

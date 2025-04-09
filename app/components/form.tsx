import React, { ChangeEvent, CSSProperties, FormEvent, useState } from "react";
import TextInput, { TextFormField } from "./textInput";
import TextAreaInput, { TextAreaFormField } from "./textAreaInput";
import ButtonArea, { Button } from "./buttonArea";

export type FormValue = string | number | readonly string[] | undefined;
export type AnyFormField = TextFormField | TextAreaFormField;

// structure of the form field
export interface FormField {
  label: string;
  name: string;
  width?: string;
}

// properties the form will take
interface FormProps {
  fields: AnyFormField[];
  onSubmit: (data: Record<string, unknown>) => void;
  buttons: Button[];
  alignButtons?: "center" | "right" | "left";
  buttonAreaStyling?: CSSProperties;
}

export const Form = ({
  fields,
  onSubmit,
  buttons,
  alignButtons = "center",
  buttonAreaStyling
} : FormProps) => {
  const initialFormData: Record<string, FormValue> = fields.reduce(
    (result: Record<string, FormValue>, field) => {
      result[field.name] = "";
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
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} style={{ marginBottom: "2rem" }}>
          <label
            htmlFor={field.name}
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontSize: "1.3rem",
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
          ) : null}
        </div>
      ))}

      {/* Use CustomButton with the text passed as a prop */}
      <ButtonArea buttons={buttons} align={alignButtons} buttonAreaStyle={buttonAreaStyling}/>
    </form>
  );
};

export default Form;

import React, { ChangeEvent, FormEvent, useState } from "react";
import CustomButton from "@/svgs/button_svg";
import TextInput from "./textInput";
import TextAreaInput from "./textareaInput";

export type FormValue = string | number | readonly string[] | undefined;

// structure of the form field
export interface FormField {
  label: string;
  name: string;
  type: "text" | "textarea";
}

export interface TextFormField extends FormField {
  type: "text"
}

// properties the form will take
interface FormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, unknown>) => void;
  submitButtonName: string;
}

export const Form: React.FC<FormProps> = ({
  fields,
  onSubmit,
  submitButtonName,
}) => {
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
            {field.label}:
          </label>

          {field.type === "textarea" ? (
            <TextAreaInput 
            field={field as TextFormField} 
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "7rem",
        }}
      >
        <CustomButton type="submit">{submitButtonName}</CustomButton>
      </div>
    </form>
  );
};

export default Form;

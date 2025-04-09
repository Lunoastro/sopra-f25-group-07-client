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
  height?: string;
  className?: string;
  style?: CSSProperties;
}

// properties the form will take
interface FormProps {
  fields: AnyFormField[];
  onSubmit: (data: Record<string, unknown>) => void;
  buttons: Button[];
  className?: string;
  style?: CSSProperties;
  buttonAreaClassName?: string;
  buttonAreaStyle?: CSSProperties;
}

export const Form = ({
  fields,
  onSubmit,
  buttons,
  className,
  style,
  buttonAreaClassName,
  buttonAreaStyle,
  //primaryButtonFill = "#b8f09c"
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
    <div className={className} style={style}>
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
        <ButtonArea buttons={buttons} className={buttonAreaClassName} style={buttonAreaStyle} /> 
        {/* className="button-hover-effect" fillColor={primaryButtonFill} */}
      </form>
    </div>
  );
};

export default Form;

"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";

type FormValue = string | number | readonly string[] | undefined;

export interface FormField {
  label: string;
  name: string;
  type: "text" | "textarea";
}

interface FormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, unknown>) => void;
  style?: React.CSSProperties;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  buttonText?: string; // Added buttonText property
  submitButtonName: string;
  labelStyle?: React.CSSProperties;
}

export const Form: React.FC<FormProps> = ({
  fields,
  onSubmit,
  submitButtonName,
  labelStyle, // Destructure labelStyle
}) => {
  const initialFormData: Record<string, FormValue> = fields.reduce(
    (result: Record<string, FormValue>, field) => {
      result[field.name] = "";
      return result;
    },
    {}
  );

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        <div key={field.name}>
          <label htmlFor={field.name} style={labelStyle}>
            {field.label}:
          </label>
          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              style={{
                fontFamily: "'Architects Daughter', Arial, sans-serif",
                fontSize: "16px",
                textAlign: "center",
                border: "none",
                outline: "none",
                width: "100%",
                height: "100%",
                background: "transparent",
              }}
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              style={{
                fontFamily: "'Architects Daughter', Arial, sans-serif",
                fontSize: "16px",
                textAlign: "center",
                border: "none",
                outline: "none",
                width: "100%",
                height: "100%",
                background: "transparent",
              }}
            />
          )}
        </div>
      ))}
      {submitButtonName && <button type="submit">{submitButtonName}</button>}
    </form>
  );
};

export default Form;

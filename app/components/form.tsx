"use client";

import React, { ChangeEvent, FormEvent, useState} from "react";

type FormValue = string | number | readonly string[] | undefined

export interface FormField {
  label: string;
  name: string;
  type: 'text' | 'textarea';
}

interface FormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, unknown>) => void;
  submitButtonName: string;
}


export const Form: React.FC<FormProps>= ({ fields, onSubmit, submitButtonName}) => {
  
  
  const initialFormData: Record<string, FormValue> = fields.reduce((result: Record<string, FormValue>, field) => {
    result[field.name] = '';
    return result;
  }, {});

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
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
          <label htmlFor={field.name}>{field.label}:</label>
          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              value={formData[field.name]}
              onChange={handleChange}
            />
          )}
        </div>
      ))}
      <button type="submit">{submitButtonName}</button>
    </form>
  );
};

export default Form;
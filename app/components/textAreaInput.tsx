import React, { ChangeEvent } from 'react';
import { FormValue, FormField} from './form';

export interface TextAreaFormField extends FormField {
    type: "textarea"
    placeholder?: string
  }

export interface TextAreaInputProps {
    field: TextAreaFormField;
    formData: Record<string, FormValue>;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextAreaInput = ({
    field,
    formData,
    onChange,
}: TextAreaInputProps)  => {
    return (
        <textarea
                      name={field.name}
                      id={field.name}
                      value={formData[field.name]}
                      placeholder={field.placeholder}
                      onChange={onChange}
                      style={{
                        width: "300px",
                        height: "50px",
                        padding: "1rem",
                        fontSize: "1rem",
                      }}
                    />
    );
};

export default TextAreaInput;
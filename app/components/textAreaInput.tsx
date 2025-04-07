import React, { ChangeEvent } from 'react';
import { FormValue, TextAreaFormField } from './form';

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
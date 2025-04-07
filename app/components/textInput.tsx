import React, { ChangeEvent } from 'react';
import { FormValue, TextFormField } from './form';
import InputBox from '@/svgs/input_box_svg';

export interface TextInputProps {
    field: TextFormField;
    formData: Record<string, FormValue>;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({
    field,
    formData,
    onChange,
}: TextInputProps)  => {
    return (
        <div
              style={{
                position: "relative",
                width: "360px", // Match SVG width
                height: "51px", // Match SVG height
                borderRadius: "10px", // Match SVG border radius
                outline: "none", // Ensure no outline on input
              }}
            >
              {/* Transparent input box */}
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                value={formData[field.name]}
                onChange={onChange}
                style={{
                  position: "absolute",
                  zIndex: 1,
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  padding: "0 1rem", // Match inner space with SVG
                  border: "none",
                  backgroundColor: "transparent",
                  fontSize: "1.5rem",
                  fontFamily: "'Architects Daughter', Arial, sans-serif",
                  boxSizing: "border-box",
                  outline: "none", // Remove default input highlight
                }}
              />

              {/* Decorative SVG */}
              <div
                style={{
                  position: "absolute",
                  zIndex: 0,
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none", // Ensure SVG doesn't interfere with input interaction
                }}
              >
                <InputBox width={380} height={50} />
              </div>
            </div>
    );
};

export default TextInput;
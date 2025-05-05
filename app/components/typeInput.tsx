import React, { ChangeEvent, CSSProperties } from 'react';
import { FormField, FormValue } from './form';
import InputBoxSVG from '@/svgs/input_box_svg';
import { dateTomorrowFormatted } from './dateInput';

export interface TypeInputProps {
    field: FormField;
    formData: Record<string, FormValue>;
    formErrors: Record<string, string>;
    touched: Record<string, boolean>;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    isView: boolean;
    className?: string;
    style?: CSSProperties;
}

export const TypeInput = ({
    field,
    formData,
    formErrors,
    touched,
    onChange,
    isView,
    className,
    style,
}: TypeInputProps)  => {
    return (
        <div style={{width: "100%", height: "100%"}}>
        <div
              className={className}
              style={{
                position: "relative",
                width: "100%",
                height: field.height ?? `calc(${field.width} / 7.4)`, // Keeps ratio of div at the ratio of svg
                outline: "none", // Ensure no outline on input
                ...style
              }}
            >
              {/* Transparent input box */}
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                value={formData[field.name]}
                onChange={onChange}
                disabled={isView}
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
                  fontSize: field.fontSize,
                  fontFamily: "'Architects Daughter', Arial, sans-serif",
                  boxSizing: "border-box",
                  outline: "none", // Remove default input highlight
                }}
                {... (field.placeholder && { placeholder: field.placeholder })}
                {... (field.min && {min : field.min == "today" ? dateTomorrowFormatted(): field.min})}
                {... (field.step && {step : field.step})}
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
                <InputBoxSVG borderColor={touched[field.name] && formErrors?.[field.name] ? "red" : "black"}/>
              </div>
        </div>
        <div style={{minHeight: "1.5rem"}}>
            {touched[field.name] && formErrors?.[field.name] && <p style={{ color: 'red' }}>{formErrors?.[field.name]}</p>}
        </div>
        </div>
    );
};

export default TypeInput;
import { ChangeEvent, CSSProperties } from "react";
import { FormField, FormValue } from "./form";
import InputBoxSVG from "@/svgs/input_box_svg";

export interface DateFormField extends FormField {
  type: "date"
}

export interface DateInputProps {
    field: DateFormField;
    formData: Record<string, FormValue>;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    style?: CSSProperties;
}

export const DateInput = ({
    field,
    formData,
    onChange,
    className,
    style,
}: DateInputProps)  => {
    return (
        <div
              className={className}
              style={{
                position: "relative",
                width: field.width ?? "100%",
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
                <InputBoxSVG/>
              </div>
            </div>
    );
};

export default DateInput;
import { ChangeEvent, CSSProperties } from "react";
import { FormField, FormValue } from "./form";
import InputBoxSVG from "@/svgs/input_box_svg";

export interface DateFormField extends FormField {
  type: "date";
  min?: number | "today";
}

export interface DateInputProps {
    field: DateFormField;
    formData: Record<string, FormValue>;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    isView: boolean;
    className?: string;
    style?: CSSProperties;
}

export const DateInput = ({
    field,
    formData,
    onChange,
    isView,
    className,
    style,
}: DateInputProps)  => {

    const dateTodayFormatted = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    return (
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
                required={field.isRequired}
                min={field.min == "today" ? dateTodayFormatted(): field.min}
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
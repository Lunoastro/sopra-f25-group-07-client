import React, { ChangeEvent, CSSProperties } from 'react';
import { FormValue, FormField} from './form';
import InputBoxSVG from '@/svgs/input_box_svg';

export interface SelectFormField extends FormField {
    type: "select";
    options: SelectOption[];
  }

export interface SelectOption {
    value: string;
    displayedAs: string;
    inUse?: boolean;
    style?: CSSProperties;
}

export interface SelectInputProps {
    field: SelectFormField;
    formData: Record<string, FormValue>;
    formErrors: Record<string, string>;
    touched: Record<string, boolean>;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    isView: boolean;
    formId: string;
    className?: string;
    style?: CSSProperties;
}

export const SelectInput = ({
    field,
    formData,
    formErrors,
    touched,
    onChange,
    isView,
    formId,
    className,
    style
}: SelectInputProps)  => {

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
                <select
                  name={field.name}
                  id={field.name}
                  form={formId}
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
                    opacity: 0.8,
                    fontSize: field.fontSize,
                    fontFamily: "'Architects Daughter', Arial, sans-serif",
                    boxSizing: "border-box",
                    outline: "none", // Remove default input highlight
                  }}
                >
                    {field.options.map((option) => (
                        option.inUse ? (
                                <option key={option.value} value={option.value} disabled>
                                    {option.displayedAs}
                                </option>
                            ) : (
                                <option key={option.value} value={option.value} style={option.style}>
                                    {option.displayedAs}
                                </option>
                            )
                    ))}
                </select>
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

export default SelectInput;
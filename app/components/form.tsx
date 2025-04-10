import React, { ChangeEvent, FormEvent, useState } from "react";
import InputBox from "@/svgs/input_box_svg";
import CustomButton from "@/svgs/button_svg";

type FormValue = string | number | readonly string[] | undefined;

// structure of the form field
export interface FormField {
  label: string;
  name: string;
  type: "text" | "textarea" | "password";
}

// properties the form will take
interface FormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, unknown>) => void;
  submitButtonName: string;
  secondaryButtonName?: { string: string; onClick: () => void };
  primaryButtonStyle?: React.CSSProperties;
  primaryButtonFill?: string;
}

export const Form: React.FC<FormProps> = ({
  fields,
  onSubmit,
  submitButtonName,
  secondaryButtonName,
  primaryButtonFill = "#b8f09c",
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
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "380px", margin: "0 auto" }}
    >
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
            {field.label}:
          </label>

          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              id={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              style={{
                width: "300px",
                height: "50px",
                padding: "1rem",
                fontSize: "1.2rem",
                fontFamily: "'Architects Daughter', Arial, sans-serif",
              }}
            />
          ) : (
            <div
              style={{
                position: "relative",
                width: "380px", // Match SVG width
                height: "54px", // Match SVG height
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
                onChange={handleChange}
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
                <InputBox width="380px" height="51px" />
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Use CustomButton with the text passed as a prop */}
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Always center the inner group
          marginTop: "7rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8rem",
            justifyContent: "center", // Center the buttons
          }}
        >
          {secondaryButtonName && (
            <CustomButton type="button" onClick={secondaryButtonName.onClick}>
              {secondaryButtonName.string}
            </CustomButton>
          )}
          <CustomButton
            className="button-hover-effect"
            type="submit"
            fillColor={primaryButtonFill}
          >
            {submitButtonName}
          </CustomButton>
        </div>
      </div>
    </form>
  );
};

export default Form;

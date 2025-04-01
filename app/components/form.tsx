import React, {
  ChangeEvent,
  FormEvent,
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

type FormValue = string | number | readonly string[] | undefined;

export interface FormField {
  label: string;
  name: string;
  type: "text" | "textarea";
}

// Add this interface for the form handle
export interface FormHandle {
  submitForm: () => void;
}

interface FormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, unknown>) => void;
  style?: React.CSSProperties;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  buttonText?: string;
  submitButtonName?: string; // Make optional
  labelStyle?: React.CSSProperties;
}

export const Form = forwardRef<FormHandle, FormProps>(
  ({ fields, onSubmit, submitButtonName, labelStyle }, ref) => {
    const initialFormData: Record<string, FormValue> = fields.reduce(
      (result: Record<string, FormValue>, field) => {
        result[field.name] = "";
        return result;
      },
      {}
    );

    const [formData, setFormData] = useState(initialFormData);
    const formRef = useRef<HTMLFormElement>(null);

    // Expose methods to parent component
    useImperativeHandle(ref, () => ({
      submitForm: () => {
        if (formRef.current) {
          const event = new Event("submit", {
            cancelable: true,
            bubbles: true,
          });
          formRef.current.dispatchEvent(event);
        }
      },
    }));

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
      <form onSubmit={handleSubmit} ref={formRef}>
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
  }
);

export default Form;

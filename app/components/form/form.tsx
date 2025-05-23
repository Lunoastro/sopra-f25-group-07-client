import React, {
  ChangeEvent,
  CSSProperties,
  FormEvent,
  Ref,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import TextAreaInput, { TextAreaFormField } from "./textAreaInput";
import ButtonArea from "./buttonArea";
import { Button } from "../customButton";
import TypeInput from "./typeInput";
import { ValidationFunc } from "@/utils/fieldValidation";
import SelectInput, { SelectFormField } from "./selectInput";

export interface FormHandle {
  formElement: HTMLFormElement | null;
  errors: Record<string, string>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  validateAll: () => void;
}

export type FormValue = string | number | readonly string[] | undefined;
export type AnyFormField = FormField | TextAreaFormField | SelectFormField;

// structure of the form field
export interface FormField {
  type: string;
  label: string;
  name: string;
  readOnly?: boolean;
  validationFuncs?: ValidationFunc[];
  placeholder?: string;
  min?: number | "today";
  step?: number;
  labelInline?: boolean;
  labelFontSize?: string;
  fontSize?: string;
  width?: string;
  height?: string;
  className?: string;
  style?: CSSProperties;
}

// properties the form will take
interface FormProps {
  fields: AnyFormField[];
  onSubmit?: (data: Record<string, unknown>) => void;
  isView?: boolean;
  ref?: Ref<HTMLFormElement>;
  formId?: string;
  initialValues?: Record<string, FormValue>;
  initialFormErrors?: Record<string, string>;
  initialTouched?: Record<string, boolean>;
  buttons?: Button[];
  className?: string;
  style?: CSSProperties;
  buttonAreaClassName?: string;
  buttonAreaStyle?: CSSProperties;
}

export const Form = ({
  fields,
  onSubmit,
  isView = false,
  ref,
  formId,
  initialValues,
  initialFormErrors: initialFormErrorsProp,
  initialTouched: initialTouchedProp,
  buttons = [],
  className,
  style,
  buttonAreaClassName,
  buttonAreaStyle,
}: FormProps) => {
  const initialFormDataAdapting = useMemo(() => {
    return fields.reduce((result: Record<string, FormValue>, field) => {
      result[field.name] =
        initialValues && initialValues[field.name] !== undefined
          ? initialValues[field.name]
          : "";
      return result;
    }, {});
  }, [fields, initialValues]);

  const initialFormDataStabel = useMemo(() => {
    return fields.reduce((result: Record<string, FormValue>, field) => {
      result[field.name] =
        initialValues && initialValues[field.name] !== undefined
          ? initialValues[field.name]
          : "";
      return result;
    }, {});
  }, [fields, initialValues]);

  const initialFormErrors = useMemo(() => {
    return initialFormErrorsProp ?? {};
  }, [initialFormErrorsProp]);

  const initialTouched = useMemo(() => {
    return initialTouchedProp ?? {};
  }, [initialTouchedProp]);

  const validationRules = useMemo(() => {
    return fields.reduce((result: Record<string, ValidationFunc[]>, field) => {
      if (field.validationFuncs) {
        result[field.name] = field.validationFuncs;
      }
      return result;
    }, {});
  }, [fields]);

  const formElementRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<Record<string, FormValue>>(
    isView ? initialFormDataAdapting : initialFormDataStabel
  );
  const [formErrors, setFormErrors] =
    useState<Record<string, string>>(initialFormErrors);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [firstInteractionHappened, setfirstInteractionHappened] =
    useState<boolean>(false);

  const handleChange = <
    T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >(
    e: ChangeEvent<T>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setTouched({ ...touched, [name]: true });
    if (touched[name]) {
      setFormErrors(validate({ ...formData, [name]: value }));
    }
    setfirstInteractionHappened(true);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      setFormErrors(validate(formData));
      setTouched(
        fields.reduce((result: Record<string, boolean>, field) => {
          if (field.validationFuncs) {
            result[field.name] = true;
          }
          return result;
        }, {})
      );
      if (Object.keys(validate(formData)).length === 0) {
        setTouched({});
        setfirstInteractionHappened(false);
        onSubmit(formData);
      } else {
        alert(
          "Please have a look at form errors before trying to submit again!"
        );
      }
    } else {
      console.error("onSubmit not implemented");
    }
  };

  const validate = useCallback(
    (currentValues: Record<string, FormValue>) => {
      const newErrors: Record<string, string> = {};
      for (const key in currentValues) {
        if (
          validationRules.hasOwnProperty(key) &&
          Array.isArray(validationRules[key])
        ) {
          let validationError = "";
          for (const validation of validationRules[key]) {
            const { func, errorMessage, ...additionalProps } = validation;
            if (additionalProps.comparisonValue) {
              additionalProps.comparisonValue =
                formData[additionalProps.comparisonValue];
            }
            const error = func(
              currentValues[key],
              key,
              errorMessage,
              additionalProps
            );
            if (error) {
              validationError = error;
              break;
            }
          }
          if (validationError) {
            newErrors[key] = validationError;
          }
        }
      }
      return newErrors;
    },
    [validationRules, formData]
  );

  const submissionAllowed = useMemo(() => {
    if (!firstInteractionHappened && validate(formData)) {
      return false;
    }
    return Object.keys(formErrors).length === 0;
  }, [formErrors, firstInteractionHappened, formData, validate]);

  useEffect(() => {
    if (firstInteractionHappened) {
      setFormErrors(validate(formData));
    }
  }, [formData, validate, firstInteractionHappened, setFormErrors]);

  const validateAll = useCallback(() => {
    const errors = validate(formData);
    setFormErrors(errors);
    setTouched(
      fields.reduce((result: Record<string, boolean>, field) => {
        if (field.validationFuncs) {
          result[field.name] = true;
        }
        return result;
      }, {})
    );
    return errors;
  }, [fields, formData, validate]);

  useEffect(() => {
    if (ref) {
      const handleValue: FormHandle = {
        formElement: formElementRef.current,
        errors: formErrors,
        setErrors: setFormErrors,
        validateAll: validateAll,
      };

      // Note: any other type a ref can have is not handled yet!
      if (typeof ref === "function") {
        (ref as (instance: FormHandle | null) => void)(handleValue);
      }
    }
  }, [ref, formElementRef, formErrors, formData, validateAll]);

  useEffect(() => {
    if (isView) {
      setFormData(initialFormDataAdapting);
    }
  }, [initialFormDataAdapting, initialValues, isView]);

  useEffect(() => {
    setFormErrors(initialFormErrors);
  }, [initialFormErrors]);

  useEffect(() => {
    setTouched(initialTouched);
  }, [initialTouched]);

  return (
    <div className={className} style={style}>
      <form onSubmit={handleSubmit} ref={formElementRef}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {fields.map((field) => (
            <div
              key={field.name}
              style={{
                display: "flex",
                flexDirection: field.labelInline ? "row" : "column",
                width: field.width,
                margin: field.labelInline ? "1rem 0" : "",
                ...field.style,
              }}
            >
              <label
                htmlFor={field.name}
                style={{
                  display: "flex",
                  whiteSpace: "nowrap",
                  alignItems: "center",
                  marginBottom: field.labelInline ? "1.5rem" : "0.5rem",
                  marginRight: field.labelInline ? "0.5rem" : "",
                  fontSize: field.labelFontSize,
                }}
              >
                {field.label}
              </label>

              {field.type === "textarea" ? (
                <TextAreaInput
                  field={field as TextAreaFormField}
                  formData={formData}
                  formErrors={formErrors}
                  touched={touched}
                  onChange={handleChange}
                  isView={isView}
                />
              ) : field.type === "select" ? (
                <SelectInput
                  field={field as SelectFormField}
                  formData={formData}
                  formErrors={formErrors}
                  touched={touched}
                  onChange={handleChange}
                  isView={isView}
                  formId={formId ?? ""}
                />
              ) : (
                <TypeInput
                  field={field as AnyFormField}
                  formData={formData}
                  formErrors={formErrors}
                  touched={touched}
                  onChange={handleChange}
                  isView={isView}
                />
              )}
            </div>
          ))}
        </div>
        {/* Use CustomButton with the text passed as a prop */}
        <ButtonArea
          buttons={buttons}
          className={buttonAreaClassName}
          submissionAllowed={submissionAllowed}
          style={buttonAreaStyle}
        />
      </form>
    </div>
  );
};

export default Form;

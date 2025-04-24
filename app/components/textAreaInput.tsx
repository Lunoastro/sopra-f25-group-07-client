import React, { ChangeEvent } from 'react';
import { FormValue, FormField} from './form';
import InputBoxSVG from '@/svgs/input_box_svg';

export interface TextAreaFormField extends FormField {
    type: "textarea"
    placeholder?: string
  }

export interface TextAreaInputProps {
    field: TextAreaFormField;
    formData: Record<string, FormValue>;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    isView: boolean;
}

export const TextAreaInput = ({
    field,
    formData,
    onChange,
    isView,
}: TextAreaInputProps)  => {

    return (
        <div style={{position: "relative", resize: "both", overflow: "hidden", boxSizing: "border-box", border: "none", width: "100%", maxHeight: "10rem"}}>
          <div style={{width: "100%", height: "100%", padding: "1rem", boxSizing: "border-box",}}>
          <textarea
                        name={field.name}
                        id={field.name}
                        value={formData[field.name]}
                        placeholder={field.placeholder}
                        onChange={onChange}
                        disabled={isView}
                        required={field.isRequired}
                        onFocus={(e) => (e.target.style.outline = 'none')}
                        style={{
                          width: "100%",
                          height: "100%",
                          fontSize: field.fontSize,
                          fontFamily: "'Architects Daughter', Arial, sans-serif",
                          boxSizing: "border-box",
                          resize: "none",
                          border: "none",
                          padding: 0
                        }}
                      />
          </div>
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
                  boxSizing: "border-box",
                }}
              >
              <InputBoxSVG/>
          </div>
      </div>
    );
};

export default TextAreaInput;
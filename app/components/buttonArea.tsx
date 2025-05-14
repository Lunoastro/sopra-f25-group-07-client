import React, { CSSProperties } from "react";
import CustomButton, { Button } from "@/components/customButton";

export interface ButtonAreaProps {
  buttons: Button[];
  submissionAllowed?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const ButtonArea = ({ buttons, submissionAllowed=true, className, style }: ButtonAreaProps) => {
  return (
    <div className={className} style={style}>
      {buttons.map((button) => (
        <CustomButton
          key={button.text}
          type={button.type}
          onClick={button.onClick}
          text={button.text}
          width={button.width}
          height={button.height}
          textColor={button.textColor}
          backgroundColor={button.backgroundColor}
          className={button.className}
          style={(button.type == "submit" && !submissionAllowed) ? {...button.style, opacity: 0.5, cursor: "not-allowed"} : button.style}
        />
      ))}
    </div>
  );
};

export default ButtonArea;

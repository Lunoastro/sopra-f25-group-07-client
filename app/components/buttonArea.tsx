import React, { CSSProperties } from "react";
import CustomButton, { Button } from "@/components/customButton";

export interface ButtonAreaProps {
  buttons: Button[];
  className?: string;
  style?: CSSProperties;
}

export const ButtonArea = ({ buttons, className, style }: ButtonAreaProps) => {
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
          //hoverBackgroundColor={button.hoverBackgroundColor}
          className={button.className}
          style={button.style}
        />
      ))}
    </div>
  );
};

export default ButtonArea;

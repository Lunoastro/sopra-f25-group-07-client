import React, { CSSProperties } from 'react';
import CustomButton from "@/components/customButton";

export interface Button {
    text: string
    type: "button" | "submit"
    onClick?: () => void
    width?: string
    height?: string
    className?: string
    style?: CSSProperties
}

export interface ButtonAreaProps {
    buttons: Button[]
    className?: string
    style?: CSSProperties
}

export const ButtonArea = ({
    buttons,
    className,
    style,
}: ButtonAreaProps)  => {
    return (
        <div
        className={className}
        style={style}
      >
        {buttons.map((button) => (
            <CustomButton 
            key={button.text} 
            type={button.type} 
            onClick={button.onClick} 
            text={button.text} 
            width={button.width}
            height={button.height}
            className={button.className} 
            style={button.style} />
        ))}
      </div>
    );
};

export default ButtonArea;
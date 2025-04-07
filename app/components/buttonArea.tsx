import React from 'react';
import CustomButton from "@/svgs/button_svg";

const alignCenter: React.CSSProperties = {
    alignItems: "center",
    justifyContent: "center",
}

const alignRight: React.CSSProperties = {
    alignItems: "right",
    justifyContent: "right",
}

const alignLeft: React.CSSProperties = {
    alignItems: "left",
    justifyContent: "left",
}

export interface Button {
    text: string
    type: "button" | "submit"
    onClick?: () => void
}

export interface ButtonAreaProps {
    buttons: Button[]
    align: "center" | "right" | "left",
    buttonAreaStyle?: React.CSSProperties
}

export const ButtonArea = ({
    buttons,
    align,
    buttonAreaStyle,
}: ButtonAreaProps)  => {
    return (
        <div
        style={{
            display: "flex",
            ...(align === "center" ? alignCenter : align === "right" ? alignRight : align === "left" ? alignLeft : {}),
            ...buttonAreaStyle,
        }}
      >
        {buttons.map((button) => (
            <CustomButton key={button.text} type="submit" onClick={button.onClick}>{button.text}</CustomButton>
        ))}
      </div>
    );
};

export default ButtonArea;
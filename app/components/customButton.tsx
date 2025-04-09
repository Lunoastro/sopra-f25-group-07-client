import ButtonSVG from "@/svgs/button_svg";
import React, { useState } from "react";

interface CustomButtonProps {
    text: string;
    width?: string;
    height?: string;
    textColor?: string;
    backgroundColor?: string;
    hoverBackgroundColor?: string;
    className?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    type?: "button" | "submit"; // allow optional type prop
    fontFamily?: string;
}

const CustomButton = ({
    text,
    width = "200",
    height,
    backgroundColor = "#FFFFFF",
    hoverBackgroundColor = "#77DD77",
    className,
    onClick = () => {},
    style = {},
    type = "button", // Default to "button" if not specified
} : CustomButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
        style={{
            position: "relative",
            width: width ?? "100%",
            height: height ?? `calc(${width} * 0.4)`, // default keeps ratio of div at the ratio of svg
            outline: "none", // Ensure no outline on input
        }}
    >
        <button
        type={type} // This is crucial for form submission
        className={className}
        style={{
            position: "relative",
            width: "100%",
            height: "100%",
            cursor: "pointer",
            border: "none",
            background: "none",
            ...style,
        }}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)} // 👈 Detect hover
        onMouseLeave={() => setIsHovered(false)} // 👈 Detect unhover
        >
            {text}
            <div
                style={{
                  position: "absolute",
                  zIndex: -1,
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none", // Ensure SVG doesn't interfere with input interaction
                }}
              >
                <ButtonSVG 
                isHovered={isHovered} 
                backgroundColor={backgroundColor} 
                hoverBackgroundColor={hoverBackgroundColor}
                />
              </div>
        </button>
    </div>
  );
};

export default CustomButton;
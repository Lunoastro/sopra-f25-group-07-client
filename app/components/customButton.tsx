import ButtonSVG from "@/svgs/button_svg";
import React, { CSSProperties, useState } from "react";

export interface Button {
  text: string;
  type: "button" | "submit";
  onClick?: () => void;
  width?: string;
  height?: string;
  className?: string;
  style?: CSSProperties;
  textColor?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
}

interface CustomButtonProps {
  text: string;
  width?: string;
  height?: string;
  textColor?: string;
  backgroundColor?: string;
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
  className,
  onClick = () => {},
  style,
  type = "button", // Default to "button" if not specified
}: CustomButtonProps) => {
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
          transition: "transform 0.3s ease",
          transform: isHovered ? "scale(1.11)" : "scale(1)",
          animation: !isHovered ? "pulse 2s infinite" : "none",
          filter: isHovered ? "url(#glowFilter)" : "none",
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
            hoverBackgroundColor={backgroundColor}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", width: 0, height: 0 }}
          >
            <filter id="glowFilter">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default CustomButton;

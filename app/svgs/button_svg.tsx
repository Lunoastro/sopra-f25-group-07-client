import React, { useState } from "react";

interface CustomButtonProps {
  width?: string | number;
  height?: string | number;
  textColor?: string;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  children?: React.ReactNode; // Optional children for custom content inside the button
  type?: "button" | "submit" | "reset"; // allow optional type prop
  fontFamily?: string;
  fillColor?: string;
  strokeColor?: string;
  primaryButtonClassName?: string; // Optional class name for the primary button
  glowIntensity?: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  width = "180",
  height = "80",
  textColor = "#000000",
  className = "",
  fillColor = "#FFFFFF",
  strokeColor = "#000000",
  glowIntensity = 5,
  onClick = () => {},

  style = {},
  children, // This will hold any custom content passed into the button
  type = "button", // Default to "button" if not specified
  fontFamily = "'Architects Daughter', Arial, sans-serif",
}) => {
  // Create a unique ID for the clip path to avoid conflicts when using multiple buttons
  const clipPathId = `clipPath-${Math.random().toString(36).substr(2, 9)}`;
  const [isHovered, setIsHovered] = useState(false);
  const filterId = `glow-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <button
      type={type} // This is crucial for form submission
      className={`custom-button-container ${className}`}
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
        cursor: "pointer",
        border: "none",
        background: "none",
        padding: 0,
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.2s ease, filter 0.3s ease",
        filter: isHovered ? `url(#${filterId})` : "none",
        ...style,
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)} // 👈 Detect hover
      onMouseLeave={() => setIsHovered(false)} // 👈 Detect unhover
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="106 317 145 63"
        preserveAspectRatio="none"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <defs>
          <clipPath id={clipPathId}>
            <path d="M 169.5 379.496094 C 163.816406 379.410156 158.132812 379.269531 152.449219 379.257812 C 139.125 379.226562 125.796875 379.261719 112.476562 379.269531 C 111.5625 379.269531 110.644531 379.253906 109.738281 379.175781 C 107.824219 379.015625 106.824219 378.085938 106.621094 376.152344 C 106.402344 374.097656 106.328125 372.027344 106.136719 369.96875 C 105.691406 365.121094 105.878906 360.285156 106.226562 355.4375 C 106.355469 353.664062 106.300781 351.863281 106.171875 350.085938 C 105.9375 346.890625 106.121094 343.714844 106.246094 340.523438 C 106.417969 336.21875 106.359375 331.902344 106.414062 327.589844 C 106.425781 326.777344 106.527344 325.960938 106.53125 325.148438 C 106.539062 323.875 107.238281 322.980469 108.152344 322.277344 C 108.554688 321.96875 109.1875 321.875 109.722656 321.851562 C 112.6875 321.714844 115.65625 321.605469 118.625 321.542969 C 127.203125 321.367188 135.78125 321.28125 144.355469 321.035156 C 153.5625 320.773438 162.769531 320.449219 171.96875 320.011719 C 182.511719 319.515625 193.046875 318.792969 203.589844 318.308594 C 211.574219 317.9375 219.566406 317.769531 227.558594 317.535156 C 231.617188 317.417969 235.675781 317.320312 239.734375 317.292969 C 241.632812 317.28125 243.539062 317.394531 245.433594 317.574219 C 246.996094 317.71875 248.160156 318.597656 248.921875 319.988281 C 249.878906 321.742188 250.378906 323.632812 250.535156 325.609375 C 251.054688 332.0625 250.792969 338.503906 250.34375 344.957031 C 249.695312 354.304688 249.277344 363.664062 249.90625 373.035156 C 250.003906 374.519531 249.457031 375.542969 247.960938 375.898438 C 245.871094 376.386719 243.738281 376.753906 241.601562 377.007812 C 225.464844 378.910156 209.25 379.097656 193.027344 379.175781 C 185.1875 379.210938 177.34375 379.332031 169.5 379.414062 C 169.5 379.441406 169.5 379.464844 169.5 379.492188 Z" />
          </clipPath>
          <filter id={filterId}>
            <feGaussianBlur stdDeviation={glowIntensity} result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <g clipPath={`url(#${clipPathId})`}>
          <path
            fill={fillColor} // Set the fill to white
            stroke="#000000" // Set the stroke (border) to black
            strokeWidth="5"
            d="M 169.5 379.496094 C 163.816406 379.410156 158.132812 379.269531 152.449219 379.257812 C 139.125 379.226562 125.796875 379.261719 112.476562 379.269531 C 111.5625 379.269531 110.644531 379.253906 109.738281 379.175781 C 107.824219 379.015625 106.824219 378.085938 106.621094 376.152344 C 106.402344 374.097656 106.328125 372.027344 106.136719 369.96875 C 105.691406 365.121094 105.878906 360.285156 106.226562 355.4375 C 106.355469 353.664062 106.300781 351.863281 106.171875 350.085938 C 105.9375 346.890625 106.121094 343.714844 106.246094 340.523438 C 106.417969 336.21875 106.359375 331.902344 106.414062 327.589844 C 106.425781 326.777344 106.527344 325.960938 106.53125 325.148438 C 106.539062 323.875 107.238281 322.980469 108.152344 322.277344 C 108.554688 321.96875 109.1875 321.875 109.722656 321.851562 C 112.6875 321.714844 115.65625 321.605469 118.625 321.542969 C 127.203125 321.367188 135.78125 321.28125 144.355469 321.035156 C 153.5625 320.773438 162.769531 320.449219 171.96875 320.011719 C 182.511719 319.515625 193.046875 318.792969 203.589844 318.308594 C 211.574219 317.9375 219.566406 317.769531 227.558594 317.535156 C 231.617188 317.417969 235.675781 317.320312 239.734375 317.292969 C 241.632812 317.28125 243.539062 317.394531 245.433594 317.574219 C 246.996094 317.71875 248.160156 318.597656 248.921875 319.988281 C 249.878906 321.742188 250.378906 323.632812 250.535156 325.609375 C 251.054688 332.0625 250.792969 338.503906 250.34375 344.957031 C 249.695312 354.304688 249.277344 363.664062 249.90625 373.035156 C 250.003906 374.519531 249.457031 375.542969 247.960938 375.898438 C 245.871094 376.386719 243.738281 376.753906 241.601562 377.007812 C 225.464844 378.910156 209.25 379.097656 193.027344 379.175781 C 185.1875 379.210938 177.34375 379.332031 169.5 379.414062 C 169.5 379.441406 169.5 379.464844 169.5 379.492188 Z"
          />
        </g>
      </svg>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: textColor,
          textAlign: "center",
          lineHeight: `${height}px`,
          fontSize: `${Math.min(height * 0.3, 20)}px`, // Ensure text fits well
          fontFamily: fontFamily,
          fill: fillColor,
          stroke: strokeColor,
        }}
      >
        {children || "Button"}{" "}
        {/* Default to 'Button' text if no children are provided */}
      </div>
    </button>
  );
};

export default CustomButton;

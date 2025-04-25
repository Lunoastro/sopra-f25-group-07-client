import React, { CSSProperties, ReactElement, useState } from "react";

export interface BaseIconProps {
    isHovered?: boolean;
    backgroundColorOnHover?: string;
}

interface IconButtonProps<T extends BaseIconProps>{
    iconElement: ReactElement<T>;
    type?: "button" | "submit";
    onClick?: () => void;
    width?: string;
    height?: string;
    className?: string;
    style?: CSSProperties;
    colorOnHover?: string;
}

const IconButton = <T extends BaseIconProps>({
    iconElement: IconElement,
    type = "button",
    onClick,
    width,
    height,
    className,
    style,
    colorOnHover,
}: IconButtonProps<T>) => {
  const [isHovered, setIsHovered] = useState(false);

  const iconPropsWithHover = {
    ...IconElement.props,
    isHovered: isHovered,
    maxWidth: "100%",
    maxHeight: "100%",
    colorOnHover,
  }

  return (
    <div
      style={{
        position: "relative",
        width: (width ?? height) ?? "100%",
        height: height ?? width, // default keeps ratio of div at the ratio of svg
        outline: "none", // Ensure no outline on input
      }}
    >
      <button
        title="recurring tasks"
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
        onMouseEnter={() => setIsHovered(true)} // Detect hover
        onMouseLeave={() => setIsHovered(false)} // Detect unhover
      >
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
          {React.cloneElement(IconElement, iconPropsWithHover)}
        </div>
      </button>
    </div>
  );
};

export default IconButton;

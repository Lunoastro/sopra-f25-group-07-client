import React from "react";

interface CloseButtonSVGProps {
  width?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CloseButtonSVG: React.FC<CloseButtonSVGProps> = ({
  width = "100%",
  height = "100%",
  style,
  className,
  onClick,
}) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="775 149 36 36"
      width={width}
      height={height}
      style={style}
      className={className}
    >
      <circle
        cx="793.16"
        cy="167.14"
        r="16.66"
        fill="transparent"
        stroke="#000"
        strokeWidth="2"
      />
      <path
        d="M783.25 159.59l2.34-2.34 7.52 7.52 7.54-7.52 2.4 2.34-7.54 7.54 7.54 7.52-2.4 2.4-7.54-7.52-7.52 7.52-2.34-2.4 7.52-7.52z"
        fill="#000"
      />
    </svg>
  );
};

export default CloseButtonSVG;

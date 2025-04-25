import React from "react";

interface DayCellSVGProps {
  width?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
  lengthFactor?: number;
}

const DayCellSVG: React.FC<DayCellSVGProps> = ({
  width = "100%",
  height = "80%",
  style,
  className,
  lengthFactor = 1,
}) => {
  // Original values
  const baseWidth = 125.2;
  const baseHeight = 216.6;
  const originalMinX = 44.3;
  const originalMinY = 247.3;

  // Calculate center point of original SVG
  const centerX = originalMinX + baseWidth / 2;
  const centerY = originalMinY + baseHeight / 2;

  // Calculate new height and corresponding viewBox
  const newHeight = baseHeight * lengthFactor;
  const newMinY = centerY - newHeight / 2;

  return (
    <svg
      width={width}
      height={height}
      style={style}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`${originalMinX} ${newMinY} ${baseWidth} ${newHeight}`}
      preserveAspectRatio="xMidYMid meet"
      fill="none"
    >
      <g
        transform={`translate(${centerX}, ${centerY}) scale(1, ${lengthFactor}) translate(-${centerX}, -${centerY})`}
      >
        <path
          transform="matrix(0, -0.225349, 0.224998, 0, 45.567291, 463.094195)"
          d="M 718.782292 7.947529 C 494.061605 14.249668 197.733299 16.124685 117.025222 25.326155 C 36.29981 34.510263 4.63021 45.760363 7.698365 120.326993 C 10.76652 194.910985 13.834675 421.718542 14.857393 463.611273 C 15.880111 505.504004 39.367965 543.299477 126.212352 542.275162 C 213.05674 541.250848 621.710721 501.406746 812.768374 515.920763 C 903.980983 522.847907 925.978094 509.948488 937.418672 430.920013 C 949.673958 346.127597 949.673958 178.574035 944.300353 113.174152 C 939.862796 59.215343 937.418672 1.819003 718.782292 7.947529 Z"
          stroke="#000"
          strokeWidth={15}
        />
      </g>
    </svg>
  );
};

export default DayCellSVG;

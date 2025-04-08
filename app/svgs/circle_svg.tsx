import React from "react";

interface CircleSvgProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  fill?: string;
}
///
const CircleSvg: React.FC<CircleSvgProps> = ({
  width = "100%",
  height = "100%",
  className = "floating",
  style = {},
  color = "#000000",
  fill = "#e4de8f",
}) => {
  return (
    <svg
      className={`circle-svg ${className}`}
      style={{ width, height, ...style }}
      color={color}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1366"
      zoomAndPan="magnify"
      viewBox="0 0 1024.5 576"
      height="768"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
    >
      <path
        fill={fill}
        d="M 892.753906 127.484375 L 890.261719 135.324219 C 883.664062 150.742188 872.542969 161.675781 856.898438 168.121094 C 841.160156 174.535156 824.414062 174.652344 806.648438 168.476562 C 789.890625 161.773438 777.78125 151.003906 770.324219 136.164062 C 767.941406 131.375 766.234375 126.371094 765.199219 121.144531 L 764.214844 113.238281 C 763.914062 107.886719 764.40625 102.492188 765.6875 97.0625 C 770.128906 80.511719 779.652344 68.136719 794.25 59.9375 C 808.851562 51.734375 825.199219 49.578125 843.300781 53.46875 C 861.195312 58.199219 874.796875 67.523438 884.101562 81.449219 C 893.402344 95.371094 896.289062 110.714844 892.753906 127.484375 "
        fillOpacity="1"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default CircleSvg;

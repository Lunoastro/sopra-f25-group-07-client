import React from "react";

interface WeekFrameSVGProps {
  width?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
}

const WeekFrameSVG: React.FC<WeekFrameSVGProps> = ({
  width = "100%",
  height = "auto",
  className,
  style,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="415 90 167 77"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={style}
    >
      <defs>
        <clipPath id="e70db9e5bf">
          <path
            d="M 446 116 L 551.871094 116 L 551.871094 168.835938 L 446 168.835938 Z M 446 116 "
            clip-rule="nonzero"
          />
        </clipPath>
      </defs>
      <g clip-path="url(#e70db9e5bf)">
        <path
          stroke-linecap="round"
          transform="matrix(0.262482, 0, 0, 0.262754, 432.87496, 87.450729)"
          fill="none"
          stroke-linejoin="round"
          d="M 71.002026 139.100547 C 80.824126 124.932726 435.5061 126.404514 436.428782 127.578971 C 439.36053 131.355075 432.574352 132.232201 437.634221 187.268164 C 440.179038 214.860478 441.607707 214.444214 449.018928 283.350667 C 183.822235 286.918638 72.356286 301.264858 66.061213 290.679875 C 60.867405 281.982944 63.352694 143.278047 72.281876 140.245271 C 108.712936 127.891169 432.976165 105.442681 437.827687 121.112023 C 439.181946 125.453055 447.203327 285.342784 440.327858 286.234777 C 418.525773 289.089155 417.856084 269.435577 165.532295 294.426245 C 85.720294 302.320383 63.352694 309.634725 61.730559 297.384689 C 60.078661 285.000854 49.170177 203.011839 61.060871 141.181863 C 62.400248 134.268918 65.986803 138.758616 127.657683 133.034995 "
          stroke="#000000"
          stroke-width="8.33"
          stroke-opacity="1"
          stroke-miterlimit="1.5"
        />
      </g>
    </svg>
  );
};

export default WeekFrameSVG;

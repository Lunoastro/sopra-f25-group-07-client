import React, { useState, useEffect } from "react";

interface DoodleXpBarProps {
  width?: string | number;
  height?: string | number;
  currentXp?: number;
  nextLevelXp?: number;
  level?: number;
  onLevelUp?: (newLevel: number) => void;
  className?: string;
  style?: React.CSSProperties;
}

const DoodleXpBar: React.FC<DoodleXpBarProps> = ({
  width = "100%",
  height = "30px",
  currentXp = 0,
  nextLevelXp = 100,
  level = 1,
  onLevelUp,
  className = "",
  style = {},
}) => {
  // Calculate fill percentage (clamped between 0-100%)
  const fillPercentage = Math.min(
    Math.max((currentXp / nextLevelXp) * 100, 0),
    100
  );

  // State for level-up animation
  const [isLevelingUp, setIsLevelingUp] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // Generate unique IDs for SVG elements
  const id = React.useId();
  const clipPathId = `doodle-clip-${id}`;
  const gradientId = `doodle-gradient-${id}`;
  const filterId = `filter-handdrawn-${id}`;

  // Check for level up
  useEffect(() => {
    if (fillPercentage >= 100 && onLevelUp) {
      setIsLevelingUp(true);
      onLevelUp(level + 1);

      // Reset animation after a delay
      const timer = setTimeout(() => {
        setIsLevelingUp(false);
        setAnimationKey((prev) => prev + 1);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [fillPercentage, level, onLevelUp]);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      preserveAspectRatio="xMidYMid meet"
      key={animationKey}
    >
      {/* Definitions */}
      <defs>
        {/* Clip path for the fill */}
        <clipPath id={clipPathId}>
          <rect x="10" y="5" width={`${fillPercentage * 3.8}`} height="30" />
        </clipPath>

        {/* Gradient for fill */}
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFDE59" />
          <stop offset="100%" stopColor="#FFB941" />
        </linearGradient>

        {/* Handdrawn filter */}
        <filter id={filterId} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            baseFrequency="0.05"
            numOctaves="2"
            result="turbulence"
            type="fractalNoise"
          />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1" />
        </filter>
      </defs>

      {/* FRAME - Outer border with wobbly, hand-drawn look */}
      <path
        d="M10,5 
           C15,3 25,2 50,3 
           C80,4 120,2 160,3 
           C220,4 280,3 340,4 
           C360,5 380,4 390,3 
           L390,35 
           C380,36 360,37 340,36 
           C280,37 220,36 160,37 
           C120,38 80,36 50,37 
           C25,38 15,37 10,35 
           Z"
        fill="none"
        stroke="#000000"
        strokeWidth="2"
        strokeLinejoin="round"
        style={{
          strokeDasharray: "1 0",
          filter: `url(#${filterId})`,
        }}
      />

      {/* EMPTY BACKGROUND - Fill the entire bar area with empty color */}
      <path
        d="M12,7 
           C17,5 25,4 50,5 
           C80,6 120,4 160,5 
           C220,6 280,5 340,6 
           C360,7 380,6 388,5 
           L388,33 
           C380,34 360,35 340,34 
           C280,35 220,34 160,35 
           C120,36 80,34 50,35 
           C25,36 17,35 12,33 
           Z"
        fill="#E0DDCF"
        stroke="none"
      />

      {/* Hatching/lines inside the empty bar */}
      <g stroke="#D1CFC4" strokeWidth="1">
        {[...Array(20)].map((_, i) => (
          <line
            key={`hatch-${i}`}
            x1={20 + i * 20}
            y1="7"
            x2={20 + i * 20}
            y2="33"
            strokeDasharray="2 2"
          />
        ))}
      </g>

      {/* FILL AREA - Progress fill (clipped to percentage) */}
      <g clipPath={`url(#${clipPathId})`}>
        <path
          d="M12,7 
             C17,5 25,4 50,5 
             C80,6 120,4 160,5 
             C220,6 280,5 340,6 
             C360,7 380,6 388,5 
             L388,33 
             C380,34 360,35 340,34 
             C280,35 220,34 160,35 
             C120,36 80,34 50,35 
             C25,36 17,35 12,33 
             Z"
          fill={`url(#${gradientId})`}
          stroke="none"
        />

        {/* Cross-hatching inside filled area */}
        <g stroke="#E6C84C" strokeWidth="0.8" strokeLinecap="round">
          {[...Array(20)].map((_, i) => (
            <React.Fragment key={`cross-${i}`}>
              <line
                x1={20 + i * 20}
                y1="7"
                x2={20 + i * 20}
                y2="33"
                strokeDasharray="3 2"
              />
              <line
                x1={10}
                y1={7 + i * 2}
                x2={390}
                y2={7 + i * 2}
                strokeDasharray="4 3"
                strokeOpacity="0.5"
              />
            </React.Fragment>
          ))}
        </g>

        {/* Highlight effect */}
        <path
          d="M12,13 
             C60,11 120,12 180,11 
             C240,10 300,11 360,10 
             C370,10 380,11 388,11"
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="2"
        />
      </g>

      {/* Star decorations at each end */}
      <path
        d="M5,20 L9,10 L13,20 L23,24 L13,28 L9,38 L5,28 L-5,24 Z"
        fill="#ffde59"
        stroke="#000"
        strokeWidth="1"
        transform="scale(0.6)"
      />

      <path
        d="M390,20 L394,10 L398,20 L408,24 L398,28 L394,38 L390,28 L380,24 Z"
        fill="#ffde59"
        stroke="#000"
        strokeWidth="1"
        transform="scale(0.6)"
      />

      {/* Additional doodle elements to enhance hand-drawn feel */}
      <path
        d="M15,4 C18,2 22,3 25,2 M385,4 C382,2 378,3 375,2"
        fill="none"
        stroke="#000"
        strokeWidth="0.5"
      />

      <path
        d="M15,36 C18,38 22,37 25,38 M385,36 C382,38 378,37 375,38"
        fill="none"
        stroke="#000"
        strokeWidth="0.5"
      />

      {/* Level-up animation effect */}
      {isLevelingUp && (
        <>
          <rect x="10" y="5" width="380" height="30" fill="#FFD700" opacity="0">
            <animate
              attributeName="opacity"
              values="0;0.7;0;0.7;0"
              dur="1.5s"
              repeatCount="1"
            />
          </rect>

          <text
            x="200"
            y="25"
            fontFamily="Arial, sans-serif"
            fontSize="18"
            fontWeight="bold"
            textAnchor="middle"
            fill="#000"
            opacity="0"
          >
            LEVEL UP!
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1.5s"
              repeatCount="1"
            />
          </text>

          {/* Sparkle effects */}
          {[...Array(12)].map((_, i) => {
            const angle = i * 30 * (Math.PI / 180);
            const radius = 160;
            const x = 200 + radius * Math.cos(angle);
            const y = 20 + radius * Math.sin(angle) * 0.5;

            return (
              <circle
                key={`sparkle-${i}`}
                cx={x}
                cy={y}
                r="3"
                fill="#FFD700"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="1.5s"
                  begin={`${i * 0.1}s`}
                  repeatCount="1"
                />
                <animate
                  attributeName="r"
                  values="0;5;0"
                  dur="1.5s"
                  begin={`${i * 0.1}s`}
                  repeatCount="1"
                />
              </circle>
            );
          })}
        </>
      )}

      {/* XP Counter text - Optional: Uncomment if you want to show XP directly on the bar */}
      {/* <text
        x="200"
        y="25"
        fontFamily="Arial, sans-serif"
        fontSize="12"
        textAnchor="middle"
        fill="#000"
        style={{ pointerEvents: "none" }}
      >
        {currentXp}/{nextLevelXp}
      </text> */}
    </svg>
  );
};

export default DoodleXpBar;

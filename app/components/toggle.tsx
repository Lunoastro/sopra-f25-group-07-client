import React from "react";
import ToggleSVG from "@/svgs/pinboard_svg/toggle_svg";

type DoodleToggleProps = {
  isOn?: boolean;
  onChange?: (checked: boolean) => void;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function DoodleToggle({
  isOn = false,
  onChange,
  size = "md",
  className = "",
}: DoodleToggleProps) {
  // Size variants
  const sizeStyles = {
    sm: { width: 44, height: 26 },
    md: { width: 58, height: 32 },
    lg: { width: 72, height: 40 },
  };

  const dimensions = sizeStyles[size] || sizeStyles.md;

  // Check which side was clicked
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!onChange) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const isRightSideClick = clickX > rect.width / 2;

    // If already on and clicked on right side, do nothing
    if (isOn && isRightSideClick) {
      return;
    }

    // If already off and clicked on left side, do nothing
    if (!isOn && !isRightSideClick) {
      return;
    }

    // Otherwise toggle
    onChange(!isOn);
  };

  return (
    <div
      className={`inline-block cursor-pointer ${className}`}
      onClick={handleClick}
      style={{ width: dimensions.width, height: dimensions.height }}
      role="switch"
      aria-checked={isOn}
      tabIndex={0}
    >
      <ToggleSVG checked={isOn} />
    </div>
  );
}

import { useState } from "react";
import ToggleSVG from "@/svgs/pinboard_svg/toggle_svg"; // Import the new SVG component

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
  const [checked, setChecked] = useState(isOn);

  const handleToggle = () => {
    const newValue = !checked;
    setChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  // Size variants
  const sizeStyles = {
    sm: { width: 44, height: 26 },
    md: { width: 58, height: 32 },
    lg: { width: 72, height: 40 },
  };

  const dimensions = sizeStyles[size] || sizeStyles.md;

  return (
    <div
      className={`inline-block cursor-pointer ${className}`}
      onClick={handleToggle}
      style={{ width: dimensions.width, height: dimensions.height }}
      role="switch"
      aria-checked={checked}
      tabIndex={0}
    >
      <ToggleSVG checked={checked} /> {/* Use the SVG component */}
    </div>
  );
}

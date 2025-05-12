import ComingSoonSVG from "@/svgs/coming_soon_svg";
import React, { ReactNode } from "react";

interface ComingSoonOverlayProps {
  children: ReactNode;
}

const ComingSoonOverlay: React.FC<ComingSoonOverlayProps> = ({ children }) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {children}
      <div
        style={{
          position: "absolute",
          top: "-40px", // Position it above the button
          left: "50%",
          transform: "translateX(-50%)", // Center it horizontally
          width: "100%",
          height: "100%", // Let it take its natural height
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none", // Makes the overlay non-interactive
        }}
      >
        <ComingSoonSVG width="50px" height="100%" /> {/* Control the size */}
      </div>
    </div>
  );
};
export default ComingSoonOverlay;

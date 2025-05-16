import React from "react";

// Add proper TypeScript interface for the props
interface DoodleBackButtonProps {
  onClick: () => void;
}

// Use the interface for the component props
const DoodleBackButton: React.FC<DoodleBackButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        zIndex: 10,
        padding: "8px 16px",
        backgroundColor: "white",
        border: "2px solid #333",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "16px",
        transform: "rotate(-2deg)",
        boxShadow: "2px 2px 0 #333",
        transition: "all 0.2s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "rotate(0deg) scale(1.05)";
        e.currentTarget.style.boxShadow = "3px 3px 0 #333";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "rotate(-2deg)";
        e.currentTarget.style.boxShadow = "2px 2px 0 #333";
      }}
    >
      <span style={{ marginRight: "5px" }}>←</span> Back
    </button>
  );
};

export default DoodleBackButton;

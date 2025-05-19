// SimplePopup.tsx
import React from "react";

interface SimplePopupProps {
  isVisible: boolean;
  title: string;
  content: React.ReactNode;
  buttons: { text: string; onClick: () => void; color: string }[];
  onClose: () => void;
}

const SimplePopup: React.FC<SimplePopupProps> = ({
  isVisible,
  title,
  content,
  buttons,
  onClose,
}) => {
  if (!isVisible) return null;

  return (
    <div
      className="simple-popup-overlay"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        className="simple-popup-container"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "20px",
          maxWidth: "700px",
          width: "90%",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        }}
      >
        <div
          className="simple-popup-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <h2 style={{ textAlign: "center", width: "100%", margin: 0 }}>
            {title}
          </h2>
          <button
            className="simple-popup-close"
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              padding: "0 5px",
              lineHeight: "1",
            }}
          >
            ×
          </button>
        </div>
        <div
          className="simple-popup-content"
          style={{
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          {content}
        </div>
        <div
          className="simple-popup-buttons"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              style={{
                backgroundColor: button.color,
                border: "none",
                borderRadius: "4px",
                color: "white",
                cursor: "pointer",
                fontSize: "1.1rem",
                padding: "10px",
                width: "110px",
                height: "50px",
              }}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimplePopup;

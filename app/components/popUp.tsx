import React, { CSSProperties, ReactElement } from "react";
import IconButton from "./iconButton";
import CloseButtonSVG from "@/svgs/pinboard_svg/close_button_svg";
import PopUpFrameSVG from "@/svgs/pinboard_svg/pop_up_frame_svg";

export interface PopUpAttributes {
  contentElement: ReactElement;
  onClose?: () => void;
  closeVisible?: boolean;
  frameVisible?: boolean;
  maxWidthContent?: string;
  className?: string;
  style?: CSSProperties;
}

interface PopUpProps {
  contentElement: ReactElement;
  onClose?: () => void;
  closeVisible?: boolean;
  frameVisible?: boolean;
  isVisible: boolean;
  maxWidthContent?: string;
  className?: string;
  style?: CSSProperties;
}

export const PopUp = ({
  contentElement,
  onClose,
  closeVisible = true,
  frameVisible = true,
  isVisible,
  maxWidthContent,
  className,
  style,
}: PopUpProps) => {
  if (isVisible) {
    return (
      <>
        {frameVisible && (
          <div
            className={className}
            style={{
              position: "absolute",
              zIndex: 10,
              width: "100%",
              backgroundColor: "rgba(100, 100, 100, 0.5)",
              ...style,
            }}
          >
            <PopUpFrameSVG height="99vh" style={{ padding: "2.5vh 0" }} />
          </div>
        )}
        <div
          style={
            frameVisible
              ? {
                  position: "absolute",
                  zIndex: 11,
                  width: "100%",
                  height: "99vh",
                  padding: "5vh 15vw",
                  ...style,
                }
              : {
                  position: "absolute",
                  zIndex: 11,
                  width: "100%",
                  height: "100vh",
                  padding: "5vh 20vw",
                  paddingTop: "10vh",
                  backgroundColor: "rgba(100, 100, 100, 0.5)",
                  ...style,
                }
          }
        >
          <div
            style={{
              position: "relative",
              maxWidth: maxWidthContent,
              height: "100%",
              margin: "auto",
            }}
          >
            {closeVisible && (
              <div
                style={{
                  position: "absolute",
                  zIndex: 12,
                  top: "4rem",
                  right: "2rem",
                  height: 0,
                }}
              >
                <IconButton
                  iconElement={<CloseButtonSVG />}
                  onClick={onClose}
                  width={"2.5rem"}
                />
              </div>
            )}
            {contentElement}
          </div>
        </div>
      </>
    );
  }
};

export default PopUp;

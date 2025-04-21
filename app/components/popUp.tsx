import React, { CSSProperties, ReactElement } from "react";
import IconButton from "./iconButton";
import CloseButtonSVG from "@/svgs/pinboard_svg/close_button_svg";
import PopUpFrameSVG from "@/svgs/pinboard_svg/pop_up_frame_svg";

export interface PopUpAttributes {
    contentElement: ReactElement;
    onClose?: () => void;
    closeVisible?: boolean;
    className?: string;
    style?: CSSProperties;
}

interface PopUpProps {
    contentElement: ReactElement;
    onClose?: () => void;
    closeVisible?: boolean;
    isVisible: boolean;
    className?: string;
    style?: CSSProperties;
}

export const PopUp = ({ contentElement, onClose, closeVisible=true, isVisible, className, style }: PopUpProps) => {
    if (isVisible) {
        return (
            <>
                <div className={className} style={{position: "absolute", zIndex: 10, width: "100%", backgroundColor: "rgba(100, 100, 100, 0.5)", ...style}}>
                    <PopUpFrameSVG height="99vh" style={{padding: "2.5vh 0"}}/>
                </div>
                <div style={{position: "absolute", zIndex: 11, width: "100%", height: "99vh", padding: "5vh 15vw", ...style}}>
                    { closeVisible &&
                        <div style={{display: "flex", justifyContent: "end", paddingRight: "3vw", paddingTop: "1.5vh"}}>
                        <IconButton iconElement={<CloseButtonSVG />} onClick={onClose} width={"2.5rem"}/>
                        </div>
                    }   
                    {contentElement}
                </div>
                </>
          );
    }
};

export default PopUp;

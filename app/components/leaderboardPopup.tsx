import React from "react";
// import { useApi } from "@/hooks/useApi";
// import useLocalStorage from "@/hooks/useLocalStorage";
// import { User } from "@/types/user";
import LeaderboardFrame from "@/svgs/leaderboard_svg/leaderboard_svg";
// import AvatarSVG from "@/svgs/leaderboard_svg/avatar_svg";
// import ExpBarSVG from "@/svgs/leaderboard_svg/exp_bar_svg";
// import FirstPlaceSVG from "@/svgs/leaderboard_svg/first_place_svg";
// import SecondPlaceSVG from "@/svgs/leaderboard_svg/second_place_svg";
// import ThirdPlaceSVG from "@/svgs/leaderboard_svg/third_place_svg";
// import CustomButton from "@/components/customButton";
import CloseButtonSVG from "@/svgs/pinboard_svg/close_button_svg";

export interface LeaderboardPopupProps {
  width?: string;
  height?: string;
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const LeaderboardPopup = ({
  width = "100%",
  height = "100%",
  onClose,
  className,
  style,
}: LeaderboardPopupProps) => {
  //   const apiService = useApi();
  //   const { value: token } = useLocalStorage<string>("token", "");
  //   const [users, setUsers] = useState<User[]>([]);
  // const [loading] = useState<boolean>(true);

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       try {
  //         const users: User[] | null = await apiService.get<User[]>(
  //           "/users",
  //           token
  //         );
  //         if (!users) {
  //           setUsers([]);
  //         } else {
  //           // Sort users by some score metric - you may need to modify this
  //           // based on your User type and how scoring works in your app
  //           const sortedUsers = [...users].sort(
  //             (a, b) => (b.score || 0) - (a.score || 0)
  //           );
  //           setUsers(sortedUsers);
  //         }
  //       } catch (error) {
  //         console.error("Failed to fetch users:", error);
  //         setUsers([]);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchUsers();
  //   }, [apiService, token]);

  //   const getRankBadge = (index) => {
  //     switch (index) {
  //       case 0:
  //         return <FirstPlaceSVG style={{ width: "2rem", height: "2rem" }} />;
  //       case 1:
  //         return <SecondPlaceSVG style={{ width: "2rem", height: "2rem" }} />;
  //       case 2:
  //         return <ThirdPlaceSVG style={{ width: "2rem", height: "2rem" }} />;
  //       default:
  //         return null;
  //     }
  //   };

  return (
    <div
      className={className}
      style={{
        width: width,
        height: height,
        display: "flex",
        flexDirection: "column",
        fontSize: "1.2rem",
        position: "relative",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          paddingRight: "5vw",
          paddingLeft: "5vw",
          paddingTop: "1.5vh",
        }}
      >
        {onClose && (
          <CloseButtonSVG
            onClick={onClose}
            width={"2rem"}
            style={{
              position: "absolute", // Add this
              top: "-20rem", // Position from top
              right: "8rem", // Position from right
              cursor: "pointer", // Add pointer cursor
              zIndex: 2,
            }}
          />
        )}
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
          left: "5vw",
          marginTop: "-5rem", // Move it up by adding negative margin top
          transform: "translateX(-5%)",
        }}
      >
        <LeaderboardFrame
          width="100%"
          height="auto"
          style={{ maxWidth: "650px" }}
        />
      </div>
    </div>
  );
};

export default LeaderboardPopup;

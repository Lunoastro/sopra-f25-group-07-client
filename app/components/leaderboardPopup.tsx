import React, { useState, useEffect } from "react";
import { useApi } from "@/hooks/useApi";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useParams, useRouter } from "next/navigation";
import { User } from "@/types/user";
import LeaderboardFrame from "@/svgs/leaderboard_svg/leaderboard_svg";
import AvatarSVG from "@/svgs/leaderboard_svg/avatar_svg";
import ExpBarSVG from "@/svgs/leaderboard_svg/exp_bar_svg";
import FirstPlaceSVG from "@/svgs/leaderboard_svg/first_place_svg";
import SecondPlaceSVG from "@/svgs/leaderboard_svg/second_place_svg";
import ThirdPlaceSVG from "@/svgs/leaderboard_svg/third_place_svg";
import CloseButtonSVG from "@/svgs/pinboard_svg/close_button_svg";

// Online status dot component
const OnlineStatusSVG = ({ width = "1rem", height = "1rem", style = {} }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <circle cx="8" cy="8" r="8" fill="#2ECC71" />
    <circle cx="8" cy="8" r="6" fill="#2ECC71" />
    <circle cx="8" cy="8" r="3" fill="#27AE60" />
  </svg>
);

// Level Badge Component
const LevelBadge = ({ level }: { level: number }) => (
  <div
    className="flex items-center justify-center bg-indigo-500 text-white rounded-full px-3 py-1 text-sm font-bold"
    style={{ marginTop: "2rem" }}
  >
    LVL {level}
  </div>
);

// Calculate XP for level using the same formula as in UserService
const getXpForLevel = (level: number) => {
  const baseXP = 100;
  const exponent = 1.5;
  return Math.floor(baseXP * Math.pow(level, exponent));
};

// Calculate user level based on score
const calculateLevel = (score: number) => {
  if (!score && score !== 0) return 1;

  // Example level calculation: 1 level per 100 points
  // You can adjust this formula based on your game's level progression
  return Math.floor(score / 100) + 1;
};

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
  const apiService = useApi();
  const { value: token } = useLocalStorage<string>("token", "");
  const params = useParams();
  const teamId = params.id;

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchTeamUsers = async () => {
      try {
        setLoading(true);
        if (!teamId) throw new Error("Team ID is missing");

        const teamUsers: User[] | null = await apiService.get<User[]>(
          `/teams/${teamId}/users`,
          token
        );

        const sortedUsers = (teamUsers ?? []).sort(
          (a, b) => (b.score || 0) - (a.score || 0)
        );

        setUsers(sortedUsers);
      } catch (error) {
        console.error("Failed to fetch team users:", error);
        setError("Failed to load team leaderboard.");
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    if (teamId) fetchTeamUsers();
  }, [apiService, token, teamId]);

  const getRankBadge = (index: number) => {
    switch (index) {
      case 0:
        return <FirstPlaceSVG style={{ width: "4rem", height: "4rem" }} />;
      case 1:
        return <SecondPlaceSVG style={{ width: "4rem", height: "4rem" }} />;
      case 2:
        return <ThirdPlaceSVG style={{ width: "4rem", height: "4rem" }} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={className}
      style={{
        width,
        height,
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
              position: "absolute",
              top: "-20rem",
              right: "8rem",
              cursor: "pointer",
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
          marginTop: "-5rem",
          transform: "translateX(-5%)",
        }}
      >
        <LeaderboardFrame
          width="100%"
          height="auto"
          style={{ maxWidth: "650px" }}
        />

        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "55%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
            gap: "1rem",
            zIndex: 1,
            maxHeight: "65vh",
            overflowY: "auto",
            paddingRight: "0",
            scrollbarWidth: "thin",
            scrollbarColor: "#A0AEC0 #EDF2F7",
          }}
        >
          {!teamId ? (
            <div style={{ textAlign: "center", padding: "2rem" }}>
              No team selected. Please select a team to view leaderboard.
            </div>
          ) : loading ? (
            <div style={{ textAlign: "center", padding: "2rem" }}>
              Loading team leaderboard...
            </div>
          ) : error ? (
            <div style={{ textAlign: "center", padding: "2rem", color: "red" }}>
              {error}
            </div>
          ) : users.length === 0 ? (
            <div style={{ textAlign: "center", padding: "2rem" }}>
              No team members found.
            </div>
          ) : (
            users.map((user, index) => {
              const userLevel =
                Number(user.level) || calculateLevel(user.score);
              const currentXp = user.xp || 0;
              const nextLevelXp = getXpForLevel(userLevel + 1);

              // Calculate current XP progress percentage
              const currentLevelXp = getXpForLevel(userLevel);
              const xpForCurrentLevel = currentXp - currentLevelXp;
              const xpNeededForNextLevel = nextLevelXp - currentLevelXp;
              // const progressPercentage = Math.min(
              //   100,
              //   Math.max(
              //     0,
              //     Math.floor((xpForCurrentLevel / xpNeededForNextLevel) * 100)
              //   )
              // );

              return (
                <div
                  key={user.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "1rem",
                    borderRadius: "1rem",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "4.5rem",
                      height: "4.5rem",
                      marginRight: "-5rem",
                      cursor: "pointer",
                    }}
                    onClick={() => router.push(`/users/${user.id}`)}
                  >
                    <AvatarSVG
                      width="5rem"
                      height="5rem"
                      username={user.name || undefined}
                    />
                    {user.status === "ONLINE" && (
                      <OnlineStatusSVG
                        width="0.8rem"
                        height="0.8rem"
                        style={{
                          position: "absolute",
                          bottom: "0",
                          right: "0",
                          border: "1px solid white",
                          borderRadius: "50%",
                        }}
                      />
                    )}

                    {index < 3 && (
                      <div
                        style={{
                          position: "absolute",
                          top: "-1rem",
                          left: "50%",
                          transform: "translateX(-50%)",
                          zIndex: 2,
                        }}
                      >
                        {getRankBadge(index)}
                      </div>
                    )}
                  </div>

                  <div style={{ flex: "1", position: "relative" }}>
                    {/* Using your custom ExpBarSVG component */}
                    <div
                      style={{
                        position: "relative",
                        width: "90%",
                        marginTop: "2rem",
                      }}
                    >
                      {/* XP Bar */}
                      <ExpBarSVG
                        width="100%"
                        currentXp={xpForCurrentLevel}
                        nextLevelXp={xpNeededForNextLevel}
                      />

                      {/* XP text below the bar, centered in two lines */}
                      <div className="mt-2 text-xs flex flex-col items-center">
                        <span style={{ marginLeft: "180px" }}>
                          XP: {currentXp}/{nextLevelXp}
                        </span>
                      </div>
                    </div>

                    {/* Level display positioned above the exp bar */}
                    <div
                      style={{
                        position: "absolute",
                        top: "0.5rem",
                        right: "0",
                        zIndex: 2,
                      }}
                    >
                      <LevelBadge level={userLevel} />
                    </div>
                  </div>

                  <div
                    style={{
                      fontWeight: "bold",
                      marginLeft: "auto", // Push score to the right side
                    }}
                  >
                    {user.score}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPopup;

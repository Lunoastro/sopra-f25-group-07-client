import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useApi } from "@/hooks/useApi";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useParams, useRouter } from "next/navigation";
// Removed unused User import
import LeaderboardFrame from "@/svgs/leaderboard_svg/leaderboard_svg";
import AvatarSVG from "@/svgs/leaderboard_svg/avatar_svg";
import FirstPlaceSVG from "@/svgs/leaderboard_svg/first_place_svg";
import SecondPlaceSVG from "@/svgs/leaderboard_svg/second_place_svg";
import ThirdPlaceSVG from "@/svgs/leaderboard_svg/third_place_svg";
import CloseButtonSVG from "@/svgs/pinboard_svg/close_button_svg";
import DoodleXpBar from "@/svgs/leaderboard_svg/doodle_xp_bar";

// Define user type directly to replace the unused import
interface TeamUser {
  id: string | number;
  name?: string;
  color?: string;
  status?: string;
  score?: number;
  xp?: number;
}

// Interface for exported ref functions
export interface LeaderboardPopupRef {
  adjustXp: (userId: string | number, amount: number) => Promise<void>;
}

const getMemberColor = (colorCode: string) => {
  const colorMap: Record<string, string> = {
    C1: "#ffa5ad", // medium pink
    C2: "#ffd0a9", // soft peach
    C3: "#fff0a0", // mellow yellow
    C4: "#a8e6be", // mint green
    C5: "#a8d1f2", // powder blue
    C6: "#c9bff2", // soft lavender
    C7: "#ffb8ee", // light pink
    C8: "#c9bdb3", // warm taupe
    C9: "#a8ede5", // aqua
    C10: "#e0cba8", // sand
  };
  return colorMap[colorCode] || "#ffffff"; // default to white
};

// Online status dot component
const OnlineStatusSVG = ({
  width = "1rem",
  height = "1rem",
  style = {},
}: {
  width?: string;
  height?: string;
  style?: React.CSSProperties;
}) => (
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

// Calculate user level based on total XP
const calculateLevel = (totalXp: number) => {
  if (!totalXp && totalXp !== 0) return 1;

  // Find the highest level where required XP <= totalXp
  let level = 1;
  while (getXpForLevel(level + 1) <= totalXp) {
    level++;
  }

  return level;
};

interface LeaderboardPopupProps {
  width?: string;
  height?: string;
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

// Convert to forwardRef component to properly expose the ref
export const LeaderboardPopup = forwardRef<
  LeaderboardPopupRef,
  LeaderboardPopupProps
>(({ width = "100%", height = "100%", onClose, className, style }, ref) => {
  const apiService = useApi();
  const { value: token } = useLocalStorage("token", "");
  const params = useParams();
  const teamId = params.id;
  const router = useRouter();

  const [users, setUsers] = useState<TeamUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [levelUpUser, setLevelUpUser] = useState<string | number | null>(null);

  useEffect(() => {
    const fetchTeamUsers = async () => {
      try {
        setLoading(true);
        if (!teamId) throw new Error("Team ID is missing");

        // Specify the correct return type for the API call
        const teamUsers = await apiService.get<TeamUser[]>(
          `/teams/${teamId}/users`,
          token
        );
        console.log("Fetched users data:", teamUsers);

        // Ensure teamUsers is an array before sorting
        const usersArray = Array.isArray(teamUsers) ? teamUsers : [];

        const sortedUsers = usersArray.sort(
          (a: TeamUser, b: TeamUser) => (b.score || 0) - (a.score || 0)
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

  // Handle XP adjustment for a user
  const handleXpAdjustment = async (
    userId: string | number,
    amount: number
  ) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id !== userId) return user;

        // Calculate current values
        const oldXp = user.xp || 0;
        const oldLevel = calculateLevel(oldXp);

        // Calculate new values
        const newXp = Math.max(0, oldXp + amount);
        const newLevel = calculateLevel(newXp);

        // Check for level up
        if (newLevel > oldLevel) {
          setLevelUpUser(user.id);
          console.log(`${user.name} leveled up to level ${newLevel}!`);

          // Reset level up indicator after delay
          setTimeout(() => setLevelUpUser(null), 3000);
        }

        return {
          ...user,
          xp: newXp,
        };
      })
    );

    // Optionally save to database
    try {
      const userToUpdate = users.find((u) => u.id === userId);
      if (userToUpdate) {
        const updatedXp = (userToUpdate.xp || 0) + amount;
        await apiService.put(`/users/${userId}`, { xp: updatedXp }, token);
        console.log(`Updated user ${userId} XP to ${updatedXp}`);
      }
    } catch (error) {
      console.error("Failed to update user XP:", error);
    }
  };

  // Properly expose the functions via useImperativeHandle with the ref
  useImperativeHandle(ref, () => ({
    adjustXp: handleXpAdjustment,
  }));

  // Handle level up callback from XP bar
  const handleLevelUp = (userId: string | number, newLevel: number) => {
    console.log(`User ${userId} leveled up to ${newLevel}!`);
    setLevelUpUser(userId);

    // Reset level up indicator after delay
    setTimeout(() => setLevelUpUser(null), 3000);
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
            width: "70%", // Increased width to accommodate the layout
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
              // Calculate level and XP
              const totalXp = user.xp || 0;
              const userLevel = calculateLevel(totalXp);

              // Calculate XP thresholds based on formulas from backend
              const currentLevel = userLevel;
              const nextLevel = currentLevel + 1;

              // Calculate XP thresholds using the formula from backend (baseXP * level^exponent)
              const currentLevelThreshold = getXpForLevel(currentLevel);
              const nextLevelThreshold = getXpForLevel(nextLevel);

              // Calculate XP within current level
              const xpForCurrentLevel = totalXp - currentLevelThreshold;
              const xpNeededForNextLevel =
                nextLevelThreshold - currentLevelThreshold;

              // Is this user currently leveling up?
              const isLevelingUp = levelUpUser === user.id;

              return (
                <div key={user.id}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "1rem",
                      borderRadius: "1rem",
                      width: "100%",
                      background: isLevelingUp
                        ? "rgba(255, 223, 89, 0.2)"
                        : "transparent",
                      transition: "background 0.3s ease",
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
                        userColor={getMemberColor(user.color || "")}
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
                      <div
                        style={{
                          position: "relative",
                          width: "85%",
                          marginTop: "2rem",
                          marginLeft: "4rem",
                          marginRight: "0",
                        }}
                      >
                        {/* XP Bar with level up callback */}
                        <DoodleXpBar
                          width="100%"
                          height="30px"
                          currentXp={xpForCurrentLevel}
                          nextLevelXp={xpNeededForNextLevel}
                          level={userLevel}
                          onLevelUp={() =>
                            handleLevelUp(user.id, userLevel + 1)
                          }
                        />

                        {/* XP text below the bar - moved more to the left */}
                        <div className="mt-2 text-xs flex flex-col items-center">
                          <span style={{ marginLeft: "150px" }}>
                            {" "}
                            {/* Removed the right margin */}
                            XP: {xpForCurrentLevel}/{xpNeededForNextLevel}{" "}
                            (Total: {totalXp})
                          </span>
                        </div>
                      </div>

                      {/* Level display positioned above the exp bar - moved more to the right */}
                      <div
                        style={{
                          position: "absolute",
                          top: "0.5rem",
                          right: "-3rem", // Moved more to the right
                          zIndex: 2,
                        }}
                      >
                        <LevelBadge level={userLevel} />
                      </div>
                    </div>

                    <div
                      style={{
                        fontWeight: "bold",
                        marginLeft: "auto",
                      }}
                    ></div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
});

// Add display name for debugging
LeaderboardPopup.displayName = "LeaderboardPopup";

export default LeaderboardPopup;

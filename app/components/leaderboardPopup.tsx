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
import DoodleXpBar from "@/svgs/leaderboard_svg/doodle_xp_bar";
import { useWebSocket } from "@/hooks/useWebSocket";
import { User } from "@/types/user";

// Interface for exported ref functions
export interface LeaderboardPopupRef {
  adjustXp: (userId: string | number, amount: number) => Promise<void>;
}

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

// Calculate XP for level using the same formula as in UserService
const getXpForLevel = (level: number) => {
  if (level <= 1) return 0; // Level 1 starts at 0 XP
  const baseXP = 100;
  const exponent = 1.5;
  return Math.floor(baseXP * Math.pow(level, exponent));
};

interface LeaderboardPopupProps {
  width?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
}

// Convert to forwardRef component to properly expose the ref
export const LeaderboardPopup = forwardRef<
  LeaderboardPopupRef,
  LeaderboardPopupProps
>(({ width = "100%", height = "100%", className, style }, ref) => {
  const apiService = useApi();
  const { value: token } = useLocalStorage("token", "");
  const params = useParams();
  const teamId = params.id;
  const router = useRouter();

  const { teamMembers, isConnected } = useWebSocket();

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [levelUpUser, setLevelUpUser] = useState<string | number | null>(null);

  // setting initial team users (will get changed via websocket on server notifications)
  useEffect(() => {
    const fetchTeamUsers = async () => {
      try {
        setLoading(true);
        if (!teamId) throw new Error("Team ID is missing");

        // Specify the correct return type for the API call
        const teamUsers = await apiService.get<User[]>(
          `/teams/${teamId}/users`,
          token
        );

        // Ensure teamUsers is an array before sorting
        const usersArray = Array.isArray(teamUsers) ? teamUsers : [];

        const sortedUsers = usersArray.sort(
          (a: User, b: User) => (b.xp || 0) - (a.xp || 0)
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

  // Update team info from websocket when connected and data changes
  useEffect(() => {
    if (isConnected && teamMembers) {
      // Ensure teamUsers is an array before sorting
      const usersArray = Array.isArray(teamMembers) ? teamMembers : [];

      const sortedUsers = usersArray.sort(
        (a: User, b: User) => (b.xp || 0) - (a.xp || 0)
      );

      setUsers(sortedUsers);
    }
  }, [isConnected, teamMembers]);

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
        const oldLevel = user.level;

        // Calculate new values
        const newXp = Math.max(0, oldXp + amount);
        // Backend determines the level, we just update XP
        // Check if we've crossed to the next level threshold
        const nextLevelThreshold = getXpForLevel(oldLevel + 1);

        if (oldXp < nextLevelThreshold && newXp >= nextLevelThreshold) {
          setLevelUpUser(user.id);
          console.log(`${user.name} leveled up to level ${oldLevel + 1}!`);

          // Reset level up indicator after delay
          setTimeout(() => setLevelUpUser(null), 3000);
        }

        return {
          ...user,
          xp: newXp,
          // We don't update the level here - that comes from the backend
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
        maxHeight: "60vh",
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
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
          transform: "translateX(-5%)",
        }}
      >
        <LeaderboardFrame
          width="100%"
          height="auto"
          style={{ maxWidth: "650px", maxHeight: "90vh", zIndex: 19}}
        />

        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "50%",
            zIndex: 21,
            transform: "translateX(-50%)",
            width: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
            gap: "1rem",
            maxHeight: "60vh",
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
              // Get user data
              const totalXp = user.xp || 0;
              const currentLevel = user.level || 1;

              const xpNeededForNextLevel = getXpForLevel(currentLevel + 1);

              const currentLevelThreshold = getXpForLevel(currentLevel);
              const currentLevelXp = Math.max(
                0,
                totalXp - currentLevelThreshold
              );
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
                        borderRadius: "50%",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        zIndex: 1,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(59, 131, 246, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                      onClick={() => router.push(`/users/${user.id}`)}
                      title={`View ${user.name || "User"}'s profile`}
                    >
                      <AvatarSVG
                        width="5rem"
                        height="5rem"
                        userColor={`var(--member-color-${user.color || "default"})`}
                        username={user.username || undefined}
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
                            zIndex: 2, // Higher than parent
                            pointerEvents: "none", // Make it non-clickable so it doesn't block hover
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
                            zIndex: 2, // Higher than parent
                            pointerEvents: "none", // Make it non-clickable so it doesn't block hover
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
                          marginLeft: "4.5rem",
                          marginRight: "0",
                        }}
                      >
                        {/* XP Bar with level up callback */}
                        <DoodleXpBar
                          width="100%"
                          height="30px"
                          currentXp={currentLevelXp}
                          nextLevelXp={
                            xpNeededForNextLevel - currentLevelThreshold
                          }
                          level={currentLevel}
                          onLevelUp={() =>
                            handleLevelUp(user.id, currentLevel + 1)
                          }
                        />

                        {/* XP text below the bar - moved more to the left */}
                        <div className="mt-2 text-xs flex flex-col items-center">
                          <span style={{ marginLeft: "8rem" }}>
                            Level: {currentLevel}
                          </span>
                          <span style={{ marginLeft: ".5rem" }}>
                            XP: {currentLevelXp}/
                            {xpNeededForNextLevel - currentLevelThreshold}
                          </span>
                        </div>
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

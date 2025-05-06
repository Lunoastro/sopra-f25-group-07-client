"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useApi } from "@/hooks/useApi";
import { User } from "@/types/user";
import { Card, Spin, Button } from "antd";
import useLocalStorage from "@/hooks/useLocalStorage";
import SplashBackgroundSVG from "@/svgs/profile_svg/splash_background_svg";
import ProfileFrameSVG from "@/svgs/profile_svg/profile_frame_svg";
import CustomButton from "@/components/customButton";

const UserProfile = () => {
  const router = useRouter();
  const params = useParams();
  const userId = params?.id as string;
  const apiService = useApi();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const { value: token, set: setToken } = useLocalStorage("token", "");

  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const currentUserId = storedUser.id;

  useEffect(() => {
    if (!storedUser.username || !storedUser.id || !token) {
      alert("You are not logged in");
      router.push("/login");
    } else {
      setToken(token?.replace(/^"(.*)"$/, "$1"));

      const fetchUser = async () => {
        try {
          const userData = await apiService.get<User>(
            `/users/${userId}`,
            token,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          setUser(userData);
        } catch (error) {
          console.error("Failed to fetch user:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchUser();
    }

    setIsAuthChecked(true);
  }, [apiService, router, userId, token, setToken]);

  if (!isAuthChecked) {
    return null;
  }

  if (loading) {
    return (
      <div className="profile-wrapper">
        <SplashBackgroundSVG className="background-svg" />
        <Spin
          size="large"
          style={{
            display: "block",
            margin: "50px auto",
            position: "relative",
            zIndex: 2,
          }}
        />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="profile-wrapper">
        <SplashBackgroundSVG className="background-svg" />
        <div className="card-container">
          <Card
            title="User Not Found"
            style={{
              maxWidth: 500,
              margin: "20px auto",
              backdropFilter: "blur(5px)",
            }}
          >
            <p>The requested user does not exist.</p>
            <Button onClick={() => router.push("/users")} type="primary">
              Back to Users
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-wrapper">
      {/* Main background */}
      <SplashBackgroundSVG className="background-svg" />

      <div className="card-container">
        <div className="profile-frame-container">
          {/* Custom SVG Frame */}
          <div className="frame-wrapper">
            <ProfileFrameSVG className="profile-frame-svg" />
          </div>
          <div className="profile-title">User Profile: {user.username}</div>
          {/* Card with user information */}
          <Card
            className="profile-card"
            style={{
              maxWidth: 600,
              margin: "0 auto",
              position: "relative",
              paddingBottom: userId == currentUserId ? "80px" : "20px",
              border: "none",
            }}
          >
            {/* Custom styled user info section instead of Descriptions */}
            <div className="custom-profile-info">
              <div className="profile-info-row">
                <div className="profile-info-label">Username:</div>
                <div className="profile-info-value">{user.username}</div>
              </div>

              <div className="profile-info-row">
                <div className="profile-info-label">Online Status:</div>
                <div className="profile-info-value">{user.status}</div>
              </div>

              <div className="profile-info-row">
                <div className="profile-info-label">Creation Date:</div>
                <div className="profile-info-value">
                  {new Date(user?.creationDate || "").toLocaleDateString()}
                </div>
              </div>

              <div className="profile-info-row">
                <div className="profile-info-label">Birth Date:</div>
                <div className="profile-info-value">
                  {user?.birthDate
                    ? new Date(user?.birthDate).toLocaleDateString()
                    : "Click EDIT to set"}
                </div>
              </div>

              <div className="profile-info-row">
                <div className="profile-info-label">Color:</div>
                <div className="profile-info-value">
                  <span
                    style={{
                      display: "inline-block",
                      width: "16px",
                      height: "16px",
                      backgroundColor: `var(--member-color-${
                        user.color || "unassigned"
                      })`,
                      borderRadius: "50%",
                      border: "1px solid #ccc",
                      marginRight: "8px",
                      verticalAlign: "middle",
                    }}
                    title={user.color}
                  />
                  {user.color || "No color assigned"}
                </div>
              </div>
            </div>

            {userId == currentUserId && (
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <CustomButton
                  text="Edit Profile"
                  width="150px"
                  onClick={() => router.push(`/users/${user.id}/edit`)}
                  backgroundColor="#f0f0f0"
                  style={{
                    color: "#333",
                    fontWeight: "bold",
                    top: "3rem",
                    left: "-15rem",
                  }}
                />

                <CustomButton
                  text="Quit Team"
                  width="150px"
                  onClick={() => router.push("/users")}
                  backgroundColor="#ff6b6b"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    top: "3rem",
                    left: "-10rem",
                  }}
                />
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

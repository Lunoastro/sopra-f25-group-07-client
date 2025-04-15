"use client";

import { getApiDomain } from "@/utils/domain";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useApi } from "@/hooks/useApi";
import useLocalStorage from "@/hooks/useLocalStorage";
//import { Spin } from "antd";
import { AnyFormField, Form } from "@/components/form";
import { User } from "@/types/user";
import isAuth from "@/isAuth";
import { Team } from "@/types/team";
import LineSvg from "@/svgs/choose_team_svg/curved_line_svg";
import LogoutSVG from "@/svgs/logout_button_svg";
import SadFaceSVG from "@/svgs/choose_team_svg/sad_face_svg";
import CustomButton from "@/components/customButton";
import Splash from "@/svgs/choose_team_svg/splash_svg";

const ChooseTeam: React.FC = () => {
  const router = useRouter();
  const apiService = useApi();
  //const [loading] = useState<boolean>(true);

  const { value: token, clear: clearToken } = useLocalStorage<string>(
    "token",
    ""
  );
  const { value: userId } = useLocalStorage<string>("userId", "");

  const [activeUser, setActiveUser] = useState<User | null>(null);

  const handleLogout = async (): Promise<void> => {
    try {
      if (!activeUser) {
        const response = await apiService.get<User>(`/users/${userId}`, token, {
          headers: {
            Authorization: `Bearer ${token.replace(/^"(.*)"$/, "$1")}`,
          },
        });
        setActiveUser(response);
      }

      if (!activeUser?.username || !activeUser?.id)
        throw new Error("User information is missing.");

      const response = await fetch(`${getApiDomain()}/logoff`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Remove any surrounding quotes from the token (if present)
          Authorization: `Bearer ${token.replace(/^"(.*)"$/, "$1")}`,
        },
        body: JSON.stringify({
          username: activeUser.username,
          id: activeUser.id,
        }),
      });

      if (!response.ok)
        throw new Error(`Logout failed: ${response.statusText}`);

      clearToken();
      localStorage.removeItem("user");
      router.push("/login");
    } catch (error) {
      alert(
        `Logout failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  };

  const handleTeamCreation = async (
    formData: Record<string, unknown>
  ): Promise<void> => {
    try {
      const response = await apiService.post<Team>(
        "/teams",
        { name: formData["teamName"] },
        token
      );
      router.push(`/pinboard/${response.id}`);
    } catch (error) {
      console.error("Error with API call:", error);
    }
  };

  const handleJoinTeam = async (
    formData: Record<string, unknown>
  ): Promise<void> => {
    try {
      const response = await apiService.put<Team>(
        "/teams/join",
        { code: formData["teamCode"] },
        token
      );
      router.push(`/pinboard/${response.id}`);
    } catch (error) {
      console.error("Error with API call:", error);
    }
  };

  // if (loading) {
  //   return <Spin size="large" style={{ display: "block", margin: "50px auto" }} />;
  // }

  const createTeamFields: AnyFormField[] = [
    {
      label: "",
      name: "teamName",
      type: "text",
      width: "400px",
      placeholder: "Please enter your team name",
    },
  ];

  const joinTeamFields: AnyFormField[] = [
    {
      label: "",
      name: "teamCode",
      type: "text",
      width: "400px",
      placeholder: "Please enter your team code",
    },
  ];

  return (
    <div className="team-page">
      {/* Background Splash */}
      <Splash
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          pointerEvents: "none",
          animation: "moveSplash 20s infinite ease-in-out",
        }}
      />

      <div className="flex-container">
        {/* Create Team Section */}
        <div className="flex-section">
          <Form
            onSubmit={handleTeamCreation}
            fields={createTeamFields}
            buttons={[
              {
                type: "submit",
                text: "Create Team",
                width: "190px",
                backgroundColor: "#9cc4f0",
                style: { fontSize: "1.5rem", padding: "10px 20px" },
              },
            ]}
            buttonAreaStyle={{
              paddingTop: "6rem",
              justifyItems: "center",
              background: "transparent",
            }}
          />
        </div>

        {/* First Divider */}
        <div className="divider">
          <LineSvg />
        </div>

        {/* Join Team Section */}
        <div className="flex-section">
          <Form
            onSubmit={handleJoinTeam}
            fields={joinTeamFields}
            buttons={[
              {
                type: "submit",
                text: "Join",
                width: "190px",
                backgroundColor: "#b8f09c",
                style: { fontSize: "1.5rem" },
              },
            ]}
            buttonAreaStyle={{
              paddingTop: "6rem",
              justifyItems: "center",
              background: "transparent",
            }}
          />
        </div>

        {/* Second Divider */}
        <div className="divider">
          <LineSvg />
        </div>

        {/* Delete Account Section */}
        <div className="flex-section">
          <div className="centered-content">
            <div
              onClick={handleLogout}
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "20px",
                right: "20px",
              }}
            >
              <LogoutSVG />
            </div>

            <SadFaceSVG
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "transparent",
                marginBottom: "85px",
              }}
            />
            <CustomButton
              text="Delete Account"
              width="190px"
              backgroundColor="#FF6B6B"
              style={{
                fontSize: "1.4rem",
                padding: "10px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default isAuth(ChooseTeam);

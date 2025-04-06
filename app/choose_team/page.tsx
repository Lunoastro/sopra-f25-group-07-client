"use client";

import { getApiDomain } from "@/utils/domain";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useApi } from "@/hooks/useApi";
import useLocalStorage from "@/hooks/useLocalStorage";
//import { Spin } from "antd";
import { Form, FormField } from "@/components/form";
import { User } from "@/types/user";
import isAuth from "@/isAuth";
import { Team } from "@/types/team";
import LineSvg from "@/svgs/choose_team_svg/curved_line_svg";
import LogoutSVG from "@/svgs/logout_svg";
import SadFaceSVG from "@/svgs/choose_team_svg/sad_face_svg";
import CustomButton from "@/svgs/button_svg";
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
        const response = await apiService.get<User>(`/users/${userId}`, {
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
        "/teams/create",
        { teamName: formData["teamName"] },
        token
      );
      router.push(`/pinboard/${response.teamId}`);
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
        { teamCode: formData["teamCode"] },
        token
      );
      router.push(`/pinboard/${response.teamId}`);
    } catch (error) {
      console.error("Error with API call:", error);
    }
  };

  // if (loading) {
  //   return <Spin size="large" style={{ display: "block", margin: "50px auto" }} />;
  // }

  const createTeamFields: FormField[] = [
    { label: "Please enter your team name", name: "teamName", type: "text" },
  ];

  const joinTeamFields: FormField[] = [
    { label: "Please enter your team code", name: "teamCode", type: "text" },
  ];

  return (
    <div className="team-page">
      {/* Background Splash */}
      <Splash
        style={{
          position: "fixed", // Changed from absolute to fixed
          top: 0,
          left: 0,
          width: "100vw", // Viewport width
          height: "100vh", // Viewport height
          zIndex: 0,
          pointerEvents: "none",
          animation: "moveSplash 20s infinite ease-in-out",
        }}
      />
      <div className="container">
      <div className="container large">
        <Form
          submitButtonName={"Create Team"}
          onSubmit={handleTeamCreation}
          fields={createTeamFields}
        />
      </div>
      <div className="container thin">
        <LineSvg />
      </div>
      <div className="container large">
        <Form
          submitButtonName={"Join Team"}
          onSubmit={handleJoinTeam}
          fields={joinTeamFields}
        />
      </div>
      <div className="container thin">
        <LineSvg />
      </div>
      <div className="container large">
        <SadFaceSVG
          style={{
            marginTop: "-180px", // Adjust the vertical position
            marginLeft: "-50px", // Adjust the horizontal position
            position: "absolute", // Ensures it's positioned relative to its container
            zIndex: 1,
            backgroundColor: "transparent",
          }}
        />
        <div
          onClick={handleLogout} // 👈 Attach the logout handler
          style={{
            cursor: "pointer", // Changes cursor to indicate clickability
            marginTop: "-500px",
            marginLeft: "200px",
            position: "absolute",
            zIndex: 1,
          }}
        >
          <LogoutSVG />
        </div>
        <CustomButton
          hoverColor="#FF6B6B"
          style={{
            marginTop: "200px", // Adjust the vertical position
            marginLeft: "-50px", // Adjust the horizontal position
            position: "absolute", // Ensures it's positioned relative to its container
            zIndex: 1,
          }}
        >
          Delete Account
        </CustomButton>
      </div>
    </div>
    </div>
  );
};

export default isAuth(ChooseTeam);

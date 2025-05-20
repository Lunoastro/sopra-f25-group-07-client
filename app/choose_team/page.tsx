"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useApi } from "@/hooks/useApi";
import useLocalStorage from "@/hooks/useLocalStorage";
import { AnyFormField, Form } from "@/components/form";
import { Team } from "@/types/team";
import LineSvg from "@/svgs/choose_team_svg/curved_line_svg";
import LogoutSVG from "@/svgs/logout_button_svg";

import CustomButton from "@/components/customButton";
import Splash from "@/svgs/choose_team_svg/splash_svg";
import SaddFaceSVG from "@/svgs/sad_face";
import { isRequired, noWhiteSpaceString } from "@/utils/fieldValidation";
import { ApplicationError } from "@/types/error";
import AuthWrapper from "@/hooks/authWrapper";

const ChooseTeam: React.FC = () => {
  const router = useRouter();
  const apiService = useApi();
  const { value: token, clear: clearToken } = useLocalStorage<string>(
    "token",
    ""
  );
  const { clear: clearUser } = useLocalStorage<object>("user", {});

  const [initialTeamCreationFormErrors, setInitialTeamCreationFormErrors] =
    useState<Record<string, string>>({});
  const [initialTeamCreationTouched, setInitialTeamCreationTouched] = useState<
    Record<string, boolean>
  >({});
  const [initialJoinTeamFormErrors, setInitialJoinTeamFormErrors] = useState<
    Record<string, string>
  >({});
  const [initialJoinTeamTouched, setInitialJoinTeamTouched] = useState<
    Record<string, boolean>
  >({});

  const handleLogout = async (): Promise<void> => {
    try {
      await apiService.put("/logout", {}, token);

      clearToken();

      clearUser();
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("isDoodleOn");

      // Force redirect
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);

      // Even if there's an error, clear local storage and redirect
      clearToken();
      clearUser();
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("isDoodleOn");
      router.push("/login");
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
      router.push(`/pinboard/${response?.id}`);
    } catch (error) {
      if (error instanceof ApplicationError) {
        if (error.status == 409) {
          setInitialTeamCreationFormErrors({
            teamName: "Team already exists!",
          });
          setInitialTeamCreationTouched({ teamName: true });
        }
      } else {
        console.error(`Team creation failed due to unexpected error: ${error}`);
      }
    }
  };

  const handleJoinTeam = async (
    formData: Record<string, unknown>
  ): Promise<void> => {
    try {
      const response = await apiService.post<Team>(
        "/teams/join",
        { code: formData["teamCode"] as string },
        token
      );
      router.push(`/pinboard/${response?.id}`);
    } catch (error) {
      if (error instanceof ApplicationError) {
        if (error.status == 404) {
          setInitialJoinTeamFormErrors({
            teamCode: "No team found with this code!",
          });
          setInitialJoinTeamTouched({ teamCode: true });
        }
      } else {
        console.error(`Join team failed due to unexpected error: ${error}`);
      }
    }
  };

  const handleDeleteAccount = async () => {
    // Get user confirmation
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (!confirmDelete) return;

    try {
      // Use the apiService consistently with other API calls
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

      // Only proceed if we have a valid user ID
      if (storedUser.id) {
        // Use the apiService pattern consistently with proper error handling
        await apiService.delete(`/users/${storedUser.id}`, token);

        // Only clear storage and redirect after confirmed deletion
        clearToken();
        localStorage.removeItem("user");
        localStorage.removeItem("isDoodleOn");

        // Force redirect
        router.push("/login");

        // Show success message
        alert("Your account has been deleted successfully.");
      } else {
        throw new Error("User information not found");
      }
    } catch (error) {
      console.error("Account deletion error:", error);

      // Don't clear storage or redirect if the deletion failed
      alert(
        "There was an issue with account deletion. Please try again later."
      );
    }
  };

  const createTeamFields: AnyFormField[] = [
    {
      label: "",
      name: "teamName",
      validationFuncs: [
        { func: isRequired, errorMessage: "Please choose a team name" },
        { func: noWhiteSpaceString },
      ],
      fontSize: "1.5rem",
      type: "text",
      width: "400px",
      placeholder: "Please enter your team name",
    },
  ];

  const joinTeamFields: AnyFormField[] = [
    {
      label: "",
      name: "teamCode",
      validationFuncs: [
        { func: isRequired, errorMessage: "Please insert team code" },
      ],
      type: "text",
      width: "400px",
      fontSize: "1.5rem",
      placeholder: "Please enter your team code",
    },
  ];

  return (
    <AuthWrapper>
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
              initialFormErrors={initialTeamCreationFormErrors}
              initialTouched={initialTeamCreationTouched}
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
              initialFormErrors={initialJoinTeamFormErrors}
              initialTouched={initialJoinTeamTouched}
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

              <SaddFaceSVG
                style={{
                  width: "7rem",
                  marginTop: "-3rem",
                  marginBottom: "2rem",
                }}
              />

              <CustomButton
                onClick={handleDeleteAccount}
                text="Delete Account"
                width="180px"
                height="120px"
                backgroundColor="#FF6B6B"
                style={{
                  fontSize: "1.3rem",
                  padding: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default ChooseTeam;

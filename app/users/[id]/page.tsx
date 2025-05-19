"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useApi } from "@/hooks/useApi";
import { User } from "@/types/user";
import useLocalStorage from "@/hooks/useLocalStorage";
import SplashBackgroundSVG from "@/svgs/profile_svg/splash_background_svg";
import Form, { AnyFormField } from "@/components/form";
import { Button } from "@/components/customButton";
import AuthWrapper from "@/hooks/authWrapper";

const UserProfile = () => {
  const router = useRouter();
  const params = useParams();
  const userId = params?.id as string;
  const apiService = useApi();

  const { value: token} = useLocalStorage("token", "");

  const [isView, setIsView] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const response : User | null = await apiService.get(`/users/${userId}`, token)
      setUser(response)
    }
    getUser()
  },[apiService, token, userId])

  useEffect(() => {
    const getcurrentUser = async () => {
      const response : User | null = await apiService.get("/users/me", token)
      setCurrentUser(response)
    }
    getcurrentUser()
  },[apiService, token, userId])

  const profileFormFields: AnyFormField[] = [
    {
      name: "username",
      label: "Username",
      type: "text",
      width: "100%",
      height: "50px",
      fontSize: "1.5rem",
      className: "profile-form-field",
      style: { marginBottom: "20px", fontWeight: "bold" },
    },
    {
      name: "birthDate",
      label: "Birth Date",

      type: "date",
      width: "100%",
      height: "50px",
      fontSize: "1.5rem",
      className: "profile-form-field",
      style: { marginBottom: "20px", fontWeight: "bold" },
    },
    {
      name: "status",
      label: "status",
      type: "text",
      width: "100%",
      height: "50px",
      fontSize: "1.5rem",
      className: "profile-form-field",
      style: { marginBottom: "20px", fontWeight: "bold" },
    },
  ];

  const initialProfileValues = (): Record<string, string> => {
    if (user?.birthDate) {
      return {
        username: user?.username || "",
        birthDate: user?.birthDate,
        status: user?.status || "",
      };
    }
    return {
      username: user?.username || "",
      status: user?.status || "",
    };
  };

  const profileButtons: Button[] = currentUser?.id === user?.id
    ? [
        {
          type: "button",
          text: "Edit Profile",
          width: "180px",
          backgroundColor: "#9cc4f0",
          style: { fontSize: "1.5rem", padding: "10px 20px" },
          onClick: () => {
            setIsView(false);
          },
        },
      ]
    : [];

  const editProfileButtons: Button[] = [
    {
      type: "button",
      text: "Quit Team",
      width: "180px",
      backgroundColor: "#ff6b6b",
      style: { fontSize: "1.5rem", padding: "10px 20px" },
      onClick: async () => {
        await apiService.delete(`/teams/${currentUser?.teamId}/users/${currentUser?.id}`)
        router.push("/choose_team")
      },
    },
    {
      type: "submit",
      text: "Save",
      width: "180px",
      backgroundColor: "#4CAF50", // Changed to a more typical "save" color
      style: { fontSize: "1.5rem", padding: "10px 20px" },
    },
    {
      type: "button",
      text: "Cancel",
      width: "180px",
      backgroundColor: "#f44336", // Changed to a more typical "cancel" color
      style: { fontSize: "1.5rem", padding: "10px 20px" },
      onClick: () => {
        setIsView(true);
      },
    },
  ];

  const updateProfile = async (data: Record<string, unknown>) => {
    const response : User | null= await apiService.put(`/users/${currentUser?.id}`, data, token)
    if (response) {
      setUser(response)
    }
    setIsView(true)
  }

  return (
    <AuthWrapper>
      <div className="profile-wrapper">
        {/* Main background */}
        <SplashBackgroundSVG className="background-svg" />

        <div className="card-container">
          <div className="profile-frame-container">
            {/* Custom SVG Frame */}

            <div className="profile-title">User Profile: {user?.username}</div>
            <Form
              style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
              isView={isView}
              fields={profileFormFields}
              buttons={isView? profileButtons : editProfileButtons}
              initialValues={initialProfileValues()}
              onSubmit={updateProfile}
              buttonAreaStyle={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "3rem",
              }}
            />
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default UserProfile;

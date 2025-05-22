"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useApi } from "@/hooks/useApi";
import { User } from "@/types/user";
import useLocalStorage from "@/hooks/useLocalStorage";
import SplashBackgroundSVG from "@/svgs/profile_svg/splash_background_svg";
import Form, { AnyFormField, FormValue } from "@/components/form/form";
import { Button } from "@/components/customButton";
import AuthWrapper from "@/hooks/authWrapper";
import { SelectOption } from "@/components/form/selectInput";
import { useWebSocket } from "@/hooks/useWebSocket";

const UserProfile = () => {
  const router = useRouter();
  const params = useParams();
  const userId = params?.id as string;
  const apiService = useApi();

  const { teamMembers, isConnected } = useWebSocket();

  const { value: token} = useLocalStorage("token", "");

  const [isView, setIsView] = useState<boolean>(true);
  const [user, setUser] = useState<User | undefined>(undefined);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  // setting initial team users (will get changed via websocket on server notifications)
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        // Specify the correct return type for the API call
        const teamMembers = await apiService.get<User[]>(
          `/teams/${user?.teamId}/users`,
          token
        );
        setUsers(teamMembers ?? []);
      } catch (error) {
        console.error("Failed to fetch team members for color select:", error);
        setUsers([]);
      }
    };

    if (user) fetchTeamMembers();
  }, [apiService, token, user]);

  // Update team info from websocket when connected and data changes
  useEffect(() => {
    if (isConnected && teamMembers) {
      // Ensure teamUsers is an array before sorting
      const usersArray = Array.isArray(teamMembers) ? teamMembers : [];

      const sortedUsers = usersArray.sort(
      (a: User, b: User) => (b.xp || 0) - (a.xp || 0));

    setUsers(sortedUsers);
    }
  }, [isConnected, teamMembers]);
 
  const initialProfileValues = useMemo((): Record<string, FormValue> => {
    return Object.entries(user ? (user as User) : {}).reduce(
        (result: Record<string, FormValue>, [key, value]) => {
          result[key] = value as FormValue;
          return result;
        },
        {}
      );
  }, [user]);

  const colorsInUse = useMemo(() => {return users.reduce((options : string[], user)  => {
      options.push(user?.color) 
      return options
    }, [])},
    [users]
  )
 
  const colorOptions :  SelectOption[] = useMemo(() => [
    {"value": "C1", "displayedAs": "Red", "inUse": colorsInUse.includes("C1"), "style": {backgroundColor: "var(--member-color-C1)"}},
    {"value": "C2", "displayedAs": "Orange", "inUse": colorsInUse.includes("C2"), "style": {backgroundColor: "var(--member-color-C2)"}},
    {"value": "C3", "displayedAs": "Yellow", "inUse": colorsInUse.includes("C3"), "style": {backgroundColor: "var(--member-color-C3)"}},
    {"value": "C4", "displayedAs": "Green", "inUse": colorsInUse.includes("C4"), "style": {backgroundColor: "var(--member-color-C4)"}},
    {"value": "C5", "displayedAs": "Blue", "inUse": colorsInUse.includes("C5"), "style": {backgroundColor: "var(--member-color-C5)"}},
    {"value": "C6", "displayedAs": "Purple", "inUse": colorsInUse.includes("C6"), "style": {backgroundColor: "var(--member-color-C6)"}},
    {"value": "C7", "displayedAs": "Pink", "inUse": colorsInUse.includes("C7"), "style": {backgroundColor: "var(--member-color-C7)"}},
    {"value": "C8", "displayedAs": "Taupe", "inUse": colorsInUse.includes("C8"), "style": {backgroundColor: "var(--member-color-C8)"}},
    {"value": "C9", "displayedAs": "Turquoise", "inUse": colorsInUse.includes("C9"), "style": {backgroundColor: "var(--member-color-C9)"}},
    {"value": "C10", "displayedAs": "Beige", "inUse": colorsInUse.includes("C10"), "style": {backgroundColor: "var(--member-color-C10)"}}
  ], [colorsInUse])

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
      name: "color",
      label: "Color",
      type: "select",
      options: colorOptions,
      width: "100%",
      height: "50px",
      fontSize: "1.5rem",
      className: "profile-form-field",
      style: { marginBottom: "20px", fontWeight: "bold"},
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
      readOnly: true,
      width: "100%",
      height: "50px",
      fontSize: "1.5rem",
      className: "profile-form-field",
      style: { marginBottom: "20px", fontWeight: "bold" },
    },
  ];


  const profileButtons: Button[] = currentUser?.id === user?.id
    ? [
        {
          type: "button",
          text: "Back",
          width: "180px",
          backgroundColor: "#9cc4f0",
          style: { fontSize: "1.5rem", padding: "10px 20px" },
          onClick: () => {
            router.push(`/pinboard/${currentUser?.teamId}`)
          },
        },
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
    : [
      {
          type: "button",
          text: "Back",
          width: "180px",
          backgroundColor: "#9cc4f0",
          style: { fontSize: "1.5rem", padding: "10px 20px" },
          onClick: () => {
            router.push(`/pinboard/${currentUser?.teamId}`)
          },
        },
    ];

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
      setIsView(true)
    }
  }

  useEffect(() => {
    const getUser = async () => {
      const response : User | null = await apiService.get(`/users/${userId}`, token)
      setUser(response ?? undefined)
    }
    getUser()
  },[apiService, token, userId])

  useEffect(() => {
    const getcurrentUser = async () => {
      const response : User | null = await apiService.get("/users/me", token)
      setCurrentUser(response)
    }
    getcurrentUser()
  },[apiService, initialProfileValues, token, userId, user])

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
              initialValues={initialProfileValues}
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

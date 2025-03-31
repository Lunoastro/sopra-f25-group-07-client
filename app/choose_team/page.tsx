"use client";

import { getApiDomain } from "@/utils/domain";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useApi } from "@/hooks/useApi";
import useLocalStorage from "@/hooks/useLocalStorage";
//import { Spin } from "antd";
import {Form, FormField} from "@/components/form";
import { User } from "@/types/user";
import isAuth from "@/isAuth";
import { Team } from "@/types/team";


const ChooseTeam: React.FC = () => {
  const router = useRouter();
  const apiService = useApi();
  //const [loading] = useState<boolean>(true);

  const { value: token, clear: clearToken } = useLocalStorage<string>("token", "");
  const { value: userId } = useLocalStorage<string>("userId", "");

  const [ activeUser, setActiveUser] = useState<User|null>(null)

  const handleLogout = async (): Promise<void> => {
    try {
      if (!activeUser) {
        const response = await apiService.get<User>(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token.replace(/^"(.*)"$/, "$1")}`,
          },
        })
        setActiveUser(response)
      }

      if (!activeUser?.username || !activeUser?.id) throw new Error("User information is missing.");

      
      const response = await fetch(`${getApiDomain()}/logoff`, {
        method: "PUT",
        headers: { "Content-Type": "application/json",
                    // Remove any surrounding quotes from the token (if present)
                   "Authorization": `Bearer ${token.replace(/^"(.*)"$/, "$1")}`,
         },
        body: JSON.stringify({ "username": activeUser.username, "id": activeUser.id }),
      });

      if (!response.ok) throw new Error(`Logout failed: ${response.statusText}`);

      clearToken();
      localStorage.removeItem("user");
      router.push("/login");
    } catch (error) {
      alert(`Logout failed: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  };

  const handleTeamCreation = async (formData: Record<string, unknown>): Promise<void> => {
    try {
      const response = await apiService.post<Team>('/teams/create', {"teamName": formData["teamName"]}, token);
      router.push(`/pinboard/${response.teamId}`)
    } catch (error) {
      console.error('Error with API call:', error);
    }
  }

  const handleJoinTeam = async (formData: unknown): Promise<void> => {
    console.log("join team:", formData)
  }

  // if (loading) {
  //   return <Spin size="large" style={{ display: "block", margin: "50px auto" }} />;
  // }

  const createTeamFields: FormField[] = [
    {label:"Team Name", name:"teamName", type:"text" }
  ]

  const joinTeamFields: FormField[] = [
    {label:"Team Code", name:"teamCode", type:"text" }
  ]

  return (
    <div>
        <p>Choose Team Page</p>
        <Form submitButtonName={"Create Team"} onSubmit={handleTeamCreation} fields={createTeamFields}></Form>
        <Form submitButtonName={"Join Team"} onSubmit={handleJoinTeam} fields={joinTeamFields}></Form>
        <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default isAuth(ChooseTeam);

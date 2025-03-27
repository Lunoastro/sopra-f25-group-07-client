"use client";

import { getApiDomain } from "@/utils/domain";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useApi } from "@/hooks/useApi";
import useLocalStorage from "@/hooks/useLocalStorage";
//import { Spin } from "antd";
import {Form, FormField} from "@/components/form";

const ChooseTeam: React.FC = () => {
  const router = useRouter();
  const apiService = useApi();
  //const [loading] = useState<boolean>(true);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  const { clear: clearToken } = useLocalStorage<string>("token", "");

  const handleLogout = async (): Promise<void> => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
      if (!storedUser.username || !storedUser.id) throw new Error("User information is missing.");

      let token = localStorage.getItem("token");
  
      // Remove any surrounding quotes from the token (if present)
      if (token) {
        token = token.replace(/^"(.*)"$/, "$1");
      }

      const response = await fetch(`${getApiDomain()}/logoff`, {
        method: "PUT",
        headers: { "Content-Type": "application/json",
                   "Authorization": `Bearer ${token}`,
         },
        body: JSON.stringify({ username: storedUser.username, id: storedUser.id }),
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
    // teamname: string, userid: string
    try {
      await apiService.post<string>('/teams', (formData.teamName as string));
    } catch (error) {
      console.error('Error with API call:', error);
    }
  }

  const handleJoinTeam = async (formData: unknown): Promise<void> => {
    console.log("team creation:", formData)
  }

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    let token = localStorage.getItem("token");

    if (!storedUser.username || !storedUser.id || !token) {
      alert("You are not logged in");
      router.push("/login");
    } else {
      token = token?.replace(/^"(.*)"$/, "$1");
    }
////////// test test test test
/// test 
/// test 
/// test
/// test agaian
/// test etst
/// test final
    setIsAuthChecked(true);
  }, [apiService, router]);

  if (!isAuthChecked) return null;

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

export default ChooseTeam;

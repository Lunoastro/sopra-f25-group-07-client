"use client";

import { getApiDomain } from "@/utils/domain";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";
import isAuth from "@/isAuth";
import TaskList from "./taskList";

const Pinboard: React.FC = () => {
  const router = useRouter();
  //const apiService = useApi();
  const [loading] = useState<boolean>(true);


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

  if (loading) {
    //return <Spin size="large" style={{ display: "block", margin: "50px auto" }} />;
  }

  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
        <TaskList />
    </div>
  );
};

export default isAuth(Pinboard);
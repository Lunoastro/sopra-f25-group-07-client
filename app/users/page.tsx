"use client";

import { getApiDomain } from "@/utils/domain";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useApi } from "@/hooks/useApi";
import useLocalStorage from "@/hooks/useLocalStorage";
import { User } from "@/types/user";
import { Button, Card, Table, Spin } from "antd";
import type { TableProps } from "antd";

const Dashboard: React.FC = () => {
  const router = useRouter();
  const apiService = useApi();
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
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

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    let token = localStorage.getItem("token");

    if (!storedUser.username || !storedUser.id || !token) {
      alert("You are not logged in");
      router.push("/login");
    } else {
      token = token?.replace(/^"(.*)"$/, "$1");

      const fetchUsers = async () => {
        try {
          const users: User[] = await apiService.get<User[]>("/users", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUsers(users);
        } catch (error) {
          console.error("Failed to fetch users:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchUsers();
    }

    setIsAuthChecked(true);
  }, [apiService, router]);

  if (!isAuthChecked) return null;

  if (loading) {
    return <Spin size="large" style={{ display: "block", margin: "50px auto" }} />;
  }

  const columns: TableProps<User>["columns"] = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      render: (text, record) => (
        <a onClick={() => router.push(`/users/${record.id}`)} style={{ cursor: "pointer" }}>
          {text}
        </a>
      ),
    },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Id", dataIndex: "id", key: "id" },
  ];

  return (
    <div className="card-container">
      <Card title="Get all users from secure endpoint:" className="dashboard-container">
        {users && (
          <>
            <Table<User> columns={columns} dataSource={users} rowKey="id" />
            <Button onClick={handleLogout} type="primary">
              Logout
            </Button>
          </>
        )}
      </Card>
    </div>
  );
};

export default Dashboard;

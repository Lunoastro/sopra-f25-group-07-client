// your code here for S2 to display a single user profile after having clicked on it
// each user has their own slug /[id] (/1, /2, /3, ...) and is displayed using this file
// try to leverage the component library from antd by utilizing "Card" to display the individual user
// import { Card } from "antd"; // similar to /app/users/page.tsx

"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useApi } from "@/hooks/useApi";
import { User } from "@/types/user";
import { Card, Spin, Button, Descriptions } from "antd";

const UserProfile = () => {
  const router = useRouter();
  const params = useParams();
  const userId = params?.id as string; // Correctly unwrap params
  const apiService = useApi();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthChecked, setIsAuthChecked] = useState(false); // Track auth check status

  useEffect(() => {
    // Retrieve the token from localStorage
    let token = localStorage.getItem("token");
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  
    // If user data or token is not found, redirect to login page immediately
    if (!storedUser.username || !storedUser.id || !token) {
      alert("You are not logged in");
      router.push("/login");
    } else {
      // Remove any surrounding quotes from the token (if present)
      token = token?.replace(/^"(.*)"$/, "$1"); // Removes quotes if the token is surrounded by quotes
  
      // If user is logged in, fetch the user data
      const fetchUser = async () => {
        try {

            // Pass token as Authorization header
          const userData = await apiService.get<User>(`/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`, // Pass token here
            },
          });

          setUser(userData);
        } catch (error) { // Explicitly type the error as 'any'
          console.error("Failed to fetch user:", error); // Log the error to the console
        } finally {
          setLoading(false);
        }
      };
  
      fetchUser();
    }
  
    // Mark auth check as done only after the checks and potential fetch have completed
    setIsAuthChecked(true);
  }, [apiService, router, userId]); // Make sure you add `apiService`, `router`, and `userId` to the dependencies
  
  
  

  // Prevent rendering content until authentication check is done
  if (!isAuthChecked) {
    return null; // Nothing renders until auth check is done
  }

  if (loading) {
    return <Spin size="large" style={{ display: "block", margin: "50px auto" }} />;
  }

  if (!user) {
    return (
      <Card title="User Not Found" style={{ maxWidth: 500, margin: "20px auto" }}>
        <p>The requested user does not exist.</p>
        <Button onClick={() => router.push("/users")} type="primary">
          Back to Users
        </Button>
      </Card>
    );
  }

  return (
    <div className="card-container">
      <Card
        title={`User Profile: ${user.username}`}
        className="dashboard-container"
        style={{
          maxWidth: 600,
          margin: "20px auto",
          position: "relative",
        }}
      >
        {/* Edit button */}
        <Button
          onClick={() => router.push(`/users/${user.id}/edit`)} // Redirect to edit page
          type="default"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 10, // Ensure it's on top
          }}
        >
          EDIT
        </Button>

        <Descriptions bordered column={1}>
          <Descriptions.Item label="Username">{user.username}</Descriptions.Item>
          <Descriptions.Item label="Online Status">{user.status}</Descriptions.Item>
          <Descriptions.Item label="Creation Date">
            {new Date(user?.creationDate || "").toLocaleDateString()}
          </Descriptions.Item>
          <Descriptions.Item label="Birth Date">
            {user?.birthDate ? new Date(user?.birthDate).toLocaleDateString() : "Click EDIT to set"}
          </Descriptions.Item>
        </Descriptions>

        <div style={{ marginTop: "20px", textAlign: "right" }}>
          <Button onClick={() => router.push("/users")} type="primary" style={{ marginRight: "10px" }}>
            Back to Users
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default UserProfile;

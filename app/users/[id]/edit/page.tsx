"use client";

import { getApiDomain } from "@/utils/domain";
import { useState, useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button, Form, Input, Spin, Card } from "antd";
import { User } from "@/types/user";
import { useApi } from "@/hooks/useApi";
import moment from "moment";
import useLocalStorage from "@/hooks/useLocalStorage";

interface FormValues {
  username: string;
  birthDate: moment.Moment | null;
}

const EditUserProfile = () => {
  const router = useRouter();
  const params = useParams();
  const userId = params?.id as string; // Get the userId from the URL
  const apiService = useApi();
  
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { value: token, set: setToken} = useLocalStorage<string>("token", "");
  
  // Use a ref to keep track of whether we've shown the alert
  const alertShownRef = useRef(false);

  useEffect(() => {
    if (alertShownRef.current) return; // Skip if the alert has already been shown

    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    const urlUserId = String(userId);
    const storedUserId = String(storedUser.id);

    // Remove any surrounding quotes from the token (if present)
    if (token) {
      setToken(token);
    }

    // If the user is not logged in
    if (!storedUser.username || !storedUser.id) {
      alert("You are not logged in");
      router.push("/login");
      return;
    }

    // If the user tries to edit someone else's profile
    if (storedUserId !== urlUserId) {
      alert("You cannot edit the profiles of others");
      router.push(`/users/${urlUserId}`);
      alertShownRef.current = true; // Set the ref flag to true
      return;
    }

    // Fetch the user data
    const fetchUser = async () => {
      try {
        const response = await apiService.get<User>(`/users/${urlUserId}`, token, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [apiService, router, userId, setToken, token]); // Dependency array without alertShownRef

  const handleSubmit = async (values: FormValues): Promise<void> => {
    try {
      const formattedDate = values.birthDate
        ? moment(values.birthDate, "DD.MM.YYYY").add(1, "hours").toDate()
        : null;
  
      // Use a let variable so it can be reassigned
      let token = localStorage.getItem("token");
  
      // Remove any surrounding quotes from the token (if present)
      if (token) {
        token = token.replace(/^"(.*)"$/, "$1");
      }
  
      // For PUT request, now include token in the Authorization header
      const response = await fetch(`${getApiDomain()}/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include token here
        },
        body: JSON.stringify({
          username: values.username,
          birthDate: formattedDate,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Profile update failed: ${response.statusText}`);
      }
  
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
      localStorage.setItem("user", JSON.stringify({ username: values.username, id: storedUser.id }));
  
      router.push(`/users/${userId}`); // Redirect back to the profile page after saving
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };
  

  if (loading) {
    return <Spin size="large" style={{ display: "block", margin: "50px auto" }} />;
  }

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div className="card-container">
      <Card
        title={`Edit Profile: ${user.name}`}
        className="dashboard-container"
        style={{
          maxWidth: 600,
          margin: "20px auto",
          position: "relative",
        }}
      >
        <Form
          onFinish={handleSubmit}
          initialValues={{
            username: user.username,
            birthDate: user.birthDate ? moment(user.birthDate).format("DD.MM.YYYY") : "",
          }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Birth Date"
            name="birthDate"
            rules={[
              {
                pattern: /^\d{2}\.\d{2}\.\d{4}$/,
                message: "Date must be in format DD.MM.YYYY",
              },
            ]}
          >
            <Input placeholder="Format: DD.MM.YYYY" />
          </Form.Item>

          <div style={{ marginTop: "20px", textAlign: "right" }}>
            <Button type="primary" htmlType="submit" style={{ marginRight: "10px" }}>
              Save Changes
            </Button>
            <Button onClick={() => router.push(`/users/${userId}`)}>
              Cancel
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default EditUserProfile;

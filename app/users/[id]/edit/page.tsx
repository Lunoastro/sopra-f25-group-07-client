"use client";

import { getApiDomain } from "@/utils/domain";
import { useState, useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button, Form, Input, Spin, Card, Select } from "antd";
import { User } from "@/types/user";
import { useApi } from "@/hooks/useApi";
import moment from "moment";
import useLocalStorage from "@/hooks/useLocalStorage";

const { Option } = Select;

interface FormValues {
  username: string;
  birthDate: moment.Moment | null;
  color: string; // Add color to form values
}

// Define color options matching your CSS variables
const COLOR_OPTIONS = [
  { id: "C1", name: "Pink" },
  { id: "C2", name: "Peach" },
  { id: "C3", name: "Yellow" },
  { id: "C4", name: "Mint" },
  { id: "C5", name: "Blue" },
  { id: "C6", name: "Lavender" },
  { id: "C7", name: "Magenta" },
  { id: "C8", name: "Taupe" },
  { id: "C9", name: "Aqua" },
  { id: "C10", name: "Tan" },
];

const EditUserProfile = () => {
  const router = useRouter();
  const params = useParams();
  const userId = params?.id as string;
  const apiService = useApi();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { value: token, set: setToken } = useLocalStorage<string>("token", "");

  const alertShownRef = useRef(false);

  useEffect(() => {
    if (alertShownRef.current) return;

    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    const urlUserId = String(userId);
    const storedUserId = String(storedUser.id);

    if (token) {
      setToken(token);
    }

    if (!storedUser.username || !storedUser.id) {
      alert("You are not logged in");
      router.push("/login");
      return;
    }

    if (storedUserId !== urlUserId) {
      alert("You cannot edit the profiles of others");
      router.push(`/users/${urlUserId}`);
      alertShownRef.current = true;
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await apiService.get<User>(
          `/users/${urlUserId}`,
          token,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(response);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [apiService, router, userId, setToken, token]);

  const handleSubmit = async (values: FormValues): Promise<void> => {
    try {
      const formattedDate = values.birthDate
        ? moment(values.birthDate, "DD.MM.YYYY").add(1, "hours").toDate()
        : null;

      let token = localStorage.getItem("token");
      if (token) {
        token = token.replace(/^"(.*)"$/, "$1");
      }

      const response = await fetch(`${getApiDomain()}/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: values.username,
          birthDate: formattedDate,
          color: values.color, // Include the color in the update
        }),
      });

      if (!response.ok) {
        throw new Error(`Profile update failed: ${response.statusText}`);
      }

      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...storedUser,
          username: values.username,
          color: values.color, // Update local storage with new color
        })
      );

      router.push(`/users/${userId}`);
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  if (loading) {
    return (
      <Spin size="large" style={{ display: "block", margin: "50px auto" }} />
    );
  }

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div className="card-container">
      <Card
        title={`Edit Profile: ${user.username}`} // Changed from user.name to user.username
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
            birthDate: user.birthDate
              ? moment(user.birthDate).format("DD.MM.YYYY")
              : "",
            color: user.color || "C1", // Default to C1 if no color
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

          <Form.Item label="Color" name="color">
            <Select>
              {COLOR_OPTIONS.map((color) => (
                <Option key={color.id} value={color.id}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span
                      style={{
                        display: "inline-block",
                        width: "20px",
                        height: "20px",
                        backgroundColor: `var(--member-color-${color.id})`,
                        borderRadius: "50%",
                        border: "1px solid #ccc",
                        marginRight: "8px",
                      }}
                    />
                    {color.name}
                  </div>
                </Option>
              ))}
            </Select>
          </Form.Item>

          <div style={{ marginTop: "20px", textAlign: "right" }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: "10px" }}
            >
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

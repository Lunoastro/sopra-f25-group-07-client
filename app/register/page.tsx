"use client";

import { useRouter } from "next/navigation";
import { useApi } from "@/hooks/useApi";
import useLocalStorage from "@/hooks/useLocalStorage";
import { User } from "@/types/user";
import { Button, Form, Input } from "antd";
import { useEffect } from "react";


// Make sure you use the same class as the login page for styling consistency
const Register: React.FC = () => {
  const router = useRouter();
  const apiService = useApi();
  const [form] = Form.useForm();
  const { value: token, set: setToken } = useLocalStorage<string>("token", "");

  const handleRegister = async (values: { username: string; password: string }) => {
    try {
      const response = await apiService.post<User>("/users", values);

      if (response.token) {
        // keeping track of session
        setToken(response.token);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(`Registration failed because Username already exists: ${error.message}`);
      } else {
        console.error("add Username failed because Username already exists.");
      }
    }
  };

  useEffect(()=> {
    if (token) {
      router.push("/choose_team");
    }
  }, [router, token])

  return (
    <div className="login-container"> {/* Use the same class as login */}
      <Form form={form} name="register" size="large" onFinish={handleRegister} layout="vertical">
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Enter username" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-button"> {/* Use the same button class as login */}
            Register
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="button"
            className="login-button"
            onClick={() => router.push("/login")}
          >
            Go to Login
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="button" className="login-button" onClick={() => router.push("/")}>
            Back to Dashboard
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;

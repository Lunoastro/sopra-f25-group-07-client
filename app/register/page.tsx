"use client";

import { useRouter } from "next/navigation";
import { useApi } from "@/hooks/useApi";
import useLocalStorage from "@/hooks/useLocalStorage";
import { User } from "@/types/user";
import { useEffect } from "react";
import { Form, FormField } from "@/components/form";
import LoginRegisterSplashSVG from "@/svgs/login_register_splash_svg";
import CircleSvg from "@/svgs/circle_svg";
import SmileFaceSVG from "@/svgs/smile_face_svg";

interface FormFieldProps {
  label: string;
  value: string;
  primaryButtonStyle?: React.CSSProperties;
  secondaryButtonStyle?: React.CSSProperties;
}

// Make sure you use the same class as the login page for styling consistency
const Register: React.FC = () => {
  const router = useRouter();
  const apiService = useApi();

  const { value: token, set: setToken } = useLocalStorage<string>("token", "");

  const handleRegister = async (values: FormFieldProps) => {
    try {
      const response = await apiService.post<User>("/users", values);

      if (response.token) {
        // keeping track of session
        setToken(response.token);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(
          `Registration failed because Username already exists: ${error.message}`
        );
      } else {
        console.error("add Username failed because Username already exists.");
      }
    }
  };

  useEffect(() => {
    if (token) {
      router.push("/choose_team");
    }
  }, [router, token]);

  const registerFields: FormField[] = [
    { label: "Username", name: "username", type: "text" },
    { label: "Password", name: "password", type: "password" },
  ];

  return (
    <div className="login-container">
      <SmileFaceSVG
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <LoginRegisterSplashSVG
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      {/* Use the same class as login */}
      <Form
        submitButtonName={"Register"}
        onSubmit={handleRegister}
        fields={registerFields}
        secondaryButtonName={{
          string: "Log in",
          onClick: () => router.push("/login"),
        }}
      />
      <CircleSvg
        fill="#8fbbe4"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -2,
        }}
      />
      <div
        style={{
          position: "absolute", // Takes element out of flow
          fontSize: "3rem",
          top: "80px", // Position relative to nearest positioned parent
          left: "250px", // Adjust as needed
          fontWeight: "500",
          zIndex: 10, // Ensure text stays above other elements
        }}
      >
        REGISTRATION
      </div>
    </div>
  );
};

export default Register;

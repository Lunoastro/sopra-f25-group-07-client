"use client";

import { useRouter } from "next/navigation";
import { useApi } from "@/hooks/useApi";
import useLocalStorage from "@/hooks/useLocalStorage";
import { User } from "@/types/user";
import { AnyFormField, Form } from "@/components/form";
import LoginRegisterSplashSVG from "@/svgs/login_register_splash_svg";
import CircleSvg from "@/svgs/circle_svg";
import SmileFaceSVG from "@/svgs/smile_face_svg";
import { hasMinLength, isRequired, noWhiteSpaceString } from "@/utils/fieldValidation";
import { ApplicationError } from "@/types/error";
import { useState } from "react";

const Register: React.FC = () => {
  const router = useRouter();
  const apiService = useApi();

  const { set: setToken } = useLocalStorage<string>("token", "");

  const [initialFormErrors, setInitialFormErrors] = useState<Record<string, string>>({})
  const [initialTouched, setInitialTouched] = useState<Record<string, boolean>>({})

  const handleRegister = async (
    formData: Record<string, unknown>
  ): Promise<void> => {
    try {
      const username = formData["username"] as string;
      const password = formData["password"] as string;
      await apiService.post<User>("/users", {
        username,
        password,
      });
      const response = await apiService.post<User>("/login", {
        username,
        password,
      });

      if (response?.token) {
        // keeping track of session
        setToken(response.token);
        router.push("/choose_team");
        localStorage.setItem(
          "user",
          JSON.stringify({
            username: response.username,
            id: response.id,
          })
        );
      }
    } catch (error) {
      if (error instanceof ApplicationError) {
        if (error.status == 409) {
          setInitialFormErrors({"username": "Username already exists!"})
          setInitialTouched({"username": true})
        }
      } else {
        console.error(`Registration failed due to unexpected error: ${error}`);
      }
    }
  };

  const registerFields: AnyFormField[] = [
    {
      label: "Username",
      name: "username",
      type: "text",
      validationFuncs: [
        {func: isRequired, errorMessage: "Please choose a username"}, 
        {func: noWhiteSpaceString},
      ],
      height: "4rem",
      fontSize: "1.5rem",
      labelFontSize: "1.3rem",
      width: "15rem",
      style: { flex: "0 0 100%" },
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      validationFuncs: [
        {func: isRequired, errorMessage: "Please choose a password"},
        {func: hasMinLength, min: 8},
      ],
      fontSize: "1.5rem",
      labelFontSize: "1.3rem",
      height: "4rem",
      width: "15em",
      style: { flex: "0 0 100%" },
    },
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
        onSubmit={handleRegister}
        initialFormErrors={initialFormErrors}
        initialTouched={initialTouched}
        fields={registerFields}
        buttons={[
          {
            text: "Log in",
            type: "button",
            width: "150px",
            onClick: () => router.push("/login"),
            style: { fontSize: "1.5rem" },
          },
          {
            text: "Register",
            type: "submit",
            width: "150px",
            backgroundColor: "#b8f09c",
            style: { fontSize: "1.5rem" },
          },
        ]}
        buttonAreaStyle={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "3rem",
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
          position: "absolute",
          fontSize: "3rem",
          top: "80px",
          left: "50%",
          transform: "translateX(-70%)",
          fontWeight: "500",
          zIndex: 10,
          width: "100%",
          textAlign: "center",
        }}
      >
        REGISTRATION
      </div>
    </div>
  );
};

export default Register;

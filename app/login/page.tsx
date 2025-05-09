"use client"; // For components that need React hooks and browser APIs, SSR (server side rendering) has to be disabled. Read more here: https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering

import { useRouter } from "next/navigation"; // use NextJS router for navigation
import { useApi } from "@/hooks/useApi";
import { User } from "@/types/user";
// Optionally, you can import a CSS module or file for additional styling:
// import styles from "@/styles/page.module.css";
import { AnyFormField, Form } from "@/components/form";
import LoginRegisterSplashSVG from "@/svgs/login_register_splash_svg";
import CircleSvg from "@/svgs/circle_svg";
import SmileFaceSVG from "@/svgs/smile_face_svg";
import { isRequired } from "@/utils/fieldValidation";
import { useState } from "react";
import { ApplicationError } from "@/types/error";
import useLocalStorage from "@/hooks/useLocalStorage";
////

const Login: React.FC = () => {
  const router = useRouter();
  const apiService = useApi();

  // useLocalStorage hook example use
  // The hook returns an object with the value and two functions
  // Simply choose what you need from the hook:
  const {
    // value: token, // is commented out because we do not need the token value
    set: setToken, // we need this method to set the value of the token to the one we receive from the POST request to the backend server API
    // clear: clearToken, // is commented out because we do not need to clear the token when logging in
  } = useLocalStorage<string>("token", ""); // note that the key we are selecting is "token" and the default value we are setting is an empty string
  // if you want to pick a different token, i.e "usertoken", the line above would look as follows: } = useLocalStorage<string>("usertoken", "");

  const [initialFormErrors, setInitialFormErrors] = useState<Record<string, string>>({})
  const [initialTouched, setInitialTouched] = useState<Record<string, boolean>>({})

  const handleLogin = async (
    formData: Record<string, unknown>
  ): Promise<void> => {
    try {
      const username = formData["username"] as string;
      const password = formData["password"] as string;

      // Call the API service and let it handle JSON serialization and error handling
      const response = await apiService.post<User>("/login", {
        username,
        password,
      });

      // Use the useLocalStorage hook that returned a setter function (setToken in line 41) to store the token if available
      if (response?.token) {
        // keeping track of session
        setToken(response.token);

        localStorage.setItem(
          "user",
          JSON.stringify({
            username: response.username,
            id: response.id,
          })
        );

        if (response.teamId) { 
          router.push(`/pinboard/${response.teamId}`);
        } else {
          router.push("/choose_team");
        }
      }
    } catch (error) {
      if (error instanceof ApplicationError) {
        if (error.status == 400) {
          setInitialFormErrors({"username": "Username or password incorrect", "password": "Username or password incorrect"})
          setInitialTouched({"username": true, "password": true})
        }
      } else {
        console.error(`Login failed due to unexpected error: ${error}`);
      }
    }
  };

  const loginFields: AnyFormField[] = [
    {
      label: "Username",
      name: "username",
      type: "text",
      validationFuncs: [{func: isRequired, errorMessage: "Please insert username"}],
      height: "4rem",
      width: "15rem",
      fontSize: "1.5rem",
      labelFontSize: "1.3rem",
      style: { flex: "0 0 100%" },
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      validationFuncs: [{func: isRequired, errorMessage: "Please insert password"}],
      height: "4rem",
      fontSize: "1.5rem",
      labelFontSize: "1.3rem",
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

      <Form
        onSubmit={handleLogin}
        fields={loginFields}
        initialFormErrors={initialFormErrors}
        initialTouched={initialTouched}
        buttons={[
          {
            text: "Register",
            type: "button",
            width: "150px",
            onClick: () => router.push("/register"),
            style: { fontSize: "1.5rem" },
          },

          {
            text: "Log in",
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
        LOGIN
      </div>
    </div>
  );
};

export default Login;

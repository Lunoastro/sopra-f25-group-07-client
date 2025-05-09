"use client"; // For components that need React hooks and browser APIs, SSR (server side rendering) has to be disabled. Read more here: https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering
import "@ant-design/v5-patch-for-react-19"; //Design components
import CustomButton from "./components/customButton";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js

export default function Home() {
  const router = useRouter(); // Initialize the useRouter hook

  // Function to navigate to the register page
  const goToRegister = () => {
    router.push("/register"); // Route to the register page
  };

  // Function to navigate to the login page
  const goToLogin = () => {
    router.push("/login"); // Route to the login page
  };

  return (
    <WebSocketProvider url={`ws://${getApiDomain()}/api/ws/updates`}>
      <div
        style={{
          backgroundImage: "url(/images/home_page.svg)", // Path to your SVG
          backgroundSize: "cover", // Adjust background size to cover the area
          backgroundPosition: "center", // Center the background
          backgroundRepeat: "no-repeat", // Prevent background repetition
          height: "100vh", // Set height to cover the viewport (you can adjust it as needed)
          display: "flex", // Enable flexbox for horizontal layout
          alignItems: "center", // Align items vertically in the center
          padding: "0 8rem",
          gap: "4rem",
        }}
      >
        <CustomButton
          text="Register"
          width="150px"
          backgroundColor="#b8f09c"
          style={{
            fontSize: "1.5rem",
            padding: "10px",
          }}
          onClick={goToRegister} // Set the onClick handler to go to the register page
        />
        <CustomButton
          text="Log In"
          width="150px"
          style={{
            fontSize: "1.5rem",
            padding: "10px",
          }}
          onClick={goToLogin} // Set the onClick handler to go to the login page
        />
      </div>
    </WebSocketProvider>
  );
}

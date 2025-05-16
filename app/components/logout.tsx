import { useApi } from "@/hooks/useApi";
import useLocalStorage from "@/hooks/useLocalStorage";
import LogoutSVG from "@/svgs/logout_button_svg";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type LogoutProps =  {
    router : AppRouterInstance;
}

const Logout = ({router}: LogoutProps) => {

    const apiService = useApi()

    const { value: token, clear: clearToken } = useLocalStorage<string>("token", "");
    const { clear: clearCalendarMode } = useLocalStorage<boolean>("calendarMode", false);
    

    const handleLogout = async (): Promise<void> => {
        try {
          await apiService.put("/logout", {}, token);
    
          clearToken();
          clearCalendarMode();
    
          // Force redirect
          router.push("/login");
        } catch (error) {
          console.error("Logout error:", error);
    
          // Even if there's an error, clear local storage and redirect
          clearToken();
          localStorage.removeItem("user");
          localStorage.removeItem("isDoodleOn");
          router.push("/login");
        }
      };

    return (
        <div
          onClick={handleLogout}
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "20px",
            right: "20px",
          }}
        >
          <LogoutSVG />
        </div>
    )
}

export default Logout;
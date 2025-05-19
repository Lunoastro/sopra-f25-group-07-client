import { useParams } from "next/navigation";
import DoodleToggle from "./toggle";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type PinboardLocation = "pinboard" | "calendar"

type PinboardCalendarToggleProps = {
    location: PinboardLocation;
    router: AppRouterInstance;
}

const PinboardCalendarToggle = ({location, router} : PinboardCalendarToggleProps) => {

    const params = useParams();
    const teamId = params.id;

    const isPinboard = location === "pinboard";

    const switchView = () => {
        if (location == "pinboard") {
            router.push(`/calendar/${teamId}`);
        } else {
            router.push(`/pinboard/${teamId}`);
        }
        

  };
  return (
    <div className="toggle-wrapper">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                marginRight: "1rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Calendar
            </div>
            <DoodleToggle
              isOn={isPinboard}
              onChange={switchView}
              size="md"
            />
            <div
              style={{
                marginLeft: "1rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Pinboard
            </div>
          </div>
        </div>
  )
}

export default PinboardCalendarToggle;
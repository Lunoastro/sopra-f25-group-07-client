import { useParams, useRouter } from "next/navigation";
import DoodleToggle from "./toggle";

type PinboardLocation = "pinboard" | "calendar"

type PinboardCalendarToggleProps = {
    location: PinboardLocation;
}

const PinboardCalendarToggle = ({location} : PinboardCalendarToggleProps) => {

    const router = useRouter()
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
              isOn={!isPinboard}
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
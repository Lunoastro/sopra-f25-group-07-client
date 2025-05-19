// LuckyDrawManager.tsx
import React from "react";
import { Task } from "@/types/task";
import SimplePopup from "@/components/simplepopup"; // Adjust path as needed
import { ApiService } from "@/api/apiService";

interface LuckyDrawManagerProps {
  tasks: Task[];
  token: string | null;
  apiService: ApiService;
  explainPopupVisible: boolean;
  setExplainPopupVisible: (visible: boolean) => void;
  onTasksUpdated?: () => void; // Optional callback for when tasks are updated
}

const LuckyDrawManager: React.FC<LuckyDrawManagerProps> = ({
  tasks,
  token,
  apiService,
  explainPopupVisible,
  setExplainPopupVisible,
  onTasksUpdated,
}) => {
  // Notification state
  const [notificationVisible, setNotificationVisible] =
    React.useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] =
    React.useState<string>("");

  // Activate the Lucky Draw via API call
  const activateLuckyDraw = async () => {
    // Close the explanation popup
    setExplainPopupVisible(false);

    try {
      // Count unclaimed tasks before the API call
      const unclaimedTasksBefore = tasks.filter(
        (task) => !task.color && !task.isAssignedTo
      );
      const alreadyCoveredTasks = tasks.filter(
        (task) => task.luckyDraw && !task.isAssignedTo
      );

      // Call the API to activate Lucky Draw
      await apiService.post("/tasks/luckyDraw", {}, token);

      // If callback provided, call it to refresh tasks in parent component
      if (onTasksUpdated) {
        onTasksUpdated();
      }

      // Force a refresh of tasks for all clients
      try {
        await apiService.get(`/tasks`, token);
      } catch (error) {
        console.error("Error triggering task update:", error);
      }

      // Determine the appropriate message
      let message = "";

      if (tasks.length === 0) {
        message =
          "No tasks available. Please create some tasks first before using Lucky Draw.";
      } else if (unclaimedTasksBefore.length === 0) {
        message =
          "No unclaimed tasks to be covered. Create some new tasks first, then trigger Lucky Draw.";
      } else if (alreadyCoveredTasks.length === unclaimedTasksBefore.length) {
        message = "All tasks are already covered.";
      } else {
        const newlyCoveredCount =
          unclaimedTasksBefore.length - alreadyCoveredTasks.length;
        if (newlyCoveredCount > 0) {
          message = `Lucky Draw activated! ${newlyCoveredCount} new task${
            newlyCoveredCount > 1 ? "s" : ""
          } covered.`;
        } else {
          message =
            "Lucky Draw activated! All unclaimed tasks are now covered.";
        }
      }

      // Show notification
      setNotificationMessage(message);
      setNotificationVisible(true);
    } catch (error) {
      console.error("Error activating Lucky Draw:", error);
      setNotificationMessage(
        "An error occurred while activating Lucky Draw. Please try again."
      );
      setNotificationVisible(true);
    }
  };

  // Render the popups
  return (
    <>
      {/* Lucky Draw Explanation Popup */}
      <SimplePopup
        isVisible={explainPopupVisible}
        title="Lucky Draw"
        content={
          <div>
            <p>
              When Lucky Draw is activated, all currently unclaimed tasks will
              be covered with `&quot;``&quot;`???`&quot;``&quot;`. You
              won`&apos;`t know what task you`&apos;`re selecting until after
              you claim it!
            </p>
            <p>
              <strong>Note:</strong> If you have created new tasks since the
              last Lucky Draw activation, pressing the button again will cover
              those too.
            </p>
            <p>
              <strong>Important:</strong> Once you select a covered task, you
              cannot drop it! Each covered task is revealed only when you select
              it.
            </p>
          </div>
        }
        buttons={[
          {
            text: "Cancel",
            onClick: () => setExplainPopupVisible(false),
            color: "#f0a59c",
          },
          {
            text: "Start",
            onClick: activateLuckyDraw,
            color: "#83cf5d",
          },
        ]}
        onClose={() => setExplainPopupVisible(false)}
      />

      {/* Notification Popup */}
      <SimplePopup
        isVisible={notificationVisible}
        title="Notification"
        content={
          <div>
            <p>{notificationMessage}</p>
          </div>
        }
        buttons={[
          {
            text: "OK",
            onClick: () => setNotificationVisible(false),
            color: "#83cf5d",
          },
        ]}
        onClose={() => setNotificationVisible(false)}
      />
    </>
  );
};

export default LuckyDrawManager;

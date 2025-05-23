// KarmasHandManager.tsx
import React, { useState } from "react";
import { Task } from "@/types/task";
import SimplePopup from "@/components/simplepopup";
import { User } from "@/types/user";
import { ApiService } from "@/api/apiService";

interface KarmasHandManagerProps {
  tasks: Task[];
  token: string | null;
  apiService: ApiService;
  explainPopupVisible: boolean;
  setExplainPopupVisible: (visible: boolean) => void;
  currentUser: User | null;
}

const KarmasHandManager: React.FC<KarmasHandManagerProps> = ({
  tasks,
  token,
  apiService,
  explainPopupVisible,
  setExplainPopupVisible,

  currentUser,
}) => {
  // Notification state
  const [notificationVisible, setNotificationVisible] =
    useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>("");

  // Activate Karma's Hand via API call
  const activateKarmasHand = async () => {
    // Close the explanation popup
    setExplainPopupVisible(false);

    try {
      // Count unclaimed active tasks before the API call
      const unclaimedTasksBefore = tasks.filter(
        (task) => !task.color && !task.isAssignedTo
      );

      // Track user's original task count from current active tasks
      const userTasksBefore = tasks.filter(
        (task) => task.isAssignedTo === currentUser?.id
      );
      const userXpBefore = userTasksBefore.reduce(
        (total, task) => total + (task.value || 0),
        0
      );

      // Call the API to auto-distribute tasks
      await apiService.post("/tasks/autodistribute", {}, token);

      // Force a refresh of tasks for all clients
      try {
        // This will trigger WebSocket updates for all clients
        await apiService.get(`/tasks?isActive=true`, token);

        // Get updated active tasks to calculate what changed
        try {
          // TypeScript assertion to tell the compiler the exact type
          const updatedTasks = (await apiService.get(
            `/tasks?isActive=true`,
            token
          )) as Task[];

          // Calculate how many tasks were distributed to current user
          const userTasksAfter = updatedTasks.filter(
            (task) => task.isAssignedTo === currentUser?.id
          );
          const tasksAssignedToUser =
            userTasksAfter.length - userTasksBefore.length;
          const xpAssignedToUser =
            userTasksAfter.reduce(
              (total, task) => total + (task.value || 0),
              0
            ) - userXpBefore;

          // Calculate total XP points that were available for distribution
          const totalPointsDistributed = unclaimedTasksBefore.reduce(
            (total, task) => total + (task.value || 0),
            0
          );

          // Determine the appropriate message
          let message = "";

          if (tasks.length === 0) {
            message = "No active tasks available to distribute.";
          } else if (unclaimedTasksBefore.length === 0) {
            message =
              "No unclaimed active tasks to distribute. Create some new tasks first.";
          } else {
            message = `${totalPointsDistributed} XP points distributed. `;

            if (currentUser) {
              if (tasksAssignedToUser > 0) {
                message += `You got ${tasksAssignedToUser} task${
                  tasksAssignedToUser > 1 ? "s" : ""
                } worth ${xpAssignedToUser} XP points.`;
              } else {
                message += `No tasks were assigned to you this time.`;
              }
            }
          }

          // Show notification
          setNotificationMessage(message);
          setNotificationVisible(true);
        } catch (error) {
          console.error("Error fetching updated active tasks:", error);
          setNotificationMessage(
            "Failed to fetch updated tasks. The distribution may have succeeded."
          );
          setNotificationVisible(true);
        }
      } catch (error) {
        console.error("Error triggering task update:", error);
        setNotificationMessage(
          "Error refreshing tasks. The distribution may have succeeded."
        );
        setNotificationVisible(true);
      }
    } catch (error) {
      console.error("Error activating Karma's Hand:", error);
      setNotificationMessage(
        "An error occurred while distributing tasks. Please try again."
      );
      setNotificationVisible(true);
    }
  };

  // Render the popups
  return (
    <>
      {/* Karma's Hand Explanation Popup */}
      <SimplePopup
        isVisible={explainPopupVisible}
        title="Karma's Hand"
        content={
          <div style={{ fontSize: "1.1rem" }}>
            <p style={{ marginBottom: "1rem" }}>
              Karma&apos;s Hand will automatically distribute all unclaimed
              active tasks among team members based on experience levels.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>How it works:</strong> Team members with more XP points
              will receive easier tasks, while those with fewer XP points will
              get more challenging tasks.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Note:</strong> Only tasks that are not on cooldown will be
              distributed based on current workload and team members&apos;
              experience levels.
            </p>
            <p>
              <strong>Attention:</strong> Tasks in Lucky draw mode will also be
              assigned and after that will not be dropable.
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
            onClick: activateKarmasHand,
            color: "#83cf5d",
          },
        ]}
        onClose={() => setExplainPopupVisible(false)}
      />

      {/* Notification Popup */}
      <SimplePopup
        isVisible={notificationVisible}
        title="Task Distribution"
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

export default KarmasHandManager;

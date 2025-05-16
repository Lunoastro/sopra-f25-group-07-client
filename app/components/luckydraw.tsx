import React, { useState, useEffect } from "react";
import { Task } from "@/types/task";
import { useApi } from "@/hooks/useApi";
import CardSVG from "@/svgs/pinboard_svg/card_svg";

// Simple popup component - updated to match KarmaHand
const SimplePopup = ({
  isVisible,
  title,
  content,
  buttons,
  onClose,
}: {
  isVisible: boolean;
  title: string;
  content: React.ReactNode;
  buttons: { text: string; onClick: () => void; color: string }[];
  onClose: () => void;
}) => {
  if (!isVisible) return null;

  return (
    <div className="simple-popup-overlay" onClick={onClose}>
      <div
        className="simple-popup-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="simple-popup-header">
          <h2 style={{ textAlign: "center", width: "100%" }}>{title}</h2>
          <button className="simple-popup-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="simple-popup-content">{content}</div>
        <div className="simple-popup-buttons" style={{ gap: "1rem" }}>
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              style={{
                backgroundColor: button.color,
                border: "none",
                borderRadius: "4px",
                color: "white",
                cursor: "pointer",
                fontSize: "1.1rem",
                padding: "10px",
                width: "110px",
                height: "50px",
              }}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

interface LuckyDrawProps {
  tasks: Task[];
  token: string;
  onTaskClaimed?: () => void;
  onTaskClick: (id: string) => void;
  userId?: string;
  taskWidth?: string;
  taskHeight?: string;
}

interface LuckyDrawRef {
  activateLuckyDrawFromOutside: () => void;
}

const LuckyDraw = React.forwardRef<LuckyDrawRef, LuckyDrawProps>(
  (
    {
      tasks,
      token,
      onTaskClaimed,
      onTaskClick,
      taskWidth = "calc(25% - 15px)",
      taskHeight = "8.5em",
    },
    ref
  ) => {
    const apiService = useApi();

    React.useImperativeHandle(ref, () => ({
      activateLuckyDrawFromOutside: () => {
        coverUnclaimedTasks();
      },
    }));

    // States
    const [shuffling, setShuffling] = useState<boolean>(false);
    const [claimedTasksIds, setClaimedTasksIds] = useState<string[]>([]);
    const [justClaimedTaskId, setJustClaimedTaskId] = useState<string | null>(
      null
    );

    // Add a new state to track tasks that should remain covered during transitions
    const [transitionCoveredTaskIds, setTransitionCoveredTaskIds] = useState<
      string[]
    >([]);

    // Popup states
    const [confirmPopupVisible, setConfirmPopupVisible] =
      useState<boolean>(false);
    const [explainPopupVisible, setExplainPopupVisible] =
      useState<boolean>(false);
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
    const [notificationVisible, setNotificationVisible] =
      useState<boolean>(false);
    const [notificationMessage, setNotificationMessage] = useState<string>("");

    // Helper functions to categorize tasks
    const getUnclaimedTasks = () => {
      return tasks.filter(
        (task) => !task.color && !claimedTasksIds.includes(task.id)
      );
    };

    const getClaimedTasks = () => {
      return tasks.filter(
        (task) => task.color || claimedTasksIds.includes(task.id)
      );
    };

    const getLuckyDrawTasks = () => {
      return tasks.filter((task) => task.luckyDraw === true);
    };

    const getNonLuckyDrawTasks = () => {
      return tasks.filter((task) => !task.luckyDraw);
    };

    // Cover unclaimed tasks function (Lucky Draw button action)
    const coverUnclaimedTasks = () => {
      // Always show the explanation popup first
      setExplainPopupVisible(true);
    };

    // Activate the Lucky Draw via API call
    const activateLuckyDraw = async () => {
      setExplainPopupVisible(false);
      setShuffling(true);

      try {
        // Get all unclaimed task IDs for animation and transition coverage
        const unclaimedTaskIds = getUnclaimedTasks().map((task) => task.id);

        // Check if there are any tasks at all
        const totalTasks = tasks.length;

        // If no tasks exist at all, show guidance message and stop early
        if (totalTasks === 0) {
          setShuffling(false);
          setNotificationMessage(
            "No tasks available. Please create some tasks first before using Lucky Draw."
          );
          setNotificationVisible(true);
          return; // Exit the function early
        }

        setShufflingTasks(unclaimedTaskIds);

        // Immediately mark these tasks as covered during transition
        setTransitionCoveredTaskIds(unclaimedTaskIds);

        setIsShuffling(true);

        // Create empty payload object for the API call
        const payload = {};

        // Call the backend API to activate lucky draw
        const updatedTasks = await apiService.post(
          "/tasks/luckyDraw",
          payload,
          token
        );

        // Count new tasks that will be covered
        const newTasksCount = getUnclaimedTasks().filter(
          (task) => !task.luckyDraw
        ).length;

        // Trigger task refresh right after API call completes
        if (onTaskClaimed && updatedTasks) {
          onTaskClaimed();

          // Force a refresh of tasks for all clients by refetching tasks via API
          // This will make the server send the updated tasks to all clients
          // via the existing WebSocket task updates
          try {
            // Make a GET request to fetch all tasks
            // This will trigger the server to broadcast the updated tasks to all clients
            await apiService.get(`/tasks`, token);

            // No need to process the response here as the WebSocket will handle it
            console.log("Triggered task update for all clients");
          } catch (error) {
            console.error("Error triggering task update:", error);
            // Continue with local updates even if this fails
          }
        }

        // Keep animation for consistent timing
        setTimeout(() => {
          setShuffling(false);
          setIsShuffling(false);

          // Keep transition coverage for a brief moment after animation ends
          // to ensure smooth transition
          setTimeout(() => {
            setTransitionCoveredTaskIds([]);
          }, 300);

          // Check if there were any unclaimed tasks to begin with
          const allTasksClaimed = unclaimedTaskIds.length === 0;

          // Update message based on whether there were any unclaimed tasks
          let message: string;
          if (allTasksClaimed && totalTasks > 0) {
            message =
              "All tasks are already claimed. Try creating new tasks to use Lucky Draw.";
          } else if (newTasksCount > 0) {
            message = `Lucky Draw activated! ${newTasksCount} new task(s) are now covered.`;
          } else if (unclaimedTaskIds.length > 0) {
            message =
              "Lucky Draw activated! All unclaimed tasks are now covered.";
          } else {
            message = "Lucky Draw process completed.";
          }

          setNotificationMessage(message);
          setNotificationVisible(true);
        }, 1800);
      } catch (error) {
        console.error("Error activating Lucky Draw:", error);
        setShuffling(false);
        setIsShuffling(false);
        setTransitionCoveredTaskIds([]);
        setNotificationMessage(
          "An error occurred while activating Lucky Draw. Please try again."
        );
        setNotificationVisible(true);
      }
    };

    // Handle clicking a covered task
    const handleCoveredTaskClick = (task: Task) => {
      if (shuffling) return; // Don't allow clicks while shuffling
      if (claimedTasksIds.includes(task.id)) return; // Don't allow clicks on already claimed tasks

      setSelectedTaskId(task.id);
      setConfirmPopupVisible(true);
    };

    // Claim the selected task
    const claimTask = async () => {
      if (!selectedTaskId) return;

      try {
        // Call the API to claim the task
        await apiService.patch<null>(`/tasks/${selectedTaskId}/claim`, token);

        // Update UI
        setConfirmPopupVisible(false);
        setJustClaimedTaskId(selectedTaskId); // Track the just-claimed task for highlighting

        const taskCard = document.getElementById(`task-${selectedTaskId}`);
        if (taskCard) {
          taskCard.classList.add("claimed");
        }

        // Add to list of claimed tasks
        setClaimedTasksIds((prev) => [...prev, selectedTaskId]);

        // Trigger refresh of tasks if callback provided
        if (onTaskClaimed) {
          onTaskClaimed();
        }

        // Reset the highlight after 2 seconds
        setTimeout(() => {
          setJustClaimedTaskId(null);
        }, 2000);
      } catch (error) {
        console.error("Error claiming task:", error);
        setConfirmPopupVisible(false);
        setNotificationMessage(
          "An error occurred while claiming the task. Please try again."
        );
        setNotificationVisible(true);
      }
    };

    // Track shuffling state and animation
    const [isShuffling, setIsShuffling] = useState(false);
    const [shufflingTasks, setShufflingTasks] = useState<string[]>([]);

    // Shuffle animation effect
    useEffect(() => {
      if (isShuffling && shufflingTasks.length > 0) {
        const interval = setInterval(() => {
          setShufflingTasks((tasks) => shuffleArray([...tasks]));
        }, 300);

        // Stop shuffling after animation period
        setTimeout(() => {
          clearInterval(interval);
          setIsShuffling(false);
        }, 1500);

        return () => clearInterval(interval);
      }
    }, [isShuffling, shufflingTasks]);

    // Function to shuffle array
    const shuffleArray = (array: string[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // Function to determine task order
    const getOrderedTasks = () => {
      // First display claimed tasks
      const claimedTasks = getClaimedTasks();

      // Then display non-lucky draw tasks
      const nonLuckyDrawTasks = getNonLuckyDrawTasks().filter(
        (task) => !task.color && !claimedTasksIds.includes(task.id)
      );

      // Then display lucky draw tasks (covered)
      const luckyDrawTasks = getLuckyDrawTasks().filter(
        (task) => !task.color && !claimedTasksIds.includes(task.id)
      );

      // Determine task order with animation if shuffling
      if (isShuffling && shufflingTasks.length > 0) {
        // Create a map of tasks by ID for lookup
        const taskMap = new Map();
        tasks.forEach((task) => taskMap.set(task.id, task));

        // Order tasks based on shuffled IDs
        const animatedTasks = shufflingTasks
          .filter((id) => taskMap.has(id))
          .map((id) => taskMap.get(id));

        return [...claimedTasks, ...animatedTasks];
      } else {
        // Shuffle lucky draw tasks for randomness when not animating
        const shuffledLuckyDrawTasks = [...luckyDrawTasks].sort(
          () => Math.random() - 0.5
        );
        return [
          ...claimedTasks,
          ...nonLuckyDrawTasks,
          ...shuffledLuckyDrawTasks,
        ];
      }
    };

    // Get the ordered list of all tasks
    const orderedTasks = getOrderedTasks();

    return (
      <>
        {/* Explanation Popup */}
        <SimplePopup
          isVisible={explainPopupVisible}
          title="Lucky Draw"
          content={
            <div>
              <p>
                When Lucky Draw is activated, all currently unclaimed tasks will
                be covered with &quot;???&quot;. You won&apos;t know what task
                you&apos;re selecting until after you claim it!
              </p>
              <p>
                <strong>Note:</strong> If you have created new tasks since the
                last Lucky Draw activation, pressing the button again will cover
                those too.
              </p>
              <p>
                <strong>Important:</strong> Once you select a covered task, you
                cannot drop it! Each covered task is revealed only when you
                select it.
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

        {/* Confirmation Popup */}
        <SimplePopup
          isVisible={confirmPopupVisible}
          title="Confirm Selection"
          content={
            <div>
              <p>Are you sure you want to choose this task?</p>
              <p>
                <strong>Remember:</strong> You cannot drop it once selected!
              </p>
            </div>
          }
          buttons={[
            {
              text: "Cancel",
              onClick: () => setConfirmPopupVisible(false),
              color: "#f0a59c",
            },
            {
              text: "Select",
              onClick: claimTask,
              color: "#83cf5d",
            },
          ]}
          onClose={() => setConfirmPopupVisible(false)}
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

        {/* Task Grid - All tasks, with lucky draw tasks showing as ??? */}
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              overflowY: "auto",
              gap: "1rem",
              padding: "0.5rem",
              position: "relative",
            }}
          >
            {/* Render all tasks in the ordered sequence */}
            {orderedTasks.map((task) => {
              // Improved condition to ensure tasks remain covered during transitions
              const isCovered =
                !task.color &&
                !claimedTasksIds.includes(task.id) &&
                (task.luckyDraw === true ||
                  isShuffling ||
                  shuffling ||
                  transitionCoveredTaskIds.includes(task.id));

              if (isCovered) {
                // Apply animation during shuffle
                const isAnimating =
                  (isShuffling || shuffling) &&
                  shufflingTasks.includes(task.id);

                return (
                  <div
                    key={task.id}
                    id={`task-${task.id}`}
                    onClick={() => handleCoveredTaskClick(task)}
                    className={`task-card ${
                      isAnimating ? "shuffling" : ""
                    } covered-task`}
                    style={{
                      width: taskWidth,
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: !shuffling ? "pointer" : "default",
                      transition: "all 0.3s ease-in-out",
                      // Enhanced animation during shuffle
                      transform: isAnimating
                        ? `translateX(${
                            Math.random() * 80 - 40
                          }px) translateY(${
                            Math.random() * 80 - 40
                          }px) rotate(${Math.random() * 20 - 10}deg)`
                        : "none",
                    }}
                  >
                    <CardSVG
                      width="100%"
                      height={taskHeight}
                      color="#6a8caf"
                      style={{ position: "relative" }}
                      splashColor="#6a8caf"
                      className="task-card-svg"
                    />
                    <div
                      style={{
                        position: "absolute",
                        textAlign: "center",
                        width: "60%",
                        fontWeight: "bold",
                        color: "#333",
                        fontSize: "2rem",
                        padding: "10px",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        wordBreak: "break-word",
                      }}
                    >
                      ???
                    </div>
                  </div>
                );
              } else {
                // Render normal task
                return (
                  <div
                    key={task.id}
                    id={`task-${task.id}`}
                    onClick={() => onTaskClick(task.id)}
                    className="task-card"
                    style={{
                      width: taskWidth,
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    <CardSVG
                      width="100%"
                      height={taskHeight}
                      color={`var(--member-color-${task.color || "default"})`}
                      style={{ position: "relative" }}
                      splashColor={
                        task.color
                          ? `var(--member-color-${task.color})`
                          : "white"
                      }
                      className="task-card-svg"
                    />
                    <div
                      style={{
                        position: "absolute",
                        textAlign: "center",
                        width: "60%",
                        fontWeight: "bold",
                        color: "#333",
                        fontSize: "1.5rem",
                        padding: "10px",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        wordBreak: "break-word",
                      }}
                    >
                      {task.name}
                    </div>
                    {justClaimedTaskId === task.id && (
                      <div className="task-claimed-overlay">
                        <div className="task-claimed-message">
                          Task Claimed!
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </>
    );
  }
);

// Add display name
LuckyDraw.displayName = "LuckyDraw";

export default LuckyDraw;

// Export a function to be used from outside
export const triggerLuckyDraw = (
  luckyDrawRef: React.RefObject<LuckyDrawRef>
) => {
  if (luckyDrawRef.current) {
    luckyDrawRef.current.activateLuckyDrawFromOutside();
  }
};

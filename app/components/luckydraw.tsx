import React, { useState, useEffect } from "react";
import { Task } from "@/types/task";
import { useApi } from "@/hooks/useApi";
import CardSVG from "@/svgs/pinboard_svg/card_svg";
import CustomButton from "@/components/customButton";

// Using global CSS instead of inline styleSheet

// Simple popup component
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
        <div className="simple-popup-buttons" style={{ gap: "6rem" }}>
          {buttons.map((button, index) => (
            <CustomButton
              key={index}
              onClick={button.onClick}
              text={button.text}
              width="90px"
              height="50px"
              backgroundColor={button.color}
              style={{
                fontSize: "1.1rem",
                padding: "10px",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface LuckyDrawProps {
  tasks: Task[];
  token: string;
  onTaskClaimed: () => void;
  onTaskClick: (id: string) => void;
  userId?: string;
  taskWidth?: string;
  taskHeight?: string;
}

interface LuckyDrawRef {
  activateLuckyDrawFromOutside: () => void;
  uncoverAllTasks: () => void;
}

const LuckyDraw = React.forwardRef<LuckyDrawRef, LuckyDrawProps>(
  (
    {
      tasks,
      token,
      onTaskClaimed,
      onTaskClick,
      // userId prop is reserved for future use
      taskWidth = "calc(25% - 15px)",
      taskHeight = "8.5em",
    },
    ref
  ) => {
    const apiService = useApi();
    const STORAGE_KEY = "luckyDrawCoveredTaskIds";

    React.useImperativeHandle(ref, () => ({
      activateLuckyDrawFromOutside: () => {
        coverUnclaimedTasks();
      },
      uncoverAllTasks: () => {
        uncoverAllTasks();
      },
    }));

    // States
    const [coveredTasksOrder, setCoveredTasksOrder] = useState<string[]>([]);
    const [shuffling, setShuffling] = useState<boolean>(false);
    const [claimedTasksIds, setClaimedTasksIds] = useState<string[]>([]);
    const [justClaimedTaskId, setJustClaimedTaskId] = useState<string | null>(
      null
    );

    // Load covered task IDs from localStorage
    const [coveredTaskIds, setCoveredTaskIds] = useState<string[]>(() => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    });

    // Popup states
    const [confirmPopupVisible, setConfirmPopupVisible] =
      useState<boolean>(false);
    const [explainPopupVisible, setExplainPopupVisible] =
      useState<boolean>(false);
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
    const [notificationVisible, setNotificationVisible] =
      useState<boolean>(false);
    const [notificationMessage, setNotificationMessage] = useState<string>("");

    // No need to add styles to document as they're in global CSS

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

    const getUncoveredTasks = () => {
      // Get all unclaimed tasks
      const unclaimed = tasks.filter(
        (task) => !task.color && !claimedTasksIds.includes(task.id)
      );
      // Return only those that are not in coveredTaskIds
      return unclaimed.filter((task) => !coveredTaskIds.includes(task.id));
    };

    const getCoveredTasks = () => {
      // Get all unclaimed tasks
      const unclaimed = tasks.filter(
        (task) => !task.color && !claimedTasksIds.includes(task.id)
      );
      // Return only those that are in coveredTaskIds
      return unclaimed.filter((task) => coveredTaskIds.includes(task.id));
    };

    // Function to shuffle array (used for task IDs)
    const shuffleArray = (array: string[]): string[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // Shuffle the covered tasks order periodically to prevent memorization
    useEffect(() => {
      if (coveredTaskIds.length > 0) {
        // Initialize the covered tasks order
        if (coveredTasksOrder.length === 0) {
          setCoveredTasksOrder(shuffleArray([...coveredTaskIds]));
        }

        // Set up a periodic shuffle of covered tasks
        const intervalId = setInterval(() => {
          if (!shuffling && coveredTaskIds.length > 1) {
            setCoveredTasksOrder(shuffleArray([...coveredTaskIds]));
          }
        }, 10000); // Shuffle every 10 seconds

        return () => clearInterval(intervalId);
      }
    }, [coveredTaskIds, shuffling, coveredTasksOrder.length]);

    // Check local storage on component mount to restore Lucky Draw state
    useEffect(() => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        const savedTaskIds = saved ? JSON.parse(saved) : [];

        if (savedTaskIds && savedTaskIds.length > 0) {
          setCoveredTaskIds(savedTaskIds);
          setCoveredTasksOrder(shuffleArray([...savedTaskIds]));
          console.log(
            "Lucky Draw mode restored with covered tasks:",
            savedTaskIds.length
          );
        }
      } catch (e) {
        console.error("Error restoring Lucky Draw state:", e);
      }
    }, []); // Only run on initial mount

    // Handle updates to task data when tasks prop changes
    useEffect(() => {
      // Skip if we're not in Lucky Draw mode
      if (coveredTaskIds.length === 0) return;

      // Remove any covered task IDs for tasks that are now claimed
      // DO NOT remove IDs for tasks that no longer exist in the current task list
      // This ensures that covered tasks remain covered after a refresh
      const newCoveredIds = coveredTaskIds.filter((id) => {
        const task = tasks.find((t) => t.id === id);
        // Keep in covered list if either:
        // 1. Task is not found in current tasks (could be after reload before all tasks load)
        // 2. Task exists and is not claimed/colored
        return !task || (!task.color && !claimedTasksIds.includes(id));
      });

      // Update covered tasks only if there's a change
      if (newCoveredIds.length !== coveredTaskIds.length) {
        console.log("Updating covered tasks - removing claimed tasks");
        setCoveredTaskIds(newCoveredIds);
        setCoveredTasksOrder(shuffleArray([...newCoveredIds]));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newCoveredIds));
      }
    }, [tasks, claimedTasksIds, coveredTaskIds]);

    // Cover unclaimed tasks function (Lucky Draw button action)
    const coverUnclaimedTasks = () => {
      // Always show the explanation popup first, regardless of whether there are tasks to cover
      setExplainPopupVisible(true);
    };

    // Uncover all tasks function (First Come First Serve button action)
    const uncoverAllTasks = () => {
      const coveredCount = coveredTaskIds.length;

      if (coveredCount === 0) {
        setNotificationMessage("You're already on the first come first serve!");
        setNotificationVisible(true);
        return;
      }

      // Clear the covered tasks
      setCoveredTaskIds([]);
      setCoveredTasksOrder([]);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));

      setNotificationMessage(`${coveredCount} task(s) uncovered!`);
      setNotificationVisible(true);
    };

    const activateLuckyDraw = () => {
      setExplainPopupVisible(false);
      setShuffling(true);

      try {
        // Get all currently unclaimed tasks
        const unclaimed = getUnclaimedTasks();

        // If no tasks to cover, show notification immediately
        if (unclaimed.length === 0) {
          setShuffling(false);
          setNotificationMessage("No tasks to cover!");
          setNotificationVisible(true);
          return;
        }

        // Get IDs of unclaimed tasks that are not already covered
        const unclaimedUncoveredIds = unclaimed
          .filter((task) => !coveredTaskIds.includes(task.id))
          .map((task) => task.id);

        // If no new tasks to cover, inform the user immediately
        if (unclaimedUncoveredIds.length === 0) {
          setShuffling(false);
          setNotificationMessage("All unclaimed tasks are already covered!");
          setNotificationVisible(true);
          return;
        }

        // Create new array combining existing covered tasks with new ones
        const newCoveredIds = [...coveredTaskIds, ...unclaimedUncoveredIds];

        // Save to localStorage and update state
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newCoveredIds));
        setCoveredTaskIds(newCoveredIds);

        // Create a shuffled order of the covered task IDs
        const shuffledOrder = shuffleArray([...newCoveredIds]);
        setCoveredTasksOrder(shuffledOrder);

        // Only add delay when actually covering tasks
        setTimeout(() => {
          setShuffling(false);
          setNotificationMessage(
            `${unclaimedUncoveredIds.length} new task(s) covered!`
          );
          setNotificationVisible(true);
        }, 1000);
      } catch (error) {
        console.error("Error covering tasks:", error);
        setShuffling(false);
        setNotificationMessage("An error occurred. Please try again.");
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

        // Remove from covered tasks
        const newCoveredIds = coveredTaskIds.filter(
          (id) => id !== selectedTaskId
        );
        const newCoveredOrder = coveredTasksOrder.filter(
          (id) => id !== selectedTaskId
        );

        // Save to localStorage and update state
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newCoveredIds));
        setCoveredTaskIds(newCoveredIds);
        setCoveredTasksOrder(newCoveredOrder);

        // Trigger refresh of tasks
        onTaskClaimed();

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

    // Function to get the ordered list of tasks based on covered/uncovered status
    const getOrderedTasks = () => {
      const claimedTasks = getClaimedTasks();
      const uncoveredTasks = getUncoveredTasks();
      const coveredTasks = getCoveredTasks();

      // Create a map of covered tasks by ID for quicker lookup
      const coveredTasksMap = new Map();
      coveredTasks.forEach((task) => {
        coveredTasksMap.set(task.id, task);
      });

      // Create ordered covered tasks based on the shuffled order
      const orderedCoveredTasks = coveredTasksOrder
        .filter((id) => coveredTasksMap.has(id)) // Only include IDs that exist in the covered tasks
        .map((id) => coveredTasksMap.get(id));

      // Add any covered tasks that might not be in the order array (fallback)
      coveredTasks.forEach((task) => {
        if (!coveredTasksOrder.includes(task.id)) {
          orderedCoveredTasks.push(task);
        }
      });

      // Return all tasks in the correct order
      return [...claimedTasks, ...uncoveredTasks, ...orderedCoveredTasks];
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
                <strong>Note:</strong> Newly created tasks will remain visible
                until you activate Lucky Draw again.
              </p>
              <p>
                <strong>Important:</strong> Once you select a covered task, you
                cannot drop it!
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

        {/* Task Grid - All tasks, with covered tasks showing as ??? */}
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
              // If the task is covered (in lucky draw), render it differently
              const isCovered =
                !task.color &&
                !claimedTasksIds.includes(task.id) &&
                coveredTaskIds.includes(task.id);

              if (isCovered) {
                // FIX 2: Enhanced hover effects for covered task cards
                return (
                  <div
                    key={task.id}
                    id={`task-${task.id}`}
                    onClick={() => handleCoveredTaskClick(task)}
                    className={`task-card ${
                      shuffling ? "shuffling" : ""
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
                      transform: shuffling
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

// Export a function to uncover all tasks
export const uncoverAllTasks = (
  luckyDrawRef: React.RefObject<LuckyDrawRef>
) => {
  if (luckyDrawRef.current) {
    luckyDrawRef.current.uncoverAllTasks();
  }
};

import React, { useState, useEffect, useCallback } from "react";
import { Task } from "@/types/task";
import { useApi } from "@/hooks/useApi";
import CardSVG from "@/svgs/pinboard_svg/card_svg";
import SimplePopup from "@/components/simplepopup";
import { CSSProperties } from "react";

interface taskListProps {
  tasks: Task[];
  taskOnClick: (id: string) => void;
  height?: string;
  width?: string;
  taskWidth?: string;
  taskHeight?: string;
  style?: CSSProperties;
  token: string | null;
}

export const TaskList = ({
  tasks,
  taskOnClick,
  height = "100%",
  width = "100%",
  taskHeight = "4rem",
  taskWidth = "33%",
  style,
  token,
}: taskListProps) => {
  // Add API service
  const apiService = useApi();

  // Track if this is the initial load
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Known Lucky Draw tasks (to avoid animating on page reload)
  const [knownLuckyDrawTaskIds, setKnownLuckyDrawTaskIds] = useState<string[]>(
    () => {
      // Try to load from localStorage
      try {
        const stored = localStorage.getItem("luckyDrawTaskIds");
        return stored ? JSON.parse(stored) : [];
      } catch {
        // Removed unused 'e' variable
        return [];
      }
    }
  );

  // Known distributed tasks (for Karma's Hand)
  const [knownDistributedTaskIds, setKnownDistributedTaskIds] = useState<
    string[]
  >(() => {
    // Try to load from localStorage
    try {
      const stored = localStorage.getItem("distributedTaskIds");
      return stored ? JSON.parse(stored) : [];
    } catch {
      // Removed unused 'e' variable
      return [];
    }
  });

  // Animation states for Lucky Draw
  const [shuffling, setShuffling] = useState<boolean>(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [shufflingTasks, setShufflingTasks] = useState<string[]>([]);

  // Animation states for Karma's Hand
  const [isDistributing, setIsDistributing] = useState(false);
  const [distributingTaskIds, setDistributingTaskIds] = useState<string[]>([]);

  // Common task states
  const [justClaimedTaskId, setJustClaimedTaskId] = useState<string | null>(
    null
  );
  const [claimedTasksIds, setClaimedTasksIds] = useState<string[]>([]);
  const [transitionCoveredTaskIds, setTransitionCoveredTaskIds] = useState<
    string[]
  >([]);

  // Confirmation popup state
  const [confirmPopupVisible, setConfirmPopupVisible] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  // Save known Lucky Draw tasks to localStorage
  useEffect(() => {
    localStorage.setItem(
      "luckyDrawTaskIds",
      JSON.stringify(knownLuckyDrawTaskIds)
    );
  }, [knownLuckyDrawTaskIds]);

  // Save known distributed tasks to localStorage
  useEffect(() => {
    localStorage.setItem(
      "distributedTaskIds",
      JSON.stringify(knownDistributedTaskIds)
    );
  }, [knownDistributedTaskIds]);

  // Functions to categorize tasks - converted to useCallback to avoid dependency issues
  const getLuckyDrawTasks = useCallback(() => {
    return tasks.filter(
      (task) => task.luckyDraw === true && !task.isAssignedTo
    );
  }, [tasks]);

  const getNonLuckyDrawTasks = useCallback(() => {
    return tasks.filter((task) => !task.luckyDraw || task.isAssignedTo);
  }, [tasks]);

  const getClaimedTasks = useCallback(() => {
    return tasks.filter(
      (task) => task.color || claimedTasksIds.includes(task.id)
    );
  }, [tasks, claimedTasksIds]);

  // Detect changes in lucky draw tasks and trigger shuffling
  useEffect(() => {
    // If this is the initial load, just set the known tasks without animation
    if (isInitialLoad) {
      const luckyDrawTasks = getLuckyDrawTasks();

      // Update known Lucky Draw task IDs
      setKnownLuckyDrawTaskIds((prev) => {
        const newIds = luckyDrawTasks
          .map((task) => task.id)
          .filter((id) => !prev.includes(id));
        return [...prev, ...newIds];
      });

      // Also track assigned tasks to avoid distributing animation on page load
      const assignedTasks = tasks.filter((task) => task.isAssignedTo);
      setKnownDistributedTaskIds((prev) => {
        const newIds = assignedTasks
          .map((task) => task.id)
          .filter((id) => !prev.includes(id));
        return [...prev, ...newIds];
      });

      setIsInitialLoad(false);
      return;
    }

    // Get current lucky draw tasks
    const luckyDrawTasks = getLuckyDrawTasks();

    // Find truly new Lucky Draw tasks (not in our known list)
    const newLuckyDrawTasks = luckyDrawTasks.filter(
      (task) => !knownLuckyDrawTaskIds.includes(task.id)
    );

    // If we have genuinely new Lucky Draw tasks, trigger animation
    if (newLuckyDrawTasks.length > 0) {
      console.log("Detected new Lucky Draw tasks! Starting animation...");

      // Get IDs of new Lucky Draw tasks
      const newLuckyDrawTaskIds = newLuckyDrawTasks.map((task) => task.id);

      // Update known Lucky Draw task IDs
      setKnownLuckyDrawTaskIds((prev) => [...prev, ...newLuckyDrawTaskIds]);

      // Mark these tasks as covered during transition
      setTransitionCoveredTaskIds(newLuckyDrawTaskIds);

      // Start shuffling animation
      setShufflingTasks(newLuckyDrawTaskIds);
      setShuffling(true);
      setIsShuffling(true);

      // End shuffling after animation period (1.5 seconds)
      setTimeout(() => {
        setShuffling(false);
        setIsShuffling(false);

        // Keep transition coverage for a brief moment after animation ends
        setTimeout(() => {
          setTransitionCoveredTaskIds([]);
        }, 300);
      }, 1500);
    }
  }, [tasks, isInitialLoad, knownLuckyDrawTaskIds, getLuckyDrawTasks]);

  // Detect newly assigned tasks for Karma's Hand animation
  useEffect(() => {
    // Skip on initial load
    if (isInitialLoad) return;

    // Find tasks that have been newly assigned (have an assignee but weren't in our known list)
    const newlyAssignedTasks = tasks.filter(
      (task) => task.isAssignedTo && !knownDistributedTaskIds.includes(task.id)
    );

    // If we have newly assigned tasks, trigger animation
    if (newlyAssignedTasks.length > 0) {
      console.log(
        "Detected newly assigned tasks! Starting distribution animation..."
      );

      // Get IDs of newly assigned tasks
      const newTaskIds = newlyAssignedTasks.map((task) => task.id);

      // Update known distributed task IDs
      setKnownDistributedTaskIds((prev) => [...prev, ...newTaskIds]);

      // Start distribution animation
      setDistributingTaskIds(newTaskIds);
      setIsDistributing(true);

      // End animation after 1.5 seconds
      setTimeout(() => {
        setIsDistributing(false);
        setDistributingTaskIds([]);
      }, 1500);
    }
  }, [tasks, isInitialLoad, knownDistributedTaskIds]);

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

  // Handle task click with confirmation for Lucky Draw tasks
  const handleTaskClick = (task: Task) => {
    // Don't allow clicks while shuffling or distributing
    if (shuffling || isDistributing) return;

    // Don't allow clicks on already claimed tasks
    if (claimedTasksIds.includes(task.id)) return;

    // If it's a Lucky Draw task that hasn't been assigned
    if (task.luckyDraw && !task.isAssignedTo) {
      // Show confirmation popup
      setSelectedTaskId(task.id);
      setConfirmPopupVisible(true);
    } else {
      // For regular tasks, proceed with normal click handler
      taskOnClick(task.id);
    }
  };

  // Function to directly claim the task via API
  const claimTask = async () => {
    if (!selectedTaskId) return;

    try {
      // Close the confirmation popup
      setConfirmPopupVisible(false);

      // Call the API to claim the task
      await apiService.patch<null>(`/tasks/${selectedTaskId}/claim`, token);

      // Show claimed animation
      setJustClaimedTaskId(selectedTaskId);

      // Add to list of claimed tasks
      setClaimedTasksIds((prev) => [...prev, selectedTaskId]);

      // Reset the highlight after animation completes
      setTimeout(() => {
        setJustClaimedTaskId(null);

        // AFTER claiming is complete and animation is done,
        // pass to taskOnClick to open the task for viewing
        taskOnClick(selectedTaskId);
      }, 2000);

      // Reset selected task
      setSelectedTaskId(null);
    } catch (error) {
      console.error("Error claiming task:", error);
      setConfirmPopupVisible(false);
      // You could add a notification here for the error
    }
  };

  // Function to determine task order
  const getOrderedTasks = useCallback(() => {
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
      return [...claimedTasks, ...nonLuckyDrawTasks, ...shuffledLuckyDrawTasks];
    }
  }, [
    getClaimedTasks,
    getNonLuckyDrawTasks,
    getLuckyDrawTasks,
    isShuffling,
    shufflingTasks,
    tasks,
    claimedTasksIds,
  ]);

  // Get the ordered list of all tasks
  const orderedTasks = getOrderedTasks();

  return (
    <>
      <div style={{ position: "relative", height, width, ...style }}>
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
          {orderedTasks.map((task) => {
            // Improved condition to ensure tasks remain covered during transitions
            const isCovered =
              !task.color &&
              !claimedTasksIds.includes(task.id) &&
              (task.luckyDraw === true ||
                isShuffling ||
                shuffling ||
                transitionCoveredTaskIds.includes(task.id));

            const isAnimating =
              (isShuffling || shuffling) && shufflingTasks.includes(task.id);

            const isDistributingThis =
              isDistributing && distributingTaskIds.includes(task.id);

            const isJustClaimed = justClaimedTaskId === task.id;

            if (isCovered) {
              // Render covered task
              return (
                <div
                  key={task.id}
                  id={`task-${task.id}`}
                  onClick={() => handleTaskClick(task)}
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
                      ? `translateX(${Math.random() * 80 - 40}px) translateY(${
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

                  {/* Task claimed overlay animation */}
                  {isJustClaimed && (
                    <div className="task-claimed-overlay">
                      <div className="task-claimed-message">Task Claimed!</div>
                    </div>
                  )}
                </div>
              );
            } else {
              // Render normal task
              return (
                <div
                  key={task.id}
                  id={`task-${task.id}`}
                  onClick={() => taskOnClick(task.id)}
                  className={`task-card ${
                    isDistributingThis ? "distributing" : ""
                  }`}
                  style={{
                    width: taskWidth,
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                    // Add animation effect for distribution
                    transform: isDistributingThis
                      ? `translateY(${Math.sin(Date.now() / 200) * 10}px)`
                      : "none",
                    zIndex: isDistributingThis ? 10 : 1,
                  }}
                >
                  <CardSVG
                    width="100%"
                    height={taskHeight}
                    color={`var(--member-color-${task.color || "default"})`}
                    style={{
                      position: "relative",
                      transition: isDistributingThis
                        ? "all 1.5s ease-in-out"
                        : "all 0.3s ease-in-out",
                    }}
                    splashColor={
                      task.color ? `var(--member-color-${task.color})` : "white"
                    }
                    className={`task-card-svg ${
                      isDistributingThis ? "color-transitioning" : ""
                    }`}
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

                  {/* Task claimed overlay animation */}
                  {isJustClaimed && (
                    <div className="task-claimed-overlay">
                      <div className="task-claimed-message">Task Claimed!</div>
                    </div>
                  )}
                </div>
              );
            }
          })}
        </div>
      </div>

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
    </>
  );
};

export default TaskList;

"use client";
import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import { Task } from "@/types/task";
import { useApi } from "@/hooks/useApi";
import KarmaHandSVG from "@/svgs/pinboard_svg/karma_hand_svg";

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

interface KarmaHandProps {
  onTasksDistributed: () => void;
  tasks: Task[];
  token: string;
  userId?: string | number | null;
}

export interface KarmaHandRef {
  activateKarmaHandFromOutside: () => void;
}

// Interface for the response from the API's task distribution
interface DistributedTask extends Task {
  distributedAt?: string;
  distributedBy?: string;
}

interface DistributionResult {
  assignedTasks: number;
  totalXpAssigned: number;
  userAssignments: {
    [userId: string]: {
      name: string;
      tasks: number;
      xp: number;
    };
  };
}

const KarmaHand = forwardRef<KarmaHandRef, KarmaHandProps>(
  ({ onTasksDistributed, tasks, token, userId }, ref) => {
    const apiService = useApi();
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [animationProgress, setAnimationProgress] = useState<number>(0);
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
    const [distributionResult, setDistributionResult] =
      useState<DistributionResult | null>(null);
    const [initialTasks, setInitialTasks] = useState<Task[]>([]);
    const animationRef = useRef<NodeJS.Timeout | null>(null);
    const confirmationTimerRef = useRef<NodeJS.Timeout | null>(null);

    // New state for notification popup
    const [notificationVisible, setNotificationVisible] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");

    // New state for explanation popup
    const [showExplanation, setShowExplanation] = useState(false);

    const unclaimedTasksCount = tasks.filter(
      (task) => task.isAssignedTo === null
    ).length;

    // Store initial tasks state when component mounts or tasks change
    useEffect(() => {
      setInitialTasks([...tasks]);
    }, [tasks]);

    // Clear any timers when component unmounts
    useEffect(() => {
      return () => {
        if (animationRef.current) {
          clearTimeout(animationRef.current);
        }
        if (confirmationTimerRef.current) {
          clearTimeout(confirmationTimerRef.current);
        }
      };
    }, []);

    // Function to trigger explanation dialog - MODIFIED HERE
    const showKarmaHandExplanation = () => {
      // Always show explanation popup first
      setShowExplanation(true);
    };

    // Complete animation after API promise resolves
    const completeAnimationAfterApi = async (
      apiPromise: Promise<DistributedTask[] | null>
    ) => {
      try {
        const distributedTasks = await apiPromise;

        // Handle null response
        if (!distributedTasks) {
          throw new Error("No tasks were returned from the distribution API");
        }

        // Animate to 100%
        const finalAnimationDuration = 500; // 0.5s for final animation
        const startProgress = animationProgress;
        const startTime = Date.now();

        const animateFinal = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(
            startProgress +
              ((1 - startProgress) * elapsed) / finalAnimationDuration,
            1
          );
          setAnimationProgress(progress);

          if (progress < 1) {
            animationRef.current = setTimeout(animateFinal, 16);
          } else {
            // Animation is completely done, show results
            finishAnimation(distributedTasks);
          }
        };

        animateFinal();
      } catch (error) {
        console.error("Error distributing tasks:", error);
        setIsAnimating(false);
        setAnimationProgress(0);
        setNotificationMessage("Failed to distribute tasks. Please try again.");
        setNotificationVisible(true);
      }
    };

    const activateKarmaHand = async () => {
      // Close explanation popup if open
      setShowExplanation(false);

      if (unclaimedTasksCount === 0) {
        // Show notification if no unclaimed tasks
        setNotificationMessage("There are no unclaimed tasks to distribute!");
        setNotificationVisible(true);
        return;
      }

      // Store initial tasks before distribution
      setInitialTasks([...tasks]);

      // Start animation
      setIsAnimating(true);
      setAnimationProgress(0);

      // Make API call immediately but keep animation running
      // This starts the server-side work right away while showing animation
      const apiPromise = apiService.post<DistributedTask[] | null>(
        "/tasks/autodistribute",
        {},
        token
      );

      // Animate for at least 2 seconds to give visual feedback
      const startTime = Date.now();
      const minimumAnimationDuration = 2000; // 2 seconds minimum animation time

      const animate = () => {
        const elapsed = Date.now() - startTime;
        // Cap progress at 80% until API call completes to indicate something is still happening
        const progress = Math.min(
          (elapsed / minimumAnimationDuration) * 0.8,
          0.8
        );
        setAnimationProgress(progress);

        if (elapsed < minimumAnimationDuration) {
          animationRef.current = setTimeout(animate, 16); // ~60fps
        } else {
          // Continue with "completing" animation after API resolves
          completeAnimationAfterApi(apiPromise);
        }
      };

      animate();
    };

    // Final step after animation completes
    const finishAnimation = (distributedTasks: DistributedTask[]) => {
      // Calculate distribution statistics
      const result = analyzeDistribution(initialTasks, distributedTasks);
      setDistributionResult(result);

      // Animation complete
      setIsAnimating(false);
      setAnimationProgress(0);

      // Show confirmation with results
      setShowConfirmation(true);

      // Auto-hide confirmation after 7 seconds
      confirmationTimerRef.current = setTimeout(() => {
        setShowConfirmation(false);
      }, 7000);

      // Refresh tasks via callback
      onTasksDistributed();
    };

    const analyzeDistribution = (
      before: Task[],
      after: DistributedTask[] | unknown
    ): DistributionResult => {
      // Convert 'after' to Task[] if it's not already
      const afterTasks = Array.isArray(after) ? after : tasks;

      // Find tasks that were unassigned before but are now assigned
      const newlyAssignedTasks = afterTasks.filter((afterTask) => {
        const matchingBeforeTask = before.find((t) => t.id === afterTask.id);
        return (
          matchingBeforeTask &&
          matchingBeforeTask.isAssignedTo === null &&
          afterTask.isAssignedTo !== null
        );
      });

      // Calculate total XP assigned
      const totalXpAssigned = newlyAssignedTasks.reduce(
        (sum, task) => sum + (task.value || 0),
        0
      );

      // Group assignments by user
      const userAssignments: DistributionResult["userAssignments"] = {};

      newlyAssignedTasks.forEach((task) => {
        const assigneeId = String(task.isAssignedTo);
        if (!userAssignments[assigneeId]) {
          userAssignments[assigneeId] = {
            name: `User ${assigneeId}`, // Default name
            tasks: 0,
            xp: 0,
          };
        }
        userAssignments[assigneeId].tasks += 1;
        userAssignments[assigneeId].xp += task.value || 0;
      });

      return {
        assignedTasks: newlyAssignedTasks.length,
        totalXpAssigned,
        userAssignments,
      };
    };

    // Handle close confirmation
    const handleCloseConfirmation = () => {
      if (confirmationTimerRef.current) {
        clearTimeout(confirmationTimerRef.current);
      }
      setShowConfirmation(false);
    };

    // Expose the function to parent components
    useImperativeHandle(ref, () => ({
      activateKarmaHandFromOutside: showKarmaHandExplanation,
    }));

    // Get user's assigned tasks if userId is provided
    const userAssignedTasks =
      distributionResult && userId
        ? distributionResult.userAssignments[userId]?.tasks || 0
        : 0;

    // Get user's assigned XP if userId is provided
    const userAssignedXp =
      distributionResult && userId
        ? distributionResult.userAssignments[userId]?.xp || 0
        : 0;

    return (
      <>
        <div
          className={`karma-hand-container ${isAnimating ? "animating" : ""}`}
          onClick={!isAnimating ? showKarmaHandExplanation : undefined}
          style={{ cursor: isAnimating ? "default" : "pointer" }}
        >
          <div className="karma-hand-icon">
            <KarmaHandSVG />
          </div>
          {isAnimating && (
            <div className="karma-hand-animation-overlay">
              <div
                className="karma-hand-progress"
                style={{ width: `${animationProgress * 100}%` }}
              />
              <div className="karma-hand-text">Distributing tasks...</div>
            </div>
          )}
          {/* Badge removed as requested */}
        </div>

        {/* Explanation Popup */}
        <SimplePopup
          isVisible={showExplanation}
          title="Karma's Hand"
          content={
            <div>
              <p>
                Karma&apos;s Hand will automatically distribute unclaimed tasks.
                This helps balance workload across the team based on current
                assignments and member availability.
              </p>

              <p>Do you want to proceed with task distribution?</p>
            </div>
          }
          buttons={[
            {
              text: "Cancel",
              onClick: () => setShowExplanation(false),
              color: "#f0a59c",
            },
            {
              text: "Start",
              onClick: activateKarmaHand,
              color: "#83cf5d",
            },
          ]}
          onClose={() => setShowExplanation(false)}
        />

        {/* SimplePopup for notification */}
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

        {/* Confirmation notification - personalized as requested */}
        {showConfirmation && distributionResult && (
          <SimplePopup
            isVisible={true}
            title="Tasks Distributed!"
            content={
              <div>
                <p style={{ fontSize: "1.1rem", marginBottom: "16px" }}>
                  <strong>Total:</strong> {distributionResult.assignedTasks}{" "}
                  tasks ({distributionResult.totalXpAssigned} XP) have been
                  distributed.
                </p>

                {userId && distributionResult.userAssignments[userId] && (
                  <div
                    style={{
                      backgroundColor: "#f4f9ff",
                      padding: "12px",
                      borderRadius: "6px",
                      border: "1px solid #83cf5d",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "1.2rem",
                        margin: "0 0 8px 0",
                        fontWeight: "bold",
                        color: "#2e7d32",
                        textAlign: "center",
                      }}
                    >
                      You received:
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                        {userAssignedTasks} tasks
                      </span>
                      <span style={{ margin: "0 8px" }}>•</span>
                      <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                        {userAssignedXp} XP points
                      </span>
                    </div>
                  </div>
                )}
              </div>
            }
            buttons={[
              {
                text: "Close",
                onClick: handleCloseConfirmation,
                color: "#83cf5d",
              },
            ]}
            onClose={handleCloseConfirmation}
          />
        )}
      </>
    );
  }
);

KarmaHand.displayName = "KarmaHand";

export default KarmaHand;

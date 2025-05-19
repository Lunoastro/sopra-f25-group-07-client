import { useApi } from "@/hooks/useApi";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Team } from "@/types/team";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import EditButton from "@/svgs/pinboard_svg/edit_button_svg";
import { useWebSocket } from "@/hooks/useWebSocket";

const TeamInfo = () => {

    const apiService = useApi();
    const params = useParams();
    const teamId = params.id;
    
    const { value: token } = useLocalStorage<string>("token","");

    const { teamInfo, isConnected } = useWebSocket();
    
    
    // Team state
    const [teamName, setTeamName] = useState<string>("Loading...");
    const [teamCode, setTeamCode] = useState<string>("Loading...");
    const [isEditingTeamName, setIsEditingTeamName] = useState<boolean>(false);
    const [newTeamName, setNewTeamName] = useState<string>("");

  
    // setting initial team info (will get changed via websocket on server notifications)
    useEffect(() => {
      const fetchTeamData = async () => {
        try {
          if (!teamId) return;
  
          const team: Team | null = await apiService.get(
            `/teams/${teamId}`,
            token
          );
  
          if (team) {
            setTeamName(team.name as string);
            setTeamCode(team.code as string);
          }
        } catch (error) {
          console.error("Error fetching team data:", error);
        }
      };
  
      if (token) {
        fetchTeamData();
      }
    }, [token, teamId, apiService]);

    // Update team info from websocket when connected and data changes
      useEffect(() => {
        if (isConnected && teamInfo) {
          setTeamName(teamInfo.name ?? "");
          setTeamCode(teamInfo.code ?? "");
        }
      }, [isConnected, teamInfo]);

    // Function to start editing team name
    const handleStartEditTeamName = () => {
      setNewTeamName(teamName);
      setIsEditingTeamName(true);
    };
  
    // Function to cancel editing
    const handleCancelEdit = () => {
      setIsEditingTeamName(false);
    };
  
    // Function to save edited team name
    const handleSaveTeamName = async () => {
      try {
        if (!teamId) return;
        await apiService.put(`/teams/${teamId}`, { name: newTeamName }, token);
        setTeamName(newTeamName);
        setIsEditingTeamName(false);
      } catch (error) {
        console.error("Error updating team name:", error);
        alert("Failed to update team name. Please try again.");
      }
    };

    return (
        <div
          className="team-info"
          style={{ position: "absolute", top: "20px", left: "20px" }}
        >
          {isEditingTeamName ? (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <input
                type="text"
                value={newTeamName}
                onChange={(e) => setNewTeamName(e.target.value)}
                style={{
                  fontWeight: "bold",
                  padding: "4px",
                  marginRight: "8px",
                  fontSize: "1rem",
                }}
              />
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={handleSaveTeamName}
                  style={{
                    backgroundColor: "#83cf5d",
                    border: "none",
                    borderRadius: "4px",
                    padding: "4px 8px",
                    cursor: "pointer",
                  }}
                >
                  Save
                </button>
                <button
                  onClick={handleCancelEdit}
                  style={{
                    backgroundColor: "#f0a59c",
                    border: "none",
                    borderRadius: "4px",
                    padding: "4px 8px",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ fontWeight: "bold" }}>Team Name: {teamName}</div>
              <div
                onClick={handleStartEditTeamName}
                style={{ cursor: "pointer", marginLeft: "8px" }}
              >
                <EditButton width="1.3rem" />
              </div>
            </div>
          )}
          <div style={{ fontWeight: "bold" }}>Team Code: {teamCode}</div>
        </div>
    )
}

export default TeamInfo;
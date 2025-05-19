"use client";

import { ReactNode, useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { redirect, useParams } from "next/navigation";
import { useApi } from "./useApi";
import { User } from "../types/user";
import CustomButton from "@/components/customButton";

type AuthWrapperProps = {
   children: ReactNode; 
   onlyTeam?: boolean;
   currentUser?: User | null;
}


const AuthWrapper = ({children, onlyTeam = false, currentUser = null} : AuthWrapperProps) => {

        const apiService = useApi()

        const {
              value: token, 
          } = useLocalStorage<string>("token", "");
        
        const params = useParams();
        const urlTeamId = params.id as string;

        const [isLoading, setIsLoading] = useState<boolean>(true)
        const [isAuthTeamMember, setIsAuthTeamMember] = useState<boolean>(false)
          
        useEffect(() => {
            if (token && !onlyTeam) {
                setIsLoading(false)
            }

            if (token && onlyTeam && currentUser) {
                setIsLoading(false)
            }

            if (!token) {
                return redirect("/login");
            }

            const partOfTeam = async (urlTeamId: string) => {
                try {
                    if (currentUser?.teamId == urlTeamId) {
                        setIsAuthTeamMember(true)
                    } else {
                        console.warn("Permission denied for team:", urlTeamId)
                    }
                    setIsLoading(false)
                } catch (error) {
                    console.warn("An unexpected error occured while trying to authenticate as part of team:", error)
                    return redirect("/login");
                } 
            }
            if( onlyTeam && currentUser) {
                partOfTeam(urlTeamId)
            }

        }, [apiService, currentUser, currentUser?.id, onlyTeam, token, urlTeamId]);

        if (isLoading) {
            return <div style={{height: "100vh", width:"100vw", textAlign: "center", paddingTop: "10vh"}}>Loading...</div>
        }

        if (!token || (onlyTeam && !isAuthTeamMember)) {
            return <div style={{height: "100vh", width:"100vw", textAlign: "center", paddingTop: "10vh"}}>
                <div style={{paddingBottom: "1rem"}}>Missing authentification for team page. Please log in!</div>
                <div style={{marginLeft: "auto", marginRight: "auto", width: "5rem"}}><CustomButton text={"Log in"} width={"5rem"}/></div>
                </div>
        }

        return <>{children}</>
}

export default AuthWrapper;
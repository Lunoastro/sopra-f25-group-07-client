"use client";

import { useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { redirect, useParams } from "next/navigation";
import { useApi } from "./hooks/useApi";
import { User } from "./types/user";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isAuth(Component: any, onlyTeam: boolean = false) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function IsAuth(props: any) {
        const apiService = useApi()

        const {
              value: token, 
          } = useLocalStorage<string>("token", "");
        
        const params = useParams();
        const urlTeamId = params.id as string;

        const [isLoading, setIsLoading] = useState<boolean>(true)
        const [isAuthTeamMember, setIsAuthTeamMember] = useState<boolean>(false)
          
        useEffect(() => {
            if (!token) {
                return redirect("/login");
            }

            const partOfTeam = async (urlTeamId: string) => {
                try {
                    const currentUser: User | null = await apiService.get("/users/me", token)
                    if (currentUser?.id == urlTeamId) {
                        setIsAuthTeamMember(true)
                    } else {
                        return redirect("/login");
                    }
                    setIsLoading(false)
                } catch {
                    return redirect("/login");
                } 
            }

            partOfTeam(urlTeamId)
        }, [apiService, token, urlTeamId]);

        if (isLoading) {
            return <div style={{height: "100vh", width:"100vw", textAlign: "center", paddingTop: "10vh"}}>Loading...</div>
        }

        if (!token || (onlyTeam && !isAuthTeamMember)) {
            return <div style={{height: "100vh", width:"100vw", textAlign: "center", paddingTop: "10vh"}}>Authentication missing. Please log in!</div>
        }

        return <Component {...props} />
    }
}
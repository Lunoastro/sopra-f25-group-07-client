"use client";

import { useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isAuth(Component: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function IsAuth(props: any) {
        const {
              value: token, 
          } = useLocalStorage<string>("token", "");
          
        useEffect(() => {
            console.log('Token from localStorage:', token);
            if (!token) {
                return redirect("/login");
            }
        }, [token]);

        if (!token) {
            return null
        }

        return <Component {...props} />
    }
}
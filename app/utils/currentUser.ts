import { ApiService } from "@/api/apiService";
import { User } from "@/types/user";

export const getCurrentUser = async (apiService: ApiService, token: string) : Promise<User | null> => {
    try {
      const user : User | null = await apiService.get("/users/me", token);
      return user
    } catch (error) {
      console.error("An unexpected error occured while fetching current user:", error)
    } 
    return null
  }
import { useCallback, useState } from "react";
import { logoutService } from "../services/logoutService";
import { useAuthStore } from "../store/useAuthStore";

export const useLogout = () => {
   const [succsess, setSuccess] = useState<boolean | null>(null);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState<Error | null>(null);

   const clearAuth = useAuthStore((s) => s.clearAuth);

   const logout = useCallback(async () => {
      try {
         setIsLoading(true);

         await logoutService();

         clearAuth();

         setSuccess(true);
      } catch (err) {
         setError(err as Error);
      } finally {
         setIsLoading(false);
      }
   }, []);

   return { succsess, isLoading, error, logout };
};

import { useCallback, useState } from "react";
import type { LoginDto, LoginResponseDto } from "../dtos/authDtos";
import { loginService } from "../services/loginService";
import { useAuthStore } from "../store/useAuthStore";
import type { Roles } from "../types/roles";

export const useLogin = () => {
   const [data, setData] = useState<LoginResponseDto | null>(null);
   const [isLoading, setLoading] = useState(false);
   const [error, setError] = useState<Error | null>(null);
   const setAuth = useAuthStore((s) => s.setAuth);

   const login = useCallback(
      async (loginDto: LoginDto) => {
         setLoading(true);
         setError(null);

         try {
            const response: LoginResponseDto = await loginService(loginDto);
            setData(response);

            setAuth({
               id: response.id,
               fullName: response.fullName,
               email: response.email,
               role: response.role as Roles,
               jwtToken: response.jwtToken,
               expiresIn: response.expiresIn,
            });
         } catch (err) {
            setError(err as Error);
         } finally {
            setLoading(false);
         }
      },
      [setAuth]
   );

   return { data, isLoading, error, login };
};

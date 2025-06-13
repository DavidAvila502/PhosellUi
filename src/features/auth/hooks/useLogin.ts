import { useCallback, useState } from "react";
import type { LoginDto, LoginResponseDto } from "../dtos/authDtos";
import { loginService } from "../services/loginService";

export const useLogin = () => {
   const [data, setData] = useState<LoginResponseDto | null>(null);
   const [isLoading, setLoading] = useState(false);
   const [error, setError] = useState<Error | null>(null);

   const login = useCallback(async (loginDto: LoginDto) => {
      setLoading(true);
      setError(null);

      try {
         const response: LoginResponseDto = await loginService(loginDto);
         setData(response);
      } catch (err) {
         setError(err as Error);
      } finally {
         setLoading(false);
      }
   }, []);

   return { data, isLoading, error, login };
};

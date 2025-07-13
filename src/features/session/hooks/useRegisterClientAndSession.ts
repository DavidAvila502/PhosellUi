import { useCallback, useState } from "react";
import { type LoginResponseDto } from "../../auth/dtos/authDtos";
import type { RegisterAndReserveFormularyDto } from "../dtos/sessionDtos";
import registerClientAndSessionService from "../services/registerClientAndSessionService";
import { useAuthStore } from "../../auth/store/useAuthStore";
import type { Roles } from "../../auth/types/roles";

const useRegisterClientAndSession = () => {
   const [loginResponseData, setLoginResponseData] =
      useState<LoginResponseDto | null>(null);
   const [loadingLoginResponse, setLoadingLoginResponse] =
      useState<boolean>(false);
   const [loginResponseError, setLoginResponseError] = useState<Error | null>(
      null
   );
   const setAuth = useAuthStore((s) => s.setAuth);

   const registerClientAndSession = useCallback(
      async (dataFormulary: RegisterAndReserveFormularyDto) => {
         try {
            setLoadingLoginResponse(true);

            const response: LoginResponseDto =
               await registerClientAndSessionService(dataFormulary);

            setLoginResponseData(response);

            setAuth({
               id: response.id,
               fullName: response.fullName,
               email: response.email,
               role: response.role as Roles,
               jwtToken: response.jwtToken,
               expiresIn: response.expiresIn,
            });
         } catch (error) {
            setLoginResponseError(error as Error);
         } finally {
            setLoadingLoginResponse(false);
         }
      },
      [setAuth]
   );

   return {
      loginResponseData,
      loadingLoginResponse,
      loginResponseError,
      registerClientAndSession,
   };
};

export default useRegisterClientAndSession;

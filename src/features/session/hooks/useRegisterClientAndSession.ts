import { useCallback, useState } from "react";
import { type LoginResponseDto } from "../../auth/dtos/authDtos";
import type { RegisterAndReserveFormDto } from "../dtos/sessionDtos";
import registerClientAndSessionService from "../services/registerClientAndSessionService";
import { useAuthStore } from "../../auth/store/useAuthStore";
import type { Role } from "../../auth/types/role";
import axios, { AxiosError } from "axios";
import type { ApiErrorResponseDTo } from "../../../shared/types";

const useRegisterClientAndSession = () => {
   const [loginResponseData, setLoginResponseData] =
      useState<LoginResponseDto | null>(null);
   const [loadingLoginResponse, setLoadingLoginResponse] =
      useState<boolean>(false);
   const [loginResponseError, setLoginResponseError] =
      useState<AxiosError<ApiErrorResponseDTo> | null>(null);
   const setAuth = useAuthStore((s) => s.setAuth);

   const registerClientAndSession = useCallback(
      async (dataForm: RegisterAndReserveFormDto) => {
         try {
            setLoadingLoginResponse(true);
            setLoginResponseData(null);
            setLoginResponseError(null);

            const response: LoginResponseDto =
               await registerClientAndSessionService(dataForm);

            setLoginResponseData(response);

            setAuth({
               id: response.id,
               fullName: response.fullName,
               email: response.email,
               role: response.role as Role,
               jwtToken: response.jwtToken,
               expiresIn: response.expiresIn,
            });
         } catch (err) {
            if (axios.isAxiosError<ApiErrorResponseDTo>(err)) {
               setLoginResponseError(err);
               return;
            }
            setLoginResponseError(
               new AxiosError<ApiErrorResponseDTo>(
                  "Unexpected error",
                  undefined,
                  undefined,
                  undefined,
                  undefined
               )
            );
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

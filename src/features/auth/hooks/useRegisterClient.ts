import { useCallback, useState } from "react";
import type {
   RegisterClientFormDataDTO,
   RegisterClientResponseDto,
} from "../dtos/authDtos";
import RegisterClientService from "../services/registerClientService";
import { AxiosError } from "axios";
import type { ApiErrorResponseDTo } from "../../../shared/types";
import axios from "axios";

const useRegisterCLient = () => {
   const [registerCLientResponseData, setRegisterClientResponseData] =
      useState<RegisterClientResponseDto | null>(null);
   const [registerClientError, setRegisterClientError] =
      useState<AxiosError<ApiErrorResponseDTo> | null>(null);
   const [registerClientLoading, setRegisterClientLoading] =
      useState<boolean>(false);

   const registerClient = useCallback(
      async (registerClientData: RegisterClientFormDataDTO) => {
         try {
            setRegisterClientLoading(true);
            setRegisterClientError(null);
            setRegisterClientResponseData(null);

            const response: RegisterClientResponseDto =
               await RegisterClientService(registerClientData);

            setRegisterClientResponseData(response);
         } catch (err) {
            if (axios.isAxiosError<ApiErrorResponseDTo>(err)) {
               setRegisterClientError(err);
               return;
            }
            setRegisterClientError(
               new AxiosError<ApiErrorResponseDTo>(
                  "Unexpected error",
                  undefined,
                  undefined,
                  undefined,
                  undefined
               )
            );
         } finally {
            setRegisterClientLoading(false);
         }
      },
      []
   );

   return {
      registerCLientResponseData,
      registerClientError,
      registerClientLoading,
      registerClient,
   };
};

export default useRegisterCLient;

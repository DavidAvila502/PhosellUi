import { useCallback, useState } from "react";
import type {
   RegisterClientFormDataDTO,
   RegisterClientResponseDto,
} from "../dtos/authDtos";
import RegisterClientService from "../services/registerClientService";

const useRegisterCLient = () => {
   const [registerCLientResponseData, setRegisterClientResponseData] =
      useState<RegisterClientResponseDto | null>(null);
   const [registerClientError, setRegisterClientError] = useState<Error | null>(
      null
   );
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
         } catch (error) {
            setRegisterClientError(error as Error);
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

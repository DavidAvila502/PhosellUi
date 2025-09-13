import { useCallback, useState } from "react";
import cancelSessionService from "../services/cancelSessionService";
import type { ApiErrorResponseDTo } from "../../../shared/types";
import { AxiosError } from "axios";
import axios from "axios";

const useCancelSession = () => {
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [error, setError] = useState<AxiosError<ApiErrorResponseDTo> | null>(null);

   const cancelSession = useCallback(
      async (sessionId: string, cancelReason: string) => {
         try {
            setIsLoading(true);
            setError(null);

            await cancelSessionService(sessionId, cancelReason);
         } catch (err) {
            if (axios.isAxiosError<ApiErrorResponseDTo>(err)) {
               setError(err);
               return;
            }

            setError(
               new AxiosError<ApiErrorResponseDTo>(
                  "Unexpected error",
                  undefined,
                  undefined,
                  undefined,
                  undefined
               )
            );
         } finally {
            setIsLoading(false);
         }
      },
      []
   );

   return { isLoading, error, cancelSession };
};

export default useCancelSession;



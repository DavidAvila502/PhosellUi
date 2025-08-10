import { useCallback, useState } from "react";
import type {
   ApiErrorResponseDTo,
   PaginatedResponse,
} from "../../../shared/types";
import type { Session } from "../models/sessionModels";
import axios, { AxiosError } from "axios";
import getSessionsMeClientService from "../services/getSessionsMeClientService";
import type { SessionsQueryParams } from "../dtos/sessionDtos";

const useGetSessionsMeClient = () => {
   const [clientSessionsData, setClientSessionsData] =
      useState<PaginatedResponse<Session> | null>(null);
   const [clientSessionsDataLoading, setClientSessionsDataLoading] =
      useState<boolean>(false);
   const [clientSessionsDataError, setClientSessionsDataError] =
      useState<AxiosError<ApiErrorResponseDTo> | null>(null);

   const getSessionsMeClient = useCallback(
      async (queryParams?: SessionsQueryParams) => {
         try {
            setClientSessionsData(null);
            setClientSessionsDataLoading(true);
            setClientSessionsDataError(null);

            const response = await getSessionsMeClientService(queryParams);

            setClientSessionsData(response);
         } catch (err) {
            if (axios.isAxiosError<ApiErrorResponseDTo>(err)) {
               setClientSessionsDataError(err);
               return;
            }
            setClientSessionsDataError(
               new AxiosError<ApiErrorResponseDTo>(
                  "Unexpected error",
                  undefined,
                  undefined,
                  undefined,
                  undefined
               )
            );
         } finally {
            setClientSessionsDataLoading(false);
         }
      },
      []
   );

   return {
      clientSessionsData,
      clientSessionsDataLoading,
      clientSessionsDataError,
      getSessionsMeClient,
   };
};

export default useGetSessionsMeClient;

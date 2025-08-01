import { useCallback, useState } from "react";
import type { SessionPackage } from "../models/packageModels";
import getAllSessionPackagesService from "../services/getAllSessionPackagesService";
import { AxiosError } from "axios";
import type { ApiErrorResponseDTo } from "../../../shared/types";
import axios from "axios";

const useGetAllSessionPackages = () => {
   const [data, setData] = useState<SessionPackage[] | null>(null);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [error, setError] = useState<AxiosError<ApiErrorResponseDTo> | null>(
      null
   );

   const getAllSessionsPackages = useCallback(async () => {
      try {
         setData(null);
         setIsLoading(true);
         setError(null);

         const data: SessionPackage[] = await getAllSessionPackagesService();

         setData(data);
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
   }, []);

   return { data, isLoading, error, getAllSessionsPackages };
};

export default useGetAllSessionPackages;

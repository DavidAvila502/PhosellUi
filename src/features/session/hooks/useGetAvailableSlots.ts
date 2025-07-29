import { useCallback, useState } from "react";
import getAvailableSlotsService from "../services/getAvailableSlotsService";
import type { ApiErrorResponseDTo } from "../../../shared/types";
import { AxiosError } from "axios";
import axios from "axios";

const useGetAvailableSlots = () => {
   const [availableSlots, setAvailableSlots] = useState<string[] | null>(null);
   const [isSlotsLoading, setIsSlotsLoading] = useState<boolean>(false);
   const [slotsError, setSlotsError] =
      useState<AxiosError<ApiErrorResponseDTo> | null>(null);

   const getAvailableSlots = useCallback(async (date: string) => {
      try {
         setIsSlotsLoading(true);
         setAvailableSlots(null);
         setSlotsError(null);

         const data = await getAvailableSlotsService(date);

         setAvailableSlots(data);
      } catch (err) {
         if (axios.isAxiosError<ApiErrorResponseDTo>(err)) {
            setSlotsError(err);
            return;
         }

         setSlotsError(
            new AxiosError<ApiErrorResponseDTo>(
               "Unexpected error",
               undefined,
               undefined,
               undefined,
               undefined
            )
         );
      } finally {
         setIsSlotsLoading(false);
      }
   }, []);

   return { availableSlots, isSlotsLoading, slotsError, getAvailableSlots };
};

export default useGetAvailableSlots;

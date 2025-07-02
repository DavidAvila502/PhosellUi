import { useCallback, useState } from "react";
import getAvailableSlotsService from "../services/getAvailableSlotsService";

const useGetAvailableSlots = () => {
   const [availableSlots, setAvailableSlots] = useState<string[] | null>(null);
   const [isSlotsLoading, setIsSlotsLoading] = useState<boolean>(false);
   const [slotsError, setSlotsError] = useState<Error | null>(null);

   const getAvailableSlots = useCallback(async (date: string) => {
      try {
         setIsSlotsLoading(true);

         const data = await getAvailableSlotsService(date);

         setAvailableSlots(data);
      } catch (error) {
         setSlotsError(error as Error);
      } finally {
         setIsSlotsLoading(false);
      }
   }, []);

   return { availableSlots, isSlotsLoading, slotsError, getAvailableSlots };
};

export default useGetAvailableSlots;

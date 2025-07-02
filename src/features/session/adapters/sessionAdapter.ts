import axiosClient from "../../../core/http/axiosClient";

export const getAvailableSlots = async (date: string): Promise<string[]> => {
   const response = await axiosClient.get(
      `/sessions/available-slots?date=${date}`
   );

   return response.data as string[];
};

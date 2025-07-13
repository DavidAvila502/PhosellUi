import axiosClient from "../../../core/http/axiosClient";
import type { LoginResponseDto } from "../../auth/dtos/authDtos";
import type { SessionAndClientInsertDto } from "../dtos/sessionDtos";

export const getAvailableSlots = async (date: string): Promise<string[]> => {
   const response = await axiosClient.get(
      `/sessions/available-slots?date=${date}`
   );

   return response.data as string[];
};

export const registerClientAndSession = async (
   sessionAndClientInsert: SessionAndClientInsertDto
): Promise<LoginResponseDto> => {
   const response = await axiosClient.post(
      `/sessions/registrations`,
      sessionAndClientInsert
   );

   return response.data as LoginResponseDto;
};

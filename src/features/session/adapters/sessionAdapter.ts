import axiosClient from "../../../core/http/axiosClient";
import type { PaginatedResponse } from "../../../shared/types";
import type { LoginResponseDto } from "../../auth/dtos/authDtos";
import type {
   SessionAndClientInsertDto,
   SessionsQueryParams,
} from "../dtos/sessionDtos";
import type { Session } from "../models/sessionModels";

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

export const getSessionsMeClient = async (
   queryParams?: SessionsQueryParams
): Promise<PaginatedResponse<Session>> => {
   const response = await axiosClient.get("/sessions/client/me", {
      params: queryParams,
   });
   return response.data as PaginatedResponse<Session>;
};

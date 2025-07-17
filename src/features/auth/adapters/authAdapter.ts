import axiosClient from "../../../core/http/axiosClient";
import type {
   LoginDto,
   LoginResponseDto,
   RegisterClientDto,
   RegisterClientResponseDto,
} from "../dtos/authDtos";

export const login = async (loginDto: LoginDto): Promise<LoginResponseDto> => {
   const response = await axiosClient.post(`/auth/login`, loginDto);
   return response.data as LoginResponseDto;
};

export const logout = async (): Promise<void> => {
   await axiosClient.post(`/auth/logout`);
};

export const registerClient = async (
   registerClientData: RegisterClientDto
): Promise<RegisterClientResponseDto> => {
   const response = await axiosClient.post(
      `/auth/register`,
      registerClientData
   );

   return response.data as RegisterClientResponseDto;
};

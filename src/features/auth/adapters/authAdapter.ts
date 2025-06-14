import axiosClient from "../../../core/http/axiosClient";
import type { LoginDto, LoginResponseDto } from "../dtos/authDtos";

export const login = async (loginDto: LoginDto): Promise<LoginResponseDto> => {
   const response = await axiosClient.post(`/auth/login`, loginDto);
   return response.data as LoginResponseDto;
};

export const logout = async (): Promise<void> => {
   await axiosClient.post(`/auth/logout`);
};

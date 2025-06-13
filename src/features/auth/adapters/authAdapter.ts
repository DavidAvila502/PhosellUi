import axiosClient from "../../../core/http/axiosClient";
import type { LoginDto, LoginResponseDto } from "../dtos/authDtos";

export const login = async (loginDto: LoginDto): Promise<LoginResponseDto> => {
   const response = await axiosClient.post(`/auth/login`, loginDto);
   return response.data as LoginResponseDto;
};

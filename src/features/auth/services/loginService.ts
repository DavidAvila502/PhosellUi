import { login } from "../adapters/authAdapter";
import type { LoginDto, LoginResponseDto } from "../dtos/authDtos";

export const loginService = async (
   loginDto: LoginDto
): Promise<LoginResponseDto> => {
   const response: LoginResponseDto = await login(loginDto);
   return response;
};

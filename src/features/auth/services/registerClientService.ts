import { registerClient } from "../adapters/authAdapter";
import type {
   RegisterClientDto,
   RegisterClientResponseDto,
} from "../dtos/authDtos";

const RegisterClientService = async (
   registerClientData: RegisterClientDto
): Promise<RegisterClientResponseDto> => {
   return await registerClient(registerClientData);
};

export default RegisterClientService;

import { registerClient } from "../adapters/authAdapter";
import type {
   RegisterClientDto,
   RegisterClientFormDataDTO,
   RegisterClientResponseDto,
} from "../dtos/authDtos";

const RegisterClientService = async (
   registerClientFormularyData: RegisterClientFormDataDTO
): Promise<RegisterClientResponseDto> => {
   const registerClientDto: RegisterClientDto = {
      fullName: registerClientFormularyData.fullName,
      email: registerClientFormularyData.email,
      password: registerClientFormularyData.password,
      phone: `${registerClientFormularyData.phoneCode} ${registerClientFormularyData.phone}`,
      city: registerClientFormularyData.city,
   };

   return await registerClient(registerClientDto);
};

export default RegisterClientService;

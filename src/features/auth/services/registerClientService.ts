import { registerClient } from "../adapters/authAdapter";
import type {
   RegisterClientDto,
   RegisterClientFormDataDTO,
   RegisterClientResponseDto,
} from "../dtos/authDtos";

const RegisterClientService = async (
   registerClientFormData: RegisterClientFormDataDTO
): Promise<RegisterClientResponseDto> => {
   const registerClientDto: RegisterClientDto = {
      fullName: registerClientFormData.fullName,
      email: registerClientFormData.email,
      password: registerClientFormData.password,
      phone: `${registerClientFormData.phoneCode} ${registerClientFormData.phone}`,
      city: registerClientFormData.city,
   };

   return await registerClient(registerClientDto);
};

export default RegisterClientService;

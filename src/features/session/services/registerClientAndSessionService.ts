import type { LoginResponseDto } from "../../auth/dtos/authDtos";
import { registerClientAndSession } from "../adapters/sessionAdapter";
import type {
   RegisterAndReserveFormDto,
   SessionAndClientInsertDto,
} from "../dtos/sessionDtos";

const registerClientAndSessionService = async (
   data: RegisterAndReserveFormDto
): Promise<LoginResponseDto> => {
   //Parse dtos
   const sessionAndClientInsertDto: SessionAndClientInsertDto = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      phone: `${data.phoneCode} ${data.phone}`,
      city: data.city,
      sessionPackageId: data.packageId,
      sessionDate: data.date,
      sessionTime: data.time,
      location: data.location,
   };

   return await registerClientAndSession(sessionAndClientInsertDto);
};

export default registerClientAndSessionService;

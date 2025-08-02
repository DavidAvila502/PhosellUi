import type { PaginatedResponse } from "../../../shared/types";
import { getSessionsMeClient } from "../adapters/sessionAdapter";
import type { Session } from "../models/sessionModels";

const getSessionsMeClientService = async (): Promise<
   PaginatedResponse<Session>
> => {
   const response = await getSessionsMeClient();
   return response;
};

export default getSessionsMeClientService;

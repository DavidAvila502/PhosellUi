import type { PaginatedResponse } from "../../../shared/types";
import { getSessionsMeClient } from "../adapters/sessionAdapter";
import type { SessionsQueryParams } from "../dtos/sessionDtos";
import type { Session } from "../models/sessionModels";

const getSessionsMeClientService = async (
   queryParams?: SessionsQueryParams
): Promise<PaginatedResponse<Session>> => {
   const response = await getSessionsMeClient(queryParams);
   return response;
};

export default getSessionsMeClientService;

import { getAvailableSlots } from "../adapters/sessionAdapter";

const getAvailableSlotsService = async (date: string): Promise<string[]> => {
   return getAvailableSlots(date);
};

export default getAvailableSlotsService;

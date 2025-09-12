import { cancelSession } from "../adapters/sessionAdapter";

const cancelSessionService = async (
   sessionId: string,
   cancelReason: string
): Promise<void> => {
   await cancelSession(sessionId, cancelReason);
};

export default cancelSessionService;


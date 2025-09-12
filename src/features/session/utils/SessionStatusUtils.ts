import SESSIONSTATUSES from "../../../app/constants/sessionStatuses";
import type { SessionStatus } from "../types/sessionStatus";

export const getStringOfSessionSessionStatus = (
   sessionStatus: SessionStatus
): string => {
   if (sessionStatus == SESSIONSTATUSES.REQUESTED) return "Solicitada";
   if (sessionStatus == SESSIONSTATUSES.CONFIRMED) return "Confirmada";
   if (sessionStatus == SESSIONSTATUSES.IN_PROGRESS) return "En progreso";
   if (sessionStatus == SESSIONSTATUSES.PHOTOS_PENDING)
      return "Fotos Pendientes";
   if (sessionStatus == SESSIONSTATUSES.COMPLETED) return "Entregada";
   if (sessionStatus == SESSIONSTATUSES.CANCELLED_BY_CLIENT) return "Cancelada";
   if (sessionStatus == SESSIONSTATUSES.CANCELLED_BY_ADMIN) return "Cancelada";

   return "Solicitada";
};

export const getSessionStatusColor = (sessionStatus: SessionStatus): string => {
   if (sessionStatus == SESSIONSTATUSES.REQUESTED) return "bg-yellow-500";
   if (sessionStatus == SESSIONSTATUSES.CONFIRMED) return "bg-blue-500";
   if (sessionStatus == SESSIONSTATUSES.IN_PROGRESS) return "bg-violet-500";
   if (sessionStatus == SESSIONSTATUSES.PHOTOS_PENDING) return "bg-cyan-500";
   if (sessionStatus == SESSIONSTATUSES.COMPLETED) return "bg-green-500";
   if (sessionStatus == SESSIONSTATUSES.CANCELLED_BY_CLIENT)
      return "bg-red-500";
   if (sessionStatus == SESSIONSTATUSES.CANCELLED_BY_ADMIN) return "bg-red-500";

   return "bg-yellow-500";
};

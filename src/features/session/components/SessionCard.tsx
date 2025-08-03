import ClassicButton from "../../../shared/components/ClassicButton";
import type { Session } from "../models/sessionModels";
import {
   getSessionStatusColor,
   getStringOfSessionSessionStatus,
} from "../utils/SessionStatusUtils";
import { formatRawTime } from "../utils/TimeUtils";

interface SessionCardProps {
   session: Session;
}

const SessionCard = ({ session }: SessionCardProps) => {
   return (
      <div className="w-full rounded-[20px] bg-white h-[280px] border-1 border-gray-400">
         <div
            className={`p-5 rounded-tl-[20px] rounded-tr-[20px] flex flex-row justify-between ${getSessionStatusColor(
               session.sessionStatus
            )}`}
         >
            <p className="text-white font-bold truncate">
               Fecha: {session.sessionDate}
            </p>

            <div className="bg-white rounded-2xl px-3 text-[17px] font-medium text-blue-400">
               {getStringOfSessionSessionStatus(session.sessionStatus)}
            </div>
         </div>

         <div className="flex flex-col gap-3 px-5 pt-2">
            <div className="flex flex-row gap-3">
               <p className="font-bold">Hora:</p>{" "}
               <p className="truncate">{formatRawTime(session.sessionTime)}</p>
            </div>

            <div className="flex flex-row gap-3">
               <p className="font-bold">Lugar:</p>{" "}
               <p className="truncate">{session.location}</p>
            </div>

            <div className="flex flex-row gap-3">
               <p className="font-bold">Paquete:</p>{" "}
               <p className="truncate">{`${session.sessionPackage.name} ($${session.sessionPackage.price} MXN)`}</p>
            </div>

            <div className="flex flex-row gap-3">
               <p className="font-bold">Fotografo:</p>{" "}
               <p className="truncate">{session.photographer.fullName}</p>
            </div>

            <div className="flex flex-row justify-end">
               <ClassicButton
                  type="button"
                  text="Ver"
                  style="w-[100px]"
                  color="bg-blue-400"
               />
            </div>
         </div>
      </div>
   );
};

export default SessionCard;

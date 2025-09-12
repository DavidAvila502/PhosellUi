import ClassicButton from "../../../shared/components/ClassicButton";
import type { Session } from "../models/sessionModels";
import {
   getSessionStatusColor,
   getStringOfSessionSessionStatus,
} from "../utils/SessionStatusUtils";
import { formatRawTime } from "../utils/TimeUtils";

interface SessionCardProps {
   session: Session;
   openModal: () => void;
}

const SessionCard = ({ session, openModal }: SessionCardProps) => {
   return (
      <div
         className="max-w-[380px] w-full h-[260px] bg-blue-900 border-2 border-gray-300 rounded-[10px]
            p-[20px] max-sm:p-[10px] flex flex-col gap-3"
      >
         <p className="font-bold text-[25px] italic text-white">
            {session.sessionDate}
         </p>

         <div className="flex flex-row gap-2 items-start justify-start">
            <div className="inline-block bg-white rounded-2xl px-3 text-[19px] font-medium text-blue-400">
               <p>{getStringOfSessionSessionStatus(session.sessionStatus)}</p>
            </div>

            <div
               className={`w-[30px] h-[30px] rounded-full ${getSessionStatusColor(
                  session.sessionStatus
               )}`}
            ></div>
         </div>

         <div className="flex flex-row gap-2">
            <p className="text-white text-[20px]">
               {formatRawTime(session.sessionTime)}
            </p>
         </div>

         <p className="text-blue-200 font-bold truncate italic text-[20px]">
            {session.client.fullName}
         </p>

         <div className="flex flex-row justify-end">
            <ClassicButton
               func={() => {
                  openModal();
               }}
               type="button"
               text="Ver"
               style="w-[100px]"
               color="bg-blue-400"
            />
         </div>
      </div>
   );
};

export default SessionCard;

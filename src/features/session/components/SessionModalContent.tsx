import { ROLES } from "../../../app/constants/roles";
import ClassicButton from "../../../shared/components/ClassicButton";
import type { Role } from "../../auth/types/role";
import type { Session } from "../models/sessionModels";
import {
   getSessionStatusColor,
   getStringOfSessionSessionStatus,
} from "../utils/SessionStatusUtils";
import { formatRawTime } from "../utils/TimeUtils";

interface SessionModalContentProps {
   session?: Session | null;
   role?: Role | null;
   onCancelSession?: () => void;
}

const SessionModalContent = ({
   session,
   role,
   onCancelSession,
}: SessionModalContentProps) => {
   return (
      <div
         className="w-[90%] mx-auto px-[20px] py-[40px] flex flex-col gap-5
                  max-sm:px-[8px]"
      >
         <div className="flex flex-row gap-2">
            <p className="text-blue-400 font-bold text-[28px] max-sm:text-[20px]">
               Sesión{" "}
            </p>
            <p className="text-[28px] text-gray-500 max-sm:text-[20px]">
               {session ? session.id : "UNKNOWN"}
            </p>
         </div>
         <div className="flex flex-row gap-2">
            <p className="text-gray-600 text-[20px] font-medium">Estado:</p>
            <div className="bg-white rounded-2xl px-3 text-[17px] font-medium border-2 border-blue-400 text-blue-400">
               {session
                  ? getStringOfSessionSessionStatus(session.sessionStatus)
                  : "UNKNOWN"}
            </div>

            <div
               className={`h-[30px] w-[30px] rounded-full ${
                  session
                     ? getSessionStatusColor(session.sessionStatus)
                     : "bg-gray-400"
               }`}
            ></div>
         </div>

         <ModalField
            field={"Paquete:"}
            value={
               session
                  ? `${session.sessionPackage.name} ($${session.sessionPackage.price} MXN)`
                  : null
            }
         />

         <ModalField
            field={"Fecha:"}
            value={session ? session.sessionDate : null}
         />

         <ModalField
            field={"Hora:"}
            value={session ? formatRawTime(session.sessionTime) : null}
         />

         <ModalField
            field={"Ubicación:"}
            value={session ? session.location : null}
         />

         <ModalField
            field={"Cliente:"}
            value={session ? session.client.fullName : null}
         />

         <ModalField
            field={"Teléfono del cliente:"}
            value={session ? session.client.phone : null}
         />

         <ModalField
            field={"Fotógrafo:"}
            value={session ? session.photographer.fullName : null}
         />

         <ModalField
            field={"Teléfono del fotógrafo:"}
            value={session ? session.photographer.phone : null}
         />

         <div className="step-section divider mt-[40px] w-[90%] mx-auto">
            <p
               className="text-2xl font-normal text-gray-600 text-center
                     max-md:text-[18px]"
            >
               Opciones
            </p>
         </div>

         {/* buttons */}
         <div className="flex flex-wrap w-full flex-row">
            {role == ROLES.CLIENT || role == ROLES.PHOTOGRAPHER ? (
               <ClassicButton
                  func={onCancelSession}
                  type="button"
                  color="bg-red-400"
                  text="Cancelar"
               />
            ) : null}
         </div>
      </div>
   );
};

const ModalField = ({
   field,
   value,
}: {
   field: string | number | null;
   value: string | number | null;
}) => {
   return (
      <div className="flex flex-row gap-2">
         <p
            className="text-gray-600 text-[20px] font-medium truncate
            max-sm:text-[16px]"
         >
            {field}
         </p>

         <p
            className="text-gray-600 text-[20px] font-normal truncate
               max-sm:text-[16px]"
         >
            {value ? value : "UNLNOWN"}
         </p>
      </div>
   );
};

export default SessionModalContent;

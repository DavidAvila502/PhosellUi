import { useEffect } from "react";
import type { Session } from "../models/sessionModels";
import {
   getSessionStatusColor,
   getStringOfSessionSessionStatus,
} from "../utils/SessionStatusUtils";
import type { Role } from "../../auth/types/role";
import { formatRawTime } from "../utils/TimeUtils";
import ClassicButton from "../../../shared/components/ClassicButton";
import { ROLES } from "../../../app/constants/roles";

interface SessionHandlerModalProps {
   isOpen: boolean;
   session?: Session | null;
   role?: Role | null;
   closeModal: () => void;
}

const SessionHandlerModal = ({
   session,
   isOpen,
   closeModal,
   role,
}: SessionHandlerModalProps) => {
   useEffect(() => {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
      return () => {
         document.body.style.overflow = "auto";
      };
   }, [isOpen]);

   return (
      <div
         className={`fixed z-2 inset-0 bg-black/50 transition-opacity
         duration-300 ${
            isOpen
               ? "opacity-100 pointer-events-auto"
               : "opacity-0 pointer-events-none"
         }`}
      >
         <div
            className="w-[80%] bg-white min-h-[400px] max-h-[700px] max-w-[1200px]
                mx-auto mt-[40px] rounded-[20px] relative xl:w-[60%] max-sm:w-[100%] overflow-y-auto"
         >
            <div className="flex justify-end absolute top-4 left-0 right-4">
               <button
                  onClick={closeModal}
                  className="bg-red-400 text-white font-bold text-[20px]
                     w-[40px] h-[40px] rounded-full cursor-pointer"
               >
                  X
               </button>
            </div>
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
                  <p className="text-gray-600 text-[20px] font-medium">
                     Estado:
                  </p>
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
                  {role == ROLES.CLIENT ? (
                     <ClassicButton
                        type="button"
                        color="bg-red-400"
                        text="Cancelar"
                     />
                  ) : null}
               </div>
            </div>
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

export default SessionHandlerModal;

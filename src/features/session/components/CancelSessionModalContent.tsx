import { useState, type FormEvent } from "react";
import ClassicButton from "../../../shared/components/ClassicButton";
import TropixField from "../../../shared/components/TropixField";

const CancelSessionModalContent = () => {
   const [cancelReason, setCancelReason] = useState<string>("");

   const onCancelSubmit = (e: FormEvent) => {
      e.preventDefault();

      // TODO: make the logic here.
   };

   return (
      <div
         className="w-[90%] mx-auto px-[20px] py-[40px] flex flex-col gap-5
                  max-sm:px-[8px]"
      >
         <p className="text-blue-500 text-[35px] font-semibold text-center">
            Cancelar sesión
         </p>

         <p className="text-center text-gray-500 text-[22px]">
            Por favor proporcione un motivo de cancelación para concluir él
            proceso de cancelación.
         </p>
         <form
            onSubmit={onCancelSubmit}
            className=" lg:w-[70%] lg:mx-auto flex flex-col gap-5"
         >
            <TropixField
               textLabel="Motivo de cancelación"
               required={true}
               value={cancelReason}
               onChange={(e) => setCancelReason(e.target.value)}
            />

            <ClassicButton type="submit" text="Aceptar" color="bg-blue-400" />
         </form>
      </div>
   );
};

export default CancelSessionModalContent;

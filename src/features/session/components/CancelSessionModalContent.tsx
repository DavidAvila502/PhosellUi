import { useState, useEffect, type FormEvent } from "react";
import ClassicButton from "../../../shared/components/ClassicButton";
import TropixField from "../../../shared/components/TropixField";
import useCancelSession from "../hooks/useCancelSession";
import { toast, Bounce } from "react-toastify";
import { getApiErrorMessage } from "../../../shared/utils/apiCodeErrors";

interface CancelSessionModalContentProps {
   sessionId: string;
   onSuccess?: () => void;
   onClose?: () => void;
}

const CancelSessionModalContent = ({
   sessionId,
   onSuccess,
   onClose,
}: CancelSessionModalContentProps) => {
   const [cancelReason, setCancelReason] = useState<string>("");
   const { isLoading, error, cancelSession } = useCancelSession();

   const onCancelSubmit = async (e: FormEvent) => {
      e.preventDefault();

      if (!cancelReason.trim()) {
         toast.error("Por favor proporciona un motivo de cancelación", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
         });
         return;
      }

      try {
         await cancelSession(sessionId, cancelReason);
         
         toast.success("Sesión cancelada exitosamente", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
         });

         onSuccess?.();
         onClose?.();
      } catch (err) {
         // Error handling is done in the hook
      }
   };

   // Handle errors from the hook using useEffect
   useEffect(() => {
      if (error?.response?.data) {
         toast.error(getApiErrorMessage(error.response.data.code), {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
         });
      }
   }, [error]);

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

            <ClassicButton 
               type="submit" 
               text={isLoading ? "Cancelando..." : "Aceptar"} 
               color="bg-blue-400"
               disabled={isLoading}
            />
         </form>
      </div>
   );
};

export default CancelSessionModalContent;

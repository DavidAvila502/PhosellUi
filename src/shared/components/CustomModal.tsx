import { useEffect, type ReactNode } from "react";

interface CustomModalProps {
   isOpen: boolean;
   Onclose: () => void;
   children: ReactNode;
}

const CustomModal = ({ isOpen, Onclose, children }: CustomModalProps) => {
   useEffect(() => {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
      return () => {
         document.body.style.overflow = "auto";
      };
   }, [isOpen]);

   return (
      // Modal overlay
      <div
         className={`fixed z-2 inset-0 bg-black/20 transition-opacity
         duration-300 ${
            isOpen
               ? "opacity-100 pointer-events-auto"
               : "opacity-0 pointer-events-none"
         }`}
      >
         {/* Modal container */}

         <div
            className="bg-white min-h-[400px] mx-auto mt-[40px] rounded-[20px]
               max-w-[1280px] w-full max-h-[700px] h-full"
         >
            {/* colse button */}

            <div
               className="w-full flex items-end justify-end
               pr-[20px] pt-[10px]"
            >
               <button
                  onClick={() => Onclose()}
                  className="text-white text-[20px] bg-red-400 rounded-full
                     w-[30px] h-[30px] cursor-pointer"
               >
                  X
               </button>
            </div>

            {/* Children (content) */}

            <div className="w-full h-[90%] overflow-y-auto overflow-x-hidden">
               {children}
            </div>
         </div>
      </div>
   );
};

export default CustomModal;

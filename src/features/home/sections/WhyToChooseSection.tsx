import SectionTitle from "../components/SectionTitle";
import WhyToChooseCard from "../components/WhyToChooseCard";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { CameraIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { PrinterIcon } from "@heroicons/react/16/solid";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

const WhyToChooseSection = () => {
   return (
      <div className="flex flex-col items-center min-h-[400px] w-full">
         <SectionTitle text="¿Por qué elegir Tropix?" />

         <div className="mt-[50px]"></div>

         <div className="flex flex-row flex-wrap gap-5 justify-center">
            <WhyToChooseCard
               Icon={CurrencyDollarIcon}
               title="Precio"
               description="Todos nuestros precios son justos y transparentes."
            />
            <WhyToChooseCard
               Icon={CameraIcon}
               title="Fotógrafos"
               description="Fotógrafos locales verificados , comprometidos con la calidad."
            />

            <WhyToChooseCard
               Icon={PencilSquareIcon}
               title="Reserva"
               description="Las reservaciones son fáciles y rápidas."
            />
            <WhyToChooseCard
               Icon={PaperClipIcon}
               title="Enlace de fotografías"
               description="Cuando tus fotografías estén listas, recibirás un enlace en nuestra app."
            />
            <WhyToChooseCard
               Icon={PrinterIcon}
               title="Impresiones"
               description="Opción de Impresiones (¡Próximamente!)"
            />
            <WhyToChooseCard
               Icon={FaceSmileIcon}
               title="Jóvenes talentos"
               description="Con tu preferencia apoyarás a jóvenes talentos de Acapulco a crecer."
            />
         </div>
      </div>
   );
};

export default WhyToChooseSection;

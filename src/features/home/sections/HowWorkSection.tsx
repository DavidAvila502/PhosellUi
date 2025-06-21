import SectionTitle from "../components/SectionTitle";
import WorkStep from "../components/WorkStep";

const HowWorkSection = () => {
   return (
      <div
         id="how-work"
         className="flex flex-col items-center bg-gray-50 min-h-[400px] w-full scroll-mt-20 "
      >
         <SectionTitle text="¿Cómo funciona?" />

         <div className="mt-[30px]"></div>

         <div className="flex flex-row justify-center items-center w-full flex-wrap gap-5">
            <WorkStep
               number="1."
               title="Primer paso: reserva"
               description="Registrate, elige una fecha, una hora y un lugar para tener tu
                     sesión"
            />

            <WorkStep
               number="2."
               title="Segundo paso: encuentra al fotografo"
               description="Al agendar tu sesión, te enviaremos un fotógrafo a la ubicación seleccionada"
            />

            <WorkStep
               number="3."
               title="Tercer paso: disfruta tú sesión"
               description="Relájate y disfruta mientras capturamos tus mejores momentos."
            />

            <WorkStep
               number="4."
               title="Cuarto paso: recibe tus fotografías"
               description="Una vez concluida la sesión, recibirás un enlace para obtener tus fotografías digítales."
            />
         </div>
      </div>
   );
};

export default HowWorkSection;

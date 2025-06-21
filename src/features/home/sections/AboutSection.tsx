import Image4 from "../assets/image4.jpg";
import SectionTitle from "../components/SectionTitle";

const AboutSection = () => {
   return (
      <div className="flex flex-col items-center bg-gray-50 min-h-[500px] w-full relative">
         <img
            src={Image4}
            alt="background"
            className="absolute inset-0 h-full w-full object-cover rounded-[20px]"
         />

         {/* Overlay back filter */}
         <div className="absolute inset-0 bg-black opacity-50 rounded-[20px] pointer-events-none" />

         <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
            <SectionTitle text="Nosotros" textColor="text-white" />

            <p className="text-gray-50 text-xl text-center max-w-[80%] max-sm:max-w-[90%] max-sm:text-sm">
               Tropix nace de la experiencia directa con las prácticas poco
               éticas y abusivas de algunos estudios fotográficos dentro de
               hoteles en Acapulco. Queremos romper con los precios excesivos,
               las tácticas de venta engañosas y las malas condiciones laborales
               para los fotógrafos.
            </p>

            <p className="text-gray-50 text-xl text-center max-w-[80%] max-sm:max-w-[90%] max-sm:text-sm">
               Nuestra misión es ofrecer a los turistas una alternativa
               transparente, justa y de alta calidad para capturar sus recuerdos
               vacacionales, conectándolos directamente con fotógrafos locales
               talentosos que reciben una compensación digna por su increíble
               trabajo. ¡Di adiós a las estafas y hola a fotos espectaculares
               sin pagar de más!
            </p>
         </div>
      </div>
   );
};

export default AboutSection;

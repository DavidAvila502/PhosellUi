import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface BackgroundSlideShowProps {
   images: string[];
}

const BackgroundSlideShow = ({ images }: BackgroundSlideShowProps) => {
   const [activeIndex, setActiveIndex] = useState<number>(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setActiveIndex((i) => (i + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
   }, [images]);

   return (
      <div className="relative h-[400px] w-full rounded-[20px]">
         {images.map((src, i) => (
            <img
               key={i}
               src={src}
               alt={`slide-${i}`}
               className={`
                absolute inset-0
                h-full w-full object-cover
                rounded-[20px]
                transition-opacity duration-[1800ms] ease-in-out
            ${i === activeIndex ? "opacity-100" : "opacity-0"}
          `}
            />
         ))}
         {/* Overlay back filter */}
         <div className="absolute inset-0 bg-black opacity-40 rounded-[20px] pointer-events-none" />

         {/* Content */}
         <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center">
            <p className="text-white text-4xl font-bold text-center max-md:text-3xl max-sm:text-2xl">
               Captura Tus Momentos en Acapulco
            </p>

            <p className="text-gray-200 text-xl text-center max-md:text-[18px] max-sm:text-[15px]">
               Fotógrafos locales profesionales a precios justos. Reserva fácil,
               recibe tus fotos online.
            </p>

            <Link
               className="text-xl font-bold rounded-[12px] text-white py-3 px-5 bg-blue-500 max-md:text-[18px] max-sm:text-[15px]"
               to={""}
            >
               ¡Reserva tu sesión ahora!
            </Link>
         </div>
      </div>
   );
};

export default BackgroundSlideShow;

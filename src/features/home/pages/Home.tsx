import styles from "../../../styles/customStyles";
import BackgroundSlideShow from "../components/BackgroundSlideShow";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import HowWorkSection from "../sections/HowWorkSection";
import WhyToChoose from "../sections/WhyToChoose";
import AboutSection from "../sections/AboutSection";

export function Home() {
   const images = [image1, image2, image3, image4];

   return (
      <div
         className={`flex flex-col items-center justify-center mx-auto w-full ${styles.innerwidth} ${styles.paddings}`}
      >
         <div className="mt-[40px]"></div>

         <BackgroundSlideShow images={images} />

         <div className="mt-[40px]"></div>

         <HowWorkSection />

         <div className="mt-[40px]"></div>

         <WhyToChoose />

         <div className="mt-[40px]"></div>

         <AboutSection />
      </div>
   );
}

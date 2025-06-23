import styles from "../../../styles/customStyles";
import BackgroundSlideShow from "../components/BackgroundSlideShow";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import HowWorkSection from "../sections/HowWorkSection";
import WhyToChooseSection from "../sections/WhyToChooseSection";
import AboutSection from "../sections/AboutSection";

export function Home() {
   const images = [image1, image2, image3, image4];

   return (
      <div
         className={`flex flex-col items-center justify-center mx-auto w-full`}
      >
         <div
            className={`mt-[40px] w-full ${styles.innerwidth} ${styles.paddings}`}
         >
            <BackgroundSlideShow images={images} />
         </div>

         <div className="w-full mt-[40px] pb-[40px] bg-gray-50">
            <div
               className={`mx-auto w-full ${styles.innerwidth} ${styles.paddings}`}
            >
               <HowWorkSection />
            </div>
         </div>

         <div
            className={`mt-[40px] w-full ${styles.innerwidth} ${styles.paddings}`}
         >
            <WhyToChooseSection />
         </div>

         <div
            className={`mt-[40px] w-full ${styles.innerwidth} ${styles.paddings}`}
         >
            <AboutSection />
         </div>
      </div>
   );
}

import SectionTitle from "../../home/components/SectionTitle";
import styles from "../../../styles/customStyles";
import { useEffect, useState, type ChangeEvent } from "react";
import ReserveOptionsFormulary from "../components/ReserveOptionsFormulary";
import RegisterAndReserveFormulary from "../components/RegisterAndReserveFormulary";
import useGetAllSessionPackages from "../../sessionPackage/hooks/useGetAllSessionPackages";
import RegisterFormulary from "../../auth/components/RegisterFormulary";

export type ReserveOptionType = "opt1" | "opt2";

const Reserve = () => {
   const [selectedOption, setSelectedOption] =
      useState<ReserveOptionType>("opt1");

   const [isOptionConfirmed, setIsOptionConfirmed] = useState<boolean>(false);

   const { data, isLoading, error, getAllSessionsPackages } =
      useGetAllSessionPackages();

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value as ReserveOptionType;

      setSelectedOption(value);
   };

   const handleConfirm = () => {
      if (isLoading) return;
      setIsOptionConfirmed(true);

      if (selectedOption == "opt1") {
         getAllSessionsPackages();
      }
   };

   useEffect(() => {
      if (error) {
         setIsOptionConfirmed(false);
      }
   }, [error]);

   return (
      <div className="flex w-full flex-col items-center min-h-[calc(100vh-70px)] bg-gray-50">
         <SectionTitle
            text={
               selectedOption == "opt1" ? "Regístrate y reserva" : "Regístrate"
            }
         />

         <div
            className={`mx-auto flex flex-col items-center w-full mt-[40px]
                     ${styles.innerwidth} ${styles.paddings}`}
         >
            {isLoading ? (
               <div className="w-full h-[400px] flex items-center justify-center">
                  <span className="loading loading-spinner loading-xl text-primary"></span>
               </div>
            ) : null}

            {!isOptionConfirmed && !data && !isLoading ? (
               <div className="flex flex-col items-center justify-center gap-8">
                  <ReserveOptionsFormulary
                     selectedOption={selectedOption}
                     handleChange={handleChange}
                     buttonFunc={handleConfirm}
                  />
               </div>
            ) : null}

            {isOptionConfirmed && selectedOption == "opt1" && data != null ? (
               <RegisterAndReserveFormulary packages={data} />
            ) : null}

            {isOptionConfirmed && selectedOption == "opt2" ? (
               <RegisterFormulary />
            ) : null}
         </div>
      </div>
   );
};

export default Reserve;

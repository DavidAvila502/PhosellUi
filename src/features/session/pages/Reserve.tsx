import SectionTitle from "../../home/components/SectionTitle";
import styles from "../../../styles/customStyles";

import { useState, type ChangeEvent } from "react";
import ReserveOptionsFormulary from "../components/ReserveOptionsFormulary";
import RegisterAndReserveFormulary from "../components/RegisterAndReserveFormulary";

export type ReserveOptionType = "opt1" | "opt2";

const Reserve = () => {
   const [selectedOption, setSelectedOption] =
      useState<ReserveOptionType>("opt1");

   const [isOptionConfirmed, setIsOptionConfirmed] = useState<boolean>(false);

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value as ReserveOptionType;

      setSelectedOption(value);
   };

   return (
      <div className="flex w-full flex-col items-center min-h-[calc(100vh-70px)] bg-gray-50">
         <SectionTitle
            text={
               selectedOption == "opt1" ? "Regístrate y reserva" : "Regístrate"
            }
         />

         <div
            className={`mx-auto flex flex-col items-center w-full gap-8 
                     ${styles.innerwidth} ${styles.paddings} mt-[40px]`}
         >
            {!isOptionConfirmed ? (
               <ReserveOptionsFormulary
                  selectedOption={selectedOption}
                  handleChange={handleChange}
                  buttonFunc={() => setIsOptionConfirmed(true)}
               />
            ) : null}

            {isOptionConfirmed && selectedOption == "opt1" ? (
               <RegisterAndReserveFormulary />
            ) : null}
         </div>
      </div>
   );
};

export default Reserve;

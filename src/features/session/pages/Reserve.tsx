import SectionTitle from "../../home/components/SectionTitle";
import styles from "../../../styles/customStyles";

import { useState, type ChangeEvent } from "react";
import ReserveOptionsFormulary from "../components/ReserveOptionsFormulary";

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
      <div className="flex w-full flex-col items-center min-h-[calc(100vh-70px)]">
         <SectionTitle text="Regístrate y reserva" />

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

            {isOptionConfirmed ? (
               <p>Opcion seleccionada es {selectedOption}</p>
            ) : null}
         </div>
      </div>
   );
};

export default Reserve;

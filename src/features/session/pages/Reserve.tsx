import SectionTitle from "../../home/components/SectionTitle";
import styles from "../../../styles/customStyles";
import { FaceSmileIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import ReserveOption from "../components/ReserveOption";
import { useState, type ChangeEvent } from "react";
import ClassicButton from "../../../shared/components/ClassicButton";

type ReserveOptionType = "opt1" | "opt2";

const Reserve = () => {
   const [selectedOption, setSelectedOption] =
      useState<ReserveOptionType>("opt1");

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
            <ReserveOption
               value={"opt1"}
               Icon1={FaceSmileIcon}
               Icon2={PencilSquareIcon}
               optionLabel="Quiero registrarme y agendar una sesión"
               nameGroup="registergroup"
               checked={"opt1" == selectedOption}
               onChange={handleChange}
            />

            <ReserveOption
               value="opt2"
               Icon1={FaceSmileIcon}
               optionLabel="Solo quiero registrarme"
               nameGroup="registergroup"
               checked={"opt2" == selectedOption}
               onChange={handleChange}
            />

            <ClassicButton type="button" text="Continuar" color="bg-blue-500" />
         </div>
      </div>
   );
};

export default Reserve;

import { FaceSmileIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import ReserveOption from "../components/ReserveOption";
import type { ReserveOptionType } from "../pages/Reserve";
import ClassicButton from "../../../shared/components/ClassicButton";

interface ReserveOptionsFormularyProps {
   selectedOption: ReserveOptionType;
   handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
   buttonFunc: () => void;
}

const ReserveOptionsFormulary = ({
   selectedOption,
   handleChange,
   buttonFunc,
}: ReserveOptionsFormularyProps) => {
   return (
      <>
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

         <ClassicButton
            type="button"
            text="Continuar"
            color="bg-blue-500"
            func={buttonFunc}
         />
      </>
   );
};

export default ReserveOptionsFormulary;

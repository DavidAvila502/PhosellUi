import type { ChangeEventHandler, FC } from "react";

interface ReserveOptionsProps {
   Icon1?: FC<React.SVGProps<SVGSVGElement>>;
   Icon2?: FC<React.SVGProps<SVGSVGElement>>;
   optionLabel: string;
   nameGroup: string;
   value: string;
   onChange: ChangeEventHandler<HTMLInputElement> | undefined;
   checked: boolean;
}

const ReserveOption = ({
   Icon1,
   Icon2,
   optionLabel,
   nameGroup,
   checked,
   value,
   onChange,
}: ReserveOptionsProps) => {
   return (
      <label
         className="border-4 border-dashed border-blue-500 w-[500px] max-[530px]:w-[90%]
                    h-[250px] max-[530px]:h-[200px] cursor-pointer flex flex-col items-center justify-center p-4 overflow-hidden"
      >
         <div className="flex items-center justify-center flex-row">
            {Icon1 ? (
               <Icon1 className="text-blue-500 size-[100px] max-[530px]:size-[80px]" />
            ) : null}
            {Icon2 ? (
               <Icon2 className="text-blue-500 size-[100px] max-[530px]:size-[80px]" />
            ) : null}

            <p className="text-2xl text-center text-blue-500 font-bold max-[530px]:text-xl max-[360px]:text-[15px]">
               {optionLabel}
            </p>
         </div>

         <input
            onChange={onChange}
            type="radio"
            name={nameGroup}
            value={value}
            checked={checked}
            className="radio size-[40px] text-blue-500 max-[530px]:size-[30px]"
         />
      </label>
   );
};

export default ReserveOption;

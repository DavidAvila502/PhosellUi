import type { ChangeEventHandler } from "react";

interface PackageOptionProps {
   value: string;
   nameGroup: string;
   checked: boolean;
   onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
   packageName: string;
   benefits: string[];
}

const PackageOption = ({
   packageName,
   value,
   nameGroup,
   checked,
   onChange,
   benefits,
}: PackageOptionProps) => {
   return (
      <label
         className={`flex flex-row items-center gap-3 border-[1px] border-gray-300 rounded-[5px] h-[110px]
            cursor-pointer ${checked ? "bg-blue-100" : "bg-gray-50"}`}
      >
         <input
            id={value}
            type="radio"
            className="radio text-blue-500 ml-3"
            onChange={onChange}
            name={nameGroup}
            checked={checked}
            value={value}
         />

         <div className="flex flex-col">
            <p className="text-black text-xl">{packageName}</p>
            {benefits.map((benefit: string, index: number) => (
               <p key={index} className="text-gray-600 text-[15px]">
                  {"- " + benefit}
               </p>
            ))}
         </div>
      </label>
   );
};

export default PackageOption;

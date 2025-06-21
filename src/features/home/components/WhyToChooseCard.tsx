import type { FC } from "react";

interface WhyToChooseCardProps {
   title: string;
   description: string;
   Icon: FC<React.SVGProps<SVGSVGElement>>;
}

const WhyToChooseCard = ({
   title,
   description,
   Icon,
}: WhyToChooseCardProps) => {
   return (
      <div
         className="p-[20px] border-2 border-gray-200 bg-blue-500 h-[280px] w-[280px]
                    rounded-tr-[40px] rounded-bl-[40px] relative flex flex-col
                  hover:bg-blue-600 transition-all duration-150 cursor-pointer"
      >
         <div
            className="h-[80px] w-[80px] rounded-full bg-blue-900 border-4
                border-white absolute top-[-20px] left-[-20px] flex items-center justify-center"
         >
            <Icon className="text-white w-[50px] h-[50px]" />
         </div>

         <div className="flex flex-col items-center justify-center gap-5 h-full">
            <p className="text-center font-bold text-3xl text-white">{title}</p>

            <p className="text-center font-medium text-xl text-gray-50">
               {description}
            </p>
         </div>
      </div>
   );
};

export default WhyToChooseCard;

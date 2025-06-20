interface WorkStepProps {
   number: string;
   title: string;
   description: string;
}

const WorkStep = ({ number, title, description }: WorkStepProps) => {
   return (
      <div
         className="p-[20px] w-[280px] h-[280px] bg-white rounded-xl flex flex-col gap-2
                    cursor-pointer border-b-4 border-b-transparent hover:border-b-blue-500
                     transition-all duration-300 hover:scale-[1.02]"
      >
         <div
            className="flex justify-center items-center bg-blue-500 
                w-[70px] h-[70px] text-3xl text-white font-bold rounded-[20px]"
         >
            {number}
         </div>

         <p className="text-gray-500 font-bold text-xl">{title}</p>

         <p className="text-gray-800 text-[17px]">{description}</p>
      </div>
   );
};

export default WorkStep;

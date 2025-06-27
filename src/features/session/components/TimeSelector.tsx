interface TimeSelectorProps {
   timeList: string[];
   selected: string;
   func?: (time: string) => void;
}

const TimeSelector = ({ timeList, selected, func }: TimeSelectorProps) => {
   return (
      <div
         className="flex gap-3 flex-row flex-wrap overflow-auto w-full h-full 
            border-[1px] border-gray-300 rounded-[20px] bg-gray-50"
      >
         {timeList.map((currentTime: string, index: number) => (
            <div
               onClick={() => func && func(currentTime)}
               key={index}
               className={`w-[60px] h-[50px] border-[1px] border-gray-300
                    cursor-pointer rounded-[5px] flex items-center justify-center
                    ${
                       selected == currentTime
                          ? "bg-blue-400 text-white"
                          : "bg-gray-100 text-gray-600"
                    }`}
            >
               <p>{currentTime}</p>
            </div>
         ))}
      </div>
   );
};

export default TimeSelector;

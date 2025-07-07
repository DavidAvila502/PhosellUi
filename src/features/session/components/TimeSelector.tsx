import { formatRawTime } from "../utils/TimeUtils";

interface TimeSelectorProps {
   timeList: string[];
   selected: string;
   func?: (time: string) => void;
   isTimeListLoading: boolean;
}

const TimeSelector = ({
   timeList,
   selected,
   func,
   isTimeListLoading,
}: TimeSelectorProps) => {
   return (
      <div
         className="flex gap-3 p-3 flex-row flex-wrap overflow-auto w-full h-full 
            border-[1px] border-gray-300 rounded-[20px] bg-gray-50"
      >
         {timeList.length > 0
            ? timeList.map((currentTime: string, index: number) => (
                 <div
                    onClick={() => func && func(currentTime)}
                    key={index}
                    className={`w-[80px] h-[50px] border-[1px] border-gray-300
                    cursor-pointer rounded-[5px] flex items-center justify-center
                    ${
                       selected == currentTime
                          ? "bg-blue-400 text-white"
                          : "bg-gray-100 text-gray-600"
                    }`}
                 >
                    <p>{formatRawTime(currentTime)}</p>
                 </div>
              ))
            : null}

         {isTimeListLoading ? (
            <div className="w-full h-full flex items-center justify-center">
               <span className="loading loading-spinner loading-xl text-primary"></span>
            </div>
         ) : null}

         {timeList.length == 0 ? (
            <div className="w-full h-full flex items-center justify-center">
               <p className="text-gray-400 font-medium w-[90%] text-center">
                  Ya no hay horarios disponibles para esta fecha, prueba con
                  otra.
               </p>
            </div>
         ) : null}
      </div>
   );
};

export default TimeSelector;

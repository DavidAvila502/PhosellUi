import React from "react";
import type { SessionStatus } from "../types/sessionStatus";
import { getStringOfSessionSessionStatus } from "../utils/SessionStatusUtils";

export type ListStatusFIlterType = SessionStatus | "ALL";

const StatusFilters: ListStatusFIlterType[] = [
   "ALL",
   "REQUESTED",
   "CONFIRMED",
   "IN_PROGRESS",
   "PHOTOS_PENDING",
   "COMPLETED",
   "CANCELLED_BY_CLIENT",
   "CANCELLED_BY_ADMIN",
];

interface SessionStatusFiler {
   selected?: ListStatusFIlterType;
   setSelected?: (param: ListStatusFIlterType) => void;
}

const SessionStatusFilter = ({ selected, setSelected }: SessionStatusFiler) => {
   return (
      <div
         className="flex flex-row gap-3 mb-[20px] border-b-1
        border-gray-200 p-[10px] overflow-x-auto"
      >
         {StatusFilters.map((s, index) => (
            <React.Fragment key={index}>
               <StatusFilterButton
                  text={s}
                  isActive={selected == s}
                  setSelected={setSelected}
               />
            </React.Fragment>
         ))}
      </div>
   );
};

const StatusFilterButton = ({
   text,
   isActive,
   setSelected,
}: {
   text: ListStatusFIlterType;
   isActive: boolean;
   setSelected?: (param: ListStatusFIlterType) => void;
}) => (
   <button
      onClick={() => (setSelected ? setSelected(text) : () => {})}
      className={`p-2 border-2 whitespace-nowrap rounded-full
        cursor-pointer ${
           isActive
              ? "bg-blue-500 text-white"
              : "text-blue-400 border-blue-400 "
        }`}
   >
      {text == "ALL" ? "Todo" : getStringOfSessionSessionStatus(text)}
   </button>
);
export default SessionStatusFilter;

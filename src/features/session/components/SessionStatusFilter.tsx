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
}

const SessionStatusFilter = ({ selected }: SessionStatusFiler) => {
   return (
      <div
         className="flex flex-row gap-3 mb-[20px] border-b-1
        border-gray-200 p-[10px] overflow-x-auto"
      >
         {StatusFilters.map((s, index) => (
            <React.Fragment key={index}>
               <StatusFilterButton text={s} isActive={false} />
            </React.Fragment>
         ))}
      </div>
   );
};

const StatusFilterButton = ({
   text,
   isActive,
}: {
   text: ListStatusFIlterType;
   isActive: boolean;
}) => (
   <button
      className="p-2 border-2 whitespace-nowrap border-blue-400 rounded-full
        cursor-pointer text-gray-500"
   >
      {text == "ALL" ? "Todo" : getStringOfSessionSessionStatus(text)}
   </button>
);
export default SessionStatusFilter;

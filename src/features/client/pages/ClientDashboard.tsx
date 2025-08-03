import { useEffect } from "react";
import useGetSessionsMeClient from "../../session/hooks/useGetSessionsMeClient";
import SessionListContainer from "../../session/components/SessionListContainer";
import SessionCard from "../../session/components/SessionCard";
import React from "react";

export function ClientDashboard() {
   const { clientSessionsData, clientSessionsDataError, getSessionsMeClient } =
      useGetSessionsMeClient();

   useEffect(() => {
      getSessionsMeClient();
   }, [getSessionsMeClient]);

   useEffect(() => {
      if (clientSessionsDataError) console.warn(clientSessionsDataError);
   }, [clientSessionsDataError]);

   return (
      <div className="flex flex-col items-center min-h-[100vh] bg-gray-50">
         <div className="max-w-[1536px] w-full p-[20px]">
            <div className="max-w-[1280px] mx-auto w-full pt-[40px] flex flex-col">
               <p className="mb-[20px] font-bold text-blue-400 text-[25px]">
                  Mis Sesiones
               </p>

               <SessionListContainer>
                  {clientSessionsData == null ||
                  clientSessionsData.content.length == 0 ? (
                     <p>Parece que no tienes sesiones todavía</p>
                  ) : null}
                  {clientSessionsData?.content.map((s, index) => (
                     <React.Fragment key={index}>
                        <SessionCard session={s} />
                     </React.Fragment>
                  ))}
               </SessionListContainer>
            </div>
         </div>
      </div>
   );
}

import { useEffect, useState } from "react";
import useGetSessionsMeClient from "../../session/hooks/useGetSessionsMeClient";
import SessionListContainer from "../../session/components/SessionListContainer";
import SessionCard from "../../session/components/SessionCard";
import React from "react";
import SessionHandlerModal from "../../session/components/SessionHandlerModal";
import type { Session } from "../../session/models/sessionModels";
import { useAuthStore } from "../../auth/store/useAuthStore";

export function ClientDashboard() {
   const { role } = useAuthStore();

   const { clientSessionsData, clientSessionsDataError, getSessionsMeClient } =
      useGetSessionsMeClient();

   const [isSessionModalOpen, setIsSessionModalOpen] = useState<boolean>(false);
   const [sessionModalData, setSessionModalData] = useState<Session | null>(
      null
   );

   useEffect(() => {
      getSessionsMeClient();
   }, [getSessionsMeClient]);

   useEffect(() => {
      if (clientSessionsDataError) console.warn(clientSessionsDataError);
   }, [clientSessionsDataError]);

   return (
      <>
         <SessionHandlerModal
            isOpen={isSessionModalOpen}
            session={sessionModalData}
            role={role}
            closeModal={() => setIsSessionModalOpen(false)}
         />
         <div className="flex flex-col items-center min-h-[100vh]">
            <div className="max-w-[1536px] w-full p-[20px]">
               <div className="max-w-[1280px] mx-auto w-full pt-[40px] flex flex-col">
                  <p className="mb-[20px] font-bold text-blue-400 text-[35px]">
                     Mis Sesiones
                  </p>

                  <SessionListContainer>
                     {clientSessionsData == null ||
                     clientSessionsData.content.length == 0 ? (
                        <p>Parece que no tienes sesiones todavía</p>
                     ) : null}
                     {clientSessionsData?.content.map((s, index) => (
                        <React.Fragment key={index}>
                           <SessionCard
                              session={s}
                              openModal={() => {
                                 setIsSessionModalOpen(true);
                                 setSessionModalData(s);
                              }}
                           />
                        </React.Fragment>
                     ))}
                  </SessionListContainer>
               </div>
            </div>
         </div>
      </>
   );
}

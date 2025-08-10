import { useEffect, useMemo, useState } from "react";
import useGetSessionsMeClient from "../../session/hooks/useGetSessionsMeClient";
import SessionListContainer from "../../session/components/SessionListContainer";
import SessionCard from "../../session/components/SessionCard";
import React from "react";
import SessionHandlerModal from "../../session/components/SessionHandlerModal";
import type { Session } from "../../session/models/sessionModels";
import { useAuthStore } from "../../auth/store/useAuthStore";
import SessionStatusFilter, {
   type ListStatusFIlterType,
} from "../../session/components/SessionStatusFilter";
import SessionTextFilter from "../../session/components/SessionTextFilter";
import type { SessionsQueryParams } from "../../session/dtos/sessionDtos";
import PaginationHandler from "../../session/components/PaginationHandler";

export function ClientDashboard() {
   const { role } = useAuthStore();

   const [queryParams, setQueryParams] = useState<SessionsQueryParams>({
      page: 0,
      sort: "sessionDate,desc",
   });

   const {
      clientSessionsData,
      clientSessionsDataError,
      clientSessionsDataLoading,
      getSessionsMeClient,
   } = useGetSessionsMeClient();

   const [isSessionModalOpen, setIsSessionModalOpen] = useState<boolean>(false);
   const [sessionModalData, setSessionModalData] = useState<Session | null>(
      null
   );

   const [statusFilterSelected, setSatusFilterSelected] =
      useState<ListStatusFIlterType>("ALL");

   const [textFilterParam, setTextFilterParam] = useState<string>("");

   const filteredSessions = useMemo(() => {
      return clientSessionsData?.content.filter((sess) => {
         if (
            statusFilterSelected != "ALL" &&
            sess.sessionStatus != statusFilterSelected
         ) {
            return false;
         }

         const lower = textFilterParam.trim().toLowerCase();
         if (lower === "") {
            return true;
         }

         return (
            sess.client.fullName.toLowerCase().includes(lower) ||
            sess.client.phone.includes(lower) ||
            sess.photographer.fullName.toLowerCase().includes(lower) ||
            sess.photographer.phone.includes(lower) ||
            sess.location.toLowerCase().includes(lower)
         );
      });
   }, [statusFilterSelected, textFilterParam, clientSessionsData]);

   useEffect(() => {
      getSessionsMeClient(queryParams);
   }, [getSessionsMeClient, queryParams]);

   useEffect(() => {
      if (clientSessionsDataError) console.warn(clientSessionsDataError);
   }, [clientSessionsDataError]);

   useEffect(() => {
      console.log(clientSessionsData);
   }, [clientSessionsData]);
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

                  {/* Local Filters */}

                  <SessionTextFilter
                     value={textFilterParam}
                     setValue={setTextFilterParam}
                  />

                  <SessionStatusFilter
                     selected={statusFilterSelected}
                     setSelected={(param: ListStatusFIlterType) =>
                        setSatusFilterSelected(param)
                     }
                  />

                  {/* Loading */}
                  {clientSessionsDataLoading ? (
                     <div className="w-full h-[400px] flex items-center justify-center">
                        <span className="loading loading-spinner loading-xl text-primary"></span>
                     </div>
                  ) : null}

                  {/* Session List */}
                  <SessionListContainer>
                     {!clientSessionsData && !clientSessionsDataLoading ? (
                        <p className="text-[20px] font-bold text-gray-400">
                           Parece que no tienes sesiones todavía
                        </p>
                     ) : null}
                     {filteredSessions?.map((s, index) => (
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

                  <PaginationHandler
                     currentPage={queryParams.page || 0}
                     totalPages={clientSessionsData?.totalPages || 0}
                     setCurrentPage={(newPage: number) =>
                        setQueryParams({ ...queryParams, page: newPage })
                     }
                  />
               </div>
            </div>
         </div>
      </>
   );
}

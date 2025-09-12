import { useMemo } from "react";

interface PaginationHandlerProps {
   currentPage: number;
   totalPages: number;
   setCurrentPage?: (page: number) => void;
   jumps?: number;
}

const PaginationHandler = ({
   currentPage,
   totalPages,
   setCurrentPage,
   jumps = 4,
}: PaginationHandlerProps) => {
   const lastIndex = Math.max(0, totalPages - 1);

   const pages = useMemo(() => {
      if (totalPages <= 0) return [];

      const maxStart = Math.max(0, lastIndex - (jumps - 1));
      const half = Math.floor(jumps / 2);
      let start = currentPage - half;

      start = Math.max(0, Math.min(start, maxStart));

      const res: number[] = [];
      const end = Math.min(lastIndex, start + jumps - 1);
      for (let i = start; i <= end; i++) res.push(i);

      return res;
   }, [currentPage, totalPages, jumps, lastIndex]);

   const goPrev = () => {
      if (setCurrentPage && currentPage > 0) setCurrentPage(currentPage - 1);
   };
   const goNext = () => {
      if (setCurrentPage && currentPage < lastIndex)
         setCurrentPage(currentPage + 1);
   };

   return (
      <>
         {/* Page controllers */}
         <div className="w-full flex items-center gap-3 justify-center mt-4">
            <button
               onClick={goPrev}
               disabled={!setCurrentPage || currentPage <= 0}
               className="w-[40px] h-[40px] text-gray-400 text-[20px] cursor-pointer
                bg-white rounded-[5px] border-1 border-gray-400 disabled:opacity-50"
               aria-label="Previous page"
            >
               {"<"}
            </button>

            {pages.map((p) => {
               const isCurrent = currentPage === p;
               const commonClasses = `w-[40px] h-[40px] text-[20px] rounded-[5px] 
                     flex items-center justify-center truncate`;
               const activeClasses = isCurrent
                  ? "text-white bg-blue-600"
                  : "bg-white text-gray-400 border-1 border-gray-400";

               return setCurrentPage ? (
                  <button
                     key={p}
                     onClick={() => setCurrentPage(p)}
                     className={`${commonClasses} ${activeClasses}`}
                     aria-current={isCurrent ? "page" : undefined}
                  >
                     {p + 1}
                  </button>
               ) : (
                  <div key={p} className={`${commonClasses} ${activeClasses}`}>
                     {p + 1}
                  </div>
               );
            })}

            <button
               onClick={goNext}
               disabled={!setCurrentPage || currentPage >= totalPages}
               className="w-[40px] h-[40px] text-gray-400 text-[20px] cursor-pointer bg-white
                  rounded-[5px] border-1 border-gray-400 disabled:opacity-50"
               aria-label="Next page"
            >
               {">"}
            </button>
         </div>
      </>
   );
};

export default PaginationHandler;

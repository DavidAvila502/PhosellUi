import { type ReactNode } from "react";

interface SessionListContainerProps {
   children: ReactNode;
}

const SessionListContainer = ({ children }: SessionListContainerProps) => {
   return (
      <>
         <div className="w-full flex flex-wrap gap-5 h-[400px]">{children}</div>
      </>
   );
};

export default SessionListContainer;

import type { ReactNode } from "react";

interface SessionListContainerProps {
   children: ReactNode;
}

const SessionListContainer = ({ children }: SessionListContainerProps) => {
   return (
      <div className="w-full flex flex-wrap items-center gap-5">{children}</div>
   );
};

export default SessionListContainer;

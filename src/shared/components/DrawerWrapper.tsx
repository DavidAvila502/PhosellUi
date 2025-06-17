import { type ReactNode } from "react";
import { Link } from "react-router-dom";

interface DrawerWrapperProps {
   children: ReactNode;
   drawerOptions: { path: string; label: string }[];
   drawerId: string;
}

const DrawerWrapper = ({
   drawerId,
   children,
   drawerOptions,
}: DrawerWrapperProps) => {
   return (
      <div className="drawer">
         <input id={drawerId} type="checkbox" className="drawer-toggle" />
         <div className="drawer-content">
            {/* Page content */}
            {children}
         </div>
         <div className="drawer-side">
            <label
               htmlFor={drawerId}
               aria-label="close sidebar"
               className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
               {/* Sidebar content */}
               <p className="text-blue-400 text-xl font-bold">Tropix</p>

               {drawerOptions.map((op, index) => {
                  return (
                     <li
                        key={index}
                        className="hover:bg-blue-500 hover:text-white rounded"
                     >
                        <Link to={op.path}>{op.label}</Link>
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
};

export default DrawerWrapper;

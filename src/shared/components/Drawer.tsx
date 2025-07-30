import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import type { NavbarOption } from "./MainNavba";

interface DrawerProps {
   isOpen: boolean;
   onClose: () => void;
   options: NavbarOption[];
}

export default function Drawer({ isOpen, onClose, options }: DrawerProps) {
   // prevent body scroll when drawer is open
   useEffect(() => {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
      return () => {
         document.body.style.overflow = "auto";
      };
   }, [isOpen]);

   if (typeof document === "undefined") return null;

   return createPortal(
      <>
         {/* Overlay */}
         <div
            className={`fixed inset-0 bg-black transition-opacity duration-300 ${
               isOpen
                  ? "opacity-50 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
            }`}
            onClick={onClose}
         />

         {/* Sidebar panel */}
         <aside
            className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ${
               isOpen ? "translate-x-0" : "translate-x-full"
            } flex flex-col p-4 z-50`}
         >
            <button
               onClick={onClose}
               aria-label="Close drawer"
               className="self-end mb-4 text-xl text-gray-600 hover:text-gray-900"
            >
               ✕
            </button>
            <h2 className="text-2xl font-bold mb-6 text-blue-400">TROPIX</h2>
            <nav className="flex-1">
               <ul className="space-y-2">
                  {options.map((opt, idx) => (
                     <div key={idx}>
                        <li>{getDrawerOption(opt, onClose)}</li>
                        <div className="divider"></div>
                     </div>
                  ))}
               </ul>
            </nav>
         </aside>
      </>,
      document.body
   );
}

const getDrawerOption = (opt: NavbarOption, onClose: () => void) => {
   return !opt.isHash ? (
      <Link
         to={opt.path}
         className="block px-3 py-2 rounded text-gray-600 text-[18px] hover:bg-blue-500 hover:text-white"
         onClick={onClose}
      >
         {opt.label}
      </Link>
   ) : (
      <HashLink
         smooth
         to={opt.path}
         className="block px-3 py-2 rounded text-gray-600 text-[18px] hover:bg-blue-500 hover:text-white"
         onClick={onClose}
      >
         {opt.label}
      </HashLink>
   );
};

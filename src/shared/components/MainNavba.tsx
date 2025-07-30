import { Link } from "react-router-dom";
import { Bars4Icon } from "@heroicons/react/16/solid";
import styles from "../../styles/customStyles";
import { HashLink } from "react-router-hash-link";
import React from "react";

export interface NavbarOption {
   label: string;
   path: string;
   isHash?: boolean;
   buttonStyle?: boolean;
}

interface MainNavbarProps {
   toggleDrawer: () => void;
   navbarOptions: NavbarOption[];
}

const MainNavbar = ({ toggleDrawer, navbarOptions }: MainNavbarProps) => {
   return (
      <nav className="h-[70px] w-[100%] shadow-md flex items-center justify-center fixed bg-white z-2">
         <div
            className={`${styles.innerwidth} flex items-center justify-between w-full ${styles.paddings}`}
         >
            <p className="text-blue-400 text-3xl font-bold">Tropix</p>
            <button
               onClick={() => toggleDrawer()}
               className="drawer-button min-[700px]:hidden text-white cursor-pointer"
            >
               <Bars4Icon className="text-gray-400 size-9" />
            </button>
            <ul className="flex gap-5 flex-row items-center text-lg max-[800px]:text-[15px] max-[700px]:hidden">
               {navbarOptions.map((opt, index) => (
                  <React.Fragment key={index}>
                     {getNavbarOption(opt)}
                  </React.Fragment>
               ))}
            </ul>
         </div>
      </nav>
   );
};

const getNavbarOption = (opt: NavbarOption) => {
   if (opt.buttonStyle) {
      return (
         <li className="btn btn-outline btn-info hover:text-white">
            <Link to={opt.path}>{opt.label}</Link>
         </li>
      );
   }

   if (opt.isHash) {
      return (
         <li
            className="hover:border-solid border-b-2 border-b-transparent hover:border-b-2
                             hover:border-blue-400 hover:text-blue-400 transition-all duration-200"
         >
            <HashLink smooth to={opt.path}>
               {opt.label}
            </HashLink>
         </li>
      );
   }

   return (
      <li
         className="hover:border-solid border-b-2 border-b-transparent hover:border-b-2
                             hover:border-blue-400 hover:text-blue-400 transition-all duration-200"
      >
         <Link to={opt.path}>{opt.label}</Link>
      </li>
   );
};

export default MainNavbar;

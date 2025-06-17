import { Link } from "react-router-dom";
import { ROUTES } from "../../app/constants/routes";
import { Bars4Icon } from "@heroicons/react/16/solid";
const PublicNavbar = () => {
   return (
      <nav className="h-[70px] w-[100%] shadow-md flex items-center justify-center fixed">
         <div className="flex items-center justify-between w-[80%]">
            <p className="text-blue-400 text-3xl font-bold">Tropix</p>
            <label
               htmlFor="public-drawer"
               className="drawer-button min-[700px]:hidden text-white cursor-pointer"
            >
               <Bars4Icon className="text-gray-400 size-9" />
            </label>
            <ul className="flex gap-5 flex-row items-center text-lg max-[800px]:text-[15px] max-[700px]:hidden">
               <li
                  className="hover:border-solid border-b-2 border-b-transparent hover:border-b-2
                             hover:border-blue-400 hover:text-blue-400 transition-all duration-200"
               >
                  <Link to={ROUTES.HOME}>Home</Link>
               </li>

               <li
                  className="hover:border-solid border-b-2 border-b-transparent hover:border-b-2
                             hover:border-blue-400 hover:text-blue-400 transition-all duration-200"
               >
                  <Link to={""}>Cómo Funciona</Link>
               </li>

               <li
                  className="hover:border-solid border-b-2 border-b-transparent hover:border-b-2
                             hover:border-blue-400 hover:text-blue-400 transition-all duration-200"
               >
                  <Link to={""}>Reservar Sesión</Link>
               </li>

               <li className="btn btn-outline btn-info hover:text-white">
                  <Link to={ROUTES.AUTH.ROOT}>Acceder</Link>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default PublicNavbar;

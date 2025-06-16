import { Link } from "react-router-dom";
import { ROUTES } from "../../app/constants/routes";

const PublicNavbar = () => {
   return (
      <nav className="h-[70px] w-[100%] shadow-md flex items-center justify-center fixed">
         <div className="flex items-center justify-between w-[80%]">
            <p className="text-blue-600 text-3xl font-bold">Tropix</p>
            <label
               htmlFor="public-drawer"
               className="btn btn-primary drawer-button min-[700px]:hidden"
            >
               Open drawer
            </label>
            <ul className="flex gap-5 flex-row items-center text-lg max-[800px]:text-[15px] max-[700px]:hidden">
               <li
                  className="hover:border-solid border-b-2 border-b-transparent hover:border-b-2
                             hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
               >
                  <Link to={ROUTES.HOME}>Home</Link>
               </li>

               <li
                  className="hover:border-solid border-b-2 border-b-transparent hover:border-b-2
                             hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
               >
                  <Link to={""}>Cómo Funciona</Link>
               </li>

               <li
                  className="hover:border-solid border-b-2 border-b-transparent hover:border-b-2
                             hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
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

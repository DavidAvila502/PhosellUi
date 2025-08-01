import { useEffect } from "react";
import { useLogout } from "../../auth/hooks/useLogout";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../app/constants/routes";

const ClientAccount = () => {
   const navigate = useNavigate();

   const { succsess, logout } = useLogout();

   useEffect(() => {
      if (succsess) navigate(ROUTES.HOME, { replace: true });
   }, [succsess, navigate]);

   return (
      <div className="min-h-[100vh]">
         <p>Client Account</p>

         <button
            onClick={() => {
               logout();
            }}
            className="cursor-pointer border-blue-500 border-2"
         >
            Cerrar sesión
         </button>
      </div>
   );
};

export default ClientAccount;

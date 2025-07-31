import { useEffect } from "react";
import { useLogout } from "../../auth/hooks/useLogout";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../app/constants/routes";

export function ClientDashboard() {
   const navigate = useNavigate();

   const { succsess, isLoading, error, logout } = useLogout();

   useEffect(() => {
      if (succsess) navigate(ROUTES.HOME, { replace: true });
   }, [succsess]);

   return (
      <div className="flex flex-col items-center justify-center min-h-[100vh]">
         <h1>CLIENT PROTECTED</h1>
         <button className="bg-blue-600" onClick={() => logout()}>
            Cerrar sesión
         </button>

         <p>{isLoading ? "Loading" : ""}</p>
         <p>{error ? error.message : ""}</p>
      </div>
   );
}

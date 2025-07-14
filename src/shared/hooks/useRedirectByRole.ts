import { useEffect } from "react";
import type { Roles } from "../../features/auth/types/roles";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../app/constants/routes";

const useRedirectByRole = (role?: Roles) => {
   const navigate = useNavigate();

   useEffect(() => {
      if (!role) return;

      if (role == "CLIENT") {
         navigate(ROUTES.CLIENT.ROOT, { replace: true });
      }
   }, [role, navigate]);
};

export default useRedirectByRole;

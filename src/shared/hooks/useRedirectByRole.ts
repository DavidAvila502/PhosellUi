import { useEffect } from "react";
import type { Role } from "../../features/auth/types/role";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../app/constants/routes";

const useRedirectByRole = (role?: Role) => {
   const navigate = useNavigate();

   useEffect(() => {
      if (!role) return;

      if (role == "CLIENT") {
         navigate(ROUTES.CLIENT.ROOT, { replace: true });
      }
   }, [role, navigate]);
};

export default useRedirectByRole;

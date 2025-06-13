import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { ROUTES } from "../../../app/constants/routes";
import type { Roles } from "../types/roles";

export function RequireAuth({ allowedRoles }: { allowedRoles: Roles[] }) {
   const { jwtToken, role } = useAuthStore();

   if (!jwtToken) return <Navigate to={ROUTES.HOME} replace />;

   if (role == null) <Navigate to={ROUTES.HOME} replace />;

   if (!allowedRoles.includes(role!)) <Navigate to={ROUTES.HOME} replace />;

   return <Outlet />;
}

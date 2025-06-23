import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { Home } from "../features/home/pages/Home";
import { Login } from "../features/auth/pages/Login";
import { Register } from "../features/auth/pages/Register";
import { RequireAuth } from "../features/auth/components/RequireAuth";
import { ROLES } from "./constants/roles";
import { ClientDashboard } from "../features/client/pages/ClientDashboard";
import type { Roles } from "../features/auth/types/roles";
import PublicLayout from "./layouts/PublicLayout";
import Reserve from "../features/session/pages/Reserve";

export function AppRoutes() {
   return (
      <Routes>
         <Route element={<PublicLayout />}>
            <Route path={ROUTES.HOME} element={<Home />} />

            <Route path={ROUTES.AUTH.ROOT}>
               <Route index element={<Login />} />

               <Route
                  path={ROUTES.AUTH.REGISTER.substring(1)}
                  element={<Register />}
               />
            </Route>

            <Route path={ROUTES.SESSION.ROOT}>
               <Route index element={<Reserve />} />
            </Route>
         </Route>

         <Route
            element={<RequireAuth allowedRoles={[ROLES.CLIENT] as Roles[]} />}
         >
            <Route path={ROUTES.CLIENT.ROOT}>
               <Route index element={<ClientDashboard />} />
            </Route>
         </Route>

         <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
      </Routes>
   );
}

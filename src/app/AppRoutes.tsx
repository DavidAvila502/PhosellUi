import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { Home } from "../features/home/pages/Home";
import { Login } from "../features/auth/pages/Login";
import { RequireAuth } from "../features/auth/components/RequireAuth";
import { ROLES } from "./constants/roles";
import { ClientDashboard } from "../features/client/pages/ClientDashboard";
import type { Roles } from "../features/auth/types/roles";
import PublicLayout from "./layouts/PublicLayout";
import Reserve from "../features/session/pages/Reserve";
import PrivateLayout from "./layouts/PrivateLayout";
import ClientAccount from "../features/client/pages/ClientAccount";

export function AppRoutes() {
   return (
      <Routes>
         <Route element={<PublicLayout />}>
            <Route path={ROUTES.HOME} element={<Home />} />

            <Route path={ROUTES.AUTH.ROOT}>
               <Route index element={<Login />} />
            </Route>

            <Route path={ROUTES.SESSION.ROOT}>
               <Route index element={<Reserve />} />
            </Route>
         </Route>

         <Route
            element={<RequireAuth allowedRoles={[ROLES.CLIENT] as Roles[]} />}
         >
            <Route path={ROUTES.CLIENT.ROOT} element={<PrivateLayout />}>
               <Route index element={<ClientDashboard />} />

               <Route
                  path={ROUTES.CLIENT.ACCOUNT.substring(1)}
                  element={<ClientAccount />}
               />
            </Route>
         </Route>

         <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
      </Routes>
   );
}

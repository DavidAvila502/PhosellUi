import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { Home } from "../features/home/pages/Home";
import { Login } from "../features/auth/pages/Login";
import { Register } from "../features/auth/pages/Register";

export function AppRoutes() {
   return (
      <Routes>
         <Route path={ROUTES.HOME} element={<Home />} />

         <Route path={ROUTES.AUTH.ROOT}>
            <Route index element={<Login />} />

            <Route
               path={ROUTES.AUTH.REGISTER.substring(1)}
               element={<Register />}
            />
         </Route>

         <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
      </Routes>
   );
}

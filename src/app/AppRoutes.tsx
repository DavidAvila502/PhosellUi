import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/ConstantRoutes";
import { Home } from "../features/home/pages/Home";

export function AppRoutes() {
   return (
      <Routes>
         <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
   );
}

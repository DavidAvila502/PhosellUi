import { Outlet } from "react-router-dom";
import PublicNavbar from "../../shared/components/PublicNavbar";
import { ROUTES } from "../constants/routes";
import DrawerWrapper from "../../shared/components/DrawerWrapper";

const PublicLayout = () => {
   return (
      <DrawerWrapper
         drawerId="public-drawer"
         drawerOptions={[
            { label: "Home", path: ROUTES.HOME },
            { label: "Login", path: ROUTES.AUTH.ROOT },
         ]}
      >
         <div>
            <header>
               <PublicNavbar />
            </header>

            <main>
               <Outlet />
            </main>

            <footer>© 2025 TROPIX - Todos los derechos reservados.</footer>
         </div>
      </DrawerWrapper>
   );
};

export default PublicLayout;

import { Outlet } from "react-router-dom";
import PublicNavbar from "../../shared/components/PublicNavbar";
import { ROUTES } from "../constants/routes";
import Drawer, { type DrawerOption } from "../../shared/components/Drawer";
import { useState } from "react";

const PublicLayout = () => {
   const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
   const toggleDrawer = () => setDrawerOpen((open) => !open);

   const options: DrawerOption[] = [
      { label: "Home", path: ROUTES.HOME },
      { label: "Cómo funciona", path: `${ROUTES.HOME}#how-work`, isHash: true },
      { label: "Reservar Sesión", path: ROUTES.HOME },
      { label: "Login", path: ROUTES.AUTH.ROOT },
   ];

   return (
      <>
         <header>
            <PublicNavbar toggleDrawer={toggleDrawer} />
         </header>

         <main className="pt-[70px]">
            <Outlet />
         </main>

         <footer>© 2025 TROPIX - Todos los derechos reservados.</footer>

         <Drawer
            isOpen={drawerOpen}
            options={options}
            onClose={() => setDrawerOpen(false)}
         />
      </>
   );
};

export default PublicLayout;

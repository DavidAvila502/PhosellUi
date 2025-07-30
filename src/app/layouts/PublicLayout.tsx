import { Outlet } from "react-router-dom";
import MainNavbar, {
   type NavbarOption,
} from "../../shared/components/MainNavba";
import { ROUTES } from "../constants/routes";
import Drawer from "../../shared/components/Drawer";
import { useState } from "react";

const PublicLayout = () => {
   const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
   const toggleDrawer = () => setDrawerOpen((open) => !open);

   const options: NavbarOption[] = [
      { label: "Home", path: ROUTES.HOME },
      { label: "Cómo funciona", path: `${ROUTES.HOME}#how-work`, isHash: true },
      { label: "Reservar Sesión", path: ROUTES.SESSION.ROOT },
      { label: "Acceder", path: ROUTES.AUTH.ROOT, buttonStyle: true },
   ];

   return (
      <>
         <header>
            <MainNavbar navbarOptions={options} toggleDrawer={toggleDrawer} />
         </header>

         <main className="pt-[70px]">
            <Outlet />
         </main>

         <footer>
            <div className="bg-blue-900 mt-[40px] p-6">
               <p className="text-center text-white text-xl max-sm:text-[15px] font-bold">
                  © 2025 TROPIX - Todos los derechos reservados.
               </p>
            </div>
         </footer>

         <Drawer
            isOpen={drawerOpen}
            options={options}
            onClose={() => setDrawerOpen(false)}
         />
      </>
   );
};

export default PublicLayout;

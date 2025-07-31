import { Outlet } from "react-router-dom";
import MainNavbar, {
   type NavbarOption,
} from "../../shared/components/MainNavba";
import Drawer from "../../shared/components/Drawer";
import { ROUTES } from "../constants/routes";
import { useState } from "react";
import { useAuthStore } from "../../features/auth/store/useAuthStore";
import { ROLES } from "../constants/roles";

const PrivateLayout = () => {
   const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
   const toggleDrawer = () => setDrawerOpen((open) => !open);
   const { role } = useAuthStore();
   let options: NavbarOption[] = [];

   if (role == ROLES.CLIENT)
      options = [
         { label: "Sesiones", path: ROUTES.CLIENT.ROOT },
         {
            label: "Cuenta",
            path: ROUTES.CLIENT.ACCOUNT.substring(1),
         },
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

export default PrivateLayout;

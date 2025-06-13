import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Roles } from "../types/roles";

interface AuthState {
   id: string | null;
   fullName: string | null;
   email: string | null;
   role: Roles | null;
   jwtToken: string | null;
   expiresIn: number | null;
   setAuth: (data: {
      id: string;
      fullName: string;
      email: string;
      role: AuthState["role"];
      jwtToken: string;
      expiresIn: number;
   }) => void;
   clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
   persist(
      (set) => ({
         id: null,
         fullName: null,
         email: null,
         role: null,
         jwtToken: null,
         expiresIn: null,
         setAuth: ({ id, fullName, email, role, jwtToken, expiresIn }) =>
            set({ id, fullName, email, role, jwtToken, expiresIn }),
         clearAuth: () =>
            set({
               id: null,
               fullName: null,
               email: null,
               role: null,
               jwtToken: null,
               expiresIn: null,
            }),
      }),
      {
         name: "auth-storage",
         storage: createJSONStorage(() => localStorage),
      }
   )
);

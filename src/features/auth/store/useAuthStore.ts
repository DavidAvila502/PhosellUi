import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Role } from "../types/role";

interface AuthState {
   id: string | null;
   fullName: string | null;
   email: string | null;
   role: Role | null;
   jwtToken: string | null;
   expiresIn: number | null;
   setAuth: (data: {
      id: string | null;
      fullName: string | null;
      email: string | null;
      role: AuthState["role"];
      jwtToken: string | null;
      expiresIn: number | null;
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

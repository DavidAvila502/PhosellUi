import { logout } from "../adapters/authAdapter";

export const logoutService = async (): Promise<void> => {
   await logout();
};

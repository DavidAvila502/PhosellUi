import axiosClient from "../../../core/http/axiosClient";
import type { SessionPackage } from "../models/packageModels";

export const getAllPackages = async (): Promise<SessionPackage[]> => {
   const response = await axiosClient.get("/packages");

   return response.data as SessionPackage[];
};

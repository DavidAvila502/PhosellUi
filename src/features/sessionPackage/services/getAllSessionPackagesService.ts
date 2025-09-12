import { getAllPackages } from "../adapters/sessionPackageAdapter";
import type { SessionPackage } from "../models/packageModels";

const getAllSessionPackagesService = async (): Promise<SessionPackage[]> => {
   return await getAllPackages();
};

export default getAllSessionPackagesService;

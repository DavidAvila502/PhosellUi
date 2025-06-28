import { getAllPackages } from "../adapters/sessionPackageAdapter";
import type { SessionPackage } from "../models/package";

const getAllSessionPackagesService = async (): Promise<SessionPackage[]> => {
   return await getAllPackages();
};

export default getAllSessionPackagesService;

import { useCallback, useState } from "react";
import type { SessionPackage } from "../models/package";
import getAllSessionPackagesService from "../services/getAllSessionPackagesService";

const useGetAllSessionPackages = () => {
   const [data, setData] = useState<SessionPackage[] | null>(null);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [error, setError] = useState<Error | null>(null);

   const getAllSessionsPackages = useCallback(async () => {
      try {
         setIsLoading(true);

         const data: SessionPackage[] = await getAllSessionPackagesService();

         setData(data);
      } catch (err) {
         setError(err as Error);
      } finally {
         setIsLoading(false);
      }
   }, []);

   return { data, isLoading, error, getAllSessionsPackages };
};

export default useGetAllSessionPackages;

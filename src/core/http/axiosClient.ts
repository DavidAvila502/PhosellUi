import axios, {
   AxiosError,
   type AxiosInstance,
   type AxiosResponse,
   type InternalAxiosRequestConfig,
} from "axios";
import { useAuthStore } from "../../features/auth/store/useAuthStore";
import { ROUTES } from "../../app/constants/routes";

const axiosClient: AxiosInstance = axios.create({
   baseURL:
      import.meta.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api/v1",
   timeout: 10000,
   withCredentials: true,
   headers: {
      "Content-Type": "application/json",
   },
});

const PUBLIC_PATHS = [
   "/auth/login",
   "/auth/logout",
   "/auth/refresh",
   "/auth/register",
];

axiosClient.interceptors.request.use(
   (config) => {
      const requestPath = config.url?.replace(config.baseURL || "", "") ?? "";

      const isPublic = PUBLIC_PATHS.some((path) =>
         requestPath.startsWith(path)
      );
      if (isPublic) {
         return config;
      }

      const { jwtToken } = useAuthStore.getState();
      if (jwtToken && config.headers) {
         config.headers["Authorization"] = `Bearer ${jwtToken}`;
      }
      return config;
   },
   (error) => {
      return Promise.reject(error);
   }
);

interface FailedRequest {
   resolve: (config: InternalAxiosRequestConfig) => void;
   reject: (error: any) => void;
   config: InternalAxiosRequestConfig & { _retry?: boolean };
}

// flag
let isRefreshing = false;
//pending responses
let failedQueue: FailedRequest[] = [];

//processPendingResponses
const processQueue = (error?: any, token?: string) => {
   failedQueue.forEach((prom) => {
      if (error) {
         prom.reject(error);
      } else {
         if (token) {
            prom.config.headers!["Authorization"] = `Bearer ${token}`;
         }
         prom.resolve(prom.config);
      }
   });
   failedQueue = [];
};
//Add pending responses to failedQueue
const pushToFailedQueue = (originalReq: InternalAxiosRequestConfig) => {
   return new Promise<InternalAxiosRequestConfig>((resolve, reject) => {
      failedQueue.push({ resolve, reject, config: originalReq });
   }).then((reqConfig) => axiosClient(reqConfig));
};

//retry the original request once we get the new accesToken
const retryOriginalRequest = (originalReq: InternalAxiosRequestConfig<any>) => {
   isRefreshing = true;
   const { setAuth, clearAuth } = useAuthStore.getState();
   return new Promise(async (resolve, reject) => {
      try {
         const { data } = await axiosClient.post<{
            accessToken: string;
            expiresIn: number;
         }>("/auth/refresh");

         setAuth({
            ...useAuthStore.getState(),
            jwtToken: data.accessToken,
            expiresIn: data.expiresIn,
         });
         processQueue(null, data.accessToken);

         originalReq.headers!["Authorization"] = `Bearer ${data.accessToken}`;
         resolve(axiosClient(originalReq));
      } catch (refreshError) {
         processQueue(refreshError);
         clearAuth();
         if (!window.location.pathname.startsWith(ROUTES.AUTH.ROOT)) {
            window.location.replace(ROUTES.AUTH.ROOT);
         }
         reject(refreshError);
      } finally {
         isRefreshing = false;
      }
   });
};

// intercept each response
axiosClient.interceptors.response.use(
   (res: AxiosResponse) => res,
   (err: AxiosError) => {
      const originalReq = err.config as InternalAxiosRequestConfig & {
         _retry?: boolean;
      };

      if (originalReq._retry) {
         return Promise.reject(err);
      }

      if (
         err.response?.status !== 401 ||
         originalReq.url?.includes("/auth/refresh")
      ) {
         return Promise.reject(err);
      }

      originalReq._retry = true;

      if (isRefreshing) {
         return pushToFailedQueue(originalReq);
      }

      return retryOriginalRequest(originalReq);
   }
);

export default axiosClient;

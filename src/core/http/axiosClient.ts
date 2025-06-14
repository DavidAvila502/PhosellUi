import axios, { type AxiosInstance } from "axios";
import { useAuthStore } from "../../features/auth/store/useAuthStore";

const axiosClient: AxiosInstance = axios.create({
   baseURL:
      import.meta.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api/v1",
   timeout: 10000,
   withCredentials: true,
   headers: {
      "Content-Type": "application/json",
   },
});

axiosClient.interceptors.request.use(
   (config) => {
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

export default axiosClient;

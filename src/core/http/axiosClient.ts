import axios, { type AxiosInstance } from "axios";

const axiosClient: AxiosInstance = axios.create({
   baseURL:
      import.meta.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api/v1",
   timeout: 10000,
   headers: {
      "Content-Type": "application/json",
   },
});

export default axiosClient;

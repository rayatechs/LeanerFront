import { getToken } from "@/lib/auth";
import { deleteCookie } from "@/lib/cookie";
import axios from "axios";
import { toast } from "sonner";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 30000,
});

instance.interceptors.request.use(async (config) => {
  config.headers["Authorization"]  = `Bearer ${await getToken()}`;
  return config;
});

instance.interceptors.response.use(
  (response) => {
    if (response.data?.message) {
      toast(response.data.message, { position: "top-center" });
    }
    return response;
  },
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      deleteCookie('token')
      window.location.href = "/login";
      toast(error.response.data?.message ||
        error.message ||
        "An error occurred", {
        description: Object.values(error.response.data?.errors || {}).flat().join("\n"),
      })
    } else if (error.response.status >= 400 && error.response.status <= 502) {    
      toast(error.response.data?.message ||
        error.message ||
        "An error occurred", {
        description: Object.values(error.response.data?.errors || {}).flat().join("\n"),
      })
    }
    return Promise.reject(error);
  }
);

export const noAuthInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 30000,
});

export default instance;

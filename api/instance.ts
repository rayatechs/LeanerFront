import axios from "axios";
import { getToken } from "@/lib/auth";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 30000,
});

instance.interceptors.request.use(async (config) => {
  config.headers["Authorization"] = `Bearer ${await getToken()}`;

  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      // logout
    } else if (error.response.status >= 400 && error.response.status <= 502) {
      // For errors of requests with Blob response type
      if (error.response.data instanceof Blob) {
        error.response.data.text().then((data) => {
          let json;

          try {
            json = JSON.parse(data);
          } catch (e) {}

          // show toast error
        });
      } else {
        // show toast error
      }
    }

    return Promise.reject(error);
  }
);

export const noAuthInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 30000,
});

export default instance;

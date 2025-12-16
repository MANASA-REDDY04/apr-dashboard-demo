import axios from "axios";

export const api = axios.create({
  baseURL: "/api", 
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

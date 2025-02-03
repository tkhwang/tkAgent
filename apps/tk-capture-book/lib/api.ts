import axios from "axios";

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response 인터셉터
api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

"use server";
import axios from "axios";
import { cookies } from "next/headers";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
});

api.interceptors.request.use(async (config) => {
  const cookieStore = await cookies(); // No `await` needed
  const token = cookieStore.get("session_token");

  if (token?.value) {
    config.headers.Authorization = `Bearer ${token.value}`;
  }
  return config;
});

export default api;

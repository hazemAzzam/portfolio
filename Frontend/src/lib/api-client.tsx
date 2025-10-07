import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
  },
});

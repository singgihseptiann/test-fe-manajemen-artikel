import axios from "axios";

export const apiServices = axios.create({
  baseURL: "https://test-fe.mysellerpintar.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const userAuth = axios.create({
  baseURL: "https://test-fe.mysellerpintar.com/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

import axios, { AxiosInstance } from "axios";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_DOMAIN}/admin`;

class AxiosStore {
  authInstance: AxiosInstance;
  defaultInstance: AxiosInstance;

  constructor() {
    const defaultConfig = {
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    };
    this.defaultInstance = axios.create(defaultConfig);
    this.authInstance = axios.create(defaultConfig);
  }

  setToken(token: string) {
    this.authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}

const axiosStore = new AxiosStore();

const RESPONSE_STATUS = {
  NO_AUTHORIZED: 401,
  BAD_REQUEST: 400,
};

export { axiosStore, RESPONSE_STATUS };

import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

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

//TODO 다 리펙토링 한 후 지워야함
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const authInstance = (
  token: string | undefined,
  options?: AxiosRequestConfig
) => {
  return axios.create({
    headers: { Authorization: `Bearer ${token}` },
    ...options,
  });
};

const RESPONSE_STATUS = {
  NO_AUTHORIZED: 401,
  BAD_REQUEST: 400,
};

export { axiosStore, axiosInstance, authInstance, RESPONSE_STATUS };

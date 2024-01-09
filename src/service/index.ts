import axios, { AxiosInstance } from "axios";
import { getCookie, setCookie } from "cookies-next";
import { LOGIN_API } from "./login";

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
    this.authInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        const {
          config,
          response: { status },
        } = error;
        if (status === 401) {
          const refreshToken = getCookie("refresh_token");
          if (refreshToken) {
            LOGIN_API.reissueToken(refreshToken).then((res) => {
              axiosStore.setToken(res.data.accessToken);
              setCookie("refesh_token", res.data.refeshToken);
              return axios(config);
            });
          }
        }
        return Promise.reject(error);
      }
    );
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

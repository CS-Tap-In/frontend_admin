import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_DOMAIN}/admin`;
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

const authInstance = (options?: AxiosRequestConfig) => {
  return axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    ...options,
  });
};

const RESPONSE_STATUS = {
  NO_AUTHORIZED: 401,
  BAD_REQUEST: 400,
};

export { authInstance, RESPONSE_STATUS };

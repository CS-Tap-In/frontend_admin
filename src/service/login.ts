import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_API_DOMAIN}/auth/login`;

const LOGIN_API = {
  login: ({ id, password }: { id: string; password: string }) => {
    return axios.post(`${process.env.NEXT_PUBLIC_API_DOMAIN}/auth/login`, {
      username: id,
      password: password,
    });
  },
};

export { LOGIN_API };

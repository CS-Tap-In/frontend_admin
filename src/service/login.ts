import axios from "axios";

const LOGIN_API = {
  login: ({ id, password }: { id: string; password: string }) => {
    return axios.post(`${process.env.NEXT_PUBLIC_API_DOMAIN}/auth/login`, {
      username: id,
      password: password,
    });
  },
  reissueToken: (refreshToken: string) => {
    return axios.post(`${process.env.NEXT_PUBLIC_API_DOMAIN}/auth/reissue`, {
      refreshToken,
    });
  },
};

export { LOGIN_API };

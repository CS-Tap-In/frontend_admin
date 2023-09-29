import { authInstance } from ".";

const USER_API = {
  getUsers: (token: string) => authInstance(token).get("/members"),
};

export { USER_API };

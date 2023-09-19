import { authInstance } from ".";

const CATEGORY_API = {
  createCategory: ({ title }: { title: string }) =>
    authInstance().post("/quizzes/categories", { title }),
  getCategories: () => authInstance().get("/quizzes/categories"),
};

export { CATEGORY_API };

import axios, { AxiosResponse } from "axios";
import { authInstance } from ".";

const QUIZ_API = {
  // createCategory: ({ title }: { title: string }) =>
  //   authInstance().post("/quizzes/categories", { title }),
  getCategories: (token: string | undefined): Promise<Category[]> =>
    authInstance(token)
      .get("/quizzes/categories")
      .then((res) => res.data),
  // getQuizzes: () => authInstance().get("/quizzes"),
  createQuiz: (token: string | undefined, quizInfo: Quiz) =>
    authInstance(token).post("/quizzes", quizInfo),
  // modifyQuiz: (quizInfo: Quiz) =>
  //   authInstance().put(`/quizzes/${quizInfo.categoryId}`, quizInfo),
  // deleteQuiz: (quizId: number) => authInstance().delete(`/quizzes/${quizId}`),
  // getQuizDetail: (quizId: number) => authInstance().get(`/quizzes/${quizId}`),
  // fetchCategories: async (token: string): Promise<Category[]> =>
  //   fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/admin/quizzes/categories`, {
  //     headers: { Authorization: `Bearer ${token}` },
  //   }).then((res) => res.json()),
};

export { QUIZ_API };

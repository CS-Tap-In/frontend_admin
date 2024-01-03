import { authInstance } from ".";
import { axiosStore } from ".";

type TokenType = string | undefined;

const QUIZ_API = {
  getCategories: (token: TokenType) =>
    authInstance(token).get("/quizzes/categories"),
  createCategory: (title: string) =>
    axiosStore.authInstance.post("/quizzes/categories", { title }),
  deleteCategory: (idx: number) =>
    axiosStore.authInstance.delete(`/quizzes/categories/${idx}`),
  getQuizzes: (token: TokenType, params?: QuizParams) =>
    authInstance(token).get("/quizzes", { params }),
  createQuiz: (token: TokenType, quizInfo: QuizRequest) =>
    authInstance(token).post("/quizzes", quizInfo),
  updateQuiz: (token: TokenType, quizId: number, quizInfo: PatchQuizDto) =>
    authInstance(token).put(`/quizzes/${quizId}`, quizInfo),
  deleteQuiz: (token: TokenType, quizId: number) =>
    authInstance(token).delete(`/quizzes/${quizId}`),
  getQuizDetail: (token: TokenType, quizId: number) =>
    authInstance(token).get(`/quizzes/${quizId}`),
  approveQuiz: (token: TokenType, quizId: number) =>
    authInstance(token).patch(`/quizzes/${quizId}/status`, {
      status: "PUBLIC",
    }),
  rejectQuiz: (token: TokenType, quizId: number) =>
    authInstance(token).patch(`/quizzes/${quizId}/status`, {
      status: "REJECTED",
    }),
  changeQuizzesStatus: (quizIds: number[], status: string) =>
    axiosStore.authInstance.patch(`/quizzes/status`, { quizIds, status }),
};

export { QUIZ_API };

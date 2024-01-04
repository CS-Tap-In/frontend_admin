import { CreateQuizDto } from "@/types/request/CreateQuiz.dto";
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
  createQuiz: (quizInfo: CreateQuizDto) =>
    axiosStore.authInstance.post("/quizzes", quizInfo),
  updateQuiz: (quizId: number, quizInfo: PatchQuizDto) =>
    axiosStore.authInstance.put(`/quizzes/${quizId}`, quizInfo),
  deleteQuiz: (quizId: number) =>
    axiosStore.authInstance.delete(`/quizzes/${quizId}`),
  getQuizDetail: (quizId: number) =>
    axiosStore.authInstance.get(`/quizzes/${quizId}`),
  approveQuiz: (quizId: number) =>
    axiosStore.authInstance.patch(`/quizzes/${quizId}/status`, {
      status: "PUBLIC",
    }),
  rejectQuiz: (quizId: number) =>
    axiosStore.authInstance.patch(`/quizzes/${quizId}/status`, {
      status: "REJECTED",
    }),
  changeQuizzesStatus: (quizIds: number[], status: string) =>
    axiosStore.authInstance.patch(`/quizzes/status`, { quizIds, status }),
};

export { QUIZ_API };

import { CreateQuizDto } from "@/types/request/CreateQuiz.dto";
import { axiosStore } from ".";

const QUIZ_API = {
  createCategory: (title: string) =>
    axiosStore.authInstance.post("/quizzes/categories", { title }),
  deleteCategory: (id: number) =>
    axiosStore.authInstance.delete(`/quizzes/categories/${id}`),
  updateCategory: (id: number, title: string) =>
    axiosStore.authInstance.put(`/quizzes/categories/${id}`, { title }),
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

import { authInstance } from ".";

type TokenType = string | undefined;

const QUIZ_API = {
  getCategories: (token: TokenType) =>
    authInstance(token).get("/quizzes/categories"),
  createCategory: (token: TokenType, title: string) =>
    authInstance(token).post("/quizzes/categories", { title }),
  deleteCategory: (token: TokenType, idx: number) =>
    authInstance(token).delete(`/quizzes/categories/${idx}`),
  // updateCategory : (token:string|undefined,idx:string)=>authInstance(token).
  getQuizzes: (token: TokenType, params?: QuizParams) =>
    authInstance(token).get("/quizzes", { params }),
  createQuiz: (token: TokenType, quizInfo: Quiz) =>
    authInstance(token).post("/quizzes", quizInfo),
  // modifyQuiz: (quizInfo: Quiz) =>
  //   authInstance().put(`/quizzes/${quizInfo.categoryId}`, quizInfo),
  // deleteQuiz: (quizId: number) => authInstance().delete(`/quizzes/${quizId}`),
  getQuizDetail: (token: TokenType, quizId: number) =>
    authInstance(token).get(`/quizzes/${quizId}`),
};

export { QUIZ_API };

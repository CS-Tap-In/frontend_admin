import { StatusType } from "../request/CreateQuiz.dto";

export interface Quiz {
  categoryId: number;
  categoryTitle: string;
  id: number;
  title: string;
  problem: string;
  status: string;
  createdAt: string;
}

export interface GetQuizzesDto {
  content: Quiz[];
  size: number;
  page: number;
  totalElements: number;
}

export interface QuizParams {
  st?: "author" | "title";
  keyword?: string;
  page?: number;
  size?: number;
  status?: StatusType;
  rejected?: "Y" | "N";
  category?: string;
}

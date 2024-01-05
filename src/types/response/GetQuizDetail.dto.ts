import { StatusType } from "../request/CreateQuiz.dto";

export interface GetQuizDetailDto {
  answer: string[];
  authorId: number;
  authorName: string;
  categoryId: number;
  categoryTitle: string;
  createdAt: string;
  id: number;
  problem: string;
  status: StatusType;
  title: string;
}

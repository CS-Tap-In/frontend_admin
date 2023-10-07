interface Category {
  title: string;
  status: string;
}

type StatusType = "PUBLIC" | "PRIVATE" | "UNAPPROVED" | "REJECTED";

interface QuizRequest {
  problem: string;
  title: string;
  answer: string[];
  categoryId: number;
  status: StatusType;
}

interface QuizResponse {
  categoryId: number;
  categoryTitle: string;
  id: number;
  title: string;
  problem: string;
  status: StatusType;
  createdAt: string;
}

interface QuizDetail {
  authorId: number;
  authorName: string;
  categoryId: number;
  categoryTitle: string;
  id: number;
  title: string;
  problem: string;
  answer: string[];
  status: StatusType;
  createdAt: string;
}

interface QuizParams {
  st?: "author" | "title";
  keyword?: string;
  page?: number;
  size?: number;
  status?: StatusType;
  rejected?: "Y" | "N";
  category?: string;
}

interface PatchQuizDto {
  problem?: string;
  title?: string;
  answer?: string[];
  categoryId?: number;
  status?: StatusType;
}

interface Category {
  title: string;
  status: string;
}

type StatusType = "PUBLIC" | "PRIVATE" | "UNAPPROVED" | "REJECTED";

interface Quiz {
  problem: string;
  title: string;
  answer: string[];
  categoryId: number;
  status: StatusType;
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

interface Category {
  title: string;
  status: string;
}

type StatusType = "PUBLIC" | "PRIVATE" | "UNAPPROVED" | "REJECTED";

interface Quiz {
  id: number;
  problem: string;
  title: string;
  categoryId: number;
  categoryTitle: string;
  status: StatusType;
  createdAt: "string";
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

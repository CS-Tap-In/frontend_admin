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

export type StatusType = "PUBLIC" | "PRIVATE" | "UNAPPROVED" | "REJECTED";

export interface CreateQuizDto {
  categoryId: number;
  problem: string;
  answer: string[];
  title: string;
  status: StatusType;
}

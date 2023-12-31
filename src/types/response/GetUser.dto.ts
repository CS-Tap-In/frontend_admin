interface User {
  id: number;
  username: string;
  createdAt: string;
  nickname: string;
}

export interface GetUserDto {
  content: User[];
  page: number;
  size: number;
  totalElements: number;
}

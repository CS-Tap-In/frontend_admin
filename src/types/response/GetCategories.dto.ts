export interface Category {
  id: number;
  title: string;
  status: string;
}

export interface GetCategoriesDto extends Array<Category> {}

interface Category {
  title: string;
  status: string;
}

interface Quiz {
  problem: string;
  answer: string[];
  title: string;
  categoryId: number;
  status: "PUBLIC" | "PRIVATE";
}

"use client";
import { useState } from "react";
import Button from "../Button";
import { Category } from "@/types/response/GetCategories.dto";
import { QuizParams } from "@/types/response/GetQuizzes.dto";

type Props = {
  categories: Category[];
  changeFilter: (params: QuizParams) => void;
};

export default function QuizFilter({ categories, changeFilter }: Props) {
  const [searchType, setSearchType] = useState<"author" | "title">("author");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [category, setCategory] = useState("");

  const searchBtnHandler = () => {
    changeFilter({
      st: searchType,
      keyword: searchKeyword,
      category: category,
    });
  };

  return (
    <div className="pl-10">
      <select
        name="searchType"
        className="ml-3 h-12 w-20 rounded-2xl mr-3"
        onChange={(e) =>
          setSearchType(
            e.target.value !== "author" && e.target.value !== "title"
              ? "author"
              : e.target.value
          )
        }
      >
        <option value="author">작성자</option>
        <option value="title">제목</option>
      </select>
      <input
        type="text"
        className="h-12 w-40 rounded-2xl mr-10 p-3"
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      카테고리
      <select
        name="category"
        id="category"
        className="ml-3 h-12 w-80 rounded-2xl"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">전체 선택</option>
        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.title}
          </option>
        ))}
      </select>
      <Button
        value="검색"
        onClick={() => searchBtnHandler()}
        className="ml-3"
      />
    </div>
  );
}

"use client";
import React, { ChangeEventHandler } from "react";

type Props = {
  categories: Category[];
  authors: [];
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

export default function QuizFilter({ categories, authors, onChange }: Props) {
  return (
    <div className="pl-10">
      작성자
      <select
        name="author"
        className="ml-3 h-12 w-80 rounded-2xl mr-10"
        onChange={(e) => onChange(e)}
      >
        <option value="">전체 선택</option>
        <option>유기훈</option>
      </select>
      카테고리
      <select
        name="category"
        id="category"
        className="ml-3 h-12 w-80 rounded-2xl"
        onChange={(e) => onChange(e)}
      >
        <option value="">전체 선택</option>
        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.title}
          </option>
        ))}
      </select>
    </div>
  );
}

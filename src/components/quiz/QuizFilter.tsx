"use client";
import React, { ChangeEvent, ChangeEventHandler } from "react";
import Button from "../Button";

type Props = {
  categories: Category[];
  authors: [];
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

export default function QuizFilter({ categories, authors, onChange }: Props) {
  return (
    <div className="pl-10 my-5">
      작성자
      <select
        name="author"
        className="ml-3 h-12 w-80 rounded-2xl mr-10"
        onChange={(e) => onChange(e)}
      >
        <option>전체</option>
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
        {categories.map((category, i) => (
          <option value={category.id} key={category.id}>
            {category.title}
          </option>
        ))}
      </select>
      <Button value="숨기기" onClick={() => {}} className="ml-10" />
    </div>
  );
}

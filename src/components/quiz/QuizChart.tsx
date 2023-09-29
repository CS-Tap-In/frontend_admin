"use client";
import React, { useState } from "react";
import QuizBlock from "./QuizBlock";

type Props = {
  quizzes: QuizResponse[];
};
export default function QuizChart({ quizzes }: Props) {
  return (
    <div className="w-full px-5 overflow-y-scroll flex flex-col gap-1">
      <div className="bg-tapBlue w-full flex p-2 rounded-xl text-white">
        <div className="flex-auto w-4" />
        <div className="inline-block flex-auto w-4 text-center text-ellipsis overflow-hidden whitespace-nowrap">
          고유 번호
        </div>
        <div className="inline-block flex-auto w-28 text-center text-ellipsis overflow-hidden whitespace-nowrap">
          카테고리
        </div>
        <div className="inline-block flex-auto w-28 text-center text-ellipsis overflow-hidden whitespace-nowrap">
          제목
        </div>
        <div className="inline-block flex-auto w-28 text-center text-ellipsis overflow-hidden whitespace-nowrap">
          문제
        </div>
        <div className="inline-block flex-auto w-28 text-center text-ellipsis overflow-hidden whitespace-nowrap">
          생성일
        </div>
      </div>
      {quizzes.map((quiz) => (
        <QuizBlock key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
}

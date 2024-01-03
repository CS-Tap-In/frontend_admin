"use client";
import { Quiz } from "@/types/response/GetQuizzes.dto";
import QuizBlock from "./QuizBlock";

type Props = {
  quizzes: Quiz[];
  changeSelect?: (i: number, checked: boolean) => void;
  isSelectable?: boolean;
  selectedQuizzes?: number[];
};
export default function QuizChart({
  quizzes,
  changeSelect,
  selectedQuizzes,
  isSelectable = true,
}: Props) {
  return (
    <div className="w-full px-5 overflow-y-auto flex flex-col gap-1">
      <div className="bg-tapBlue w-full flex p-2 rounded-xl text-white">
        {isSelectable && <div className="flex-auto w-4" />}
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
        <div className="inline-block flex-auto w-28 text-center text-ellipsis overflow-hidden whitespace-nowrap">
          상태
        </div>
      </div>
      {quizzes.map((quiz) => (
        <QuizBlock
          key={quiz.id}
          quiz={quiz}
          onChange={changeSelect || (() => {})}
          isSelect={selectedQuizzes?.includes(quiz.id)}
          isSelectable={isSelectable}
        />
      ))}
    </div>
  );
}

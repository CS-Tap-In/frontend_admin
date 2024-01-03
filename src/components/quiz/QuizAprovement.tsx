"use client";
import QuizFilter from "./QuizFilter";
import QuizChart from "./QuizChart";
import { ChangeEvent } from "react";
import useQuizzes from "@/hooks/useQuizzes";

type Props = {
  categories: Category[];
};

export default function QuizApprovement({ categories }: Props) {
  const { data: quizList, filterQuizzes } = useQuizzes({
    status: "UNAPPROVED",
  });
  const changeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      filterQuizzes({ rejected: "Y" });
    } else filterQuizzes({ rejected: "N" });
  };

  return (
    <>
      <section className="flex justify-between my-5 mr-5">
        <QuizFilter categories={categories} changeFilter={filterQuizzes} />
        <div className="flex">
          <div className="self-center mr-3">반려된 문제</div>
          <input
            type="checkbox"
            className="w-5"
            onChange={changeCheckboxHandler}
          />
        </div>
      </section>
      <QuizChart quizzes={quizList ?? []} isSelectable={false} />
    </>
  );
}

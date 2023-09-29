"use client";
import QuizFilter from "./QuizFilter";
import QuizChart from "./QuizChart";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { QUIZ_API } from "@/service/quiz";
import { getCookie } from "cookies-next";

type Props = {
  categories: Category[];
};

export default function QuizApprovement({ categories }: Props) {
  const [quizList, setQuizList] = useState<QuizResponse[]>([]);
  const [params, setParams] = useState<QuizParams>({});

  const getQuizzes = useCallback(() => {
    QUIZ_API.getQuizzes(getCookie("access_token"), params)
      .then((res) => {
        setQuizList(res.data.content);
      })
      .catch(() => {});
  }, [params]);

  const filterQuizzes = (addedParams: QuizParams) => {
    setParams((params) => {
      return { ...params, ...addedParams };
    });
  };

  useEffect(() => {
    getQuizzes();
  }, [params, getQuizzes]);

  const selectedQuizzes: number[] = [];

  return (
    <>
      <section className="flex justify-between my-5 mr-5">
        <QuizFilter categories={categories} changeFilter={filterQuizzes} />
        <div className="flex">
          <div className="self-center mr-3">반려된 문제</div>
          <input type="checkbox" className="w-5" />
        </div>
      </section>
      <QuizChart
        quizzes={quizList}
        changeSelect={(idx, checked) => {
          if (checked) selectedQuizzes.push(idx);
          else {
            const index = selectedQuizzes.findIndex((v) => v === idx);
            selectedQuizzes.splice(index, 1);
          }
        }}
      />
    </>
  );
}

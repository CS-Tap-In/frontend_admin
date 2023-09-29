"use client";
import QuizFilter from "./QuizFilter";
import QuizChart from "./QuizChart";
import { useCallback, useEffect, useState } from "react";
import { QUIZ_API } from "@/service/quiz";
import { getCookie } from "cookies-next";
import Button from "../Button";

type Props = {
  categories: Category[];
};

export default function QuizManagement({ categories }: Props) {
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
        <div>
          <Button
            value="숨기기"
            onClick={() => {}}
            className="ml-5 w-24 bg-red-400"
          />
          <Button
            value="공개하기"
            onClick={() => {}}
            className="ml-2 w-24 bg-lime-300"
          />
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

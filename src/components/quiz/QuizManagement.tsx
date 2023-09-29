"use client";
import QuizFilter from "./QuizFilter";
import QuizChart from "./QuizChart";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
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

  const filterQuizzes = (e: ChangeEvent<HTMLSelectElement>) => {
    setParams((params) => {
      const newParams = { ...params };
      if (e.target.name === "category") {
        newParams.category = e.target.value;
      } else if (e.target.name === "author") {
        newParams.st = "author";
        newParams.keyword = e.target.value;
      }

      return newParams;
    });
  };

  useEffect(() => {
    getQuizzes();
  }, [params, getQuizzes]);

  const selectedQuizzes: number[] = [];

  return (
    <>
      <section className="flex justify-between my-5 mr-5">
        <QuizFilter
          categories={categories}
          authors={[]}
          onChange={filterQuizzes}
        />
        <div>
          <Button value="숨기기" onClick={() => {}} className="ml-5 w-24 " />
          <Button value="공개하기" onClick={() => {}} className="ml-5 w-24" />
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

"use client";
import QuizFilter from "./QuizFilter";
import QuizChart from "./QuizChart";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { QUIZ_API } from "@/service/quiz";
import { getCookie } from "cookies-next";

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

  return (
    <>
      <QuizFilter
        categories={categories}
        authors={[]}
        onChange={filterQuizzes}
      />
      <QuizChart quizzes={quizList} />
    </>
  );
}

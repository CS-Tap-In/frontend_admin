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
  const [selectedQuizzes, setSelectedQuizzes] = useState<number[]>([]);

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

  return (
    <>
      <section className="flex justify-between my-5 mr-5">
        <QuizFilter categories={categories} changeFilter={filterQuizzes} />
        <div>
          <Button
            value="숨기기"
            onClick={() => {
              QUIZ_API.changeQuizzesStatus(
                getCookie("access_token"),
                selectedQuizzes,
                "PRIVATE"
              )
                .then((res) => {
                  getQuizzes();
                  setSelectedQuizzes([]);
                })
                .catch();
            }}
            className="ml-5 w-24 bg-red-400"
          />
          <Button
            value="공개하기"
            onClick={() => {
              QUIZ_API.changeQuizzesStatus(
                getCookie("access_token"),
                selectedQuizzes,
                "PUBLIC"
              )
                .then((res) => {
                  getQuizzes();
                  setSelectedQuizzes([]);
                })
                .catch();
            }}
            className="ml-2 w-24 bg-lime-300"
          />
        </div>
      </section>
      <QuizChart
        quizzes={quizList}
        selectedQuizzes={selectedQuizzes}
        changeSelect={(idx, checked) => {
          if (checked) {
            setSelectedQuizzes((prevState) => [...prevState, idx]);
          } else {
            setSelectedQuizzes((prevState) => {
              const curArray = [...prevState];
              const index = prevState.findIndex((v) => v === idx);
              curArray.splice(index, 1);
              return curArray;
            });
          }
        }}
      />
    </>
  );
}

import { API_PATH } from "@/service/path";
import { QUIZ_API } from "@/service/quiz";
import { GetQuizzesDto, QuizParams } from "@/types/response/GetQuizzes.dto";
import { useState } from "react";
import useSWR from "swr";

export default function useQuizzes(defaultParams?: QuizParams) {
  const [selectedQuizzes, setSelectedQuizzes] = useState<number[]>([]);
  const [params, setParams] = useState({ ...defaultParams });
  const { data, isLoading, error, mutate } = useSWR<GetQuizzesDto>([
    API_PATH.GET_QUIZZES,
    params,
  ]);

  const selectQuiz = (id: number) => {
    setSelectedQuizzes((prevQuizzes) => [...prevQuizzes, id]);
  };

  const unselectQuiz = (id: number) => {
    setSelectedQuizzes((prevQuizzes) => {
      return prevQuizzes.filter((target) => target !== id);
    });
  };

  const changeQuizzesStatus = (status: string) => {
    QUIZ_API.changeQuizzesStatus(selectedQuizzes, status).then(() => {
      mutate();
    });
  };

  const filterQuizzes = (addedParams: QuizParams) => {
    setParams((params) => {
      return { ...params, ...addedParams };
    });
  };

  return {
    data: data?.content,
    isLoading,
    error,
    selectQuiz,
    unselectQuiz,
    changeQuizzesStatus,
    selectedQuizzes,
    filterQuizzes,
  };
}

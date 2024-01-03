"use client";
import QuizFilter from "./QuizFilter";
import QuizChart from "./QuizChart";
import Button from "../Button";
import useQuizzes from "@/hooks/useQuizzes";

type Props = {
  categories: Category[];
};

export default function QuizManagement({ categories }: Props) {
  const {
    data: quizList,
    selectQuiz,
    changeQuizzesStatus,
    unselectQuiz,
    selectedQuizzes,
    setParams,
  } = useQuizzes();

  const filterQuizzes = (addedParams: QuizParams) => {
    setParams((params) => {
      return { ...params, ...addedParams };
    });
  };

  return (
    <>
      <section className="flex justify-between my-5 mr-5">
        <QuizFilter categories={categories} changeFilter={filterQuizzes} />
        <div>
          <Button
            value="숨기기"
            onClick={() => {
              if (selectedQuizzes.length <= 0) return;
              changeQuizzesStatus("PRIVATE");
            }}
            className="ml-5 w-24 bg-red-400"
          />
          <Button
            value="공개하기"
            onClick={() => {
              if (selectedQuizzes.length <= 0) return;
              changeQuizzesStatus("PUBLIC");
            }}
            className="ml-2 w-24 bg-lime-300"
          />
        </div>
      </section>
      <QuizChart
        quizzes={quizList ?? []}
        selectedQuizzes={selectedQuizzes}
        changeSelect={(idx, checked) => {
          if (checked) {
            selectQuiz(idx);
          } else {
            unselectQuiz(idx);
          }
        }}
      />
    </>
  );
}

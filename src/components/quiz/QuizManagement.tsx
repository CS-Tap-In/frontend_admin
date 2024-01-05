"use client";
import QuizFilter from "./QuizFilter";
import QuizChart from "./QuizChart";
import Button from "../common/Button";
import useQuizzes from "@/hooks/useQuizzes";
import useCategory from "@/hooks/useCategory";

export default function QuizManagement() {
  const {
    data: quizList,
    selectQuiz,
    changeQuizzesStatus,
    unselectQuiz,
    selectedQuizzes,
    filterQuizzes,
  } = useQuizzes();

  const { data: categories } = useCategory();

  return (
    <>
      <section className="flex justify-between my-5 mr-5">
        <QuizFilter
          categories={categories ?? []}
          changeFilter={filterQuizzes}
        />
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

import QuizChart from "@/components/quiz/QuizChart";
import React from "react";

export default function QuizManagePage() {
  return (
    <div className="h-full flex flex-col">
      <div className="ml-5 text-3xl pb-5">퀴즈 관리</div>
      <QuizChart />
    </div>
  );
}

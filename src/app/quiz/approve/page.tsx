import QuizAprovement from "@/components/quiz/QuizAprovement";

export default async function QuizApprovePage() {
  return (
    <section className="h-full flex flex-col">
      <h1 className="ml-5 text-3xl pb-5">퀴즈 승인 현황</h1>
      <QuizAprovement />
    </section>
  );
}

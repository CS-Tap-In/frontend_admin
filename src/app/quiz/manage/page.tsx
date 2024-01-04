import QuizManagement from "@/components/quiz/QuizManagement";

export default async function QuizManagePage() {
  return (
    <div className="h-full flex flex-col">
      <div className="ml-5 text-3xl pb-5">퀴즈 관리</div>
      <QuizManagement />
    </div>
  );
}

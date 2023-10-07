import QuizManagementDetail from "@/components/quiz/QuizManagementDetail";

export default async function QuizManageDetailPage() {
  return (
    <section className="h-full flex flex-col">
      <h1 className="ml-10 text-3xl">퀴즈 상세</h1>
      <QuizManagementDetail />
    </section>
  );
}

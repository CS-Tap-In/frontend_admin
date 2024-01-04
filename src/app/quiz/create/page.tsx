import QuizForm from "@/components/quiz/QuizForm";

export default async function page() {
  return (
    <div className="h-full flex flex-col">
      <div className="ml-10 text-3xl pb-5">문제 생성하기</div>
      <QuizForm />
    </div>
  );
}

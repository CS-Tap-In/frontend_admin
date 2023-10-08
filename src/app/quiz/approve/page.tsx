import QuizAprovement from "@/components/quiz/QuizAprovement";
import { QUIZ_API } from "@/service/quiz";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function QuizApprovePage() {
  const token = cookies().get("access_token")?.value;

  if (!token) {
    redirect("/");
  }
  const categories = await QUIZ_API.getCategories(token);

  return (
    <section className="h-full flex flex-col">
      <h1 className="ml-5 text-3xl pb-5">퀴즈 승인 현황</h1>
      <QuizAprovement categories={categories.data} />
    </section>
  );
}

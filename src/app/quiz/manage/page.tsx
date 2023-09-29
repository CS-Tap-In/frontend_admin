import QuizManagement from "@/components/quiz/QuizManagement";
import { QUIZ_API } from "@/service/quiz";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function QuizManagePage() {
  const token = cookies().get("access_token")?.value;

  if (!token) {
    // token expired도 확인 & refresh token 도..
    redirect("/");
  }

  const categories = await QUIZ_API.getCategories(token);

  return (
    <div className="h-full flex flex-col">
      <div className="ml-5 text-3xl pb-5">퀴즈 관리</div>
      <QuizManagement categories={categories.data} />
    </div>
  );
}

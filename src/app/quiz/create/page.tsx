import React from "react";
import QuizForm from "@/components/quiz/QuizForm";
import { QUIZ_API } from "@/service/quiz";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function page() {
  const token = cookies().get("access_token")?.value;
  if (!token) {
    // token expired도 확인 & refresh token 도..
    redirect("/");
  }

  const categories = await QUIZ_API.getCategories(token);
  // 에러는.. 그냥 에러페이지로?..

  return (
    <div className="h-full flex flex-col">
      <div className="ml-10 text-3xl pb-5">문제 생성하기</div>
      <QuizForm categories={categories} />
    </div>
  );
}

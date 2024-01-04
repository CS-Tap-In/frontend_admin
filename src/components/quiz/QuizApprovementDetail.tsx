"use client";
import QuizDetailChart from "./QuizDetailChart";
import { useParams, useRouter } from "next/navigation";
import useQuizDetail from "@/hooks/useQuizDetail";

export default function QuizApprovementDetail() {
  const { slug } = useParams();
  const { data: detail, approveQuiz, rejectQuiz } = useQuizDetail(Number(slug));
  const router = useRouter();

  if (!detail) return <div>목록 가져오는중 ...</div>;

  return (
    <QuizDetailChart
      detail={detail}
      leftBtnValue="승인"
      leftBtnOnClick={() => {
        approveQuiz(Number(slug)).then(() => {
          alert("승인되었습니다.");
          router.replace("/quiz/approve");
        });
      }}
      rightBtnValue="반려"
      rightBtnOnClick={() => {
        rejectQuiz(Number(slug)).then(() => {
          alert("반려되었습니다.");
          router.replace("/quiz/approve");
        });
      }}
      readonly
    />
  );
}

"use client";
import { QUIZ_API } from "@/service/quiz";
import QuizDetailChart from "./QuizDetailChart";
import { getCookie } from "cookies-next";
import { useParams, useRouter } from "next/navigation";
import useQuizDetail from "@/hooks/useQuizDetail";

export default function QuizManagementDetail() {
  const { slug } = useParams();
  const { data: detail, deleteQuiz, modifyQuiz } = useQuizDetail(Number(slug));
  const router = useRouter();

  // const getDetail = useCallback(() => {
  //   QUIZ_API.getQuizDetail(getCookie("access_token"), Number(slug))
  //     .then((res) => {
  //       setDetail(res.data);
  //     })
  //     .catch(() => {});
  // }, [slug]);

  // useEffect(() => {
  //   getDetail();
  // }, [getDetail]);

  if (!detail) return <div>목록 가져오는중 ...</div>;

  return (
    <QuizDetailChart
      detail={detail}
      leftBtnValue="수정"
      leftBtnOnClick={(id: number, quizInfo: PatchQuizDto) => {
        modifyQuiz(id, quizInfo).then(() => {
          alert("수정되었습니다.");
          router.replace("/quiz/manage");
        });
      }}
      rightBtnValue="삭제"
      rightBtnOnClick={(id: number) => {
        deleteQuiz(id).then(() => {
          alert("삭제되었습니다.");
          router.back();
        });
      }}
    />
  );
}

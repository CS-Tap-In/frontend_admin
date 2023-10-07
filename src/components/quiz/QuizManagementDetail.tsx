"use client";
import { QUIZ_API } from "@/service/quiz";
import QuizDetailChart from "./QuizDetailChart";
import { getCookie } from "cookies-next";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function QuizManagementDetail() {
  const [detail, setDetail] = useState();
  const { slug } = useParams();

  const getDetail = useCallback(() => {
    QUIZ_API.getQuizDetail(getCookie("access_token"), Number(slug))
      .then((res) => {
        setDetail(res.data);
      })
      .catch(() => {});
  }, [slug]);

  useEffect(() => {
    getDetail();
  }, [getDetail]);

  if (!detail) return <div>목록 가져오는중 ...</div>;

  return (
    <QuizDetailChart
      detail={detail}
      leftBtnValue="수정"
      leftBtnOnClick={(id: number, quizInfo: PatchQuizDto) => {
        QUIZ_API.updateQuiz(getCookie("access_token"), id, quizInfo)
          .then(() => {})
          .catch(() => {});
      }}
      rightBtnValue="삭제"
      rightBtnOnClick={() => {}}
    />
  );
}

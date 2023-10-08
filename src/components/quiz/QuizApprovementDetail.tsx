"use client";
import { QUIZ_API } from "@/service/quiz";
import QuizDetailChart from "./QuizDetailChart";
import { getCookie } from "cookies-next";
import { useCallback, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function QuizApprovementDetail() {
  const [detail, setDetail] = useState();
  const { slug } = useParams();
  const router = useRouter();

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
      leftBtnValue="승인"
      leftBtnOnClick={(id: number) => {
        QUIZ_API.approveQuiz(getCookie("access_token"), id)
          .then(() => {
            alert("승인되었습니다.");
            router.back();
          })
          .catch();
      }}
      rightBtnValue="반려"
      rightBtnOnClick={(id: number) => {
        QUIZ_API.rejectQuiz(getCookie("access_token"), id)
          .then(() => {
            alert("반려되었습니다.");
            router.back();
          })
          .catch();
      }}
      readonly
    />
  );
}

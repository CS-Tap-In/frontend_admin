"use client";
import { MouseEvent, MouseEventHandler } from "react";
import Button from "../Button";

type Props = {
  detail: QuizDetail;
  leftBtnValue: string;
  leftBtnOnClick: MouseEventHandler<HTMLButtonElement>;
  rightBtnValue: string;
  rightBtnOnClick: MouseEventHandler<HTMLButtonElement>;
};
export default function QuizDetail({
  detail,
  leftBtnOnClick,
  leftBtnValue,
  rightBtnOnClick,
  rightBtnValue,
}: Props) {
  return (
    <section className="w-full px-20 pt-10 overflow-y-auto flex flex-col">
      <div className="flex justify-between">
        <div>user id : {detail.authorId}</div>
        <div>카테고리 : {detail.categoryTitle}</div>
        <div>문제 등록일 : {new Date(detail.createdAt).toLocaleString()}</div>
      </div>

      <div>제목 : {detail.title}</div>
      <div>문제 : {detail.problem}</div>
      <div>정답 : {detail.answer}</div>
      <div>
        <Button value={leftBtnValue} onClick={leftBtnOnClick} />
        <Button value={rightBtnValue} onClick={rightBtnOnClick} />
      </div>
    </section>
  );
}

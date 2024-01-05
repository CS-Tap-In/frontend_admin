"use client";

import { QUIZ_API } from "@/service/quiz";
import { AxiosError } from "axios";
import { MouseEvent, useRef, useState } from "react";
import useSWR from "swr";
import { API_PATH } from "@/service/path";
import { Category } from "@/types/response/GetCategories.dto";
import ModalPortal from "../common/ModalPortal";
import DefaultModal from "../common/DefaultModal";

export default function QuizForm() {
  const { data: categories } = useSWR<Category[]>([API_PATH.GET_CATEGORIES]);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const categoryRef = useRef<HTMLSelectElement | null>(null);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const stateRef = useRef<HTMLSelectElement | null>(null);
  const questionRef = useRef<HTMLTextAreaElement | null>(null);
  const answerRef = useRef<HTMLInputElement | null>(null);
  const [modalMessage, setModalMessage] = useState("");

  const isFormComplete = () => {
    return (
      categoryRef.current?.value &&
      titleRef.current?.value &&
      stateRef.current?.value &&
      questionRef.current?.value &&
      answerRef.current?.value
    );
  };

  const changeButtonState = () => {
    if (isFormComplete()) {
      setButtonDisabled(false);
    } else setButtonDisabled(true);
  };

  const createQuiz = (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (
      !categoryRef.current?.value ||
      !titleRef.current?.value ||
      !stateRef.current?.value ||
      !questionRef.current?.value ||
      !answerRef.current?.value
    ) {
      return;
    }
    setButtonDisabled(true);
    QUIZ_API.createQuiz({
      problem: questionRef.current.value,
      answer: answerRef.current.value.split(","),
      title: titleRef.current.value,
      categoryId: Number(categoryRef.current.value),
      status:
        stateRef.current.value === "PUBLIC" ||
        stateRef.current.value === "PRIVATE"
          ? stateRef.current.value
          : "PRIVATE",
    })
      .then((res) => {
        setModalMessage("퀴즈가 생성되었습니다.");
        setButtonDisabled(false);
      })
      .catch((err: AxiosError) => {
        setModalMessage("퀴즈 생성에 실패했습니다.");
      });
  };

  return (
    <div className="w-full flex flex-col items-center overflow-y-scroll">
      <div className="w-3/4 bg-white items-center flex flex-col rounded-2xl mt-6 gap-3 p-10">
        <div>
          <label
            htmlFor="category"
            className="inline-block w-20 text-right mr-5"
          >
            카테고리
          </label>
          <select
            name="category"
            id="category"
            className="ml-3 h-12 w-80 bg-tapGrey rounded-2xl"
            ref={categoryRef}
            onChange={changeButtonState}
          >
            <option value="" hidden>
              ==필수==
            </option>
            {categories?.map((category, i) => (
              <option value={category.id} key={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="title" className="inline-block w-20 text-right mr-5">
            제목
          </label>
          <input
            id="title"
            type="text"
            ref={titleRef}
            className="bg-tapGrey h-12 w-80 rounded-2xl p-5 ml-3"
            onChange={changeButtonState}
          />
        </div>
        <br />
        <div>
          <label htmlFor="state" className="inline-block w-20 text-right mr-5">
            상태
          </label>
          <select
            name="state"
            id="state"
            ref={stateRef}
            className="ml-3 h-12 w-80 bg-tapGrey rounded-2xl"
            onChange={changeButtonState}
          >
            <option value="" hidden>
              ==필수==
            </option>
            <option value="PUBLIC" className="pl-10">
              공개
            </option>
            <option value="PRIVATE">숨김</option>
          </select>
        </div>
        <br />
        <div>
          <label
            htmlFor="question"
            className="inline-block w-20 text-right mr-5 align-top"
          >
            문제
          </label>
          <textarea
            id="question"
            className="bg-tapGrey h-32 w-80 rounded-2xl p-5  ml-3"
            ref={questionRef}
            onChange={changeButtonState}
          ></textarea>
          <br />
        </div>
        <div>
          <label htmlFor="answer" className="inline-block w-20 text-right mr-5">
            정답
          </label>
          <input
            id="answer"
            type="text"
            ref={answerRef}
            className="bg-tapGrey h-12 w-80 rounded-2xl p-5 ml-3"
            onChange={changeButtonState}
          />
        </div>
        <input
          type="submit"
          className={`${
            buttonDisabled ? "bg-tapGrey" : "bg-tapYellow"
          } h-10 rounded-2xl w-28 font-bold pt-1 mt-3`}
          value="생성하기"
          onClick={createQuiz}
        />
      </div>
      {modalMessage && (
        <ModalPortal>
          <DefaultModal message={modalMessage} setModal={setModalMessage} />
        </ModalPortal>
      )}
    </div>
  );
}

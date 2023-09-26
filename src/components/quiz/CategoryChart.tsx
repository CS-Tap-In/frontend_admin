"use client";
import React, { useEffect, useRef, useState } from "react";
import { AxiosError } from "axios";
import Button from "../Button";
import { getCookie } from "cookies-next";
import { QUIZ_API } from "@/service/quiz";
import { RESPONSE_STATUS } from "@/service";

export default function CategoryChart() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const ctgRef = useRef<HTMLInputElement | null>(null);

  const getCategory = () => {
    QUIZ_API.getCategories(getCookie("access_token"))
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err: AxiosError) => {
        //TODO 에러처리
      });
  };

  const createCategory = () => {
    if (!ctgRef.current?.value) return;
    setButtonDisabled(true);
    QUIZ_API.createCategory(getCookie("access_token"), ctgRef.current?.value)
      .then((res) => {
        //TODO toast message
        getCategory();
        if (!ctgRef.current?.value) return;
        ctgRef.current.value = "";
      })
      .catch(() => {
        //TODO 에러
      });
  };

  const inputChangeHandler = () => {
    if (!ctgRef.current?.value) setButtonDisabled(true);
    else setButtonDisabled(false);
  };

  const deleteCategory = (idx: number) => {
    QUIZ_API.deleteCategory(getCookie("access_token"), idx)
      .then((res) => {
        getCategory();
      })
      .catch((err) => {
        if (err.response?.status === RESPONSE_STATUS.BAD_REQUEST) {
          alert("잘못된 요청입니다.");
          return;
        }
        //TODO 에러처리
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="flex flex-col items-center h-full">
      <div className="p-5">
        <input
          type="text"
          className="bg-white h-10 w-60 rounded-2xl text-xl p-5 mr-3"
          ref={ctgRef}
          onChange={inputChangeHandler}
        />
        <Button
          value="등록"
          disabled={buttonDisabled}
          onClick={createCategory}
        />
      </div>
      <div className="w-full flex justify-center min-h-1/2 pb-10">
        <div className="w-3/5 bg-white flex flex-col overflow-y-auto">
          {categories.map((ctg) => (
            <div
              key={ctg.title}
              className="flex justify-between items-center gap-1 px-5 py-2 border-b-2 border-slate-50"
            >
              <div className="inline-block flex-auto w-80 text-center text-ellipsis overflow-hidden whitespace-nowrap">
                {ctg.title}
              </div>
              <Button
                value="수정"
                onClick={() => {}}
                className="flex-none w-16 h-9 text-sm bg-lime-300"
              />
              <Button
                value="삭제"
                onClick={() => deleteCategory(ctg.id)}
                className="flex-none w-16 h-9 text-sm bg-red-400"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
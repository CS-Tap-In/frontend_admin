"use client";
import { AxiosError } from "axios";
import { RESPONSE_STATUS } from "@/service";
import { LOGIN_API } from "@/service/login";
import { useRouter } from "next/navigation";
import React, { MouseEvent, useRef, useState } from "react";

export default function LoginForm() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const idRef = useRef<HTMLInputElement | null>(null);
  const pwdRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const formChangeHandler = () => {
    if (idRef.current?.value && pwdRef.current?.value) {
      setButtonDisabled(false);
    }
  };

  const loginBtnClickHandler = (e: MouseEvent<HTMLInputElement>) => {
    if (!idRef.current?.value || !pwdRef.current?.value) return;

    setButtonDisabled(true);
    e.preventDefault();

    LOGIN_API.login({
      id: idRef.current?.value,
      password: pwdRef.current?.value,
    })
      .then((res) => {
        router.push("/user");
      })
      .catch((err: AxiosError) => {
        if (err.response?.status === RESPONSE_STATUS.BAD_REQUEST) {
          //TODO 잘못된 아디비번
          return;
        }
        //TODO 에러 처리
      });
  };

  return (
    <section className="bg-tapBlue p-24 rounded-3xl flex flex-col items-center mb-24">
      <div className="mb-16 text-4xl text-white">두드려 CS 관리자 페이지</div>
      <form className="text-right">
        <p className="inline-block text-3xl w-40 text-right pr-5  text-white">
          id
        </p>
        <input
          type="text"
          className="bg-tapGrey h-12 w-80 rounded-2xl text-2xl p-5"
          ref={idRef}
          onChange={formChangeHandler}
        />
        <br />
        <p className="inline-block text-3xl w-40 text-right pr-5 mt-10  text-white">
          password
        </p>
        <input
          type="password"
          className="bg-tapGrey h-12 w-80 rounded-2xl mb-10 text-2xl p-5"
          ref={pwdRef}
          onChange={formChangeHandler}
        />
        <br />
        <input
          type="submit"
          className={`${
            buttonDisabled ? "bg-tapGrey" : "bg-tapYellow"
          } h-10 rounded-2xl w-28 font-bold pt-1`}
          value="LOGIN"
          disabled={buttonDisabled}
          onClick={loginBtnClickHandler}
        />
      </form>
    </section>
  );
}

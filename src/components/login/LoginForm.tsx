"use client";
import { AxiosError } from "axios";
import { RESPONSE_STATUS, axiosStore } from "@/service";
import { LOGIN_API } from "@/service/login";
import { useRouter } from "next/navigation";
import { MouseEvent, useRef, useState } from "react";
import { setCookie } from "cookies-next";
import LoginModal from "./LoginModal";
import ModalPortal from "../ModalPortal";

export default function LoginForm() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [modalMessage, setModalMessage] = useState("");
  const idRef = useRef<HTMLInputElement | null>(null);
  const pwdRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const formChangeHandler = () => {
    if (idRef.current?.value && pwdRef.current?.value) {
      setButtonDisabled(false);
    } else setButtonDisabled(true);
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
        const token = res.data.accessToken;
        const refreshToken = res.data.refreshToken;
        //TODO 토큰 저장 위치 변경
        setCookie("refresh_token", refreshToken);
        setCookie("access_token", token);
        axiosStore.setToken(token);
        router.push("/user");
      })
      .catch((err: AxiosError) => {
        if (err.response?.status === RESPONSE_STATUS.BAD_REQUEST) {
          setModalMessage("잘못된 아이디 혹은 비밀번호 입니다.");
          return;
        }
        setModalMessage("로그인에 실패했습니다. 나중에 다시 시도해주세요.");
      });
  };

  return (
    <section className="bg-tapBlue p-16 rounded-3xl flex flex-col items-center">
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
      {modalMessage && (
        <ModalPortal>
          <LoginModal message={modalMessage} setModal={setModalMessage} />
        </ModalPortal>
      )}
    </section>
  );
}

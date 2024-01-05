"use client";

import { Dispatch, SetStateAction } from "react";
import Button from "../common/Button";

type Props = {
  message: string;
  setModal: Dispatch<SetStateAction<string>>;
};

function LoginModal({ message, setModal }: Props) {
  return (
    <>
      <div className="bg-black opacity-80 w-full h-full absolute top-0 left-0" />
      <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
        <div className="bg-tapBlue w-80 px-16 py-10 rounded-xl flex flex-col items-center">
          <h2 className="mb-10 text-white">{message}</h2>
          <Button value="확인" onClick={() => setModal("")} />
        </div>
      </div>
    </>
  );
}

export default LoginModal;

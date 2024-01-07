"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Button from "../common/Button";
import { Category } from "@/types/response/GetCategories.dto";

type Props = {
  setModal: Dispatch<SetStateAction<boolean>>;
  onClickModifyBtn: (id: number, title: string) => Promise<void>;
  category: Category;
};

function CategoryModal({ setModal, category, onClickModifyBtn }: Props) {
  const [titleInput, setTitleInput] = useState(category.title);

  return (
    <>
      <div className="bg-black opacity-80 w-full h-full fixed top-0 left-0" />
      <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center">
        <div className="bg-tapBlue w-80 px-16 py-8 rounded-xl flex flex-col items-center">
          <h2 className="mb-5 text-white text-xl">카테고리 수정</h2>
          <input
            type="text"
            defaultValue={category.title}
            className="p-2 rounded-xl mb-3"
            onChange={(e) => setTitleInput(e.target.value)}
          />
          <div className="flex gap-5">
            <Button
              value="수정"
              disabled={titleInput === ""}
              onClick={() => {
                onClickModifyBtn(category.id, titleInput);
                setModal(false);
              }}
            />
            <Button value="취소" onClick={() => setModal(false)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryModal;

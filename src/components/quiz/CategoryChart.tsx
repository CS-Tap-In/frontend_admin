"use client";
import { useRef, useState } from "react";
import Button from "../common/Button";
import useCategory from "@/hooks/useCategory";
import ModalPortal from "../common/ModalPortal";
import CategoryModal from "./CategoryModal";
import { Category } from "@/types/response/GetCategories.dto";

export default function CategoryChart() {
  const {
    data: categories,
    createCategory,
    deleteCategory,
    modifyCategory,
  } = useCategory();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const ctgRef = useRef<HTMLInputElement | null>(null);
  const [modal, setModal] = useState(false);
  const [category, setCategory] = useState<Category | null>(null);

  const inputChangeHandler = () => {
    if (!ctgRef.current?.value) setButtonDisabled(true);
    else setButtonDisabled(false);
  };

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
          onClick={() => {
            if (!ctgRef.current?.value) return;
            setButtonDisabled(true);
            createCategory(ctgRef.current?.value).then(() => {
              if (!ctgRef.current?.value) return;
              ctgRef.current.value = "";
            });
          }}
        />
      </div>
      <div className="w-full flex justify-center min-h-1/2 pb-10">
        <div className="w-3/5 bg-white flex flex-col overflow-y-auto">
          {categories?.map((ctg) => (
            <div
              key={ctg.title}
              className="flex justify-between items-center gap-1 px-5 py-2 border-b-2 border-slate-50"
            >
              <div className="inline-block flex-auto w-80 text-center text-ellipsis overflow-hidden whitespace-nowrap">
                {ctg.title}
              </div>
              <Button
                value="수정"
                onClick={() => {
                  setModal(true);
                  setCategory(ctg);
                }}
                className="flex-none w-16 h-9 text-sm"
              />
              <Button
                value="삭제"
                onClick={() => deleteCategory(ctg.id)}
                className="flex-none w-16 h-9 text-sm"
              />
            </div>
          ))}
        </div>
      </div>
      {modal && category && (
        <ModalPortal>
          <CategoryModal
            setModal={setModal}
            category={category}
            onClickModifyBtn={(id: number, title: string) =>
              modifyCategory(id, title)
            }
          />
        </ModalPortal>
      )}
    </div>
  );
}

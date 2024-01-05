"use client";
import { GetQuizDetailDto } from "@/types/response/GetQuizDetail.dto";
import Button from "../common/Button";
import useCategory from "@/hooks/useCategory";

type Props = {
  detail: GetQuizDetailDto;
  leftBtnValue: string;
  leftBtnOnClick: (id: number, detail: PatchQuizDto) => void;
  rightBtnValue: string;
  rightBtnOnClick: (id: number) => void;
  readonly?: boolean;
};
export default function QuizDetailChart({
  detail,
  leftBtnOnClick,
  leftBtnValue,
  rightBtnOnClick,
  rightBtnValue,
  readonly,
}: Props) {
  const formInfo = {
    problem: detail.problem,
    title: detail.title,
    answer: detail.answer,
    categoryId: detail.categoryId,
  };
  const { data: categories } = useCategory();

  if (!detail || !categories) return <div>로딩중...</div>;

  return (
    <section className="w-4/5 px-20 pt-10 overflow-y-auto flex flex-col bg-white min-h-1/2 mt-10 mx-auto rounded-2xl gap-5">
      <div className="flex justify-between">
        <div>
          user id
          <input
            type="text"
            defaultValue={detail.authorId}
            disabled
            className="h-12 w-60 rounded-2xl p-5 ml-3"
          />
        </div>
        <div>
          등록일
          <input
            type="text"
            defaultValue={new Date(detail.createdAt).toLocaleString()}
            disabled
            className="h-12 w-60 rounded-2xl p-5 ml-3"
          />
        </div>
      </div>
      <div className="mx-auto">
        <label htmlFor="category" className="inline-block w-20 text-right mr-5">
          카테고리
        </label>
        <select
          name="category"
          id="category"
          className="ml-3 h-12 w-80 bg-tapGrey rounded-2xl"
          onChange={(e) => (formInfo["categoryId"] = Number(e.target.value))}
          disabled={readonly}
          defaultValue={detail.categoryId}
        >
          {categories?.map((category) => (
            <option value={category.id} key={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>
      <div className="mx-auto">
        <label htmlFor="title" className="inline-block w-20 text-right mr-5">
          제목
        </label>
        <input
          type="text"
          id="title"
          defaultValue={detail.title}
          onChange={(e) => (formInfo["title"] = e.target.value)}
          className="bg-tapGrey h-12 w-80 rounded-2xl p-5 ml-3"
          disabled={readonly}
        />
      </div>
      <div className="mx-auto">
        <label
          htmlFor="question"
          className="inline-block w-20 text-right mr-5 align-top"
        >
          문제
        </label>
        <textarea
          id="question"
          className="bg-tapGrey h-32 w-80 rounded-2xl p-5  ml-3"
          onChange={(e) => (formInfo["problem"] = e.target.value)}
          defaultValue={detail.problem}
          disabled={readonly}
        ></textarea>
      </div>
      <div className="mx-auto">
        <label htmlFor="answer" className="inline-block w-20 text-right mr-5">
          정답
        </label>
        <input
          id="answer"
          type="text"
          defaultValue={detail.answer}
          onChange={(e) => (formInfo["answer"] = e.target.value.split(","))}
          className="bg-tapGrey h-12 w-80 rounded-2xl p-5 ml-3"
          disabled={readonly}
        />
      </div>
      <div className="w-full flex justify-evenly my-10">
        <Button
          value={leftBtnValue}
          onClick={() => leftBtnOnClick(detail.id, formInfo)}
          className="w-40"
        />
        <Button
          value={rightBtnValue}
          onClick={() => rightBtnOnClick(detail.id)}
          className="w-40"
        />
      </div>
    </section>
  );
}

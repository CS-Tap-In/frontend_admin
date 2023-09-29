"use client";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  quiz: QuizResponse;
  onChange: (i: number, checked: boolean) => void;
};

export default function QuizBlock({ quiz, onChange }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div key={quiz.id} className="bg-white w-full flex p-2 rounded-xl">
      <input
        type="checkbox"
        className="inline-block flex-auto w-4"
        onChange={(e) => onChange(quiz.id, e.target.checked)}
      />
      <div className="inline-block flex-auto w-4 text-center text-ellipsis overflow-hidden whitespace-nowrap">
        {quiz.id}
      </div>
      <div className="inline-block flex-auto w-28 text-center text-ellipsis overflow-hidden whitespace-nowrap">
        {quiz.categoryTitle}
      </div>
      <div className="inline-block flex-auto w-28 text-center text-ellipsis overflow-hidden whitespace-nowrap">
        {quiz.title}
      </div>
      <div className="inline-block flex-auto w-28 text-center text-ellipsis overflow-hidden whitespace-nowrap">
        {quiz.problem}
      </div>
      <div className="inline-block flex-auto w-28 text-center text-ellipsis overflow-hidden whitespace-nowrap">
        {new Date(quiz.createdAt).toLocaleDateString()}
      </div>
      <div className="inline-block flex-auto w-28 text-center text-ellipsis overflow-hidden whitespace-nowrap">
        {quiz.status}
      </div>
    </div>
  );
}

type Props = {
  quiz: QuizResponse;
};

export default function QuizBlock({ quiz }: Props) {
  return (
    <div key={quiz.id} className="bg-white w-full flex p-2 rounded-xl">
      <input type="checkbox" className="inline-block flex-auto w-4" />
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
    </div>
  );
}

import { API_PATH } from "@/service/path";
import { QUIZ_API } from "@/service/quiz";
import { GetQuizDetailDto } from "@/types/response/GetQuizDetail.dto";
import useSWR, { useSWRConfig } from "swr";

export default function useQuizDetail(quizId: number) {
  const { data, isLoading, error } = useSWR<GetQuizDetailDto>([
    `${API_PATH.GET_QUIZZES}/${quizId}`,
  ]);
  const { mutate: globalMutate } = useSWRConfig();

  const approveQuiz = async (id: number) => {
    return QUIZ_API.approveQuiz(id).then(() => {
      globalMutate(API_PATH.GET_QUIZZES);
    });
  };
  const rejectQuiz = async (id: number) => {
    return QUIZ_API.rejectQuiz(id).then(() => {
      globalMutate(API_PATH.GET_QUIZZES);
    });
  };
  const deleteQuiz = async (id: number) => {
    return QUIZ_API.deleteQuiz(id).then((res) => {
      globalMutate(API_PATH.GET_QUIZZES);
    });
  };
  const modifyQuiz = async (id: number, quizInfo: PatchQuizDto) => {
    return QUIZ_API.updateQuiz(id, quizInfo).then(() => {
      globalMutate(API_PATH.GET_QUIZZES);
    });
  };
  return {
    data: data,
    isLoading,
    error,
    approveQuiz,
    rejectQuiz,
    deleteQuiz,
    modifyQuiz,
  };
}

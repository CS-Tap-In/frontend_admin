import { API_PATH } from "@/service/path";
import { QUIZ_API } from "@/service/quiz";
import { GetCategoriesDto } from "@/types/response/GetCategories.dto";
import useSWR from "swr";

export default function useCategory() {
  const { data, isLoading, error, mutate } = useSWR<GetCategoriesDto>([
    API_PATH.GET_CATEGORIES,
  ]);
  //TODO 에러 상태 합치자
  const createCategory = async (title: string) => {
    return QUIZ_API.createCategory(title).then(() => {
      mutate();
    });
  };

  const deleteCategory = async (id: number) => {
    return QUIZ_API.deleteCategory(id).then(() => {
      mutate();
    });
  };

  //TODO category 수정

  return {
    data: data,
    isLoading,
    error,
    createCategory,
    deleteCategory,
  };
}

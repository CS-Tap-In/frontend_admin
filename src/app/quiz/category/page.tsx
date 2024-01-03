import CategoryChart from "@/components/quiz/CategoryChart";

export default async function CategoryPage() {
  return (
    <div className="h-full flex flex-col">
      <div className="ml-10 text-3xl">카테고리 관리</div>
      <CategoryChart />
    </div>
  );
}

import CategoryChart from "@/components/quiz/CategoryChart";
import React from "react";

export default function CategoryPage() {
  return (
    <section className="h-screen py-10 w-5/6">
      <div className="h-full">
        <div className="ml-10 text-3xl">카테고리 관리</div>
        <CategoryChart />
      </div>
    </section>
  );
}

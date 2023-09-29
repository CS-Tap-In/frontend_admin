import Link from "next/link";
import React from "react";

export default function SideNavigation() {
  return (
    <div className="h-screen pt-10 w-1/6">
      <nav className="flex flex-col bg-tapBlue text-white h-full gap-3 px-8 rounded-r-2xl pt-10">
        <Link href={"/user"} className="text-2xl my-5 text-right">
          회원 관리
        </Link>
        <Link href={"/quiz/manage"} className="text-2xl text-right">
          문제 관리
        </Link>
        <Link href={"/quiz/category"} className="text-right">
          카테고리
        </Link>
        <Link href={"/quiz/manage"} className="text-right">
          문제 관리
        </Link>
        <Link href={"/quiz/approve"} className="text-right">
          문제 승인
        </Link>
        <Link href={"/quiz/create"} className="text-right">
          문제 생성
        </Link>
      </nav>
    </div>
  );
}

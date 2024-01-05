"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNavigation() {
  const pathname = usePathname();

  return (
    <div className="h-screen pt-10 w-1/6">
      <nav className="flex flex-col bg-tapBlue text-white h-full gap-3 px-8 pt-10">
        <Link href={"/user"} className="text-2xl my-5 text-right">
          <span
            className={`rounded-2xl p-2 ${
              pathname === "/user" ? "bg-tapYellow text-black" : ""
            }`}
          >
            회원 관리
          </span>
        </Link>
        <Link href={"/quiz/manage"} className="text-2xl text-right">
          퀴즈 관리
        </Link>
        <Link href={"/quiz/category"} className="text-right">
          <span
            className={`rounded-2xl p-2 ${
              pathname === "/quiz/category" ? "bg-tapYellow text-black" : ""
            }`}
          >
            카테고리
          </span>
        </Link>
        <Link href={"/quiz/manage"} className="text-right">
          <span
            className={`rounded-2xl p-2 ${
              pathname === "/quiz/manage" ? "bg-tapYellow text-black" : ""
            }`}
          >
            퀴즈 관리
          </span>
        </Link>
        <Link href={"/quiz/approve"} className="text-right">
          <span
            className={`rounded-2xl p-2 ${
              pathname === "/quiz/approve" ? "bg-tapYellow text-black" : ""
            }`}
          >
            퀴즈 승인
          </span>
        </Link>
        <Link href={"/quiz/create"} className="text-right">
          <span
            className={`rounded-2xl p-2 ${
              pathname === "/quiz/create" ? "bg-tapYellow text-black" : ""
            }`}
          >
            퀴즈 생성
          </span>
        </Link>
      </nav>
    </div>
  );
}

import UserChart from "@/components/user/UserChart";
import { authInstance } from "@/service";
import { USER_API } from "@/service/user";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function UserPage() {
  const token = cookies().get("access_token")?.value;

  if (!token) {
    redirect("/");
  }
  const users = await USER_API.getUsers(token);

  return (
    <section className="h-screen py-10 w-5/6">
      <div className="h-full flex flex-col">
        <h1 className="ml-5 text-3xl pb-5">회원 관리</h1>
        <UserChart users={users.data.content} />
      </div>
    </section>
  );
}

"use client";

import useSWR from "swr";
import UserBlock from "./UserBlock";
import { API_PATH } from "@/service/path";
import { GetUserDto } from "@/types/response/GetUser.dto";

export default function UserChart() {
  const { data } = useSWR<GetUserDto>(API_PATH.GET_USER);
  //TODO 페이지네이션

  return (
    <div className="w-full px-5 overflow-y-scroll flex flex-col gap-1">
      <div className="bg-tapBlue w-full flex p-2 rounded-xl text-white">
        <div className="inline-block flex-auto w-4 text-center text-ellipsis overflow-hidden whitespace-nowrap">
          고유 번호
        </div>
        <div className="inline-block flex-auto w-28 text-center text-ellipsis overflow-hidden whitespace-nowrap">
          유저 이름
        </div>
        <div className="inline-block flex-auto w-28 text-center text-ellipsis overflow-hidden whitespace-nowrap">
          닉네임
        </div>
        <div className="inline-block flex-auto w-28 text-center text-ellipsis overflow-hidden whitespace-nowrap">
          생성일
        </div>
      </div>
      {data?.content.map((user) => (
        <UserBlock userInfo={user} key={user.id} />
      ))}
    </div>
  );
}

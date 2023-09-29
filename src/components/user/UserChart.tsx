"use client";

import UserBlock from "./UserBlock";

type Props = {
  users: User[];
};

export default function UserChart({ users }: Props) {
  return (
    <div className="w-full px-5 overflow-y-scroll flex flex-col gap-1">
      <div className="bg-tapYellow w-full flex p-2 rounded-xl">
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
      {users.map((user) => (
        <UserBlock userInfo={user} key={user.id} />
      ))}
    </div>
  );
}

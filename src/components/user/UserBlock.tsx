import React from "react";

type Props = {
  userInfo: User;
};

export default function UserBlock({ userInfo }: Props) {
  return (
    <div className="bg-white w-full flex p-2 rounded-xl">
      <div className="inline-block flex-auto w-4 text-center text-ellipsis overflow-hidden whitespace-nowrap">
        {userInfo.id}
      </div>
      <div className="inline-block flex-auto w-28 text-center text-ellipsis overflow-hidden whitespace-nowrap">
        {userInfo.username}
      </div>
      <div className="inline-block flex-auto w-28 text-center text-ellipsis overflow-hidden whitespace-nowrap">
        {userInfo.nickname}
      </div>
      <div className="inline-block flex-auto w-28 text-center text-ellipsis overflow-hidden whitespace-nowrap">
        {new Date(userInfo.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
}

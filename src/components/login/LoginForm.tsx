import React from "react";

export default function LoginForm() {
  return (
    <section className="bg-tapBlue p-24 rounded-3xl flex flex-col items-center mb-24">
      <div className="mb-16 text-4xl text-white">두드려 CS 관리자 페이지</div>
      <form>
        <p className="inline-block text-3xl w-40 text-right pr-5  text-white">
          id
        </p>
        <input
          type="text"
          className="bg-tapGrey h-12 w-80 rounded-2xl text-2xl p-5"
        />
        <br />
        <p className="inline-block text-3xl w-40 text-right pr-5 mt-10  text-white">
          password
        </p>
        <input
          type="password"
          className="bg-tapGrey h-12 w-80 rounded-2xl mb-10 text-2xl p-5"
        />
      </form>
    </section>
  );
}

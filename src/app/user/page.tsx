import UserChart from "@/components/user/UserChart";

export default async function UserPage() {
  return (
    <section className="h-screen py-10 w-5/6">
      <div className="h-full flex flex-col">
        <h1 className="ml-5 text-3xl pb-5">회원 관리</h1>
        <UserChart />
      </div>
    </section>
  );
}

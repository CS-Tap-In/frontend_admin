import SideNavigation from "@/components/common/SideNavigation";
import React from "react";

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-screen bg-tapGrey">
      <SideNavigation />
      <section className="h-screen pt-10 w-5/6">{children}</section>
    </div>
  );
}

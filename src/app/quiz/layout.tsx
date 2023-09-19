import SideNavigation from "@/components/SideNavigation";
import React from "react";

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-screen bg-tapGrey">
      <SideNavigation />
      {children}
    </div>
  );
}

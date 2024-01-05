import SideNavigation from "@/components/common/SideNavigation";
import React from "react";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-screen h-screen bg-tapGrey">
      <SideNavigation />
      {children}
    </div>
  );
}

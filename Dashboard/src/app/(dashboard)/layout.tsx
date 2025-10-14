import React from "react";
import Sidebar from "@/layout/Sidebar";
import Navbar from "@/layout/Navbar";
import { requireAuth } from "@/lib/auth";

export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await requireAuth();
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

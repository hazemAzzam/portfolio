import React from "react";
import Sidebar from "@/layout/Sidebar";
import Navbar from "@/layout/Navbar";
import { requireAuth } from "@/lib/auth";
import { isAuthenticated } from "../(auth)/login/_services/is-authenticated";
import { redirect } from "next/navigation";

export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  try {
    await isAuthenticated();
  } catch {
    redirect("/login");
  }
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

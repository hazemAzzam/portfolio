"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { LINKS } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  const pathname = usePathname();

  const pageTitle = LINKS.find((link) => link.href === pathname)?.label;

  return (
    <header className="sticky top-0 left-0 w-full p-4 bg-background/10 backdrop-blur-md border-b ">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl font-bold">{pageTitle}</h1>
        <ThemeToggle />
      </div>
    </header>
  );
}

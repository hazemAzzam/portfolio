"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { LINKS } from "@/lib/data";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 left-0 w-64 h-screen bg-sidebar">
      <div className="flex flex-col">
        <div className="border-b border-border p-4">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
        <div className="flex flex-col gap-2 p-4">
          {LINKS.map((link) => (
            <Button
              variant={pathname === link.href ? "default" : "ghost"}
              asChild
              key={link.label}
            >
              <Link
                href={link.href}
                className={`text-sm text-muted-foreground justify-start`}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
}

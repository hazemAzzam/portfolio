import { cn } from "@/lib/utils";
import React from "react";

export default function Row({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("flex flex-row gap-4", className)}>{children}</div>;
}

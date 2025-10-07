"use client";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyDescription,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { AlertCircle } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Empty>
        <EmptyMedia>
          <AlertCircle className="w-10 h-10 text-red-500" />
        </EmptyMedia>
        <EmptyTitle className="text-2xl font-bold text-foreground">
          Something went wrong!
        </EmptyTitle>
        <EmptyDescription className="text-foreground">
          {error.message}
        </EmptyDescription>

        <Button onClick={() => reset()}>Try again</Button>
      </Empty>
    </div>
  );
}

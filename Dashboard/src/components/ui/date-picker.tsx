"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "./input";

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  control?: React.ReactNode;
}

export function DatePicker({
  value,
  onChange,
  placeholder = "Pick a date",
  disabled = false,
  control,
  className,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center ">
      <div className="flex items-center gap-2">
        <Input defaultValue={value?.toLocaleDateString("en-GB")} />
      </div>
    </div>
  );
}

"use client";

import * as React from "react";
import { Input } from "./input";

interface DatePickerProps {
  value?: Date;
}

export function DatePicker({
  value,
}: DatePickerProps) {

  return (
    <div className="flex items-center ">
      <div className="flex items-center gap-2">
        <Input defaultValue={value?.toLocaleDateString("en-GB")} />
      </div>
    </div>
  );
}

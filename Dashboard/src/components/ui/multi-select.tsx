"use client";

import React from "react";
import Select, { MultiValue, ActionMeta } from "react-select";

interface MultiSelectProps {
  options: Array<{ value: string; label: string }>;
  value?: Array<{ value: string; label: string }>;
  onChange: (selectedOptions: MultiValue<{ value: string; label: string }>, actionMeta: ActionMeta<{ value: string; label: string }>) => void;
  placeholder?: string;
  className?: string;
  classNamePrefix?: string;
}

export function MultiSelect({
  options,
  value,
  onChange,
  placeholder = "Select options...",
  className = "react-select-container",
  classNamePrefix = "react-select",
}: MultiSelectProps) {
  return (
    <Select
      options={options}
      isMulti
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      classNamePrefix={classNamePrefix}
      styles={{
        control: (base, state) => ({
          ...base,
          minHeight: "40px",
          backgroundColor: "var(--background)",
          border: "1px solid var(--border)",
          borderRadius: "6px",
          boxShadow: state.isFocused ? "0 0 0 2px var(--ring)" : "none",
          "&:hover": {
            borderColor: "var(--border)",
          },
        }),
        valueContainer: (base) => ({
          ...base,
          padding: "2px 8px",
        }),
        input: (base) => ({
          ...base,
          color: "var(--foreground)",
          margin: "0",
        }),
        placeholder: (base) => ({
          ...base,
          color: "var(--muted-foreground)",
        }),
        singleValue: (base) => ({
          ...base,
          color: "var(--foreground)",
        }),
        multiValue: (base) => ({
          ...base,
          backgroundColor: "var(--secondary)",
          borderRadius: "4px",
        }),
        multiValueLabel: (base) => ({
          ...base,
          color: "var(--secondary-foreground)",
          fontSize: "14px",
        }),
        multiValueRemove: (base) => ({
          ...base,
          color: "var(--secondary-foreground)",
          "&:hover": {
            backgroundColor: "var(--destructive)",
            color: "var(--destructive-foreground)",
          },
        }),
        indicatorsContainer: (base) => ({
          ...base,
          padding: "0 8px",
        }),
        indicatorSeparator: (base) => ({
          ...base,
          backgroundColor: "var(--border)",
        }),
        dropdownIndicator: (base) => ({
          ...base,
          color: "var(--muted-foreground)",
          "&:hover": {
            color: "var(--foreground)",
          },
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: "var(--popover)",
          border: "1px solid var(--border)",
          borderRadius: "6px",
          boxShadow:
            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06)",
          zIndex: 50,
        }),
        menuList: (base) => ({
          ...base,
          padding: "4px",
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isFocused ? "var(--accent)" : "transparent",
          color: state.isFocused
            ? "var(--accent-foreground)"
            : "var(--foreground)",
          borderRadius: "4px",
          margin: "2px 0",
          "&:hover": {
            backgroundColor: "var(--accent)",
            color: "var(--accent-foreground)",
          },
        }),
        noOptionsMessage: (base) => ({
          ...base,
          color: "var(--muted-foreground)",
        }),
      }}
    />
  );
}

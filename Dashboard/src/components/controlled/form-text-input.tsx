import * as React from "react";
import {
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type FormTextInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  label: string;
  type?: React.ComponentProps<"input">["type"];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  control?: ControllerProps<TFieldValues, TName>["control"];
} & Omit<React.ComponentProps<"input">, "name" | "type" | "placeholder">;

function FormTextInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  label,
  type = "text",
  placeholder,
  disabled,
  className,
  control,
  ...props
}: FormTextInputProps<TFieldValues, TName>) {
  const formContext = useFormContext<TFieldValues>();
  const formControl = control ?? formContext.control;

  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              className={"bg-accent"}
              {...props}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export { FormTextInput };

import { ComponentProps } from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Input } from "../input";
import { Label } from "../label";

type ControlledInputProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  containerClassName?: string;
  options?: { value: string; label: string }[];
} & ComponentProps<typeof Input>;

const ControlledInput = <T extends FieldValues>({
  className,
  type,
  label,
  name,
  containerClassName,
  ...props
}: ControlledInputProps<T>) => {
  const { control } = useFormContext<T>();
  return (
    <div className={cn("flex-1", containerClassName)}>
      {!!label && (
        <Label htmlFor={name} className="space-y-2 mb-1">
          {label}
        </Label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              className={cn("bg-accent", className)}
              type={type}
              id={name}
              data-slot="input"
              {...field}
              value={field.value || ""}
              {...props}
              aria-invalid={!!error}
            />
            {!!error && (
              <p className="text-destructive text-sm">{error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export { ControlledInput };

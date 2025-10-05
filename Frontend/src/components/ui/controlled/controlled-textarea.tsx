import { ComponentProps } from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Textarea } from "../textarea";
import { Label } from "../label";

type ControlledTextareaProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  containerClassName?: string;
} & ComponentProps<typeof Textarea>;

const ControlledTextarea = <T extends FieldValues>({
  className,
  label,
  name,
  containerClassName,
  ...props
}: ControlledTextareaProps<T>) => {
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
            <Textarea
              className={cn("bg-accent", className)}
              id={name}
              data-slot="textarea"
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

export { ControlledTextarea };


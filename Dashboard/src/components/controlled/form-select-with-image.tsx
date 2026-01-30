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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export type SelectOptionWithImage<T = string> = {
  value: T;
  label: string;
  image: string; // URL or path to the image
  disabled?: boolean;
};

type FormSelectWithImageProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  label: string;
  placeholder?: string;
  options: SelectOptionWithImage[];
  disabled?: boolean;
  className?: string;
  triggerClassName?: string;
  imageSize?: "sm" | "md" | "lg"; // Size of images in the dropdown
  showImageInTrigger?: boolean; // Whether to show image in the trigger button
  control?: ControllerProps<TFieldValues, TName>["control"];
} & Omit<React.ComponentProps<typeof Select>, "value" | "onValueChange">;

function FormSelectWithImage<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  label,
  placeholder = "Select an option",
  options,
  disabled,
  className,
  triggerClassName,
  imageSize = "md",
  showImageInTrigger = true,
  control,
  ...props
}: FormSelectWithImageProps<TFieldValues, TName>) {
  const formContext = useFormContext<TFieldValues>();
  const formControl = control ?? formContext.control;

  // showImageInTrigger is reserved for future use
  void showImageInTrigger;

  const imageSizeClasses = {
    sm: "size-4",
    md: "size-6",
    lg: "size-8",
  };

  // Get initials for fallback
  const getInitials = (label: string) => {
    return label
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select
              value={field.value ?? ""}
              onValueChange={field.onChange}
              disabled={disabled}
              {...props}
            >
              <SelectTrigger className={cn("w-full", triggerClassName)}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem
                    key={String(option.value)}
                    value={String(option.value)}
                    disabled={option.disabled}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Avatar
                        className={cn("shrink-0", imageSizeClasses[imageSize])}
                      >
                        <AvatarImage src={option.image} alt={option.label} />
                        <AvatarFallback className="text-xs">
                          {getInitials(option.label)}
                        </AvatarFallback>
                      </Avatar>
                      <span>{option.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export { FormSelectWithImage };

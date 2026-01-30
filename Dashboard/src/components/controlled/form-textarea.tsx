import * as React from "react"
import { useFormContext, type ControllerProps, type FieldPath, type FieldValues } from "react-hook-form"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

type FormTextAreaProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
  label: string
  placeholder?: string
  disabled?: boolean
  className?: string
  control?: ControllerProps<TFieldValues, TName>["control"]
} & Omit<React.ComponentProps<"textarea">, "name" | "placeholder">

function FormTextArea<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  label,
  placeholder,
  disabled,
  className,
  control,
  ...props
}: FormTextAreaProps<TFieldValues, TName>) {
  const formContext = useFormContext<TFieldValues>()
  const formControl = control ?? formContext.control

  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              {...field}
              placeholder={placeholder}
              disabled={disabled}
              {...props}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export { FormTextArea }

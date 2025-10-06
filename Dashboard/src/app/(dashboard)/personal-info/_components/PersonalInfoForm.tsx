"use client";

import React from "react";
import { personalInfoSchema } from "../_schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonalInfoType } from "../_types";
import { Form } from "@/components/ui/form";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { UserIcon } from "lucide-react";
import { FormField } from "@/components/ui/form";
import { Field } from "@/components/ui/field";
import { FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { CardContent } from "@/components/ui/card";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { LinkIcon } from "lucide-react";
import { useUpdatePersonalInfo } from "../_hooks/personal-info-hooks";
import { toast } from "sonner";
import { handleApiError, ApiError } from "@/lib/error-handler";

export default function PersonalInfoForm({ data }: { data: PersonalInfoType }) {
  const { mutate: updatePersonalInfo } = useUpdatePersonalInfo();
  const form = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: data || {},
  });

  const onSubmit = (data: z.infer<typeof personalInfoSchema>) => {
    updatePersonalInfo(data as PersonalInfoType, {
      onSuccess: () => {
        toast.success("Personal info updated successfully");
      },
      onError: (error: unknown) => {
        handleApiError(error as ApiError, "Failed to update personal info");
      },
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserIcon size={24} />
              Basic Information
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <Field>
                    <FieldLabel>Name</FieldLabel>
                    <Input {...field} />
                  </Field>
                )}
              />
              <FormField
                control={form.control}
                name="proffessionalTitle"
                render={({ field }) => (
                  <Field>
                    <FieldLabel>Proffessional Title</FieldLabel>
                    <Input {...field} />
                  </Field>
                )}
              />
            </div>
            <div className="flex flex-row gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input {...field} />
                  </Field>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <Field>
                    <FieldLabel>Phone</FieldLabel>
                    <PhoneInput
                      defaultCountry="EG"
                      countries={["EG"]}
                      {...field}
                    />
                  </Field>
                )}
              />
            </div>
            <div className="flex flex-row gap-4">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <Field>
                    <FieldLabel>Address</FieldLabel>
                    <Input {...field} />
                  </Field>
                )}
              />
            </div>
            <div className="flex flex-row gap-4">
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <Field>
                    <FieldLabel>Bio</FieldLabel>
                    <Textarea {...field} />
                  </Field>
                )}
              />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LinkIcon size={24} />
              Social Links
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <FormField
                control={form.control}
                name="linkedin"
                render={({ field }) => (
                  <Field>
                    <FieldLabel>LinkedIn</FieldLabel>
                    <Input {...field} />
                  </Field>
                )}
              />
            </div>
            <div className="flex flex-row gap-4">
              <FormField
                control={form.control}
                name="github"
                render={({ field }) => (
                  <Field>
                    <FieldLabel>Github</FieldLabel>
                    <Input {...field} />
                  </Field>
                )}
              />
            </div>
          </CardContent>
        </Card>
        <Button type="submit" className="w-fit self-end p-[0.5rem_2rem]">
          Save
        </Button>
      </form>
    </Form>
  );
}

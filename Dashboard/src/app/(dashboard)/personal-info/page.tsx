"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LinkIcon, UserIcon } from "lucide-react";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { PhoneInput } from "@/components/ui/phone-input";

const schema = z.object({
  name: z.string().min(1),
  proffessionalTitle: z.string().min(1),
  email: z.email(),
  phone: z.string(),
  address: z.string(),
  bio: z.string(),

  linkedin: z.url(),
  github: z.url(),
});

export default function PersonalInfo() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      proffessionalTitle: "",
      email: "",
      phone: "",
      address: "",
      bio: "",
      linkedin: "",
      github: "",
    },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    toast.success("Personal info updated successfully");
  };

  return (
    <div className="p-4">
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
    </div>
  );
}

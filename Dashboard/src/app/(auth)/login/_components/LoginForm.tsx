"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useLogin } from "../_hooks/use-login";
import { Spinner } from "@/components/ui/spinner";

const formSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export default function LoginForm() {
  const { mutate: login, isPending } = useLogin();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("📝 [FORM] Submitting login form");
    login(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 border border-border rounded-md p-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="border border-border rounded-md p-4">
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="text" disabled={isPending} {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="border border-border rounded-md p-4">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" disabled={isPending} {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="border border-border rounded-md p-4 flex flex-row gap-2">
          <Button type="submit" className="flex-1" disabled={isPending}>
            {isPending && <Spinner />}
            Login
          </Button>
          <Button
            disabled={isPending}
            onClick={() => {
              form.setValue("username", "guest");
              form.setValue("password", "guest");
            }}
            variant="outline"
          >
            Guest Account
          </Button>
        </div>
      </form>
    </Form>
  );
}

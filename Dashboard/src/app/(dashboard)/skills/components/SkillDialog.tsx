"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField } from "@/components/ui/form";
import { Field, FieldLabel, FieldContent } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Row from "@/components/ui/row";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { useCreateSkill, useUpdateSkill } from "../_hooks";
import { toast } from "sonner";
import { ApiError, handleApiError } from "@/lib/error-handler";
import { SkillTypeWithId } from "../_types";
import { Spinner } from "@/components/ui/spinner";

const categories = [
  "Frontend",
  "Backend",
  "Database",
  "DevOps",
  "Design",
  "Mobile",
  "Tools",
  "Other",
];

const levelLabels = {
  1: "Beginner",
  2: "Beginner",
  3: "Intermediate",
  4: "Intermediate",
  5: "Advanced",
};

const schema = z.object({
  name: z.string().min(1),
  category: z.enum(categories),
  description: z.string().optional(),
  proficiency: z.number().min(1).max(5),
});

export default function SkillDialog({
  children,
  skill,
}: {
  children: React.ReactNode;
  skill?: SkillTypeWithId;
}) {
  const createSkillMutation = useCreateSkill();
  const updateSkillMutation = useUpdateSkill();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: skill?.name || "",
      category: skill?.category || undefined,
      description: skill?.description || "",
      proficiency: skill?.proficiency || 1,
    },
  });
  const onSubmit = (data: z.infer<typeof schema>) => {
    if (skill) {
      updateSkillMutation.mutate(
        { ...data, id: skill.id },
        {
          onSuccess: (updatedUser) => {
            form.reset(updatedUser);
            toast.success("Skill updated successfully");
          },
          onError: (error: unknown) => {
            handleApiError(error as ApiError, "Failed to update skill");
          },
        }
      );
    } else {
      createSkillMutation.mutate(data, {
        onSuccess: () => {
          form.reset();
          toast.success("Skill created successfully");
        },
        onError: (error: unknown) => {
          handleApiError(error as ApiError, "Failed to create skill");
        },
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <DialogHeader>
              <DialogTitle>{skill ? "Update Skill" : "Add Skill"}</DialogTitle>
            </DialogHeader>
            <Row>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <Field>
                    <FieldLabel>Skill Name</FieldLabel>
                    <FieldContent>
                      <Input {...field} />
                    </FieldContent>
                  </Field>
                )}
              />
            </Row>
            <Row>
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <Field>
                    <FieldLabel>Category</FieldLabel>
                    <FieldContent>
                      <Select
                        {...field}
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Frontend">Frontend</SelectItem>
                          <SelectItem value="Backend">Backend</SelectItem>
                          <SelectItem value="Fullstack">Fullstack</SelectItem>
                          <SelectItem value="DevOps">DevOps</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </FieldContent>
                  </Field>
                )}
              />
            </Row>
            <Row>
              <Field className="">
                <FieldLabel>
                  Proficiency Level:{" "}
                  {
                    levelLabels[
                      form.watch(
                        "proficiency"
                      ) as unknown as keyof typeof levelLabels
                    ]
                  }
                </FieldLabel>
                <Slider
                  value={[form.watch("proficiency")]}
                  onValueChange={(value) =>
                    form.setValue("proficiency", value[0])
                  }
                  max={5}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Advanced</span>
                </div>
              </Field>
            </Row>
            <Row>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <Field>
                    <FieldLabel>Description</FieldLabel>
                    <FieldContent>
                      <Textarea {...field} />
                    </FieldContent>
                  </Field>
                )}
              />
            </Row>
            <DialogFooter>
              <Button
                disabled={
                  createSkillMutation.isPending || updateSkillMutation.isPending
                }
                type="submit"
              >
                {createSkillMutation.isPending ||
                  (updateSkillMutation.isPending && <Spinner />)}
                {skill ? "Update" : "Create"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

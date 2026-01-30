"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { ExperienceFormBody, ExperienceFormProvider } from "./ExperienceForm";
import { useForm } from "react-hook-form";
import type { Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  experienceSchema,
  ExperienceSchema,
} from "../schemas/experience.schema";
import { parseExperienceSchema } from "../adapters/parseExperienceSchema";
import { useCreateNewExperience } from "../../_hooks/useCreateNewExperience";
import { format } from "date-fns";

export default function NewExperienceDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const newExperienceMutation = useCreateNewExperience();
  const form = useForm<ExperienceSchema>({
    resolver: zodResolver(experienceSchema) as Resolver<ExperienceSchema>,
    defaultValues: {
      name: "",
      position: "",
      startDate: format(new Date(), "yyyy-MM-dd"),
      endDate: undefined,
      location: {
        lat: undefined,
        lng: undefined,
        details: undefined,
      },
      employmentType: undefined,
    },
  });
  const onSubmit = (data: ExperienceSchema) => {
    const experienceEntity = parseExperienceSchema(data);
    newExperienceMutation.mutate(experienceEntity);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <ExperienceFormProvider form={form} onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>Add Experience</DialogTitle>
          </DialogHeader>
          <ExperienceFormBody />
          <DialogFooter>
            <Button>Save</Button>
          </DialogFooter>
        </ExperienceFormProvider>
      </DialogContent>
    </Dialog>
  );
}

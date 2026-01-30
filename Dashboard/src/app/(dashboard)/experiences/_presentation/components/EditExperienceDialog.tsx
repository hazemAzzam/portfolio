import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { Resolver, useForm } from "react-hook-form";
import {
  experienceSchema,
  ExperienceSchema,
} from "../schemas/experience.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExperienceEntity } from "../../_domain/entites/Experience.entity";
import { format } from "date-fns";
import { parseExperienceSchema } from "../adapters/parseExperienceSchema";
import { useUpdateExperience } from "../../_hooks/useUpdateExperience";
import { ExperienceFormBody, ExperienceFormProvider } from "./ExperienceForm";
import { Button } from "@/components/ui/button";

export default function EditExperienceDialog({
  children,
  experience,
}: {
  children: React.ReactNode;
  experience: ExperienceEntity;
}) {
  const updateExperienceMutation = useUpdateExperience();
  const form = useForm<ExperienceSchema>({
    resolver: zodResolver(experienceSchema) as Resolver<ExperienceSchema>,
    defaultValues: {
      employmentType: experience.employementType,
      endDate: experience.endDate
        ? format(experience.endDate, "yyyy-MM-dd")
        : undefined,
      location: experience.location,
      name: experience.name,
      position: experience.position,
      startDate: format(experience.startDate, "yyyy-MM-dd"),
    },
  });

  const onSubmit = (data: ExperienceSchema) => {
    const experienceEntity = parseExperienceSchema(data);
    updateExperienceMutation.mutate({
      id: experience.id!,
      experience: experienceEntity,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <ExperienceFormProvider form={form} onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>Update Experience</DialogTitle>
          </DialogHeader>
          <ExperienceFormBody />
          <DialogFooter>
            <Button>Update</Button>
          </DialogFooter>
        </ExperienceFormProvider>
      </DialogContent>
    </Dialog>
  );
}

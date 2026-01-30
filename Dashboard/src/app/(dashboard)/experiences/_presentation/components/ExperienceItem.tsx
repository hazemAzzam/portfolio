"use client";

import React from "react";
import { ExperienceEntity } from "../../_domain/entites/Experience.entity";
import { Calendar, Edit2 } from "lucide-react";
import { format } from "date-fns";
import {
  useExperienceLabel,
} from "../../_hooks/useExperienceDuration";
import { Badge } from "@/components/ui/badge";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";
import EditExperienceDialog from "./EditExperienceDialog";
import { Button } from "@/components/ui/button";

export default function ExperienceItem({
  experience,
}: {
  experience: ExperienceEntity;
}) {
  const experienceDuration = useExperienceLabel({
    startDate: experience.startDate,
    endDate: experience.endDate,
  });
  const getEndDate = () => {
    if (!experience.endDate) return "Present";
    else return format(experience.endDate, "yyyy-MM-dd");
  };

  return (
    <Item variant={"muted"}>
      <ItemHeader>
        <ItemTitle className="gap-1 flex flex-col">
          <span>{experience.position}</span>

          <span className="pt-2 pb-2 font-light">{experience.name}</span>
        </ItemTitle>

        <ItemActions>
          <EditExperienceDialog experience={experience}>
            <Button variant={"outline"}>
              <Edit2 />
            </Button>
          </EditExperienceDialog>
        </ItemActions>
      </ItemHeader>
      <ItemContent>
        <ItemDescription>
          <div className="space-y-2">
            <span className="flex items-center gap-4">
              <span className="flex items-center">
                <Calendar className="me-1 size-4" />
                <span>
                  {format(experience.startDate, "yyyy-MM-dd")} - {getEndDate()}
                </span>
              </span>
              <Badge variant={"outline"}>{experienceDuration}</Badge>
              <Badge variant={"secondary"}>{experience.employementType}</Badge>
              <Badge variant={"default"}>current</Badge>
            </span>
          </div>
        </ItemDescription>
      </ItemContent>
    </Item>
  );
}

import React from "react";
import { getAllExperiencesUseCase } from "./_di";
import NewExperienceDialog from "./_presentation/components/NewExperienceDialog";
import { Button } from "@/components/ui/button";
import ExperienceItem from "./_presentation/components/ExperienceItem";
import { EmptyState } from "../projects/_components/ProjectDialog";

export const dynamic = 'force-dynamic';

export default async function page() {
  const experiences = await getAllExperiencesUseCase.execute();
  return (
    <div className="p-4">
      <div className="space-y-4 flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">Experiences</h2>
            <p className="text-muted-foreground">
              Showcase my work and achievements in different companies
            </p>
          </div>
          <NewExperienceDialog>
            <Button>Add Experience</Button>
          </NewExperienceDialog>
        </div>
        <div className="flex flex-col gap-4">
          {experiences.length === 0 ? (
            <EmptyState title="Experiences" />
          ) : (
            experiences.map((experience) => (
              <ExperienceItem
                key={experience.id}
                experience={JSON.parse(JSON.stringify(experience))}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

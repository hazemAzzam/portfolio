"use client";

import SkillDialog from "./components/SkillDialog";
import { Code, PlusIcon } from "lucide-react";
import React, { useMemo } from "react";
import SkillCard from "./components/SkillCard";
import { useSkills } from "./_hooks";
import { SkillTypeWithId } from "./_types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Skills() {
  const skills = useSkills();

  const categorisedSkills = Object.groupBy(
    skills.data || [],
    (skill) => skill.category
  );

  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col ">
            <h1 className="text-2xl font-bold">Skills Management</h1>
            <p className="text-muted-foreground">
              Manage your technical skills and expertise levels
            </p>
          </div>
          <SkillDialog>
            <Button variant="outline">
              <PlusIcon />
              Add Skill
            </Button>
          </SkillDialog>
        </div>
        <div className="flex flex-col gap-4">
          {Object.entries(categorisedSkills).map(([category, skills]) => (
            <div
              key={category}
              className="flex flex-col gap-4 border p-4 rounded-md bg-card"
            >
              <h4 className="text-lg flex flex-row gap-3 items-center font-semibold mb-2">
                <Code />
                {category}
                <Badge>{skills?.length}</Badge>
              </h4>
              <div className="flex flex-col gap-2 w-full">
                {skills?.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

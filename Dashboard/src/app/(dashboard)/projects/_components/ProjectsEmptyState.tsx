import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import React from "react";
import ProjectDialog from "./ProjectDialog";
import { CirclePlus } from "lucide-react";
import { PiEmpty } from "react-icons/pi";

export default function ProjectsEmptyState() {
  return (
    <Empty className="border border-dashed">
      <EmptyMedia className="">
        <PiEmpty size={48} />
      </EmptyMedia>
      <EmptyTitle>No projects added yet</EmptyTitle>
      <EmptyDescription>Add a project to get started</EmptyDescription>
      <EmptyContent>
        <ProjectDialog>
          <Button variant="outline" size="sm" className="space-x-2">
            <CirclePlus size={16} />
            Add Project
          </Button>
        </ProjectDialog>
      </EmptyContent>
    </Empty>
  );
}

import { Button } from "@/components/ui/button";
import React from "react";
import NewProjetcDialog from "./components/NewProjetcDialog";

export default function Projects() {
  return (
    <div className="p-4">
      <div className="flex flex-row gap-4 items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">Projects</h2>
          <p className="text-muted-foreground">
            Showcase your work and achievements
          </p>
        </div>
        <NewProjetcDialog>
          <Button>Add Project</Button>
        </NewProjetcDialog>
      </div>
    </div>
  );
}

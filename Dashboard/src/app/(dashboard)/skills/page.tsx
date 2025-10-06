import NewSkillDialog from "./components/NewSkillDialog";
import { PlusIcon } from "lucide-react";
import React from "react";

export default function Skills() {
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
          <NewSkillDialog>
            <PlusIcon />
            Add Skill
          </NewSkillDialog>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { SkillTypeWithId } from "../_types";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Pencil, Trash } from "lucide-react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
} from "@/components/ui/item";
import { Button } from "@/components/ui/button";
import { useDeleteSkill } from "../_hooks";
import SkillDialog from "./SkillDialog";
import { useSelectedSkillStore } from "../stores/SelectedSkillStore";

const proficiency = {
  1: "Beginner",
  2: "Beginner",
  3: "Intermediate",
  4: "Intermediate",
  5: "Advanced",
};

export default function SkillCard({ skill }: { skill: SkillTypeWithId }) {
  const skillDeleteMutation = useDeleteSkill();
  const { setSelectedSkill } = useSelectedSkillStore();
  return (
    <Item variant="outline" className="w-full">
      <ItemHeader>
        <div className="flex flex-row gap-2 items-center">
          <span className="text-xl font-bold">{skill.name}</span>
          <Badge variant="outline">
            {proficiency[skill.proficiency as keyof typeof proficiency]}
          </Badge>
        </div>
      </ItemHeader>
      <ItemContent>
        <ItemDescription>{skill.description}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <SkillDialog skill={skill}>
          <Button variant="outline" size="icon">
            <Pencil />
          </Button>
        </SkillDialog>
        <Button
          variant="destructive"
          size="icon"
          onClick={() => skillDeleteMutation.mutate(skill.id)}
        >
          <Trash />
        </Button>
      </ItemActions>
      <ItemFooter>
        <div className="w-full space-x-2 flex flex-row gap-5 items-center justify-between">
          <Progress
            value={(skill.proficiency / 5) * 100}
            className="h-2.5 bg-accent"
          />
          <span className="text-sm text-muted-foreground">
            {skill.proficiency}/5
          </span>
        </div>
      </ItemFooter>
    </Item>
  );
}

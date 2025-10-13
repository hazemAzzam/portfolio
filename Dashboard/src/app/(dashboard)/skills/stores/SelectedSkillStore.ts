import { create } from "zustand";
import { SkillType, SkillTypeWithId } from "../_types";
import { createStore } from "@/lib/createStore";

type SelectedSkillStoreState = {
  selectedSkill: SkillTypeWithId | SkillType | null;
  isUpdating: boolean;
};

type SelectedSkillStoreActions = {
  setSelectedSkill: (skill: SkillTypeWithId | SkillType | null) => void;
};

type Store = SelectedSkillStoreState & SelectedSkillStoreActions;

export const useSelectedSkillStore = createStore<Store>(
  (set) => ({
    selectedSkill: null,
    isUpdating: false,
    setSelectedSkill: (skill) =>
      set({ selectedSkill: skill, isUpdating: true }),
    resetSelectedSkill: () => set({ selectedSkill: null, isUpdating: false }),
  }),
  {
    name: "selected-skill",
    excludeFromPersist: ["selectedSkill"],
  }
);

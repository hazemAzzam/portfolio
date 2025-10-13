export interface SkillType {
  name: string;
  category: string;
  description?: string;
  proficiency: number;
}

export interface SkillTypeWithId extends SkillType {
  id: string;
}

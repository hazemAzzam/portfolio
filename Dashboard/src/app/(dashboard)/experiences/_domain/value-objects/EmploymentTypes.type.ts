export const EmploymentTypes = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
  "Freelance",
] as const;

export type EmploymentType = (typeof EmploymentTypes)[number];

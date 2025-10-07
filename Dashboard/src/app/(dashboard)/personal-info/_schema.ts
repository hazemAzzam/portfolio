import z from "zod";

// create personal info schema
export const personalInfoSchema = z.object({
  name: z.string().optional(),
  proffessionalTitle: z.string().optional(),
  email: z.email().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  bio: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
});

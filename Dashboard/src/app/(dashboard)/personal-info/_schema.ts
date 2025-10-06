import z from "zod";

// create personal info schema
export const personalInfoSchema = z.object({
  name: z.string().optional(),
  proffessionalTitle: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  bio: z.string().optional(),
  linkedin: z.string().url().optional(),
  github: z.string().url().optional(),
});

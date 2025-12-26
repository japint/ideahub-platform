import { z } from "zod";

export const projectSchema = z.object({
  name: z.string().min(2),
  status: z.enum(["Exploration", "Development", "Production", "Power-to-Gas"]),
});
export type ProjectInput = z.infer<typeof projectSchema>;

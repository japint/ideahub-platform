import { z } from "zod";

export const roadmapCardPropsSchema = z.object({
  icon: z.any(), // ReactNode, not validated at runtime
  title: z.string(),
  subtitle: z.string(),
  index: z.number(),
  isLast: z.boolean().optional(),
  targetId: z.string(),
  href: z.string().optional(),
});
export type RoadmapCardProps = z.infer<typeof roadmapCardPropsSchema>;

export const contentSectionPropsSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  icon: z.any(), // ReactNode
  isAlternate: z.boolean().optional(),
});
export type ContentSectionProps = z.infer<typeof contentSectionPropsSchema>;

export const contentSectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  icon: z.any(),
});
export type ContentSection = z.infer<typeof contentSectionSchema>;

export const roadmapItemSchema = z.object({
  icon: z.any(),
  title: z.string(),
  subtitle: z.string(),
  targetId: z.string(),
  href: z.string().optional(),
});
export type RoadmapItem = z.infer<typeof roadmapItemSchema>;

export const energyAssessmentSchema = z.object({
  // Step 1: Contact Info
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  company: z.string().min(1, "Company is required"),
  // Step 2: Facility Info
  facilityType: z.enum(["commercial", "industrial", "retail", "healthcare"]),
  location: z.string().min(1, "Location is required"),
  // Step 3: Energy Context
  concerns: z.array(z.string()).min(1, "At least one concern is required"),
  timeline: z.enum(["asap", "1-3", "planning"]),
});

export type EnergyAssessmentInput = z.infer<typeof energyAssessmentSchema>;

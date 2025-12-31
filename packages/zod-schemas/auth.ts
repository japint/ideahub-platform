import { z } from 'zod';

export const RoleEnum = z.enum(['ADMIN', 'ENGINEER', 'VIEWER']);
export type Role = z.infer<typeof RoleEnum>;

export const loginSchema = z.object({
  email: z.string().email({ message: 'Valid email required' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
});

export type LoginInput = z.infer<typeof loginSchema>;

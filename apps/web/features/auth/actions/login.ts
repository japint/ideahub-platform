// Named export only
'use server';
import { loginSchema, RoleEnum, type LoginInput, type Role } from '@invictus/zod-schemas';
import { cookies } from 'next/headers';

/**
 * Simulated user DB. Replace with real DB logic in production.
 */
const users = [
  { email: 'admin@ideahub.com', password: 'adminpass', role: 'ADMIN' },
  { email: 'eng@ideahub.com', password: 'engineerpass', role: 'ENGINEER' },
  { email: 'viewer@ideahub.com', password: 'viewerpass', role: 'VIEWER' },
];

export async function loginAction(prevState: any, formData: FormData) {
  const input: LoginInput = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };
  const parse = loginSchema.safeParse(input);
  if (!parse.success) {
    return { success: false, error: parse.error.flatten().fieldErrors };
  }
  const user = users.find((u) => u.email === input.email && u.password === input.password);
  if (!user) {
    return { success: false, error: { email: ['Invalid credentials'] } };
  }
  // Set a simple cookie for demo (replace with JWT/session in production)
  cookies().set('user', JSON.stringify({ email: user.email, role: user.role }), {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
  });
  return { success: true, role: user.role };
}

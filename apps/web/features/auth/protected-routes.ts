import { RoleEnum } from '@invictus/zod-schemas';

// Map of protected routes to allowed roles
export const protectedRoutes: Record<
  string,
  Array<(typeof RoleEnum.Enum)[keyof typeof RoleEnum.Enum]>
> = {
  '/admin': ['ADMIN'],
  '/engineer': ['ADMIN', 'ENGINEER'],
  '/viewer': ['ADMIN', 'ENGINEER', 'VIEWER'],
};

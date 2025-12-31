// Named export only
'use client';
import { useMemo } from 'react';
import { Role } from '@energy-platform/zod-schemas';

export function useRole(user: { role: Role } | null, allowed: Role[]) {
  return useMemo(() => {
    if (!user) return false;
    return allowed.includes(user.role);
  }, [user, allowed]);
}

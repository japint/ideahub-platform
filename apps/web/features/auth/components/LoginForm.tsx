// Named export only
'use client';
import * as React from 'react';
import { useFormState } from 'react-dom';
import { loginAction } from '@/features/auth/actions/login';
import { Input, Button } from '@invictus/ui';
import { loginSchema } from '@energy-platform/zod-schemas';

export function LoginForm() {
  const [state, formAction] = useFormState(loginAction, { success: false, error: {} });

  return (
    <form
      action={formAction}
      className="max-w-sm mx-auto p-8 bg-card rounded-xl shadow-md space-y-6 border border-border"
    >
      <h2 className="text-2xl font-bold text-foreground mb-4">Sign In</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full"
          />
          {state.error?.email && (
            <p className="text-xs text-destructive mt-1">{state.error.email[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1 text-foreground">
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="w-full"
          />
          {state.error?.password && (
            <p className="text-xs text-destructive mt-1">{state.error.password[0]}</p>
          )}
        </div>
      </div>
      <Button type="submit" className="w-full">
        Sign In
      </Button>
      {state.success && <p className="text-green-600 text-sm mt-2">Login successful!</p>}
    </form>
  );
}

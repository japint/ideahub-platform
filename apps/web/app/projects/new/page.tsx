'use client';
import { useFormStatus, useFormState as useActionState } from 'react-dom';
import { createProject } from '@/app/actions/create-project';
import { Button, Input, Select } from '@invictus/ui';
import { projectSchema } from '@energy-platform/zod-schemas/project';

export default function NewProjectPage() {
  const [state, formAction] = useActionState(createProject, {
    data: null,
    error: null,
  });

  return (
    <form action={formAction} className="max-w-md mx-auto space-y-4 p-6">
      <Input name="name" required />
      <Select name="status" options={projectSchema.shape.status.options} required />
      <SubmitButton />
      {state.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Creating...' : 'Create Project'}
    </Button>
  );
}

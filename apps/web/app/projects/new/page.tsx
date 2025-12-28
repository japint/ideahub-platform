'use client';

import { useFormStatus, useFormState } from 'react-dom';
import { createProject, type ActionState } from '../../actions/create-project';
import { Button, Input } from '@invictus/ui';

// This must match ActionState exactly
const initialState: ActionState = {
  success: false,
  message: '',
};

export default function NewProjectPage() {
  // state will now have .success and .message with full type safety
  const [state, formAction] = useFormState(createProject, initialState);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-6">Create New Project</h1>

      <form action={formAction} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Project Name</label>
          <Input name="name" placeholder="e.g. Solar Farm Alpha" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Initial Status</label>
          <select
            name="status"
            className="w-full p-2 border rounded-md bg-white"
            defaultValue="DRAFT"
          >
            <option value="DRAFT">Draft</option>
            <option value="ACTIVE">Active</option>
            <option value="COMPLETED">Completed</option>
          </select>
        </div>

        <SubmitButton />

        {/* Dynamic feedback based on state */}
        {state.message && (
          <div
            className={`p-3 rounded-md text-sm ${
              state.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
            }`}
          >
            {state.message}
          </div>
        )}
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <span className="flex items-center gap-2">
          <span className="animate-spin text-lg">⏳</span> Creating...
        </span>
      ) : (
        'Create Project'
      )}
    </Button>
  );
}

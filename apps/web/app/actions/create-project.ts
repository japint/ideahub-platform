'use server';

import { prisma } from '@invictus/db';
import { revalidatePath } from 'next/cache';

// 1. Define the exact shape of your state
export type ActionState = {
  success: boolean;
  message: string;
};

// 2. The action MUST receive prevState as the first argument
export async function createProject(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const name = formData.get('name') as string;
    const status = formData.get('status') as any;

    if (!name) {
      return { success: false, message: 'Project name is required.' };
    }

    // Save to Supabase via Prisma
    await prisma.project.create({
      data: {
        name,
        status: status || 'DRAFT',
      },
    });

    // Refresh the UI
    revalidatePath('/projects');

    return {
      success: true,
      message: 'Project created successfully!',
    };
  } catch (error) {
    console.error('Database Error:', error);
    return {
      success: false,
      message: 'Database error: Failed to create project.',
    };
  }
}

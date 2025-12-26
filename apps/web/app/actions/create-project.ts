import { prisma } from '@/../../packages/db/client';
import { projectSchema } from '@energy-platform/zod-schemas/project';

export async function createProject(
  prevState: any,
  formData: FormData
): Promise<{ data: { id: string } | null; error: string | null }> {
  const name = formData.get('name');
  const status = formData.get('status');
  const parsed = projectSchema.safeParse({ name, status });
  if (!parsed.success || !name || !status) {
    return { data: null, error: 'Invalid input' };
  }
  try {
    const project = await prisma.project.create({
      data: { name: String(name), status: String(status) },
    });
    return { data: { id: project.id }, error: null };
  } catch (e) {
    return { data: null, error: 'Database error' };
  }
}

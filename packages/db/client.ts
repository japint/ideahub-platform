import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  // Neon: Use connection pooling for serverless
  datasources: { db: { url: process.env.DATABASE_URL } },
});

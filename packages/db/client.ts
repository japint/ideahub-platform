import 'server-only'; // ✅ This locks this file to the server
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';

const prismaClientSingleton = () => {
  // Use the POOLED connection for the application runtime
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  // const adapter = new PrismaPg(pool);

  return new PrismaClient({
    // adapter,
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;
const globalForPrisma = globalThis as unknown as { prisma: PrismaClientSingleton | undefined };
export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

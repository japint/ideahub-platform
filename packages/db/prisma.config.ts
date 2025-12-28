import 'dotenv/config';
import { defineConfig, env } from '@prisma/config';

export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    // Prisma Studio and Migrations MUST use the direct port (5432)
    url: env('DIRECT_URL'),
  },
});

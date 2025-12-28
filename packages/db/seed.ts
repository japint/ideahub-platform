import { prisma } from './client';

async function main() {
  console.log('🌱 Seeding energy data...');

  // Create a Project & Asset if they don't exist
  const project = await prisma.project.create({
    data: {
      name: 'Main Energy Hub',
      status: 'ACTIVE',
      assets: {
        create: { name: 'Primary Meter' },
      },
    },
    include: { assets: true },
  });

  const asset = project.assets[0];

  // Generate 24 hours of fake readings
  const readings = Array.from({ length: 24 }).map((_, i) => ({
    assetId: asset.id,
    value: Math.random() * 100,
    timestamp: new Date(Date.now() - i * 3600000),
  }));

  await prisma.energyReading.createMany({ data: readings });
  console.log('✅ Success! Check Prisma Studio.');
}

main().catch(console.error);

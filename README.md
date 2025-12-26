# Energy Roadmap Monorepo

A comprehensive energy management platform built with Next.js, TypeScript, and Tailwind CSS, following strict Separation of Concerns (SoC) and Vertical Slice Architecture.

## Monorepo Structure

- `apps/web/` - Main Next.js 14+ app (App Router, all web logic)
- `packages/ui/` - Shared UI component library (`@invictus/ui`)
- `packages/types/` - Shared TypeScript types (`@energy-platform/types`)
- `packages/zod-schemas/` - Shared Zod schemas for validation (`@energy-platform/zod-schemas`)
- `packages/db/` - (Optional) Prisma database client and schema
- `public/` - Static assets

## Technologies Used

- **Next.js 14** - App Router, React 18+
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS
- **@invictus/ui** - Custom UI component library (workspace package)
- **@energy-platform/zod-schemas** - Centralized Zod schemas for forms and validation
- **@energy-platform/types** - Shared types for strict typing across features
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **Lucide React** - Icon library
- **pnpm** - Monorepo and workspace management
- **Turborepo** - Build orchestration

## Key Features

- 🔗 All logic consolidated in `apps/web` (no legacy `src/`)
- 🧩 Features organized by vertical slice (e.g., `features/roadmap`, `features/energy-assessment`)
- 🏗️ Barrel files (`index.ts`) for clean imports and aliasing
- 🏷️ Absolute imports via `@/` alias in app code
- 🧑‍💻 Workspace packages for UI, types, and schemas
- 📝 Multi-step forms with Zod validation and React Hook Form integration
- 📦 Portable, reusable UI and schema packages

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev --filter web
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Workspace Package Usage

- **UI Components:** Import from `@invictus/ui` in any app or package.
- **Types:** Import from `@energy-platform/types` for shared interfaces.
- **Zod Schemas:** Import from `@energy-platform/zod-schemas` for form validation (e.g., `energyAssessmentSchema`).

## Form Example

```ts
import { energyAssessmentSchema, EnergyAssessmentInput } from '@energy-platform/zod-schemas';
```

## Best Practices

- Use relative imports in workspace packages (no `@/` alias outside apps/web)
- Only Next.js pages use default exports; all other modules use named exports
- Keep all shared logic in workspace packages for maximum reusability

## Build and Deploy

To build the application for production:

```bash
pnpm build --filter web
```

To start the production server:

```bash
pnpm start --filter web
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Turborepo](https://turbo.build/repo)

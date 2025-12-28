# IdeaHub Energy Platform ⚡

A modern, scalable solution for energy management, built for teams to optimize, track, and manage energy initiatives with high type-safety and performance.

---

## 🛠 Tech Stack

- **[Turborepo](https://turbo.build/)** – High-performance monorepo orchestration
- **[Next.js 14](https://nextjs.org/)** (App Router) – React framework for the web
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first styling
- **[Prisma](https://www.prisma.io/)** – Type-safe ORM for PostgreSQL
- **[Supabase](https://supabase.com/)** – Managed Postgres, Auth, and Storage
- **[pnpm](https://pnpm.io/)** – Fast, disk-efficient package management

---

## 📂 Monorepo Structure

- `apps/web/` – Main Next.js application (Dashboard & Public pages)
- `packages/db/` – Prisma schema, migrations, and generated client (@invictus/db)
- `packages/ui/` – Shared UI component library
- `packages/types/` – Shared TypeScript definitions
- `packages/zod-schemas/` – Cross-platform validation schemas
- `turbo.json` – Pipeline configuration for caching and task execution

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Environment Variables

Copy `.env.example` to `.env` in any package that requires it (e.g., `packages/db`):

```bash
cp packages/db/.env.example packages/db/.env
```

Edit the `.env` file(s) with your database credentials and secrets.

### 3. Generate the Prisma Client

```bash
pnpm db:generate
```

Or, for workspace-aware generation:

```bash
pnpm --filter @invictus/db exec prisma generate
```

### 4. Run the Development Server

```bash
pnpm dev --filter web
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment Logic

- **main branch** = Staging (Amber "Staging Environment" badge is visible in the UI)
- **production branch** = Live (No badge, production environment)

---

## Key Guidelines

- Package Management: Use only `pnpm`. Do not use `npm` or `yarn` to avoid lockfile conflicts.
- Workspace Filtering: Use the `--filter` flag to run commands in specific packages (e.g., `pnpm` `--filter web build`).
- Schema Changes: All database changes must be made in `packages/db` and followed by a `pnpm` `db:generate` to sync types across the monorepo.

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Prisma ORM](https://www.prisma.io/docs)
- [Supabase](https://supabase.com/docs)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Turborepo](https://turbo.build/repo)

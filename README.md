# Kennenlern-Portal – Starter

Next.js 14 + TypeScript + Tailwind + Prisma + NextAuth.

## Quickstart
```bash
pnpm i
cp .env.supabase.example .env  # Werte eintragen!
pnpm prisma:generate
pnpm prisma:migrate
pnpm dev
```

## Supabase-Setup (empfohlen)
- Kopiere **.env.supabase.example** zu **.env** und ersetze `<PROJECT_ID>`, `<DB_PASSWORD>`, `NEXTAUTH_SECRET`.
- Prisma Migrations nutzen `DIRECT_URL` (Port 5432).
- Runtime nutzt `DATABASE_URL` (Port 6543 – pgbouncer).

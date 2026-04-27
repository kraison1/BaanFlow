# EXECUTION STATE — BaanFlow

phase: product-definition
status: active-discovery
owner: Pond
current_worker: K9

## Current Objective
Build the BaanFlow frontend foundation in Next.js + TypeScript, starting with an SEO-first landing page.

## Current Truth
- Project name selected: BaanFlow.
- MVP direction selected: upload house models, options/price calculator, quotation versioning, project tracker, payment milestones, customer portal.
- Stack v1 selected: Next.js + TypeScript FE, Rust BE, Redis cache/queue, PostgreSQL DB.
- Auth v1 selected: NextAuth/Auth.js with username/password first.
- File storage provider still not selected; S3-compatible storage is recommended.
- Frontend bootstrap exists and passes lint, typecheck, and build.

## Next Action
Design the next frontend slice: app shell/routes for dashboard, house models, quotations, projects, and customer portal.

## Blockers
- Need choose file storage provider: Cloudflare R2, AWS S3, or MinIO.
- Need decide Rust framework/library details: Axum/sqlx recommended but not explicitly confirmed by Pond.
- Need validate with 3–5 target businesses if this workflow matches real operations.

# PROJECT MEMORY — BaanFlow

## Goal
Build a focused SaaS/web app for prefab/knockdown home companies to upload house models, generate quotations with options, track project progress, manage payment milestones, and expose a customer portal.

## Stack v1
- Frontend: Next.js + TypeScript
- Backend: Rust
- Cache/queue: Redis
- Database: PostgreSQL
- Authentication: NextAuth/Auth.js with username/password first
- File storage: S3-compatible storage required (Cloudflare R2/AWS S3 recommended)
- SEO: Next.js metadata, static landing pages, dynamic house model pages, sitemap, schema.org, OG images
- Full details: `TECH_STACK.md`

## Key Decisions
- Product name selected: **BaanFlow**.
- Stack v1 selected: Next.js/TypeScript FE, Rust BE, Redis, PostgreSQL, NextAuth/Auth.js username/password auth first.
- Avoid `Bannflow` because search results surface **Bannerflow**, a large creative automation SaaS; risk of typo/confusion is higher.
- BaanFlow is preferred because `Baan` clearly maps to บ้าน, reads better for Thai market, and can still work as a SaaS brand.
- Compete as vertical workflow software, not generic ERP/accounting software.

## Competitor/Market Notes
- Thai market has broader ERP/project systems such as Pojjaman ERP and PenMongkon-like ERP positioning for home/building/material businesses.
- International home-builder tools commonly center on CRM, estimating, quotations, schedule, job costing, change orders, client portal, progress photos, invoices/payments, and warranty.
- Opportunity is a lighter, Thai-specific MVP for knockdown/prefab home sales and project tracking.

## Core Product Thesis
BaanFlow should own the workflow:
Upload house model → publish catalog → configure options → generate quotation → approve version → open project → track production/installation → collect milestone payments → handover/warranty.

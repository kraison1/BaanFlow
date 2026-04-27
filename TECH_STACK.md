# TECH STACK — BaanFlow v1

## Confirmed Stack v1

### Frontend
- **Next.js + TypeScript**
- SEO-first pages using Next.js metadata, sitemap, canonical URLs, OpenGraph images, and schema.org
- UI direction: Tailwind CSS + shadcn/ui (recommended, not yet locked)

### Backend
- **Rust** backend service
- Recommended framework: Axum
- Recommended DB library: sqlx
- API style: REST JSON first; OpenAPI generation recommended

### Database
- **PostgreSQL**
- Must support multi-tenant design from the start via `organization_id`
- Use migrations from day one

### Cache / Queue
- **Redis**
- Uses:
  - cache hot reads later if needed
  - background job queue for PDF generation, image processing, notifications, and cleanup
  - rate-limit/session helper if needed

### Authentication
- **NextAuth/Auth.js**
- Initial auth method: **username/password** only
- OAuth/social login: out of scope for v1
- Must support roles and organizations:
  - owner
  - admin
  - sales
  - project_manager
  - customer

### File Storage
- S3-compatible object storage required for house model assets
- Recommended: Cloudflare R2 or AWS S3
- Store only metadata in PostgreSQL; store file bytes in object storage
- File types expected:
  - house model cover/gallery images
  - PDF plans
  - quotation PDFs
  - project progress photos
  - internal CAD/SketchUp files if allowed

### PDF Generation
- HTML-to-PDF for quotation documents
- Recommended: Playwright/Chromium rendering from HTML templates
- PDF generation should run as a background job, not block UI request path

### Deployment Direction
- Docker Compose for early VPS deployment
- Separate services:
  - web: Next.js
  - api: Rust backend
  - worker: Rust worker or Node/Playwright PDF worker
  - postgres
  - redis
- Production DB/storage can be managed services later

## v1 Architecture Notes
- Keep FE and BE separated enough that the Rust API owns business logic.
- NextAuth can live in the Next.js app, but tenant/role authorization must align with backend permissions.
- Do not design as single-tenant; every business object should attach to organization/company ownership.
- File upload should use signed upload URLs or a controlled upload endpoint.
- Quotation versioning and project status changes should write audit logs.

## Out of Scope v1
- OAuth/social login
- SSO/SAML
- Full accounting/GL/e-Tax/payroll compliance
- Elasticsearch/Meilisearch; use PostgreSQL search first
- Kubernetes

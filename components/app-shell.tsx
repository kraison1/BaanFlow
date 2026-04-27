import Link from 'next/link';
import { navItems } from '@/lib/mock-data';

export function AppShell({ children, title, subtitle, actionHref, actionLabel }: Readonly<{
  children: React.ReactNode;
  title: string;
  subtitle: string;
  actionHref?: string;
  actionLabel?: string;
}>) {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <Link className="brand" href="/">
          <span>BaanFlow</span>
          <small>Ops for prefab homes</small>
        </Link>
        <nav className="side-nav" aria-label="BaanFlow app menu">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              <strong>{item.label}</strong>
              <small>{item.description}</small>
            </Link>
          ))}
        </nav>
      </aside>

      <section className="workspace">
        <header className="workspace-header">
          <div>
            <p className="eyebrow">BaanFlow App</p>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          {actionHref && actionLabel ? (
            <Link className="button primary" href={actionHref}>
              {actionLabel}
            </Link>
          ) : null}
        </header>
        {children}
      </section>
    </main>
  );
}

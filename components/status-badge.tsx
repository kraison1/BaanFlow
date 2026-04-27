import type { StatusTone } from '@/lib/mock-data';

export function StatusBadge({ children, tone = 'neutral' }: Readonly<{ children: React.ReactNode; tone?: StatusTone }>) {
  return <span className={`status-badge ${tone}`}>{children}</span>;
}

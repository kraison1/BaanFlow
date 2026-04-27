import { AppShell } from '@/components/app-shell';
import { StatusBadge } from '@/components/status-badge';
import { metrics, projects, quotations } from '@/lib/mock-data';

export default function DashboardPage() {
  return (
    <AppShell title="Dashboard" subtitle="ภาพรวมแบบบ้าน ใบเสนอราคา โปรเจกต์ และงวดเงินที่ต้องตามต่อ">
      <section className="metric-grid">
        {metrics.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.caption}</p>
          </article>
        ))}
      </section>

      <section className="dashboard-grid">
        <article className="panel-card">
          <h2>Quotation ล่าสุด</h2>
          <div className="stack-list">
            {quotations.map((quote) => (
              <div className="stack-row" key={quote.id}>
                <div>
                  <strong>{quote.id}</strong>
                  <p>{quote.customer}</p>
                </div>
                <StatusBadge tone={quote.tone}>{quote.status}</StatusBadge>
              </div>
            ))}
          </div>
        </article>

        <article className="panel-card">
          <h2>โปรเจกต์ที่กำลังเดิน</h2>
          <div className="stack-list">
            {projects.map((project) => (
              <div className="stack-row" key={project.id}>
                <div>
                  <strong>{project.name}</strong>
                  <p>{project.stage} · {project.progress}</p>
                </div>
                <StatusBadge tone={project.tone}>{project.nextMilestone}</StatusBadge>
              </div>
            ))}
          </div>
        </article>
      </section>
    </AppShell>
  );
}

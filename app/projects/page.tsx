import { AppShell } from '@/components/app-shell';
import { TableCard } from '@/components/table-card';
import { projects } from '@/lib/mock-data';

export default function ProjectsPage() {
  return (
    <AppShell title="โปรเจกต์" subtitle="ติดตามงานผลิต ติดตั้ง ส่งมอบ งวดเงิน และงาน warranty" actionHref="/projects/new" actionLabel="เปิดโปรเจกต์">
      <TableCard
        editBasePath="/projects"
        rows={projects}
        columns={[
          { key: 'id', label: 'รหัส' },
          { key: 'name', label: 'โปรเจกต์' },
          { key: 'customer', label: 'ลูกค้า' },
          { key: 'stage', label: 'ขั้นตอน' },
          { key: 'progress', label: 'Progress' },
          { key: 'nextMilestone', label: 'งวดถัดไป' },
        ]}
      />
    </AppShell>
  );
}

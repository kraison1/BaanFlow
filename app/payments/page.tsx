import { AppShell } from '@/components/app-shell';
import { TableCard } from '@/components/table-card';
import { payments } from '@/lib/mock-data';

export default function PaymentsPage() {
  return (
    <AppShell title="งวดเงิน" subtitle="ติดตามมัดจำ งวดผลิต งวดก่อนส่ง งวดส่งมอบ และหลักฐานการชำระ" actionHref="/payments/new" actionLabel="เพิ่มงวดเงิน">
      <TableCard
        editBasePath="/payments"
        rows={payments}
        columns={[
          { key: 'id', label: 'รหัส' },
          { key: 'project', label: 'โปรเจกต์' },
          { key: 'milestone', label: 'งวด' },
          { key: 'amount', label: 'ยอด' },
          { key: 'dueDate', label: 'ครบกำหนด' },
          { key: 'status', label: 'สถานะ' },
        ]}
      />
    </AppShell>
  );
}

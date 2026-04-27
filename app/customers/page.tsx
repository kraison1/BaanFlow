import { AppShell } from '@/components/app-shell';
import { TableCard } from '@/components/table-card';
import { customers } from '@/lib/mock-data';

export default function CustomersPage() {
  return (
    <AppShell title="ลูกค้า" subtitle="จัดการ lead/customer และข้อมูลสำหรับ customer portal" actionHref="/customers/new" actionLabel="เพิ่มลูกค้า">
      <TableCard
        editBasePath="/customers"
        rows={customers}
        columns={[
          { key: 'id', label: 'รหัส' },
          { key: 'name', label: 'ชื่อ' },
          { key: 'contact', label: 'ติดต่อ' },
          { key: 'source', label: 'ที่มา' },
          { key: 'status', label: 'สถานะ' },
        ]}
      />
    </AppShell>
  );
}

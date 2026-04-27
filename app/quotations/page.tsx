import { AppShell } from '@/components/app-shell';
import { TableCard } from '@/components/table-card';
import { quotations } from '@/lib/mock-data';

export default function QuotationsPage() {
  return (
    <AppShell title="ใบเสนอราคา" subtitle="จัดการ quotation version, option, ส่วนลด และสถานะการอนุมัติ" actionHref="/quotations/new" actionLabel="สร้างใบเสนอราคา">
      <TableCard
        editBasePath="/quotations"
        rows={quotations}
        columns={[
          { key: 'id', label: 'เลขที่' },
          { key: 'customer', label: 'ลูกค้า' },
          { key: 'model', label: 'แบบบ้าน' },
          { key: 'version', label: 'Version' },
          { key: 'amount', label: 'ยอดรวม' },
          { key: 'status', label: 'สถานะ' },
        ]}
      />
    </AppShell>
  );
}

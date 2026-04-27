import { AppShell } from '@/components/app-shell';
import { CrudForm } from '@/components/crud-form';

const fields = [
  { label: 'ชื่อลูกค้า/บริษัท', placeholder: 'คุณสมชาย รีสอร์ทเขาใหญ่' },
  { label: 'สถานะ', type: 'select' as const, options: ['New Lead', 'Hot Lead', 'Customer', 'Inactive'] },
  { label: 'Portal access', type: 'select' as const, options: ['Disabled', 'Invited', 'Active'] },
  { label: 'Note ล่าสุด', type: 'textarea' as const, placeholder: 'สรุปการคุยล่าสุดและ next follow-up' },
];

export default async function EditCustomerPage({ params }: Readonly<{ params: Promise<{ id: string }> }>) {
  const { id } = await params;
  return (
    <AppShell title={`แก้ไขลูกค้า ${id}`} subtitle="ปรับข้อมูล lead/customer และสถานะ customer portal">
      <CrudForm title="แก้ไขลูกค้า" description="ฟอร์ม mock สำหรับวาง UX CRUD ก่อนต่อ API" fields={fields} />
    </AppShell>
  );
}

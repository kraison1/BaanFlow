import { AppShell } from '@/components/app-shell';
import { CrudForm } from '@/components/crud-form';

const fields = [
  { label: 'สถานะ', type: 'select' as const, options: ['Pending', 'Paid', 'Overdue', 'Waived'] },
  { label: 'วันที่ชำระ', type: 'date' as const },
  { label: 'ยอดที่รับจริง', type: 'number' as const, placeholder: '240000' },
  { label: 'หมายเหตุ', type: 'textarea' as const, placeholder: 'เลขอ้างอิงโอน / note จากบัญชี' },
];

export default async function EditPaymentPage({ params }: Readonly<{ params: Promise<{ id: string }> }>) {
  const { id } = await params;
  return (
    <AppShell title={`แก้ไขงวดเงิน ${id}`} subtitle="อัปเดตสถานะจ่ายเงินและข้อมูลที่แสดงให้ลูกค้าเห็น">
      <CrudForm title="แก้ไขงวดเงิน" description="ฟอร์ม mock สำหรับวาง UX CRUD ก่อนต่อ API" fields={fields} />
    </AppShell>
  );
}

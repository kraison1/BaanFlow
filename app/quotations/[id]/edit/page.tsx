import { AppShell } from '@/components/app-shell';
import { CrudForm } from '@/components/crud-form';

const fields = [
  { label: 'Version', placeholder: 'v3' },
  { label: 'สถานะ', type: 'select' as const, options: ['Draft', 'Sent', 'Accepted', 'Rejected', 'Expired'] },
  { label: 'ยอดรวม', type: 'number' as const, placeholder: '742000' },
  { label: 'Note การแก้ไข', type: 'textarea' as const, placeholder: 'ลูกค้าเพิ่มระเบียงและเปลี่ยนวัสดุหลังคา' },
];

export default async function EditQuotationPage({ params }: Readonly<{ params: Promise<{ id: string }> }>) {
  const { id } = await params;
  return (
    <AppShell title={`แก้ไขใบเสนอราคา ${id}`} subtitle="จัดการ version และ lock quotation ก่อนเปิดโปรเจกต์">
      <CrudForm title="แก้ไขใบเสนอราคา" description="ฟอร์ม mock สำหรับวาง UX CRUD ก่อนต่อ API" fields={fields} />
    </AppShell>
  );
}

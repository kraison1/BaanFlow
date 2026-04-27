import { AppShell } from '@/components/app-shell';
import { CrudForm } from '@/components/crud-form';

const fields = [
  { label: 'ขั้นตอนปัจจุบัน', type: 'select' as const, options: ['รอแบบ', 'รอผลิต', 'ผลิตโครง', 'งานไฟ/ประปา', 'QC', 'รอขนส่ง', 'ติดตั้งหน้างาน', 'ส่งมอบ', 'Warranty'] },
  { label: 'Progress %', type: 'number' as const, placeholder: '42' },
  { label: 'งวดถัดไป', placeholder: 'งวดเริ่มผลิต' },
  { label: 'Update ความคืบหน้า', type: 'textarea' as const, placeholder: 'บันทึกสิ่งที่เสร็จแล้ว ปัญหา และรูปที่ต้องแนบ' },
];

export default async function EditProjectPage({ params }: Readonly<{ params: Promise<{ id: string }> }>) {
  const { id } = await params;
  return (
    <AppShell title={`อัปเดตโปรเจกต์ ${id}`} subtitle="ปรับสถานะงาน ผลิต/ติดตั้ง และข้อมูลที่ลูกค้าจะเห็นใน portal">
      <CrudForm title="อัปเดตโปรเจกต์" description="ฟอร์ม mock สำหรับวาง UX CRUD ก่อนต่อ API" fields={fields} />
    </AppShell>
  );
}

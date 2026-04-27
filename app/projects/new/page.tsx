import { AppShell } from '@/components/app-shell';
import { CrudForm } from '@/components/crud-form';

const fields = [
  { label: 'ชื่อโปรเจกต์', placeholder: 'Khaoyai Cabin Lot A' },
  { label: 'อ้างอิงใบเสนอราคา', placeholder: 'QT-2026-0041' },
  { label: 'วันเริ่มผลิต', type: 'date' as const },
  { label: 'วันติดตั้งเป้าหมาย', type: 'date' as const },
  { label: 'สถานะเริ่มต้น', type: 'select' as const, options: ['รอแบบ', 'รออนุมัติ', 'รอผลิต', 'ผลิตโครง'] },
  { label: 'Note ทีมโครงการ', type: 'textarea' as const, placeholder: 'ข้อจำกัดไซต์งาน / วันนัดหมาย / ผู้ประสานงาน' },
];

export default function NewProjectPage() {
  return (
    <AppShell title="เปิดโปรเจกต์" subtitle="สร้าง project จาก quotation ที่ลูกค้าอนุมัติแล้ว">
      <CrudForm title="ข้อมูลโปรเจกต์" description="ยังเป็น mock form ก่อนเชื่อม quotation และ checklist template" fields={fields} />
    </AppShell>
  );
}

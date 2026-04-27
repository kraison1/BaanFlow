import { AppShell } from '@/components/app-shell';
import { CrudForm } from '@/components/crud-form';

const fields = [
  { label: 'ชื่อแบบบ้าน', placeholder: 'Modern Cabin 36 ตร.ม.' },
  { label: 'สถานะ', type: 'select' as const, options: ['Draft', 'Active', 'Hidden', 'Discontinued'] },
  { label: 'ราคาเริ่มต้น', type: 'number' as const, placeholder: '590000' },
  { label: 'ระยะเวลาผลิตโดยประมาณ', placeholder: '21 วัน' },
  { label: 'หมายเหตุภายใน', type: 'textarea' as const, placeholder: 'ข้อควรระวังของแบบนี้ / option ที่นิยม' },
];

export default async function EditHouseModelPage({ params }: Readonly<{ params: Promise<{ id: string }> }>) {
  const { id } = await params;
  return (
    <AppShell title={`แก้ไขแบบบ้าน ${id}`} subtitle="ปรับข้อมูล catalog, ราคา, สถานะ และ note ภายใน">
      <CrudForm title="แก้ไขแบบบ้าน" description="ฟอร์ม mock สำหรับวาง UX CRUD ก่อนต่อ API" fields={fields} />
    </AppShell>
  );
}

import { AppShell } from '@/components/app-shell';
import { CrudForm } from '@/components/crud-form';

const fields = [
  { label: 'รหัสแบบ', placeholder: 'BF-A01' },
  { label: 'ชื่อแบบบ้าน', placeholder: 'Modern Cabin 36 ตร.ม.' },
  { label: 'ประเภท', type: 'select' as const, options: ['บ้านพัก', 'รีสอร์ท', 'ร้านกาแฟ', 'ออฟฟิศ', 'ห้องน้ำสำเร็จ'] },
  { label: 'ขนาด', placeholder: '6 x 6 ม.' },
  { label: 'พื้นที่ ตร.ม.', type: 'number' as const, placeholder: '36' },
  { label: 'ราคาเริ่มต้น', type: 'number' as const, placeholder: '590000' },
  { label: 'รายละเอียดแบบ', type: 'textarea' as const, placeholder: 'จุดเด่น วัสดุ มาตรฐานงาน และ note สำหรับทีมขาย' },
];

export default function NewHouseModelPage() {
  return (
    <AppShell title="เพิ่มแบบบ้าน" subtitle="สร้างข้อมูลแบบบ้านเพื่อใช้ต่อกับ quotation และ project template">
      <CrudForm title="ข้อมูลแบบบ้าน" description="รอบนี้เป็น frontend mock form ยังไม่บันทึกลง backend" fields={fields} />
    </AppShell>
  );
}

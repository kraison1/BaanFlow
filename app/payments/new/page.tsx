import { AppShell } from '@/components/app-shell';
import { CrudForm } from '@/components/crud-form';

const fields = [
  { label: 'โปรเจกต์', placeholder: 'Khaoyai Cabin Lot A' },
  { label: 'ชื่องวด', type: 'select' as const, options: ['มัดจำ', 'งวดเริ่มผลิต', 'งวดก่อนส่ง', 'งวดส่งมอบ', 'ค่า change order'] },
  { label: 'ยอดเงิน', type: 'number' as const, placeholder: '240000' },
  { label: 'ครบกำหนด', type: 'date' as const },
  { label: 'สถานะ', type: 'select' as const, options: ['Pending', 'Paid', 'Overdue', 'Waived'] },
  { label: 'Note/หลักฐาน', type: 'textarea' as const, placeholder: 'รายละเอียดการโอนหรือไฟล์หลักฐานที่จะ upload ภายหลัง' },
];

export default function NewPaymentPage() {
  return (
    <AppShell title="เพิ่มงวดเงิน" subtitle="สร้าง milestone payment เพื่อใช้ track ยอดค้างรับและ customer portal">
      <CrudForm title="ข้อมูลงวดเงิน" description="ยังเป็น mock form ก่อนต่อ file upload และ backend" fields={fields} />
    </AppShell>
  );
}

import { AppShell } from '@/components/app-shell';
import { CrudForm } from '@/components/crud-form';

const fields = [
  { label: 'ลูกค้า', placeholder: 'ชื่อ lead/customer' },
  { label: 'แบบบ้าน', type: 'select' as const, options: ['Modern Cabin 36 ตร.ม.', 'Garden Cafe 24 ตร.ม.', 'Prefab Office 48 ตร.ม.'] },
  { label: 'จังหวัดติดตั้ง', placeholder: 'นครราชสีมา' },
  { label: 'ส่วนลด', type: 'number' as const, placeholder: '0' },
  { label: 'เงื่อนไขงวดเงิน', type: 'textarea' as const, placeholder: 'มัดจำ 30%, เริ่มผลิต 40%, ก่อนส่ง 20%, ส่งมอบ 10%' },
];

export default function NewQuotationPage() {
  return (
    <AppShell title="สร้างใบเสนอราคา" subtitle="เลือกแบบบ้าน + option เพื่อสร้าง quotation version ใหม่">
      <CrudForm title="ข้อมูลใบเสนอราคา" description="ยังเป็น mock form ก่อนทำ calculator และ PDF generator" fields={fields} />
    </AppShell>
  );
}

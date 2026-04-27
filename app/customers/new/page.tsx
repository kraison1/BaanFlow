import { AppShell } from '@/components/app-shell';
import { CrudForm } from '@/components/crud-form';

const fields = [
  { label: 'ชื่อลูกค้า/บริษัท', placeholder: 'คุณสมชาย รีสอร์ทเขาใหญ่' },
  { label: 'เบอร์/LINE/Email', placeholder: '089-xxx-xxxx' },
  { label: 'ที่มาของ lead', type: 'select' as const, options: ['Website', 'Facebook Lead', 'LINE OA', 'Referral', 'Walk-in'] },
  { label: 'สถานะ', type: 'select' as const, options: ['New Lead', 'Hot Lead', 'Customer', 'Inactive'] },
  { label: 'Note', type: 'textarea' as const, placeholder: 'งบประมาณ จังหวัดติดตั้ง แบบที่สนใจ' },
];

export default function NewCustomerPage() {
  return (
    <AppShell title="เพิ่มลูกค้า" subtitle="เก็บข้อมูล lead/customer เพื่อผูกกับ quotation และ customer portal">
      <CrudForm title="ข้อมูลลูกค้า" description="ยังเป็น mock form ก่อนทำ auth/customer portal" fields={fields} />
    </AppShell>
  );
}

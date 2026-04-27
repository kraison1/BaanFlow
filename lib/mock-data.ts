export type StatusTone = 'draft' | 'active' | 'warning' | 'success' | 'danger' | 'neutral';

export type NavItem = {
  href: string;
  label: string;
  description: string;
};

export const navItems: NavItem[] = [
  { href: '/dashboard', label: 'Dashboard', description: 'ภาพรวมงานขายและโปรเจกต์' },
  { href: '/house-models', label: 'แบบบ้าน', description: 'catalog, files, options' },
  { href: '/quotations', label: 'ใบเสนอราคา', description: 'version และ approval' },
  { href: '/projects', label: 'โปรเจกต์', description: 'ผลิต ติดตั้ง ส่งมอบ' },
  { href: '/customers', label: 'ลูกค้า', description: 'lead และ customer portal' },
  { href: '/payments', label: 'งวดเงิน', description: 'มัดจำ ค้างจ่าย หลักฐาน' },
];

export const metrics = [
  { label: 'แบบบ้าน Active', value: '24', caption: '+3 แบบใหม่เดือนนี้' },
  { label: 'Quotation เปิดอยู่', value: '18', caption: 'มูลค่า 6.4M THB' },
  { label: 'โปรเจกต์กำลังผลิต/ติดตั้ง', value: '9', caption: '2 งานใกล้ส่งมอบ' },
  { label: 'งวดเงินค้างรับ', value: '1.2M', caption: '5 milestone pending' },
];

export const houseModels = [
  {
    id: 'BF-A01',
    name: 'Modern Cabin 36 ตร.ม.',
    type: 'บ้านพัก',
    size: '6 x 6 ม.',
    basePrice: '590,000',
    status: 'Active',
    tone: 'active' as StatusTone,
    updatedAt: '27 เม.ย. 2026',
  },
  {
    id: 'BF-C02',
    name: 'Garden Cafe 24 ตร.ม.',
    type: 'ร้านกาแฟ',
    size: '4 x 6 ม.',
    basePrice: '420,000',
    status: 'Draft',
    tone: 'draft' as StatusTone,
    updatedAt: '26 เม.ย. 2026',
  },
  {
    id: 'BF-O07',
    name: 'Prefab Office 48 ตร.ม.',
    type: 'ออฟฟิศ',
    size: '6 x 8 ม.',
    basePrice: '790,000',
    status: 'Active',
    tone: 'active' as StatusTone,
    updatedAt: '25 เม.ย. 2026',
  },
];

export const quotations = [
  {
    id: 'QT-2026-0041',
    customer: 'คุณสมชาย รีสอร์ทเขาใหญ่',
    model: 'Modern Cabin 36 ตร.ม.',
    version: 'v3',
    amount: '742,000',
    status: 'Sent',
    tone: 'warning' as StatusTone,
  },
  {
    id: 'QT-2026-0040',
    customer: 'The Palm Cafe',
    model: 'Garden Cafe 24 ตร.ม.',
    version: 'v1',
    amount: '498,000',
    status: 'Accepted',
    tone: 'success' as StatusTone,
  },
  {
    id: 'QT-2026-0038',
    customer: 'บริษัท เอ็นที โฮลดิ้ง',
    model: 'Prefab Office 48 ตร.ม.',
    version: 'v2',
    amount: '920,000',
    status: 'Draft',
    tone: 'draft' as StatusTone,
  },
];

export const projects = [
  {
    id: 'PJ-2604-009',
    name: 'Khaoyai Cabin Lot A',
    customer: 'คุณสมชาย รีสอร์ทเขาใหญ่',
    stage: 'ผลิตโครง',
    progress: '42%',
    nextMilestone: 'งวดเริ่มผลิต',
    tone: 'warning' as StatusTone,
  },
  {
    id: 'PJ-2604-008',
    name: 'The Palm Cafe Booth',
    customer: 'The Palm Cafe',
    stage: 'รอขนส่ง',
    progress: '78%',
    nextMilestone: 'งวดก่อนส่ง',
    tone: 'active' as StatusTone,
  },
  {
    id: 'PJ-2603-021',
    name: 'Site Office Rayong',
    customer: 'บริษัท เอ็นที โฮลดิ้ง',
    stage: 'Warranty',
    progress: '100%',
    nextMilestone: 'หลังส่งมอบ',
    tone: 'success' as StatusTone,
  },
];

export const customers = [
  {
    id: 'CUS-0017',
    name: 'คุณสมชาย รีสอร์ทเขาใหญ่',
    contact: '089-xxx-1144',
    source: 'Facebook Lead',
    status: 'Hot Lead',
    tone: 'warning' as StatusTone,
  },
  {
    id: 'CUS-0013',
    name: 'The Palm Cafe',
    contact: 'LINE: @thepalm',
    source: 'Website',
    status: 'Customer',
    tone: 'success' as StatusTone,
  },
  {
    id: 'CUS-0008',
    name: 'บริษัท เอ็นที โฮลดิ้ง',
    contact: 'sales@ntholding.example',
    source: 'Referral',
    status: 'Customer',
    tone: 'success' as StatusTone,
  },
];

export const payments = [
  {
    id: 'PAY-0044',
    project: 'Khaoyai Cabin Lot A',
    milestone: 'งวดเริ่มผลิต',
    amount: '240,000',
    dueDate: '30 เม.ย. 2026',
    status: 'Pending',
    tone: 'warning' as StatusTone,
  },
  {
    id: 'PAY-0042',
    project: 'The Palm Cafe Booth',
    milestone: 'มัดจำ',
    amount: '149,400',
    dueDate: '25 เม.ย. 2026',
    status: 'Paid',
    tone: 'success' as StatusTone,
  },
  {
    id: 'PAY-0039',
    project: 'Site Office Rayong',
    milestone: 'งวดส่งมอบ',
    amount: '184,000',
    dueDate: '20 เม.ย. 2026',
    status: 'Overdue',
    tone: 'danger' as StatusTone,
  },
];

import { AppShell } from '@/components/app-shell';
import { TableCard } from '@/components/table-card';
import { houseModels } from '@/lib/mock-data';

export default function HouseModelsPage() {
  return (
    <AppShell
      title="แบบบ้าน"
      subtitle="จัดการ catalog แบบบ้าน ไฟล์แบบ รูปภาพ ราคาเริ่มต้น และสถานะการขาย"
      actionHref="/house-models/new"
      actionLabel="เพิ่มแบบบ้าน"
    >
      <TableCard
        editBasePath="/house-models"
        rows={houseModels}
        columns={[
          { key: 'id', label: 'รหัสแบบ' },
          { key: 'name', label: 'ชื่อแบบบ้าน' },
          { key: 'type', label: 'ประเภท' },
          { key: 'size', label: 'ขนาด' },
          { key: 'basePrice', label: 'ราคาเริ่มต้น' },
          { key: 'status', label: 'สถานะ' },
        ]}
      />
    </AppShell>
  );
}

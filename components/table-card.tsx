import Link from 'next/link';
import { StatusBadge } from './status-badge';
import type { StatusTone } from '@/lib/mock-data';

type Row = Record<string, string | StatusTone> & { id: string; status?: string; tone?: StatusTone };

export function TableCard({ columns, rows, editBasePath }: Readonly<{
  columns: { key: string; label: string }[];
  rows: Row[];
  editBasePath: string;
}>) {
  return (
    <div className="table-card">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => {
                const value = row[column.key];
                if (column.key === 'status' && typeof value === 'string') {
                  return (
                    <td key={column.key}>
                      <StatusBadge tone={row.tone}>{value}</StatusBadge>
                    </td>
                  );
                }
                return <td key={column.key}>{String(value ?? '-')}</td>;
              })}
              <td>
                <Link className="text-link" href={`${editBasePath}/${row.id}/edit`}>
                  แก้ไข
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

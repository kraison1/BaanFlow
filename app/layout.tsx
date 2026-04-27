import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://baanflow.com'),
  title: {
    default: 'ระบบบ้านน็อคดาวน์ ออกใบเสนอราคาและคุมโปรเจกต์ | BaanFlow',
    template: '%s | BaanFlow',
  },
  description:
    'BaanFlow ช่วยบริษัทบ้านน็อคดาวน์จัดการแบบบ้าน ออกใบเสนอราคา คุมงานติดตั้ง งวดเงิน และส่งสถานะให้ลูกค้าในระบบเดียว',
  openGraph: {
    title: 'BaanFlow — ระบบจัดการบ้านน็อคดาวน์',
    description:
      'อัปโหลดแบบบ้าน ตั้งราคา option ออกใบเสนอราคา เปิดโปรเจกต์ และให้ลูกค้าติดตามสถานะงานได้ในระบบเดียว',
    url: 'https://baanflow.com',
    siteName: 'BaanFlow',
    locale: 'th_TH',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}

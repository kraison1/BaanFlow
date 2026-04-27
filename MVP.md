# BaanFlow MVP

## MVP Name
**Prefab Home Sales & Project Tracker**

## MVP Objective
ช่วยบริษัทบ้านน็อคดาวน์จัดการแบบบ้าน ออกใบเสนอราคา คุมสถานะผลิต/ติดตั้ง เก็บงวดเงิน และให้ลูกค้าดูความคืบหน้าได้ในระบบเดียว

## Core Workflow
1. Admin/ทีมงานอัปโหลดแบบบ้าน
2. เซลส์เลือกแบบบ้าน + option + จังหวัดติดตั้ง
3. ระบบคำนวณราคาและออก quotation
4. ลูกค้า/เซลส์อนุมัติ quotation version ที่ใช้จริง
5. ระบบเปิด project จาก quotation
6. ทีมงาน track งานผลิต/ติดตั้งด้วย checklist/status
7. ระบบ track payment milestones
8. ลูกค้าเข้าดูสถานะ รูปความคืบหน้า เอกสาร และยอดที่ต้องจ่าย
9. หลังส่งมอบ เปิด warranty/after-sales ticket ได้

## Must-have Features v1

### 1. House Model Catalog
- เพิ่ม/แก้ไข/ซ่อนแบบบ้าน
- ชื่อแบบบ้านและรหัสแบบ เช่น `BF-A01`
- ประเภท: บ้านพัก, รีสอร์ท, ร้านกาแฟ, ออฟฟิศ, ห้องน้ำสำเร็จ
- ขนาด กว้าง x ยาว, พื้นที่ ตร.ม., จำนวนห้อง/ห้องน้ำ
- ราคาตั้งต้น
- ระยะเวลาผลิตโดยประมาณ
- รูปหน้าปกและ gallery
- สถานะ: Draft, Active, Hidden, Discontinued

### 2. Model File Upload
- PDF แบบแปลน
- รูป render
- รูปหน้างานจริง
- ไฟล์ CAD/SketchUp สำหรับทีมภายใน
- Version file: v1, v2, v3

### 3. Options & Price Calculator
- Option เช่น ห้องน้ำ, ครัว, ระเบียง, หลังคา, ผนัง, ฉนวน, ไฟ, ประปา, สุขภัณฑ์
- แต่ละ option มี price, estimated cost, lead time impact
- ค่าขนส่ง/ติดตั้งตามจังหวัดหรือโซน
- แยก base price / option / transport / installation / discount

### 4. Quotation Generator
- สร้างใบเสนอราคาจากแบบบ้าน + option
- Quotation version: v1, v2, v3
- สถานะ: Draft, Sent, Accepted, Rejected, Expired
- Lock quotation version เมื่ออนุมัติก่อนผลิต
- Export/share PDF

### 5. Project Tracker
- เปิด project จาก accepted quotation
- สถานะหลัก:
  - รอแบบ
  - รออนุมัติ
  - รอผลิต
  - ผลิตโครง
  - งานไฟ/ประปา
  - QC
  - รอขนส่ง
  - ติดตั้งหน้างาน
  - ส่งมอบ
  - Warranty
- Checklist ตาม template ของแบบบ้าน
- Upload รูปความคืบหน้า

### 6. Payment Milestones
- มัดจำ
- งวดเริ่มผลิต
- งวดก่อนส่ง
- งวดส่งมอบ
- สถานะ: Pending, Paid, Overdue, Waived
- เก็บหลักฐานการชำระเงิน

### 7. Basic Cost Tracking
- วัสดุ
- ค่าแรง
- ค่าขนส่ง
- ค่าเช่ารถ/เครน
- ค่าแก้งาน
- กำไรประมาณการต่อ project

### 8. Customer Portal
- ลูกค้าดูสถานะ project
- ดูรูปความคืบหน้า
- ดู quotation/receipt/basic documents
- ดู milestone payment ที่จ่ายแล้ว/ค้างจ่าย
- แจ้งปัญหาหลังส่งมอบแบบง่าย

## Should-have v1.1
- Public catalog / mini landing page สำหรับโชว์แบบบ้าน
- Lead form: ขอใบเสนอราคา
- Clone แบบบ้านเป็น custom version สำหรับลูกค้าเฉพาะราย
- Change order สำหรับเพิ่ม/แก้ option หลังอนุมัติ
- LINE notification
- Warranty ticket พร้อมรูปปัญหา

## Out of Scope v1
- Full accounting / GL / closing financial statements
- e-Tax submission
- Full payroll compliance
- Complex procurement and inventory
- Multi-company
- Advanced approval workflow
- Marketplace for multiple vendors

## Early Pricing Hypothesis
- SaaS: 1,990–4,990 THB/month if workflow value is clear
- Setup + monthly: setup 20,000–80,000 THB + monthly 1,990+ THB
- Need validate by interviewing knockdown home operators before final pricing

## Definition of MVP Success
- A company can upload at least 10 house models
- Sales can create quotation from model + options in under 5 minutes
- Project can be opened from accepted quotation without re-entering data
- Customer can view project status and payment milestones without asking sales/admin
- Owner can see estimated profit per house/project

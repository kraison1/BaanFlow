const features = [
  {
    title: 'จัดการแบบบ้าน',
    description: 'อัปโหลดรูป, PDF, ไฟล์แบบ และจัด version ของแบบบ้านให้ทีมขายใช้ข้อมูลเดียวกัน',
  },
  {
    title: 'ออกใบเสนอราคาเร็ว',
    description: 'เลือกแบบบ้าน เพิ่ม option ค่าขนส่ง ค่าติดตั้ง และสร้าง quotation version ได้ทันที',
  },
  {
    title: 'คุมงานหลังขาย',
    description: 'เปิดโปรเจกต์จากใบเสนอราคา ติดตามผลิต ติดตั้ง ส่งมอบ งวดเงิน และรูปความคืบหน้า',
  },
];

const workflow = [
  'Upload แบบบ้าน',
  'เลือก option และคำนวณราคา',
  'ออกใบเสนอราคา',
  'เปิดโปรเจกต์',
  'ติดตามผลิต/ติดตั้ง',
  'ส่งมอบและรับประกัน',
];

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <nav className="nav" aria-label="Main navigation">
          <strong>BaanFlow</strong>
          <a href="#mvp">MVP</a>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="eyebrow">Prefab & Knockdown Home Software</p>
            <h1>ระบบจัดการแบบบ้าน ใบเสนอราคา และงานติดตั้งบ้านน็อคดาวน์</h1>
            <p className="hero-copy">
              BaanFlow ช่วยทีมขายและทีมโครงการทำงานจากข้อมูลชุดเดียว ตั้งแต่แบบบ้าน ราคา option ใบเสนอราคา
              งวดเงิน รูปความคืบหน้า ไปจนถึง customer portal สำหรับลูกค้า
            </p>
            <div className="actions">
              <a className="button primary" href="mailto:hello@baanflow.com">
                ขอเดโม
              </a>
              <a className="button secondary" href="#workflow">
                ดู workflow
              </a>
            </div>
          </div>

          <div className="hero-card" aria-label="BaanFlow MVP summary">
            <span className="card-label">MVP Focus</span>
            <h2>Upload แบบบ้าน → Quote → Project</h2>
            <p>
              เริ่มจาก pain ที่สำคัญที่สุด: แบบบ้านกระจัดกระจาย ราคา option หลุด version ใบเสนอราคาไม่ชัด
              และลูกค้าต้องถามสถานะงานผ่าน LINE ตลอด
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="mvp">
        <p className="eyebrow">Core Features</p>
        <h2>ฟีเจอร์ v1 ที่ต้องมี</h2>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section workflow" id="workflow">
        <p className="eyebrow">Workflow</p>
        <h2>เส้นทางงานตั้งแต่ขายจนส่งมอบ</h2>
        <ol>
          {workflow.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}

export default function Home() {
  return (
    <div style={{ padding: '40px 20px' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4">ยินดีต้อนรับ</h1>
            <p className="lead">
              นี่คือหน้าเทมเพลตที่สร้างด้วย Next.js 16, Bootstrap 5 และมี Navbar และ Footer component
            </p>
            <p>
              แนวทางการใช้งาน:
            </p>
            <ul>
              <li>Navbar และ Footer อยู่ใน layout.tsx เพื่อให้แสดงผลในทุกหน้า</li>
              <li>โลโก้และเมนูอยู่ใน Navbar component</li>
              <li>ข้อความลิขสิทธิ์อยู่ใน Footer component</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

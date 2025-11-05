'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      <main style={{ flex: 1, padding: '40px 20px' }}>
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
                <li>Navbar และ Footer เป็น reusable components ที่สามารถนำไปใช้ในหน้าอื่น ๆ ได้</li>
                <li>โลโก้และเมนูอยู่ใน Navbar component</li>
                <li>ข้อความลิขสิทธิ์อยู่ใน Footer component</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

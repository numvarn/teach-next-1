'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      <main style={{ flex: 1, padding: '40px 20px' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="mb-4">เกี่ยวกับเรา</h1>
              <p className="lead">
                ส่วนนี้สำหรับแสดงข้อมูลเกี่ยวกับองค์กร บริษัท หรือเป้าหมายของเว็บไซต์
              </p>
              <p>
                คุณสามารถแทนที่เนื้อหานี้ด้วยข้อมูลของคุณเองได้
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

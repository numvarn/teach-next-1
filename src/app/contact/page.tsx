export default function Contact() {
  return (
    <div style={{ padding: '40px 20px' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4">ติดต่อเรา</h1>
            <p className="lead">
              สำหรับการติดต่อหรือข้อเสนอแนะ กรุณาใช้แบบฟอร์มด้านล่าง
            </p>
            <form className="mt-4">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  ชื่อ
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="กรุณากรอกชื่อของคุณ"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  อีเมล
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="กรุณากรอกอีเมลของคุณ"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  ข้อความ
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={5}
                  placeholder="กรุณากรอกข้อความของคุณ"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                ส่งข้อความ
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

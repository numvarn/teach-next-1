'use client';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light py-4 mt-5 border-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0 text-muted">
              © {currentYear} phisan sookkhee. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

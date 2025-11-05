'use client';

import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo on the left */}
        <Link className="navbar-brand" href="/">
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#0066cc' }}>
            LOGO
          </span>
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu items on the right */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" href="/">
                หน้าแรก
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                เกี่ยวกับเรา
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                ติดต่อเรา
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

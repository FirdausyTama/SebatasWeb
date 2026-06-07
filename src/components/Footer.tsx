import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div>
            <Link href="/" className="footer-brand-logo">
              sebatas<span>web</span>
            </Link>
            <p className="footer-desc">
              Jasa pembuatan website profesional dan kustom yang berfokus pada kecepatan, estetika visual, keamanan, dan fungsionalitas bisnis optimal.
            </p>
          </div>

          {/* Column 2: Sosial Media */}
          <div>
            <h4 className="footer-title">Sosial Media</h4>
            <ul className="footer-links">
              <li className="footer-link-item">
                <a href="https://instagram.com/sebatasweb" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
              </li>
              <li className="footer-link-item">
                <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link">TikTok</a>
              </li>
              <li className="footer-link-item">
                <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link">Threads</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Hubungi Kami */}
          <div>
            <h4 className="footer-title">Hubungi Kami</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <a href="mailto:sebatasweb@gmail.com" className="footer-contact-link">
                  <svg className="footer-contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>sebatasweb@gmail.com</span>
                </a>
              </div>
              <div className="footer-contact-item">
                <a href="tel:+6282150224691" className="footer-contact-link">
                  <svg className="footer-contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+62 821-5022-4691</span>
                </a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-link no-hover">
                  <svg className="footer-contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Yogyakarta, ID</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} SebatasWeb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

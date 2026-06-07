"use client";

import "./tentang.css";

export default function TentangSection() {
  return (
    <section className="why-section" id="tentang">
      <div className="container">
        <div className="why-header scroll-reveal">
          <span className="section-tag why-tag">Mengapa SebatasWeb?</span>
          <h2 className="section-title">Bukan Sekadar Bikin Website, Kami Bangun Bisnis Anda</h2>
          <p className="section-subtitle">
            Jangan biarkan pelanggan kabur karena website lambat atau kaku. Kami bangun website super cepat, aman, dan siap tingkatkan omzet bisnis Anda.
          </p>
        </div>

        <div className="why-features scroll-reveal">
          {/* Feature 1 */}
          <div className="why-feature-item">
            <div className="why-feature-icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
              </svg>
            </div>
            <div>
              <h4 className="why-feature-title">Wusss! Loading Super Cepat</h4>
              <p className="why-feature-desc">
                Website ngebut tanpa loading lama. Pengunjung betah, dan website Anda lebih mudah masuk halaman pertama Google.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="why-feature-item">
            <div className="why-feature-icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <div>
              <h4 className="why-feature-title">Anti-Hack & Aman Banget</h4>
              <p className="why-feature-desc">
                Standar keamanan tertinggi untuk melindungi data pelanggan dan bisnis Anda dari berbagai serangan siber.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="why-feature-item">
            <div className="why-feature-icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
              </svg>
            </div>
            <div>
              <h4 className="why-feature-title">Terima Beres, Kami Temani Terus</h4>
              <p className="why-feature-desc">
                Bebas pusing teknis. Mulai dari desain UI/UX hingga website online, serahkan semuanya kepada tim ahli kami.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="why-feature-item">
            <div className="why-feature-icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
            </div>
            <div>
              <h4 className="why-feature-title">Developer Tersertifikasi Resmi</h4>
              <p className="why-feature-desc">
                Ditangani langsung oleh web developer bersertifikasi nasional dan internasional. Kualitas project Anda terjamin maksimal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

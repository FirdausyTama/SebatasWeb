"use client";

import "./portofolio.css";

export default function PortofolioSection() {
  return (
    <section className="portfolio-section" id="portofolio">
      <div className="container">
        <div className="section-header scroll-reveal">
          <span className="section-tag">Karya Kami</span>
          <h2 className="section-title">Portofolio Website Terbaru</h2>
          <p className="section-subtitle">
            Lihat beberapa proyek website yang berhasil kami bangun untuk mendongkrak penjualan dan profesionalitas klien-klien kami.
          </p>
        </div>

        <div className="portfolio-grid">
          {/* Portfolio 1 */}
          <div className="portfolio-card scroll-reveal reveal-delay-1">
            <div className="portfolio-img-container">
              <svg width="100%" height="100%" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="220" fill="#7c2d12" />
                <circle cx="200" cy="110" r="60" fill="#ea580c" opacity="0.6" />
                <rect x="100" y="80" width="200" height="60" rx="8" fill="#ffffff" opacity="0.15" />
                <text x="50%" y="53%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontWeight="800" fontSize="22">Kopi Nusantara</text>
              </svg>
            </div>
            <div className="portfolio-info">
              <span className="portfolio-category">E-Commerce</span>
              <h3 className="portfolio-title">Kopi Nusantara E-Store</h3>
              <p className="portfolio-desc">
                Toko online modern khusus biji kopi nusantara dengan integrasi e-wallet, kurir lokal otomatis, dan diskon promo.
              </p>
              <div className="portfolio-tech">
                <span className="portfolio-tag">Next.js</span>
                <span className="portfolio-tag">Tailwind</span>
                <span className="portfolio-tag">Postgres</span>
              </div>
            </div>
          </div>

          {/* Portfolio 2 */}
          <div className="portfolio-card scroll-reveal reveal-delay-2">
            <div className="portfolio-img-container">
              <svg width="100%" height="100%" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="220" fill="#0f172a" />
                <path d="M0 220 L 150 100 L 250 160 L 400 60 L 400 220 Z" fill="#1e293b" />
                <path d="M0 220 L 150 120 L 250 170 L 400 90 L 400 220 Z" fill="#ea580c" opacity="0.3" />
                <text x="50%" y="53%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontWeight="800" fontSize="22">Langgeng Cargo</text>
              </svg>
            </div>
            <div className="portfolio-info">
              <span className="portfolio-category">Company Profile</span>
              <h3 className="portfolio-title">Langgeng Cargo Logistik</h3>
              <p className="portfolio-desc">
                Website profil perusahaan logistik ekspor-impor internasional lengkap dengan fitur cek resi dan kalkulator tarif otomatis.
              </p>
              <div className="portfolio-tech">
                <span className="portfolio-tag">React.js</span>
                <span className="portfolio-tag">Laravel</span>
                <span className="portfolio-tag">Tailwind</span>
              </div>
            </div>
          </div>

          {/* Portfolio 3 */}
          <div className="portfolio-card scroll-reveal reveal-delay-3">
            <div className="portfolio-img-container">
              <svg width="100%" height="100%" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="220" fill="#9a3412" />
                <polygon points="200,40 300,160 100,160" fill="#c2410c" opacity="0.6" />
                <circle cx="200" cy="110" r="30" fill="#ea580c" />
                <text x="50%" y="53%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontWeight="800" fontSize="22">EduPintar SaaS</text>
              </svg>
            </div>
            <div className="portfolio-info">
              <span className="portfolio-category">Web Application</span>
              <h3 className="portfolio-title">EduPintar Learning Portal</h3>
              <p className="portfolio-desc">
                Portal web e-learning interaktif kelas online berbayar dengan ujian modul real-time dan generator sertifikat PDF otomatis.
              </p>
              <div className="portfolio-tech">
                <span className="portfolio-tag">Vue.js</span>
                <span className="portfolio-tag">Postgres</span>
                <span className="portfolio-tag">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

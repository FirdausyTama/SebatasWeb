"use client";

import "./harga.css";

export default function HargaSection() {
  return (
    <section className="services-section" id="harga">
      <div className="container">
        <div className="section-header scroll-reveal">
          <span className="section-tag">Daftar Harga</span>
          <h2 className="section-title">Pilihan Paket Harga Website</h2>
          <p className="section-subtitle">
            Pilih paket harga terbaik yang sesuai dengan skala kebutuhan bisnis Anda. Semua paket memiliki jaminan keamanan dan responsif.
          </p>
        </div>

        <div className="services-grid">
          {/* Card 1: Landing Page */}
          <div className="service-card scroll-reveal reveal-delay-1">
            <span className="pricing-badge">Basic</span>
            <h3 className="service-title" style={{ marginTop: "8px" }}>Paket Dasar</h3>
            <div className="pricing-header">
              <span className="pricing-start-from">Mulai dari</span>
              <span className="pricing-original-price">Rp 1,2 Juta</span>
              <div className="pricing-price">
                <span className="pricing-amount">Rp 750 Ribu</span>
              </div>
            </div>
            <p className="service-description" style={{ minHeight: "auto", marginBottom: "20px" }}>
              Satu halaman website, cocok untuk UMKM, portofolio, acara, landing page, dan lainnya.
            </p>
            <ul className="pricing-features">
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>1 Halaman Utama Custom</span>
              </li>
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Integrasi WhatsApp Chat</span>
              </li>
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>SEO (muncul di Google)</span>
              </li>
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Domain (my.id) 1 Tahun</span>
              </li>
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Cloud Hosting Unlimited</span>
              </li>
            </ul>
            <a href="https://wa.me/6282150224691?text=Halo%20SebatasWeb,%20saya%20tertarik%20dengan%20Paket%20Landing%20Page" className="btn btn-primary" style={{ width: "100%", marginTop: "auto" }} target="_blank" rel="noopener noreferrer">
              Pesan Sekarang
            </a>
          </div>

          {/* Card 2: Company Profile */}
          <div className="service-card scroll-reveal reveal-delay-2">
            <span className="pricing-badge">Populer</span>
            <h3 className="service-title" style={{ marginTop: "8px" }}>Paket Pro</h3>
            <div className="pricing-header">
              <span className="pricing-start-from">Mulai dari</span>
              <span className="pricing-original-price">Rp 2,3 Juta</span>
              <div className="pricing-price">
                <span className="pricing-amount">Rp 1,8 Juta</span>
              </div>
            </div>
            <p className="service-description" style={{ minHeight: "auto", marginBottom: "20px" }}>
              Cocok untuk profile bisnis, organisasi, company profile, dll.
            </p>
            <ul className="pricing-features">
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Hingga 5 Halaman Utama</span>
              </li>
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>SEO (muncul di Google)</span>
              </li>
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Admin Panel / CMS (Edit Konten)</span>
              </li>
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Kontak Form & Google Maps</span>
              </li>
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Domain (.com) & Hosting Unlimited 1 Tahun</span>
              </li>
            </ul>
            <a href="https://wa.me/6282150224691?text=Halo%20SebatasWeb,%20saya%20tertarik%20dengan%20Paket%20Company%20Profile" className="btn btn-primary" style={{ width: "100%", marginTop: "auto" }} target="_blank" rel="noopener noreferrer">
              Pesan Sekarang
            </a>
          </div>

          {/* Card 3: Toko Online */}
          <div className="service-card scroll-reveal reveal-delay-3">
            <span className="pricing-badge">Best Value</span>
            <h3 className="service-title" style={{ marginTop: "8px" }}>Paket Premium</h3>
            <div className="pricing-header">
              <span className="pricing-start-from">Mulai dari</span>
              <span className="pricing-original-price">Rp 4,2 Juta</span>
              <div className="pricing-price">
                <span className="pricing-amount">Rp 3,8 Juta</span>
              </div>
            </div>
            <p className="service-description" style={{ minHeight: "auto", marginBottom: "20px" }}>
              Cocok untuk toko online, manajemen inventaris, transaksi online, dll.
            </p>
            <ul className="pricing-features">
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Produk Tidak Terbatas</span>
              </li>
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>SEO (muncul di Google)</span>
              </li>
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Sistem Keranjang & Checkout</span>
              </li>
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Cek Ongkir Kurir Otomatis</span>
              </li>
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Integrasi Payment Gateway</span>
              </li>
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Domain (.com) & Hosting Unlimited 1 Tahun</span>
              </li>
            </ul>
            <a href="https://wa.me/6282150224691?text=Halo%20SebatasWeb,%20saya%20tertarik%20dengan%20Paket%20Toko%20Online" className="btn btn-primary" style={{ width: "100%", marginTop: "auto" }} target="_blank" rel="noopener noreferrer">
              Pesan Sekarang
            </a>
          </div>

          {/* Card 4: Custom Website */}
          <div className="service-card service-card-highlight scroll-reveal reveal-delay-4">
            <span className="pricing-badge">Eksklusif</span>
            <h3 className="service-title" style={{ marginTop: "8px" }}>Custom Website</h3>
            <div className="pricing-header">
              <span className="pricing-start-from">Mulai dari</span>
              <span className="pricing-original-price">Rp 0</span>
              <div className="pricing-price">
                <span className="pricing-amount">Harga Khusus</span>
              </div>
              <span className="pricing-renewal">Diskusi & negosiasi</span>
            </div>
            <p className="service-description" style={{ minHeight: "auto", marginBottom: "20px" }}>
              Aplikasi web kustom, sistem informasi SaaS, portal, sistem kasir, dll.
            </p>
            <ul className="pricing-features">
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Desain Kustom UI/UX Mandiri</span>
              </li>
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Performa Optimal</span>
              </li>
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>SEO (muncul di Google)</span>
              </li>
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Bebas Kustomisasi Fitur</span>
              </li>
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Maintenance Premium 3 Bulan</span>
              </li>
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Domain (.com) & Hosting Unlimited 1 Tahun</span>
              </li>
            </ul>
            <a href="https://wa.me/6282150224691?text=Halo%20SebatasWeb,%20saya%20tertarik%20dengan%20Paket%20Custom%20Website" className="btn btn-primary" style={{ width: "100%", marginTop: "auto" }} target="_blank" rel="noopener noreferrer">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

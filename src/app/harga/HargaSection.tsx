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
            <span className="pricing-badge">Paket Dasar</span>
            <h3 className="service-title" style={{ marginTop: "8px" }}>Landing Page</h3>
            <div className="pricing-price">
              <span className="pricing-amount">Rp 999.000</span>
              <span className="pricing-period"> / paket</span>
            </div>
            <p className="service-description" style={{ minHeight: "auto", marginBottom: "20px" }}>
              Satu halaman berkonversi tinggi, cocok untuk kampanye pemasaran cepat.
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
            <h3 className="service-title" style={{ marginTop: "8px" }}>Company Profile</h3>
            <div className="pricing-price">
              <span className="pricing-amount">Rp 1.899.000</span>
              <span className="pricing-period"> / paket</span>
            </div>
            <p className="service-description" style={{ minHeight: "auto", marginBottom: "20px" }}>
              Kredibilitas bisnis formal dengan profil, visi, dan layanan terpercaya.
            </p>
            <ul className="pricing-features">
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Hingga 5 Halaman Utama</span>
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
                <span>Domain & Hosting 1 Tahun</span>
              </li>
            </ul>
            <a href="https://wa.me/6282150224691?text=Halo%20SebatasWeb,%20saya%20tertarik%20dengan%20Paket%20Company%20Profile" className="btn btn-primary" style={{ width: "100%", marginTop: "auto" }} target="_blank" rel="noopener noreferrer">
              Pesan Sekarang
            </a>
          </div>

          {/* Card 3: Toko Online */}
          <div className="service-card scroll-reveal reveal-delay-3">
            <span className="pricing-badge">Bisnis</span>
            <h3 className="service-title" style={{ marginTop: "8px" }}>Toko Online</h3>
            <div className="pricing-price">
              <span className="pricing-amount">Rp 2.999.000</span>
              <span className="pricing-period"> / paket</span>
            </div>
            <p className="service-description" style={{ minHeight: "auto", marginBottom: "20px" }}>
              E-commerce fungsional lengkap dengan integrasi kurir & payment gateway.
            </p>
            <ul className="pricing-features">
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Produk Tidak Terbatas</span>
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
            </ul>
            <a href="https://wa.me/6282150224691?text=Halo%20SebatasWeb,%20saya%20tertarik%20dengan%20Paket%20Toko%20Online" className="btn btn-primary" style={{ width: "100%", marginTop: "auto" }} target="_blank" rel="noopener noreferrer">
              Pesan Sekarang
            </a>
          </div>

          {/* Card 4: Custom Website */}
          <div className="service-card scroll-reveal reveal-delay-4">
            <span className="pricing-badge">Eksklusif</span>
            <h3 className="service-title" style={{ marginTop: "8px" }}>Custom Website</h3>
            <div className="pricing-price">
              <span className="pricing-amount">Custom</span>
              <span className="pricing-period"> / proyek</span>
            </div>
            <p className="service-description" style={{ minHeight: "auto", marginBottom: "20px" }}>
              Aplikasi web kustom, sistem informasi SaaS, portal, atau integrasi database rumit.
            </p>
            <ul className="pricing-features">
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Desain Kustom UI/UX Mandiri</span>
              </li>
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Next.js / Laravel API Stack</span>
              </li>
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Keamanan Enkripsi Lanjutan</span>
              </li>
              <li className="pricing-feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Maintenance Premium 3 Bulan</span>
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

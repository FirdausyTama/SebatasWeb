"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPromoVisible, setIsPromoVisible] = useState(true);

  // Handle header background styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Decorative background elements */}
      <div className="bg-stripes">
        <div className="stripe stripe-1"></div>
        <div className="stripe stripe-2"></div>
        <div className="stripe stripe-3"></div>
      </div>

      {/* Header / Navigation */}
      <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
        <div className="container header-container">
          <a href="#" className="logo" id="brand-logo">
            <span className="logo-bold">sebatas</span>
            <span className="logo-light">web</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-nav-toggle"
            aria-label="Toggle navigation"
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              document.body.classList.toggle("nav-lock-scroll");
            }}
          >
            <span className="hamburger"></span>
          </button>

          {/* Navigation Links */}
          <nav
            className={`nav-menu ${isMenuOpen ? "nav-opened" : ""}`}
            id="primary-navigation"
          >
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#tentang" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  Tentang Kami
                </a>
              </li>
              <li className="nav-item">
                <a href="#portofolio" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  Portofolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#harga" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  Harga
                </a>
              </li>
              <li className="nav-item">
                <a href="#kontak" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  Kontak
                </a>
              </li>
            </ul>
          </nav>

          {/* CTA Header Button */}
          <div className="header-cta">
            <a href="#kontak" className="btn btn-outline" id="header-cta-btn">
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container hero-container">
            {/* Left Column: Content */}
            <div className="hero-content">
              <h1 className="hero-title">
                <span className="text-purple">Jasa Pembuatan</span>
                <span className="text-purple">Website Profesional</span>
                <span className="text-dark">Untuk Bisnis Kamu</span>
              </h1>

              <p className="hero-description">
                Kami menyediakan jasa pembuatan website profesional yang modern,
                cepat, dan responsif untuk mengembangkan bisnismu, serta
                mendukung penuh dari desain hingga deploy agar websitemu selalu
                optimal.
              </p>

              {/* Hero CTA Buttons */}
              <div className="hero-action">
                <a href="#kontak" className="btn btn-primary" id="hero-cta-btn">
                  <span>Konsultasi Gratis</span>
                  <svg
                    className="arrow-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="#portofolio" className="btn btn-outline">
                  Lihat Karya Kami
                </a>
              </div>

              {/* Tech Stack / Integrations */}
              <div className="tech-stack">
                {/* Vue.js */}
                <div className="tech-item" id="tech-vue">
                  <svg
                    className="tech-icon"
                    viewBox="0 0 256 221"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M204.8 0H256L128 220.8L0 0h97.9L128 51.4L158.1 0h46.7z"
                      fill="#41B883"
                    />
                    <path
                      d="M0 0l128 220.8L256 0h-51.2L128 132.5L71.7 0H0z"
                      fill="#35495E"
                    />
                  </svg>
                  <span className="tech-text text-vue">Vue.js</span>
                </div>

                {/* Laravel */}
                <div className="tech-item" id="tech-laravel">
                  <svg
                    className="tech-icon"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1.5l9 5.2v10.6l-9 5.2-9-5.2V6.7l9-5.2z"
                      fill="none"
                      stroke="#FF2D20"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 1.5v21M3 6.7l9 5.2M21 6.7l-9 5.2"
                      stroke="#FF2D20"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="tech-text text-laravel">Laravel</span>
                </div>

                {/* TailwindCSS */}
                <div className="tech-item" id="tech-tailwind">
                  <svg
                    className="tech-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6.095c-2.924 0-4.628 1.462-5.114 4.385 1.462-1.95 3.167-2.68 5.114-2.193 1.11.277 1.903 1.082 2.781 1.974 1.43 1.453 3.085 3.134 6.702 3.134 2.925 0 4.629-1.463 5.116-4.386-1.463 1.95-3.168 2.68-5.115 2.193-.827-.207-1.42-.808-2.222-1.62C17.834 8.128 16.18 6.095 12 6.095zM6.885 12.31c-2.925 0-4.629 1.462-5.115 4.385 1.463-1.95 3.168-2.68 5.115-2.193 1.11.277 1.903 1.082 2.78 1.974 1.43 1.453 3.086 3.134 6.703 3.134 2.925 0 4.63-1.463 5.116-4.386-1.463 1.95-3.168 2.68-5.115 2.193-.828-.207-1.42-.808-2.222-1.62C12.72 14.342 11.066 12.31 6.885 12.31z"
                      fill="#38BDF8"
                    />
                  </svg>
                  <span className="tech-text text-tailwind">tailwindcss</span>
                </div>

                {/* WordPress */}
                <div className="tech-item" id="tech-wordpress">
                  <svg
                    className="tech-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.256c2.404 0 4.605.815 6.36 2.176l-5.342 14.653-3.21-9.627 1.745-.084c.328-.016.48-.28.48-.464 0-.184-.136-.344-.48-.344H7.316c-.344 0-.48.16-.48.344 0 .184.152.448.48.464l1.554.084 1.758 5.275-1.957 5.918L4.698 7.021l1.173-.056c.328-.016.48-.28.48-.464 0-.184-.136-.344-.48-.344H2.435c-.344 0-.48.16-.48.344 0 .184.152.448.48.464l.983.047 5.068 14.887a10.669 10.669 0 0 1-4.856-7.85c.01-.19.03-.38.03-.574 0-4.838 3.906-8.72 8.72-8.72zm5.728 5.728c.376.544.64 1.184.64 1.912 0 .88-.352 1.76-.712 2.64l-2.024 6.2-3.624-10.752h.936c.328 0 .48-.232.48-.416s-.152-.392-.48-.392h-3.664c-.328 0-.48.208-.48.392s.152.416.48.416h.88l1.4 4.16.032-.016.032.016 1.488 4.416 3.096-9.168h-.872c-.328 0-.48.208-.48.392s.152.416.48.416h1.928zm-5.728 6.784L8.768 22.04c.995.276 2.04.425 3.12.425 1.291 0 2.525-.214 3.682-.605l-3.67-10.648z"
                      fill="#23282d"
                    />
                  </svg>
                  <span className="tech-text text-wordpress">WordPress</span>
                </div>
              </div>
            </div>

            {/* Left Column: Fox Illustration */}
            <div className="hero-image-wrapper">
              <div className="image-bg-glow"></div>
              <Image
                src="/assets/images/fox.png"
                alt="Rubah 3D SebatasWeb dengan Laptop"
                width={750}
                height={650}
                className="hero-image animate-float"
                id="hero-owl-image"
                priority
              />
            </div>
          </div>
        </section>

        

        {/* Keunggulan / Why Us Section */}
        <section className="why-section" id="tentang">
          <div className="container why-container">
            {/* Left Column: Geometric/Fox Tech Mockup (using crisp SVG illustration) */}
            <div className="why-image-wrapper">
              <div className="why-image-glow"></div>
              <svg width="100%" viewBox="0 0 500 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: "#0f172a", display: "block", width: "100%", height: "auto" }}>
                <defs>
                  <linearGradient id="why-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ea580c" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="why-grad2" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#ea580c" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                {/* Tech Dashboard Wireframe Preview */}
                <rect x="30" y="30" width="440" height="320" rx="12" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                <rect x="30" y="30" width="440" height="40" rx="12" fill="#0f172a" />
                <circle cx="55" cy="50" r="5" fill="#ef4444" />
                <circle cx="70" cy="50" r="5" fill="#f59e0b" />
                <circle cx="85" cy="50" r="5" fill="#10b981" />
                
                {/* Dashboard layout shapes */}
                <rect x="50" y="90" width="120" height="220" rx="8" fill="url(#why-grad1)" />
                <rect x="190" y="90" width="260" height="90" rx="8" fill="#1e293b" stroke="url(#why-grad2)" strokeWidth="1.5" />
                <rect x="190" y="200" width="120" height="110" rx="8" fill="#1e293b" stroke="#334155" />
                <rect x="330" y="200" width="120" height="110" rx="8" fill="#1e293b" stroke="#334155" />

                {/* Simulated line charts */}
                <path d="M205 150 Q 240 120 270 145 T 350 110 T 430 135" fill="none" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
                <path d="M205 160 Q 240 135 270 155 T 350 130 T 430 145" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
                
                {/* Glowing neon dots */}
                <circle cx="350" cy="110" r="4" fill="#ffffff" />
                <circle cx="430" cy="135" r="4" fill="#ffffff" />
              </svg>
            </div>

            {/* Right Column: Key Value Propositions */}
            <div className="why-content">
              <span className="section-tag why-tag">Mengapa SebatasWeb?</span>
              <h2 className="section-title">Kami Menghadirkan Kualitas Terbaik</h2>
              <p className="section-subtitle">
                Kami memahami bahwa website adalah wajah digital bisnis Anda. Oleh karena itu, kami tidak pernah berkompromi terhadap kualitas produk yang dihasilkan.
              </p>

              <div className="why-features">
                {/* Feature 1 */}
                <div className="why-feature-item">
                  <div className="why-feature-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="why-feature-title">Kecepatan & Performa Tinggi</h4>
                    <p className="why-feature-desc">Website dioptimalkan sepenuhnya agar memuat dalam hitungan milidetik, meningkatkan kenyamanan pengunjung serta skor SEO Google.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="why-feature-item">
                  <div className="why-feature-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="why-feature-title">Keamanan & Kode Bersih</h4>
                    <p className="why-feature-desc">Ditulis dengan kode standar modern bebas celah keamanan untuk meminimalkan risiko serangan siber pada platform bisnis Anda.</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="why-feature-item">
                  <div className="why-feature-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="why-feature-title">Dukungan Penuh & Konsultasi</h4>
                    <p className="why-feature-desc">Kami menemani proses bisnis Anda mulai dari diskusi konsep, perancangan desain UI/UX, proses *coding*, hingga website siap digunakan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Karya Kami / Portfolio Section */}
        <section className="portfolio-section" id="portofolio">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Karya Kami</span>
              <h2 className="section-title">Portofolio Website Terbaru</h2>
              <p className="section-subtitle">
                Lihat beberapa proyek website yang berhasil kami bangun untuk mendongkrak penjualan dan profesionalitas klien-klien kami.
              </p>
            </div>

            <div className="portfolio-grid">
              {/* Portfolio 1 */}
              <div className="portfolio-card">
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
              <div className="portfolio-card">
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
              <div className="portfolio-card">
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

        {/* Harga / Pricing Section */}
        <section className="services-section" id="harga">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Daftar Harga</span>
              <h2 className="section-title">Pilihan Paket Harga Website</h2>
              <p className="section-subtitle">
                Pilih paket harga terbaik yang sesuai dengan skala kebutuhan bisnis Anda. Semua paket memiliki jaminan keamanan dan responsif.
              </p>
            </div>

            <div className="services-grid">
              {/* Card 1: Landing Page */}
              <div className="service-card">
                <span className="pricing-badge">Paket Dasar</span>
                <h3 className="service-title" style={{ marginTop: '8px' }}>Landing Page</h3>
                <div className="pricing-price">
                  <span className="pricing-amount">Rp 999.000</span>
                  <span className="pricing-period"> / paket</span>
                </div>
                <p className="service-description" style={{ minHeight: 'auto', marginBottom: '20px' }}>
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
                    <span>Domain (.com) 1 Tahun</span>
                  </li>
                  <li className="pricing-feature-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Cloud Hosting Unlimited</span>
                  </li>
                </ul>
                <a href="https://wa.me/628123456789?text=Halo%20SebatasWeb,%20saya%20tertarik%20dengan%20Paket%20Landing%20Page" className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }} target="_blank" rel="noopener noreferrer">
                  Pesan Sekarang
                </a>
              </div>

              {/* Card 2: Company Profile */}
              <div className="service-card">
                <span className="pricing-badge">Populer</span>
                <h3 className="service-title" style={{ marginTop: '8px' }}>Company Profile</h3>
                <div className="pricing-price">
                  <span className="pricing-amount">Rp 1.899.000</span>
                  <span className="pricing-period"> / paket</span>
                </div>
                <p className="service-description" style={{ minHeight: 'auto', marginBottom: '20px' }}>
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
                <a href="https://wa.me/628123456789?text=Halo%20SebatasWeb,%20saya%20tertarik%20dengan%20Paket%20Company%20Profile" className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }} target="_blank" rel="noopener noreferrer">
                  Pesan Sekarang
                </a>
              </div>

              {/* Card 3: Toko Online */}
              <div className="service-card">
                <span className="pricing-badge">Bisnis</span>
                <h3 className="service-title" style={{ marginTop: '8px' }}>Toko Online</h3>
                <div className="pricing-price">
                  <span className="pricing-amount">Rp 2.999.000</span>
                  <span className="pricing-period"> / paket</span>
                </div>
                <p className="service-description" style={{ minHeight: 'auto', marginBottom: '20px' }}>
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
                <a href="https://wa.me/628123456789?text=Halo%20SebatasWeb,%20saya%20tertarik%20dengan%20Paket%20Toko%20Online" className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }} target="_blank" rel="noopener noreferrer">
                  Pesan Sekarang
                </a>
              </div>

              {/* Card 4: Custom Website */}
              <div className="service-card">
                <span className="pricing-badge">Eksklusif</span>
                <h3 className="service-title" style={{ marginTop: '8px' }}>Custom Website</h3>
                <div className="pricing-price">
                  <span className="pricing-amount">Custom</span>
                  <span className="pricing-period"> / proyek</span>
                </div>
                <p className="service-description" style={{ minHeight: 'auto', marginBottom: '20px' }}>
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
                <a href="https://wa.me/628123456789?text=Halo%20SebatasWeb,%20saya%20tertarik%20dengan%20Paket%20Custom%20Website" className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }} target="_blank" rel="noopener noreferrer">
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA (Call to Action) Section */}
        <section className="cta-section" id="kontak">
          <div className="container">
            <div className="cta-container">
              <div className="cta-content">
                <h2 className="cta-title">Siap Mengembangkan Bisnis Digital Anda?</h2>
                <p className="cta-desc">
                  Konsultasikan ide website impian Anda dengan tim kami sekarang juga secara gratis. Dapatkan penawaran harga terbaik yang disesuaikan dengan kebutuhan bisnis Anda.
                </p>
                <a href="https://wa.me/628123456789" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  Hubungi Kami Lewat WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: Brand Info */}
            <div>
              <a href="#" className="footer-brand-logo">
                sebatas<span>web</span>
              </a>
              <p className="footer-desc">
                Jasa pembuatan website profesional dan kustom yang berfokus pada kecepatan, estetika visual, keamanan, dan fungsionalitas bisnis optimal.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="footer-title">Tautan Cepat</h4>
              <ul className="footer-links">
                <li className="footer-link-item">
                  <a href="#" className="footer-link">Beranda</a>
                </li>
                <li className="footer-link-item">
                  <a href="#tentang" className="footer-link">Tentang Kami</a>
                </li>
                <li className="footer-link-item">
                  <a href="#portofolio" className="footer-link">Portofolio</a>
                </li>
                <li className="footer-link-item">
                  <a href="#harga" className="footer-link">Harga</a>
                </li>
                <li className="footer-link-item">
                  <a href="#kontak" className="footer-link">Kontak</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="footer-title">Layanan Kami</h4>
              <ul className="footer-links">
                <li className="footer-link-item">
                  <span className="footer-link">Landing Page</span>
                </li>
                <li className="footer-link-item">
                  <span className="footer-link">Company Profile</span>
                </li>
                <li className="footer-link-item">
                  <span className="footer-link">Toko Online (E-Commerce)</span>
                </li>
                <li className="footer-link-item">
                  <span className="footer-link">Web Aplikasi Kustom</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Address/Info */}
            <div>
              <h4 className="footer-title">Hubungi Kami</h4>
              <div className="footer-contact-item">
                <svg className="footer-contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>sebatasweb@gmail.com</span>
              </div>
              <div className="footer-contact-item">
                <svg className="footer-contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>@sebatasweb</span>
              </div>
              <div className="footer-contact-item">
                <svg className="footer-contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+62 812-3456-789</span>
              </div>
              <div className="footer-contact-item">
                <svg className="footer-contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Yogyakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} SebatasWeb. All rights reserved.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://instagram.com/sebatasweb" className="footer-social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Promo Ad */}
      {isPromoVisible && (
        <div className="promo-floating-banner">
          <button
            className="promo-close-btn"
            onClick={(e) => {
              e.stopPropagation();
              setIsPromoVisible(false);
            }}
            aria-label="Tutup promo"
          >
            &times;
          </button>
          <a href="#harga" className="promo-link">
            <video
              src="/assets/images/iklan-promo.webm"
              autoPlay
              loop
              muted
              playsInline
              className="promo-img"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
            />
          </a>
        </div>
      )}
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import "./home.css";

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        {/* Left Column: Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="text-dark">Pembuatan</span>
            <span className="text-dark">Website Profesional</span>
            <span className="text-primary">Untuk Bisnis Anda</span>
          </h1>

          <p className="hero-description">
            Punya bisnis tapi belum punya website? Kami siap membantu membuat website yang profesional, mudah digunakan, dan siap mendukung perkembangan usaha Anda.
          </p>

          {/* Hero CTA Buttons */}
          <div className="hero-action">
            <Link href="/#kontak" className="btn btn-primary" id="hero-cta-btn">
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
            </Link>
            <Link href="/#portofolio" className="btn btn-outline">
              Lihat Karya Kami
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="hero-trust">
            <div className="avatar-group">
              <img src="https://i.ibb.co.com/LXHTbTYT/Screenshot-2026-06-15-013611-1.png" alt="Client" />
              <img src="https://i.ibb.co.com/mrFY0rV4/Screenshot-2026-06-15-013502.png" alt="Client" />
              <img src="https://i.ibb.co.com/60LZ1FnZ/nibras-logo-png-seeklogo-540445.png" alt="Client" />
              <img src="https://i.ibb.co.com/Jw6PcFsv/Screenshot-2026-06-15-014127-1.png" alt="Client" />
              <div className="avatar-more">4+</div>
            </div>
            <div className="trust-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="#fbbf24" width="20" height="20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="trust-text"><strong>4.8/5</strong> Rating Klien</span>
            </div>
          </div>
        </div>

        {/* Right Column: Fox Illustration */}
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
  );
}

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

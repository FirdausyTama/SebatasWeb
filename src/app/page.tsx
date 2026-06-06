"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
                <a href="#" className="nav-link active">
                  Beranda
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Layanan
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Tentang
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Kontak
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Blog
                </a>
              </li>
            </ul>
          </nav>

          {/* CTA Header Button */}
          <div className="header-cta">
            <a href="#" className="btn btn-outline" id="header-cta-btn">
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <main>
        <section className="hero-section">
          <div className="container hero-container">
            
            {/* Left Column: Owl Illustration */}
            <div className="hero-image-wrapper">
              <div className="image-bg-glow"></div>
              <Image
                src="/assets/images/fox.png"
                alt="Rubah 3D SebatasWeb dengan Laptop"
                width={440}
                height={440}
                className="hero-image animate-float"
                id="hero-owl-image"
                priority
              />
            </div>

            {/* Right Column: Content */}
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

              {/* Hero CTA Button */}
              <div className="hero-action">
                <a href="#" className="btn btn-primary" id="hero-cta-btn">
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

          </div>
        </section>
      </main>
    </>
  );
}

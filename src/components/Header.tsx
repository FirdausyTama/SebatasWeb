"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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

  // Helper function to lock/unlock scroll on mobile menu toggle
  const toggleMenu = () => {
    const nextState = !isMenuOpen;
    setIsMenuOpen(nextState);
    if (nextState) {
      document.body.classList.add("nav-lock-scroll");
    } else {
      document.body.classList.remove("nav-lock-scroll");
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("nav-lock-scroll");
  };

  const isActive = (path: string) => {
    return pathname === path ? "active" : "";
  };

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container header-container">
        <Link href="/" className="logo" id="brand-logo" onClick={closeMenu}>
          <span className="logo-bold">sebatas</span>
          <span className="logo-light">web</span>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-nav-toggle"
          aria-label="Toggle navigation"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
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
              <Link
                href="/#tentang"
                className={`nav-link ${isActive("/tentang")}`}
                onClick={closeMenu}
              >
                Tentang Kami
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/#portofolio"
                className={`nav-link ${isActive("/portofolio")}`}
                onClick={closeMenu}
              >
                Portofolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/#harga"
                className={`nav-link ${isActive("/harga")}`}
                onClick={closeMenu}
              >
                Harga
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/#kontak"
                className={`nav-link ${isActive("/kontak")}`}
                onClick={closeMenu}
              >
                Kontak
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Header Button */}
        <div className="header-cta">
          <Link href="/#kontak" className="btn btn-outline" id="header-cta-btn" onClick={closeMenu}>
            Konsultasi Gratis
          </Link>
        </div>
      </div>
    </header>
  );
}

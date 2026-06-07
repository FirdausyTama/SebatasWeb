"use client";

import "./kontak.css";

export default function KontakSection() {
  return (
    <section className="cta-section" id="kontak">
      <div className="container">
        <div className="cta-container scroll-reveal">
          <div className="cta-text">
            <h2 className="cta-title">Siap Mengembangkan Bisnis Digital Anda?</h2>
            <p className="cta-desc">
              Konsultasikan ide website impian Anda dengan tim kami sekarang secara gratis.
            </p>
          </div>
          <div className="cta-action-wrapper">
            <a
              href="https://wa.me/6282150224691"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi Kami Lewat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

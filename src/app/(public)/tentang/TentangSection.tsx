"use client";

import "./tentang.css";

export default function TentangSection() {
  return (
    <section className="why-section" id="tentang">
      <div className="container why-container">
        {/* Left Column: Geometric Tech Mockup */}
        <div className="why-image-wrapper scroll-reveal">
          <div className="why-image-glow"></div>
          <svg
            width="100%"
            viewBox="0 0 500 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              backgroundColor: "#0f172a",
              display: "block",
              width: "100%",
              height: "auto",
            }}
          >
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
            <rect
              x="30"
              y="30"
              width="440"
              height="320"
              rx="12"
              fill="#1e293b"
              stroke="#334155"
              strokeWidth="2"
            />
            <rect x="30" y="30" width="440" height="40" rx="12" fill="#0f172a" />
            <circle cx="55" cy="50" r="5" fill="#ef4444" />
            <circle cx="70" cy="50" r="5" fill="#f59e0b" />
            <circle cx="85" cy="50" r="5" fill="#10b981" />

            {/* Dashboard layout shapes */}
            <rect x="50" y="90" width="120" height="220" rx="8" fill="url(#why-grad1)" />
            <rect
              x="190"
              y="90"
              width="260"
              height="90"
              rx="8"
              fill="#1e293b"
              stroke="url(#why-grad2)"
              strokeWidth="1.5"
            />
            <rect x="190" y="200" width="120" height="110" rx="8" fill="#1e293b" stroke="#334155" />
            <rect x="330" y="200" width="120" height="110" rx="8" fill="#1e293b" stroke="#334155" />

            {/* Simulated line charts */}
            <path
              d="M205 150 Q 240 120 270 145 T 350 110 T 430 135"
              fill="none"
              stroke="#f97316"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M205 160 Q 240 135 270 155 T 350 130 T 430 145"
              fill="none"
              stroke="#ea580c"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Glowing neon dots */}
            <circle cx="350" cy="110" r="4" fill="#ffffff" />
            <circle cx="430" cy="135" r="4" fill="#ffffff" />
          </svg>
        </div>

        {/* Right Column: Key Value Propositions */}
        <div className="why-content scroll-reveal">
          <span className="section-tag why-tag">Mengapa SebatasWeb?</span>
          <h2 className="section-title">Kami Menghadirkan Kualitas Terbaik</h2>
          <p className="section-subtitle">
            Kami memahami bahwa website adalah wajah digital bisnis Anda. Oleh karena itu, kami tidak pernah berkompromi terhadap kualitas produk yang dihasilkan.
          </p>

          <div className="why-features">
            {/* Feature 1 */}
            <div className="why-feature-item">
              <div className="why-feature-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <div>
                <h4 className="why-feature-title">Kecepatan & Performa Tinggi</h4>
                <p className="why-feature-desc">
                  Website dioptimalkan sepenuhnya agar memuat dalam hitungan milidetik, meningkatkan kenyamanan pengunjung serta skor SEO Google.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="why-feature-item">
              <div className="why-feature-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div>
                <h4 className="why-feature-title">Keamanan & Kode Bersih</h4>
                <p className="why-feature-desc">
                  Ditulis dengan kode standar modern bebas celah keamanan untuk meminimalkan risiko serangan siber pada platform bisnis Anda.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="why-feature-item">
              <div className="why-feature-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <h4 className="why-feature-title">Dukungan Penuh & Konsultasi</h4>
                <p className="why-feature-desc">
                  Kami menemani proses bisnis Anda mulai dari diskusi konsep, perancangan desain UI/UX, proses *coding*, hingga website siap digunakan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

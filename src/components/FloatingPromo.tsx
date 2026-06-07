"use client";

import { useState } from "react";
import Link from "next/link";

export default function FloatingPromo() {
  const [isPromoVisible, setIsPromoVisible] = useState(true);

  if (!isPromoVisible) return null;

  return (
    <div className="promo-floating-banner">
      <button
        className="promo-close-btn"
        onClick={(e) => {
          e.stopPropagation();
          setIsPromoVisible(false);
          setTimeout(() => {
            setIsPromoVisible(true);
          }, 60000);
        }}
        aria-label="Tutup promo"
      >
        &times;
      </button>
      <Link href="/harga" className="promo-link">
        <video
          src="/assets/images/iklan-promo.webm"
          autoPlay
          loop
          muted
          playsInline
          className="promo-img"
          style={{ width: "100%", height: "auto", display: "block", borderRadius: "12px" }}
        />
      </Link>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function FloatingPromo() {
  const [isPromoVisible, setIsPromoVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPromoVisible(true);
    }, 5000); // Muncul setelah 5 detik

    return () => clearTimeout(timer);
  }, []);

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
        <Image
          src="/assets/images/iklan-promo.gif"
          alt="Promo Spesial"
          width={200}
          height={200}
          className="promo-img"
          style={{ width: "100%", height: "auto", display: "block", borderRadius: "12px" }}
          unoptimized={true} // For GIFs it is often best to leave unoptimized
        />
      </Link>
    </div>
  );
}

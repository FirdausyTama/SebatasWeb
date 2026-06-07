"use client";

import HeroSection from "./HeroSection";
import TentangSection from "./tentang/TentangSection";
import PortofolioSection from "./portofolio/PortofolioSection";
import HargaSection from "./harga/HargaSection";
import KontakSection from "./kontak/KontakSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <HeroSection />
      <TentangSection />
      <PortofolioSection />
      <HargaSection />
      <KontakSection />
    </main>
  );
}

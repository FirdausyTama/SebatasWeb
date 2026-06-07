"use client";

import PortofolioSection from "./PortofolioSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function PortofolioPage() {
  useScrollReveal();

  return (
    <main style={{ paddingTop: "120px", minHeight: "80vh" }}>
      <PortofolioSection />
    </main>
  );
}

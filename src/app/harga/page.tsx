"use client";

import HargaSection from "./HargaSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function HargaPage() {
  useScrollReveal();

  return (
    <main style={{ paddingTop: "120px", minHeight: "80vh" }}>
      <HargaSection />
    </main>
  );
}

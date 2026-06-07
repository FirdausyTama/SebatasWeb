"use client";

import KontakSection from "./KontakSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function KontakPage() {
  useScrollReveal();

  return (
    <main style={{ paddingTop: "120px", minHeight: "80vh" }}>
      <KontakSection />
    </main>
  );
}

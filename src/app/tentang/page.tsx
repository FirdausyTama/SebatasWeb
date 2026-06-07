"use client";

import TentangSection from "./TentangSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function TentangPage() {
  useScrollReveal();

  return (
    <main style={{ paddingTop: "120px", minHeight: "80vh" }}>
      <TentangSection />
    </main>
  );
}

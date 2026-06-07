import HeroSection from "./HeroSection";
import TentangSection from "./tentang/TentangSection";
import PortofolioSection from "./portofolio/PortofolioSection";
import HargaSection from "./harga/HargaSection";
import KontakSection from "./kontak/KontakSection";
import ScrollRevealWrapper from "./ScrollRevealWrapper";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <ScrollRevealWrapper />
      <HeroSection />
      <TentangSection />
      <PortofolioSection />
      <HargaSection />
      <KontakSection />
    </main>
  );
}

import "./portofolio.css";
import { prisma } from "@/lib/prisma";
import PortfolioGallery from "./PortfolioGallery";
import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiFigma
} from 'react-icons/si';

const clientLogos = [
  { src: "/assets/images/logo-nibras.png", alt: "Nibras" },
  { src: "/assets/images/pt-rand-logo.png", alt: "PT Rand" },

  { src: "/assets/images/logo-genzdrive.png", alt: "GenZDrive" },
];

export default async function PortofolioSection() {
  const data = await prisma.portfolio.findMany({
    orderBy: { createdAt: 'desc' }
  });

  const portfolios = data.map(item => ({
    id: item.id,
    title: item.title,
    category: item.category,
    description: item.description,
    imageUrl: item.imageUrl,
  }));

  return (
    <section className="portfolio-section" id="portofolio">
      <div className="container">
        <div className="section-header scroll-reveal">

          <h2 className="section-title">Portofolio Website</h2>
          <p className="section-subtitle">
            Lihat beberapa proyek website yang berhasil kami bangun untuk mendongkrak penjualan dan profesionalitas klien-klien kami.
          </p>
        </div>

        <div style={{ height: '90px', position: 'relative', overflow: 'hidden', marginBottom: '20px', marginTop: '-10px', display: 'flex', alignItems: 'center', opacity: 0.6 }}>
          <LogoLoop
            logos={clientLogos}
            speed={60}
            direction="left"
            logoHeight={65}
            gap={80}
            hoverSpeed={10}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Klien yang telah bekerja sama dengan kami"
          />
        </div>

        <PortfolioGallery portfolios={portfolios} />
      </div>
    </section>
  );
}

import "./portofolio.css";
import { prisma } from "@/lib/prisma";
import PortfolioGallery from "./PortfolioGallery";

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
          <span className="section-tag">Karya Kami</span>
          <h2 className="section-title">Portofolio Website Terbaru</h2>
          <p className="section-subtitle">
            Lihat beberapa proyek website yang berhasil kami bangun untuk mendongkrak penjualan dan profesionalitas klien-klien kami.
          </p>
        </div>

        <PortfolioGallery portfolios={portfolios} />
      </div>
    </section>
  );
}

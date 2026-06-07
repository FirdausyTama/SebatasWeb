"use client";

import { useState, useEffect } from "react";

type Portfolio = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
};

export default function PortfolioGallery({ portfolios }: { portfolios: Portfolio[] }) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  // Re-run intersection observer when new cards are added
  useEffect(() => {
    const timer = setTimeout(() => {
      const newElements = document.querySelectorAll('.portfolio-card:not(.revealed)');
      if (newElements.length === 0) return;
      
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      
      newElements.forEach(el => observer.observe(el));
    }, 100);
    
    return () => clearTimeout(timer);
  }, [visibleCount]);

  if (portfolios.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "40px", color: "var(--text-muted)" }}>
        Belum ada portofolio yang ditambahkan.
      </div>
    );
  }

  return (
    <>
      <div className="portfolio-grid">
        {portfolios.slice(0, visibleCount).map((item, index) => (
          <div key={item.id} className={`portfolio-card scroll-reveal reveal-delay-${(index % 3) + 1}`}>
            <div 
              className="portfolio-img-container" 
              style={{ 
                backgroundImage: `url(${item.imageUrl})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                minHeight: '220px'
              }}
            >
            </div>
            <div className="portfolio-info">
              <span className="portfolio-category">{item.category}</span>
              <h3 className="portfolio-title">{item.title}</h3>
              <p className="portfolio-desc">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < portfolios.length && (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button 
            onClick={handleLoadMore} 
            className="btn btn-outline" 
            style={{ 
              padding: "12px 32px", 
              fontSize: "1rem",
              borderRadius: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              outline: "none"
            }}
          >
            Lihat Selengkapnya
          </button>
        </div>
      )}
    </>
  );
}

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
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    if (portfolios.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolios.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [portfolios.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolios.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolios.length) % portfolios.length);
  };

  if (portfolios.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "40px", color: "var(--text-muted)" }}>
        Belum ada portofolio yang ditambahkan.
      </div>
    );
  }

  const getOffset = (index: number) => {
    const len = portfolios.length;
    if (len === 1) return 0;
    if (len === 2) {
      if (index === currentIndex) return 0;
      return 1;
    }
    
    let diff = index - currentIndex;
    
    // Normalize diff to be between -floor(len/2) and floor(len/2)
    // This allows infinite-like wrapping for math calculations
    if (diff < -Math.floor(len / 2)) diff += len;
    if (diff > Math.floor(len / 2)) diff -= len;
    
    return diff;
  };

  return (
    <div className="portfolio-carousel-wrapper">
      <div className="portfolio-carousel">
        {portfolios.map((item, index) => {
          const offset = getOffset(index);
          let className = "portfolio-card-3d";
          
          if (offset === 0) className += " center";
          else if (offset === -1) className += " left";
          else if (offset === 1) className += " right";
          else if (offset < -1) className += " hidden-left";
          else className += " hidden-right";

          return (
            <div 
              key={item.id} 
              className={className}
              onClick={() => {
                if (offset === -1) handlePrev();
                if (offset === 1) handleNext();
              }}
            >
              <div 
                className="portfolio-img-container" 
                style={{ 
                  backgroundImage: `url(${item.imageUrl})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="portfolio-info">
                <span className="portfolio-category">{item.category}</span>
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-desc">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Navigation Buttons */}
      {portfolios.length > 1 && (
        <div className="portfolio-nav">
          <button className="nav-btn prev" onClick={handlePrev}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button className="nav-btn next" onClick={handleNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      )}
    </div>
  );
}

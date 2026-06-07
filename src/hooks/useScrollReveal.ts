"use client";

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.08, // trigger slightly before it is fully in view
    };

    const revealCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target); // stop observing once animated
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);
    const revealElements = document.querySelectorAll(".scroll-reveal");

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}

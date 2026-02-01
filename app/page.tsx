"use client";

import Link from "next/link";
import { workItems } from "@/data/work";
import WorkCard from "@/components/WorkCard";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  // Select 4 diverse stories for featured work (fewer, more impactful)
  const featuredWork = workItems.slice(0, 4);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  // Typing animation for tagline
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const taglines = [
    "migration & displacement",
    "international affairs",
    "trade & economy",
    "democracy & governance"
  ];

  useEffect(() => {
    const currentTagline = taglines[currentIndex];
    let charIndex = 0;
    let isDeleting = false;
    
    const typeEffect = setInterval(() => {
      if (!isDeleting) {
        setDisplayText(currentTagline.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentTagline.length) {
          isDeleting = true;
          setTimeout(() => {}, 2000); // Pause at full text
        }
      } else {
        setDisplayText(currentTagline.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          setCurrentIndex((prev) => (prev + 1) % taglines.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typeEffect);
  }, [currentIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = cardsRef.current?.querySelectorAll("article");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "5+", label: "years experience" },
    { number: "3", label: "continents covered" },
    { number: "50+", label: "published stories" },
  ];

  const outlets = [
    { 
      name: "The Guardian", 
      logo: "/images/logos/the-guardian.png",
      url: "https://www.theguardian.com"
    },
    { 
      name: "EVN Report", 
      logo: "/images/logos/evn-report.png",
      url: "https://www.evnreport.com"
    },
    { 
      name: "Fort Worth Report", 
      logo: "/images/logos/fort-worth-report.png",
      url: "https://fortworthreport.org"
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Full Width, Dramatic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Small intro text */}
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-6 animate-fade-in">
              Journalist
            </p>
            
            {/* Large Name */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 tracking-tight text-neutral-900">
              Sandra Sadek
            </h1>
            
            {/* Animated Tagline */}
            <div className="h-16 flex items-center justify-center mb-12">
              <p className="text-xl md:text-2xl lg:text-3xl text-neutral-600">
                Reporting on{" "}
                <span className="text-accent font-medium">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </p>
            </div>
            
            {/* Portrait Image - Centered */}
            <div className="flex justify-center mb-12">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/images/sandra-portrait.jpg"
                  alt="Sandra Sadek"
                  className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-2xl border-4 border-white"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="#work"
                className="px-10 py-4 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                View My Work
              </a>
              <Link
                href="/contact"
                className="px-10 py-4 border-2 border-neutral-900 text-neutral-900 rounded-full font-medium hover:bg-neutral-900 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <svg className="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* As Seen In Section */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm uppercase tracking-[0.2em] text-neutral-500 mb-10">
            As seen in
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {outlets.map((outlet) => (
              <a
                key={outlet.name}
                href={outlet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                title={outlet.name}
              >
                <img
                  src={outlet.logo}
                  alt={`${outlet.name} logo`}
                  className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.parentElement!.innerHTML = `<span class="text-lg font-semibold text-neutral-700">${outlet.name}</span>`;
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="group">
                <p className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-2 group-hover:text-accent transition-colors duration-300">
                  {stat.number}
                </p>
                <p className="text-sm md:text-base text-neutral-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-4">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900">
              Selected Work
            </h2>
          </div>

          {/* Work Cards Grid - 2 columns for cleaner look */}
          <div ref={cardsRef} className="grid gap-8 md:grid-cols-2 mb-12">
            {featuredWork.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              href="/work"
              className="inline-flex items-center px-8 py-4 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-all duration-300 hover:shadow-lg group"
            >
              View all work
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview / CTA Section */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Let&apos;s work together
          </h2>
          <p className="text-lg text-neutral-300 mb-10 max-w-2xl mx-auto">
            I&apos;m a NYC-based multimedia journalist with experience covering stories across North America, Europe, and the Middle East. Available for freelance assignments and collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-neutral-900 transition-all duration-300"
            >
              Learn More About Me
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

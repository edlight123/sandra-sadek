"use client";

import Link from "next/link";
import { workItems } from "@/data/work";
import WorkCard from "@/components/WorkCard";
import TagPill from "@/components/TagPill";
import { useEffect, useRef } from "react";

export default function HomePage() {
  // Select 6 diverse stories for featured work
  const featuredWork = workItems.slice(0, 6);

  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple scroll animation observer
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

  const beats = [
    "International & Geopolitics",
    "Migration & Displacement",
    "Housing & Development",
    "Trade & Economy",
    "Democracy & Governance",
    "Local Journalism",
  ];

  const outlets = [
    { 
      name: "Fort Worth Report", 
      logo: "https://fortworthreport.org/wp-content/uploads/2020/07/cropped-FWR-site-icon-1-32x32.png",
      url: "https://fortworthreport.org"
    },
    { 
      name: "EVN Report", 
      logo: "https://www.evnreport.com/favicon-32x32.png",
      url: "https://www.evnreport.com"
    },
    { 
      name: "The Guardian", 
      logo: "https://assets.guim.co.uk/images/favicons/fee5e2638d1c85f17393a00d7e9ddd47/32x32.ico",
      url: "https://www.theguardian.com"
    },
    { 
      name: "Foreign Policy", 
      logo: "https://foreignpolicy.com/wp-content/themes/foreign-policy-2017/assets/src/images/favicon.ico",
      url: "https://foreignpolicy.com"
    },
    { 
      name: "Texas Monthly", 
      logo: "https://www.texasmonthly.com/wp-content/themes/tm-2022/images/favicons/favicon-32x32.png",
      url: "https://www.texasmonthly.com"
    },
    { 
      name: "Al Jazeera English", 
      logo: "https://www.aljazeera.com/favicon.ico",
      url: "https://www.aljazeera.com"
    },
    { 
      name: "Columbia Journalism Review", 
      logo: "https://www.cjr.org/favicon.ico",
      url: "https://www.cjr.org"
    }
  ];

  return (
    <div className="bg-[#f8f7f5]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text & CTAs */}
            <div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-neutral-900">
                Sandra Sadek
              </h1>
              <p className="text-xl md:text-2xl text-neutral-700 mb-8">
                Journalist covering housing, migration, trade, and global politics
              </p>

              {/* Beats as Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {beats.map((beat) => (
                  <TagPill key={beat} label={beat} />
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#selected-work"
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
                >
                  View Selected Work
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent/5 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Right: 2×2 Image Collage */}
            <div className="grid grid-cols-2 gap-3 rounded-2xl overflow-hidden">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/images/projects/borderlands/01.jpg"
                  alt="Border photography"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/images/projects/protest/02.jpg"
                  alt="Protest documentation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/images/projects/borderlands/03.jpg"
                  alt="Community stories"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/images/projects/protest/04.jpg"
                  alt="Documentary work"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="selected-work" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-neutral-900">
              Selected Work
            </h2>
            <p className="text-lg text-neutral-600">
              Recent reporting from across regions and topics
            </p>
          </div>

          {/* Work Cards Grid */}
          <div ref={cardsRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {featuredWork.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              href="/work"
              className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              View all reporting
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Published In Strip */}
      <section className="py-12 border-y border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-sm uppercase tracking-wider text-neutral-500 mb-8">
            Published In
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {outlets.map((outlet) => (
              <a
                key={outlet.name}
                href={outlet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-neutral-200 hover:border-accent hover:shadow-sm transition-all group"
                title={outlet.name}
              >
                <img
                  src={outlet.logo}
                  alt={`${outlet.name} logo`}
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <span className="text-sm font-medium text-neutral-700 group-hover:text-accent transition-colors">
                  {outlet.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

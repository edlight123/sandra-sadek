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
      logo: "/images/logos/fort-worth-report.png",
      url: "https://fortworthreport.org"
    },
    { 
      name: "EVN Report", 
      logo: "/images/logos/evn-report.png",
      url: "https://www.evnreport.com"
    },
    { 
      name: "The Guardian", 
      logo: "/images/logos/the-guardian.png",
      url: "https://www.theguardian.com"
    },
    { 
      name: "Foreign Policy", 
      logo: "/images/logos/foreign-policy.png",
      url: "https://foreignpolicy.com"
    },
    { 
      name: "Texas Monthly", 
      logo: "/images/logos/texas-monthly.png",
      url: "https://www.texasmonthly.com"
    },
    { 
      name: "Al Jazeera English", 
      logo: "/images/logos/aljazeera.png",
      url: "https://www.aljazeera.com"
    },
    { 
      name: "Columbia Journalism Review", 
      logo: "/images/logos/cjr.png",
      url: "https://www.cjr.org"
    }
  ];

  return (
    <div className="bg-[#f8f7f5]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/borderlands-cover.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Sandra Sadek
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Journalist covering housing, migration, trade, and global politics
          </p>

          {/* Beats as Pills */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {beats.map((beat) => (
              <TagPill key={beat} label={beat} />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#selected-work"
              className="px-8 py-3 bg-accent text-white rounded-md font-medium hover:bg-accent/90 transition-colors duration-200"
            >
              View Selected Work
            </a>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-md font-medium hover:bg-gray-900 hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
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
      <section className="py-12 border-t border-neutral-200 bg-white">
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

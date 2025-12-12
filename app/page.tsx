"use client";

import Link from "next/link";
import { workItems } from "@/data/work";
import WorkCard from "@/components/WorkCard";
import TagPill from "@/components/TagPill";
import Grid from "@/components/Grid";
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
    "Fort Worth Report",
    "EVN Report",
    "The Guardian",
    "Foreign Policy",
    "Texas Monthly",
    "Al Jazeera English",
    "Columbia Journalism Review",
  ];

  return (
    <div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#selected-work"
              className="px-8 py-3 bg-accent text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
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

      {/* Featured Images Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
      </section>

      {/* Beats Strip */}
      <section className="bg-gray-50 py-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {beats.map((beat) => (
              <TagPill key={beat} label={beat} />
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="selected-work" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Selected Work
            </h2>
            <p className="text-lg text-gray-600">
              Recent reporting from across regions and topics
            </p>
          </div>

          <div ref={cardsRef}>
            <Grid columns={3}>
              {featuredWork.map((item) => (
                <WorkCard key={item.id} item={item} />
              ))}
            </Grid>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/work"
              className="inline-flex items-center text-accent hover:underline font-medium text-lg"
            >
              View all reporting
              <svg
                className="w-5 h-5 ml-1"
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

      {/* Outlets Strip */}
      <section className="bg-off-white py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-sm uppercase tracking-wider text-gray-500 mb-8">
            Published In
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-700">
            {outlets.map((outlet) => (
              <span key={outlet} className="text-lg font-medium">
                {outlet}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

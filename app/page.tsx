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
    "Fort Worth Report",
    "EVN Report",
    "The Guardian",
    "Foreign Policy",
    "Texas Monthly",
    "Al Jazeera English",
    "Columbia Journalism Review",
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
          <h3 className="text-center text-sm uppercase tracking-wider text-neutral-500 mb-6">
            Published In
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {outlets.map((outlet) => (
              <span
                key={outlet}
                className="inline-flex items-center px-4 py-2 rounded-full bg-neutral-100 text-sm font-medium text-neutral-700"
              >
                {outlet}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Identity Card */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 text-center shadow-sm">
            <h2 className="text-2xl font-serif font-bold mb-2 text-neutral-900">
              Sandra Sadek
            </h2>
            <p className="text-neutral-600 mb-6">
              Journalist • Researcher • Storyteller
            </p>
            
            {/* Email */}
            <div className="mb-6">
              <a
                href="mailto:sandrasadek1@gmail.com"
                className="text-accent hover:underline font-medium"
              >
                sandrasadek1@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-6">
              <a
                href="https://twitter.com/SandraSadek1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-accent transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sandra-sadek-61152b174/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-accent transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Sandra Sadek. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState, useMemo } from "react";
import PageHeader from "@/components/PageHeader";
import TagPill from "@/components/TagPill";
import { researchItems } from "@/data/research";
import Link from "next/link";

export default function ResearchPage() {
  const [selectedTag, setSelectedTag] = useState<string>("");

  // Extract unique tags
  const allTags = useMemo(() => {
    const tags = researchItems.flatMap((item) => item.tags);
    return Array.from(new Set(tags)).sort();
  }, []);

  // Filter items
  const filteredItems = useMemo(() => {
    if (!selectedTag) return researchItems;
    return researchItems.filter((item) => item.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageHeader
        title="Research"
        subtitle="Academic work on media, democracy, migration, and policy"
      />

      {/* Tag Filters */}
      <div className="mb-8">
        <div className="text-sm font-medium mb-3">Filter by tag:</div>
        <div className="flex flex-wrap gap-2">
          <TagPill
            label="All"
            active={!selectedTag}
            onClick={() => setSelectedTag("")}
          />
          {allTags.map((tag) => (
            <TagPill
              key={tag}
              label={tag}
              active={selectedTag === tag}
              onClick={() => setSelectedTag(tag)}
            />
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 text-gray-600">
        Showing {filteredItems.length} item
        {filteredItems.length !== 1 ? "s" : ""}
      </div>

      {/* Research Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Institution and Year */}
            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
              <span className="font-medium">{item.institution}</span>
              <span>{item.year}</span>
            </div>

            {/* Title */}
            <h3 className="font-serif font-bold text-xl mb-3">{item.title}</h3>

            {/* Abstract */}
            <p className="text-gray-600 mb-4 line-clamp-4">{item.abstract}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag) => (
                <TagPill key={tag} label={tag} />
              ))}
            </div>

            {/* Read Link */}
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent hover:underline font-medium"
            >
              Read paper
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState, useMemo } from "react";
import PageHeader from "@/components/PageHeader";
import TagPill from "@/components/TagPill";
import { multimediaItems } from "@/data/multimedia";
import { MultimediaType } from "@/data/types";
import Link from "next/link";

export default function MultimediaPage() {
  const [selectedType, setSelectedType] = useState<MultimediaType | "All">(
    "All"
  );
  const [selectedTopic, setSelectedTopic] = useState<string>("");

  // Extract unique topics
  const allTopics = useMemo(() => {
    const topics = multimediaItems.flatMap((item) => item.topics);
    return Array.from(new Set(topics)).sort();
  }, []);

  // Filter items
  const filteredItems = useMemo(() => {
    return multimediaItems.filter((item) => {
      if (selectedType !== "All" && item.type !== selectedType) return false;
      if (selectedTopic && !item.topics.includes(selectedTopic)) return false;
      return true;
    });
  }, [selectedType, selectedTopic]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageHeader
        title="Multimedia"
        subtitle="Audio and video journalism across platforms"
      />

      {/* Type Toggle */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setSelectedType("All")}
          className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
            selectedType === "All"
              ? "bg-accent text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedType("Audio")}
          className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
            selectedType === "Audio"
              ? "bg-accent text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Audio
        </button>
        <button
          onClick={() => setSelectedType("Video")}
          className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
            selectedType === "Video"
              ? "bg-accent text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Video
        </button>
      </div>

      {/* Topic Filters */}
      <div className="mb-8">
        <div className="text-sm font-medium mb-3">Filter by topic:</div>
        <div className="flex flex-wrap gap-2">
          <TagPill
            label="All Topics"
            active={!selectedTopic}
            onClick={() => setSelectedTopic("")}
          />
          {allTopics.map((topic) => (
            <TagPill
              key={topic}
              label={topic}
              active={selectedTopic === topic}
              onClick={() => setSelectedTopic(topic)}
            />
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 text-gray-600">
        Showing {filteredItems.length} item
        {filteredItems.length !== 1 ? "s" : ""}
      </div>

      {/* Multimedia Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Thumbnail */}
            <div className="aspect-video bg-gray-100 relative">
              {item.thumbnailUrl ? (
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
                  {item.type === "Audio" ? (
                    <svg
                      className="w-16 h-16 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-16 h-16 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                  )}
                </div>
              )}

              {/* Type Badge */}
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                    item.type === "Audio" ? "bg-purple-600" : "bg-red-600"
                  }`}
                >
                  {item.type}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Platform and Duration */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <span className="font-medium">{item.platform}</span>
                <span>{item.duration}</span>
              </div>

              {/* Title */}
              <h3 className="font-serif font-bold text-xl mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4">{item.description}</p>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.topics.map((topic) => (
                  <TagPill key={topic} label={topic} />
                ))}
              </div>

              {/* Play/Watch Button */}
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent hover:underline font-medium"
              >
                {item.type === "Audio" ? "Listen" : "Watch"}
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
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* No Results */}
      {filteredItems.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-gray-600 mb-4">No multimedia found</p>
          <p className="text-gray-500">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}

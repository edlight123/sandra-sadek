"use client";

import { useState, useMemo } from "react";
import PageHeader from "@/components/PageHeader";
import MultimediaCard from "@/components/MultimediaCard";
import { multimediaItems } from "@/data/multimedia";
import { MultimediaType } from "@/data/types";

export default function MultimediaPage() {
  const [selectedType, setSelectedType] = useState<MultimediaType | "All">(
    "All"
  );

  // Filter items by type
  const filteredItems = useMemo(() => {
    if (selectedType === "All") return multimediaItems;
    return multimediaItems.filter((item) => item.type === selectedType);
  }, [selectedType]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageHeader
        title="Multimedia"
        subtitle="Audio and video journalism across platforms"
      />

      {/* Segmented Control for Type Filter */}
      <div className="flex justify-center gap-0 mb-8 max-w-md mx-auto">
        <button
          onClick={() => setSelectedType("All")}
          className={`flex-1 px-6 py-3 font-medium transition-all duration-200 border-2 rounded-l-lg ${
            selectedType === "All"
              ? "bg-accent text-white border-accent"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
          }`}
          aria-pressed={selectedType === "All"}
        >
          All
        </button>
        <button
          onClick={() => setSelectedType("Video")}
          className={`flex-1 px-6 py-3 font-medium transition-all duration-200 border-t-2 border-b-2 ${
            selectedType === "Video"
              ? "bg-accent text-white border-accent"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
          }`}
          aria-pressed={selectedType === "Video"}
        >
          Video
        </button>
        <button
          onClick={() => setSelectedType("Audio")}
          className={`flex-1 px-6 py-3 font-medium transition-all duration-200 border-2 rounded-r-lg ${
            selectedType === "Audio"
              ? "bg-accent text-white border-accent"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
          }`}
          aria-pressed={selectedType === "Audio"}
        >
          Audio
        </button>
      </div>

      {/* Results Count */}
      <div className="mb-6 text-center text-gray-600">
        Showing {filteredItems.length} item
        {filteredItems.length !== 1 ? "s" : ""}
      </div>

      {/* Multimedia Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map((item) => (
          <MultimediaCard
            key={item.id}
            type={item.type}
            platform={item.platform}
            duration={item.duration}
            title={item.title}
            description={item.description}
            topics={item.topics}
            url={item.url}
          />
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

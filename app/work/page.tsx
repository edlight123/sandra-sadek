"use client";

import { useState, useMemo } from "react";
import WorkCard from "@/components/WorkCard";
import WorkFilterBar from "@/components/WorkFilterBar";
import ProfileSidebar from "@/components/ProfileSidebar";
import { workItems } from "@/data/work";
import { Region } from "@/data/types";

// Map region codes to readable labels
const regionLabels: Record<Region, string> = {
  US_LOCAL: "US Local",
  SOUTH_CAUCASUS: "South Caucasus",
  US_MX_BORDER: "US-Mexico Border",
  MIDDLE_EAST: "Middle East",
  GLOBAL: "Global",
};

export default function WorkPage() {
  // Filter state
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedOutlet, setSelectedOutlet] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Extract unique values for filter options
  const regions = useMemo(
    () =>
      Array.from(new Set(workItems.map((item) => item.region))).map(
        (region) => ({
          value: region,
          label: regionLabels[region],
        })
      ),
    []
  );

  const topics = useMemo(() => {
    const allTopics = workItems.flatMap((item) => item.topics);
    return Array.from(new Set(allTopics))
      .sort()
      .map((topic) => ({
        value: topic,
        label: topic,
      }));
  }, []);

  const outlets = useMemo(
    () =>
      Array.from(new Set(workItems.map((item) => item.outlet)))
        .sort()
        .map((outlet) => ({
          value: outlet,
          label: outlet,
        })),
    []
  );

  const formats = useMemo(
    () =>
      Array.from(new Set(workItems.map((item) => item.format)))
        .sort()
        .map((format) => ({
          value: format,
          label: format,
        })),
    []
  );

  // Filter work items
  const filteredItems = useMemo(() => {
    return workItems.filter((item) => {
      // Region filter
      if (selectedRegion && item.region !== selectedRegion) return false;
      
      // Topic filter
      if (selectedTopic && !item.topics.includes(selectedTopic)) return false;
      
      // Outlet filter
      if (selectedOutlet && item.outlet !== selectedOutlet) return false;
      
      // Format filter
      if (selectedFormat && item.format !== selectedFormat) return false;
      
      // Search filter (searches title and dek)
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const titleMatch = item.title.toLowerCase().includes(query);
        const dekMatch = item.dek?.toLowerCase().includes(query);
        if (!titleMatch && !dekMatch) return false;
      }
      
      return true;
    });
  }, [selectedRegion, selectedTopic, selectedOutlet, selectedFormat, searchQuery]);

  const handleReset = () => {
    setSelectedRegion("");
    setSelectedTopic("");
    setSelectedOutlet("");
    setSelectedFormat("");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-serif font-bold text-4xl md:text-5xl mb-4">
            Reporting
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Text journalism spanning local housing to international geopolitics—from the US-Mexico border to the South Caucasus, covering community impact, policy, and culture.
          </p>
        </div>
      </div>

      {/* Main Content with Sidebar Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Filters and Content */}
          <div className="flex-1 min-w-0">
            {/* Filter Panel */}
            <WorkFilterBar
              regions={regions}
              topics={topics}
              outlets={outlets}
              formats={formats}
              selectedRegion={selectedRegion}
              selectedTopic={selectedTopic}
              selectedOutlet={selectedOutlet}
              selectedFormat={selectedFormat}
              searchQuery={searchQuery}
              onChangeRegion={setSelectedRegion}
              onChangeTopic={setSelectedTopic}
              onChangeOutlet={setSelectedOutlet}
              onChangeFormat={setSelectedFormat}
              onChangeSearch={setSearchQuery}
              onReset={handleReset}
            />

            {/* Results Count */}
            <div className="mb-6 text-gray-600">
              {filteredItems.length} {filteredItems.length === 1 ? "story" : "stories"}
            </div>

            {/* No Results */}
            {filteredItems.length === 0 && (
              <div className="text-center py-20 bg-white border border-gray-200 rounded-lg">
                <svg
                  className="w-16 h-16 text-gray-300 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                  No stories match these filters
                </h2>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or filters to see more results
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Reset filters
                </button>
              </div>
            )}

            {/* Work Grid - 2 columns on medium and up */}
            {filteredItems.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItems.map((item) => (
                  <WorkCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Profile Sidebar - hidden on mobile, sticky on large screens */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <ProfileSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

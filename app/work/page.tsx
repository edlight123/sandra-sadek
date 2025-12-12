"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import FilterBar from "@/components/FilterBar";
import WorkCard from "@/components/WorkCard";
import Grid from "@/components/Grid";
import { workItems } from "@/data/work";
import { Region, WorkFormat } from "@/data/types";

// Map region codes to readable labels
const regionLabels: Record<Region, string> = {
  US_LOCAL: "US Local",
  SOUTH_CAUCASUS: "South Caucasus",
  US_MX_BORDER: "US-Mexico Border",
  MIDDLE_EAST: "Middle East",
  GLOBAL: "Global",
};

function WorkPageContent() {
  const searchParams = useSearchParams();
  
  // Initialize filters from URL params
  const [selectedRegion, setSelectedRegion] = useState(
    searchParams.get("region") || ""
  );
  const [selectedTopic, setSelectedTopic] = useState(
    searchParams.get("topic") || ""
  );
  const [selectedOutlet, setSelectedOutlet] = useState(
    searchParams.get("outlet") || ""
  );
  const [selectedFormat, setSelectedFormat] = useState(
    searchParams.get("format") || ""
  );
  const [itemsToShow, setItemsToShow] = useState(9);

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
      if (selectedRegion && item.region !== selectedRegion) return false;
      if (selectedTopic && !item.topics.includes(selectedTopic)) return false;
      if (selectedOutlet && item.outlet !== selectedOutlet) return false;
      if (selectedFormat && item.format !== selectedFormat) return false;
      return true;
    });
  }, [selectedRegion, selectedTopic, selectedOutlet, selectedFormat]);

  const displayedItems = filteredItems.slice(0, itemsToShow);
  const hasMore = filteredItems.length > itemsToShow;

  const handleReset = () => {
    setSelectedRegion("");
    setSelectedTopic("");
    setSelectedOutlet("");
    setSelectedFormat("");
    setItemsToShow(9);
  };

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 9);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageHeader
        title="Reporting"
        subtitle="Text journalism across regions and topics — from local housing to international geopolitics"
      />

      <FilterBar
        regions={regions}
        topics={topics}
        outlets={outlets}
        formats={formats}
        selectedRegion={selectedRegion}
        selectedTopic={selectedTopic}
        selectedOutlet={selectedOutlet}
        selectedFormat={selectedFormat}
        onRegionChange={setSelectedRegion}
        onTopicChange={setSelectedTopic}
        onOutletChange={setSelectedOutlet}
        onFormatChange={setSelectedFormat}
        onReset={handleReset}
      />

      {/* Results Count */}
      <div className="mb-6 text-gray-600">
        Showing {displayedItems.length} of {filteredItems.length} stories
      </div>

      {/* No Results */}
      {filteredItems.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-gray-600 mb-4">No stories found</p>
          <p className="text-gray-500 mb-6">
            Try adjusting your filters to see more results
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-accent text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Reset filters
          </button>
        </div>
      )}

      {/* Work Grid */}
      {filteredItems.length > 0 && (
        <>
          <Grid columns={3}>
            {displayedItems.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </Grid>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-md font-medium hover:bg-gray-900 hover:text-white transition-colors duration-200"
              >
                Load more stories
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function WorkPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PageHeader
          title="Reporting"
          subtitle="Text journalism across regions and topics — from local housing to international geopolitics"
        />
        <div className="text-center py-12">Loading...</div>
      </div>
    }>
      <WorkPageContent />
    </Suspense>
  );
}

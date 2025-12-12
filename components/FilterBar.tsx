"use client";

import { Region, WorkFormat } from "@/data/types";

interface FilterOption {
  value: string;
  label: string;
}

interface FilterBarProps {
  regions: FilterOption[];
  topics: FilterOption[];
  outlets: FilterOption[];
  formats: FilterOption[];
  selectedRegion: string;
  selectedTopic: string;
  selectedOutlet: string;
  selectedFormat: string;
  onRegionChange: (value: string) => void;
  onTopicChange: (value: string) => void;
  onOutletChange: (value: string) => void;
  onFormatChange: (value: string) => void;
  onReset: () => void;
}

export default function FilterBar({
  regions,
  topics,
  outlets,
  formats,
  selectedRegion,
  selectedTopic,
  selectedOutlet,
  selectedFormat,
  onRegionChange,
  onTopicChange,
  onOutletChange,
  onFormatChange,
  onReset,
}: FilterBarProps) {
  const hasActiveFilters =
    selectedRegion || selectedTopic || selectedOutlet || selectedFormat;

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Filter Stories</h3>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="text-sm text-accent hover:underline"
          >
            Reset all filters
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Region Filter */}
        <div>
          <label htmlFor="region" className="block text-sm font-medium mb-2">
            Region
          </label>
          <select
            id="region"
            value={selectedRegion}
            onChange={(e) => onRegionChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">All Regions</option>
            {regions.map((region) => (
              <option key={region.value} value={region.value}>
                {region.label}
              </option>
            ))}
          </select>
        </div>

        {/* Topic Filter */}
        <div>
          <label htmlFor="topic" className="block text-sm font-medium mb-2">
            Topic
          </label>
          <select
            id="topic"
            value={selectedTopic}
            onChange={(e) => onTopicChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">All Topics</option>
            {topics.map((topic) => (
              <option key={topic.value} value={topic.value}>
                {topic.label}
              </option>
            ))}
          </select>
        </div>

        {/* Outlet Filter */}
        <div>
          <label htmlFor="outlet" className="block text-sm font-medium mb-2">
            Outlet
          </label>
          <select
            id="outlet"
            value={selectedOutlet}
            onChange={(e) => onOutletChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">All Outlets</option>
            {outlets.map((outlet) => (
              <option key={outlet.value} value={outlet.value}>
                {outlet.label}
              </option>
            ))}
          </select>
        </div>

        {/* Format Filter */}
        <div>
          <label htmlFor="format" className="block text-sm font-medium mb-2">
            Format
          </label>
          <select
            id="format"
            value={selectedFormat}
            onChange={(e) => onFormatChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">All Formats</option>
            {formats.map((format) => (
              <option key={format.value} value={format.value}>
                {format.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

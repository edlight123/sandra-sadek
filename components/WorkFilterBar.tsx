"use client";

import { useState } from "react";
import { Region, WorkFormat } from "@/data/types";

interface FilterOption {
  value: string;
  label: string;
}

interface WorkFilterBarProps {
  regions: FilterOption[];
  topics: FilterOption[];
  outlets: FilterOption[];
  formats: FilterOption[];
  
  selectedRegion: string;
  selectedTopic: string;
  selectedOutlet: string;
  selectedFormat: string;
  searchQuery: string;
  filteredCount: number;
  
  onChangeRegion: (value: string) => void;
  onChangeTopic: (value: string) => void;
  onChangeOutlet: (value: string) => void;
  onChangeFormat: (value: string) => void;
  onChangeSearch: (value: string) => void;
  onReset: () => void;
}

export default function WorkFilterBar({
  regions,
  topics,
  outlets,
  formats,
  selectedRegion,
  selectedTopic,
  selectedOutlet,
  selectedFormat,
  searchQuery,
  filteredCount,
  onChangeRegion,
  onChangeTopic,
  onChangeOutlet,
  onChangeFormat,
  onChangeSearch,
  onReset,
}: WorkFilterBarProps) {
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  
  const hasActiveFilters =
    selectedRegion || selectedTopic || selectedOutlet || selectedFormat || searchQuery;

  return (
    <div className="mt-4 mb-6">
      {/* Story count */}
      <div className="mb-2 text-xs text-neutral-500">
        {filteredCount} {filteredCount === 1 ? "story" : "stories"}
      </div>

      {/* Compact toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        {/* Search Input - takes remaining space on desktop */}
        <div className="flex-1 min-w-0">
          <label htmlFor="search" className="sr-only">
            Search stories
          </label>
          <div className="relative">
            <svg
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              id="search"
              type="text"
              placeholder="Search stories..."
              value={searchQuery}
              onChange={(e) => onChangeSearch(e.target.value)}
              className="w-full h-9 rounded-lg border border-neutral-300 bg-white pl-8 pr-3 text-sm focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
            />
          </div>
        </div>

        {/* Filter controls - horizontal on desktop, scrollable on mobile */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {/* Region Filter */}
          <select
            id="region"
            aria-label="Filter by region"
            value={selectedRegion}
            onChange={(e) => onChangeRegion(e.target.value)}
            className="h-9 rounded-lg border border-neutral-300 bg-white px-2 text-sm focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors whitespace-nowrap"
          >
            <option value="">Region: All</option>
            {regions.map((region) => (
              <option key={region.value} value={region.value}>
                {region.label}
              </option>
            ))}
          </select>

          {/* Format Filter */}
          <select
            id="format"
            aria-label="Filter by format"
            value={selectedFormat}
            onChange={(e) => onChangeFormat(e.target.value)}
            className="h-9 rounded-lg border border-neutral-300 bg-white px-2 text-sm focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors whitespace-nowrap"
          >
            <option value="">Format: All</option>
            {formats.map((format) => (
              <option key={format.value} value={format.value}>
                {format.label}
              </option>
            ))}
          </select>

          {/* Topic Filter - shown when "More filters" is active */}
          {showMoreFilters && (
            <>
              <select
                id="topic"
                aria-label="Filter by topic"
                value={selectedTopic}
                onChange={(e) => onChangeTopic(e.target.value)}
                className="h-9 rounded-lg border border-neutral-300 bg-white px-2 text-sm focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors whitespace-nowrap"
              >
                <option value="">Topic: All</option>
                {topics.map((topic) => (
                  <option key={topic.value} value={topic.value}>
                    {topic.label}
                  </option>
                ))}
              </select>

              {/* Outlet Filter */}
              <select
                id="outlet"
                aria-label="Filter by outlet"
                value={selectedOutlet}
                onChange={(e) => onChangeOutlet(e.target.value)}
                className="h-9 rounded-lg border border-neutral-300 bg-white px-2 text-sm focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors whitespace-nowrap"
              >
                <option value="">Outlet: All</option>
                {outlets.map((outlet) => (
                  <option key={outlet.value} value={outlet.value}>
                    {outlet.label}
                  </option>
                ))}
              </select>
            </>
          )}

          {/* More filters toggle button */}
          <button
            onClick={() => setShowMoreFilters(!showMoreFilters)}
            className="h-9 px-3 text-xs text-neutral-500 hover:text-accent transition-colors whitespace-nowrap flex items-center gap-1"
          >
            {showMoreFilters ? "Less" : "More"} filters
            <svg
              className={`w-3 h-3 transition-transform ${showMoreFilters ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Clear filters button */}
          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="h-9 px-3 text-xs font-medium text-accent hover:text-accent/70 transition-colors whitespace-nowrap"
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

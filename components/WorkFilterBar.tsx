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
  const hasActiveFilters =
    selectedRegion || selectedTopic || selectedOutlet || selectedFormat || searchQuery;

  return (
    <section className="rounded-2xl bg-white border border-neutral-200 p-4 md:p-5 shadow-sm mb-8">
      {/* Top Row: Label and Count */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-neutral-700">Search & filter stories</h2>
        <span className="text-xs text-neutral-500">{filteredCount} stories</span>
      </div>

      {/* Search Input */}
      <div className="mb-4">
        <label htmlFor="search" className="sr-only">
          Search stories
        </label>
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400"
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
            className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3 py-2 pl-9 text-sm focus:ring-2 focus:ring-accent/40 focus:border-accent focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Filter Grid */}
      <div className="grid gap-3 md:grid-cols-4 mb-3">
        {/* Region Filter */}
        <div>
          <label htmlFor="region" className="block text-xs font-medium text-neutral-500 mb-1.5">
            Region
          </label>
          <select
            id="region"
            value={selectedRegion}
            onChange={(e) => onChangeRegion(e.target.value)}
            className="w-full h-9 rounded-lg border border-neutral-300 bg-white px-2 text-sm focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
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
          <label htmlFor="topic" className="block text-xs font-medium text-neutral-500 mb-1.5">
            Topic
          </label>
          <select
            id="topic"
            value={selectedTopic}
            onChange={(e) => onChangeTopic(e.target.value)}
            className="w-full h-9 rounded-lg border border-neutral-300 bg-white px-2 text-sm focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
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
          <label htmlFor="outlet" className="block text-xs font-medium text-neutral-500 mb-1.5">
            Outlet
          </label>
          <select
            id="outlet"
            value={selectedOutlet}
            onChange={(e) => onChangeOutlet(e.target.value)}
            className="w-full h-9 rounded-lg border border-neutral-300 bg-white px-2 text-sm focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
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
          <label htmlFor="format" className="block text-xs font-medium text-neutral-500 mb-1.5">
            Format
          </label>
          <select
            id="format"
            value={selectedFormat}
            onChange={(e) => onChangeFormat(e.target.value)}
            className="w-full h-9 rounded-lg border border-neutral-300 bg-white px-2 text-sm focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
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

      {/* Clear Filters Button */}
      {hasActiveFilters && (
        <div className="flex justify-end">
          <button
            onClick={onReset}
            className="inline-flex items-center rounded-full border border-accent/40 px-3 py-1 text-xs font-medium text-accent hover:bg-accent/5 transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}

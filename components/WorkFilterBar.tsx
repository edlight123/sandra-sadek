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
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        {/* Search Input */}
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="search" className="sr-only">
            Search stories
          </label>
          <div className="relative">
            <input
              id="search"
              type="text"
              placeholder="Search stories..."
              value={searchQuery}
              onChange={(e) => onChangeSearch(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
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
          </div>
        </div>

        {/* Region Filter */}
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="region" className="sr-only">
            Filter by region
          </label>
          <select
            id="region"
            value={selectedRegion}
            onChange={(e) => onChangeRegion(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors bg-white"
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
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="topic" className="sr-only">
            Filter by topic
          </label>
          <select
            id="topic"
            value={selectedTopic}
            onChange={(e) => onChangeTopic(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors bg-white"
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
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="outlet" className="sr-only">
            Filter by outlet
          </label>
          <select
            id="outlet"
            value={selectedOutlet}
            onChange={(e) => onChangeOutlet(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors bg-white"
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
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="format" className="sr-only">
            Filter by format
          </label>
          <select
            id="format"
            value={selectedFormat}
            onChange={(e) => onChangeFormat(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors bg-white"
          >
            <option value="">All Formats</option>
            {formats.map((format) => (
              <option key={format.value} value={format.value}>
                {format.label}
              </option>
            ))}
          </select>
        </div>

        {/* Reset Button */}
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors whitespace-nowrap"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

import Link from "next/link";
import { WorkItem, Region } from "@/data/types";

interface WorkCardProps {
  item: WorkItem;
}

// Map region codes to readable labels
const regionLabels: Record<Region, string> = {
  US_LOCAL: "US Local",
  SOUTH_CAUCASUS: "South Caucasus",
  US_MX_BORDER: "US-Mexico Border",
  MIDDLE_EAST: "Middle East",
  GLOBAL: "Global",
};

export default function WorkCard({ item }: WorkCardProps) {
  const firstTopic = item.topics[0] || "";
  const regionLabel = regionLabels[item.region];
  const hasAward = item.award && item.award.trim().length > 0;

  return (
    <article className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Thumbnail */}
      {item.imageUrl && (
        <div className="aspect-video bg-gray-100 relative overflow-hidden">
          <img
            src={item.imageUrl}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      {/* Award Badge */}
      {hasAward && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 px-3 py-1.5 bg-yellow-100 border border-yellow-300 rounded-full text-xs font-semibold text-yellow-800 shadow-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Award
          </div>
        </div>
      )}
      
      <div className="p-6">
        {/* Meta Line: Format · Topic · Region */}
        <div className="text-sm text-gray-500 mb-2">
          <span className="font-medium">{item.format}</span>
          {firstTopic && (
            <>
              <span className="mx-2">·</span>
              <span>{firstTopic}</span>
            </>
          )}
          <span className="mx-2">·</span>
          <span>{regionLabel}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif font-bold text-xl mb-2 line-clamp-2 group-hover:text-accent transition-colors">
          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {item.title}
          </Link>
        </h3>

        {/* Dek */}
        {item.dek && (
          <p className="text-gray-600 mb-4 line-clamp-2">{item.dek}</p>
        )}

        {/* Footer: Outlet + Year | Read story */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-500">
            <span className="font-medium">{item.outlet}</span>
            <span className="mx-2">·</span>
            <span>{item.year}</span>
          </div>
          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-accent hover:underline"
          >
            Read story
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

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
    <article className="group relative bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-accent hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
      {/* Thumbnail */}
      {item.imageUrl && (
        <div className="aspect-video bg-neutral-100 relative overflow-hidden">
          <img
            src={item.imageUrl}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-4 md:p-5 flex flex-col justify-between flex-1">
        {/* Award Badge - Inline */}
        {hasAward && (
          <span className="inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent mb-2 self-start">
            {item.award}
          </span>
        )}
        
        {/* Meta Line: Format · Topic · Region */}
        <div className="text-sm text-neutral-500 mb-2">
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
        <h3 className="font-serif font-bold text-xl mb-2 line-clamp-2 text-neutral-900">
          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            {item.title}
          </Link>
        </h3>

        {/* Dek */}
        {item.dek && (
          <p className="text-neutral-700 mb-4 line-clamp-2">{item.dek}</p>
        )}

        {/* Footer: Outlet + Year | Read story */}
        <div className="flex items-center justify-between pt-4 mt-auto border-t border-neutral-100">
          <div className="text-sm text-neutral-500">
            <span className="font-medium">{item.outlet}</span>
            <span className="mx-2">·</span>
            <span>{item.year}</span>
          </div>
          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
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

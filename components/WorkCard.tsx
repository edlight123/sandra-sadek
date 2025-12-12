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

  return (
    <article className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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

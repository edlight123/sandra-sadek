import Link from "next/link";
import { WorkItem } from "@/data/types";
import TagPill from "./TagPill";

interface WorkCardProps {
  item: WorkItem;
}

export default function WorkCard({ item }: WorkCardProps) {
  return (
    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {item.imageUrl && (
        <div className="aspect-video bg-gray-100 relative overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        {/* Outlet and Year */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span className="font-medium">{item.outlet}</span>
          <span>{item.year}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif font-bold text-xl mb-2 line-clamp-2">
          {item.title}
        </h3>

        {/* Dek */}
        {item.dek && (
          <p className="text-gray-600 mb-4 line-clamp-3">{item.dek}</p>
        )}

        {/* Topics */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.topics.slice(0, 3).map((topic) => (
            <TagPill key={topic} label={topic} />
          ))}
        </div>

        {/* Read Story Link */}
        <Link
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-accent hover:underline font-medium"
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}

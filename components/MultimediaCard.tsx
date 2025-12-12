import Link from "next/link";
import TagPill from "./TagPill";

interface MultimediaCardProps {
  type: 'Video' | 'Audio';
  platform: string;
  duration: string;
  title: string;
  description: string;
  topics: string[];
  url: string;
  thumbnailUrl?: string;
}

export default function MultimediaCard({
  type,
  platform,
  duration,
  title,
  description,
  topics,
  url,
  thumbnailUrl,
}: MultimediaCardProps) {
  return (
    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Thumbnail/Image */}
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
            {type === 'Audio' ? (
              <svg
                className="w-16 h-16 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
              </svg>
            ) : (
              <svg
                className="w-16 h-16 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
            )}
          </div>
        )}

        {/* Type Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
              type === 'Audio' ? 'bg-purple-600' : 'bg-red-600'
            }`}
          >
            {type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Row: Platform and Duration */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span className="font-medium">{platform}</span>
          <span>{duration}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif font-bold text-xl mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        {/* Topics */}
        <div className="flex flex-wrap gap-2 mb-4">
          {topics.map((topic) => (
            <TagPill key={topic} label={topic} />
          ))}
        </div>

        {/* View Button */}
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          View on {platform}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}

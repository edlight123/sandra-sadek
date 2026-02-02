'use client';

import { useState } from 'react';
import Image from 'next/image';
import TagPill from "./TagPill";
import { MultimediaKind, MultimediaPlatform } from "@/data/types";

interface MultimediaCardProps {
  kind: MultimediaKind;
  platform: MultimediaPlatform;
  duration: string;
  title: string;
  description: string;
  topics: string[];
  url: string;
}

// Helper to extract YouTube video ID
const getYouTubeId = (url: string) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
  return match ? match[1] : null;
};

// Helper to extract SoundCloud track ID
const getSoundCloudTrackId = (url: string) => {
  const match = url.match(/tracks\/(\d+)/);
  return match ? match[1] : null;
};

export default function MultimediaCard({
  kind,
  platform,
  duration,
  title,
  description,
  topics,
  url,
}: MultimediaCardProps) {
  const youtubeId = platform === 'YouTube' ? getYouTubeId(url) : null;
  const soundcloudId = platform === 'SoundCloud' ? getSoundCloudTrackId(url) : null;
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Embedded Player */}
      <div className={kind === 'video' ? 'aspect-video bg-gray-100' : 'h-32 bg-gray-100'}>
        {platform === 'YouTube' && youtubeId ? (
          isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?modestbranding=1&rel=0&autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <button
              onClick={() => setIsPlaying(true)}
              className="relative w-full h-full group cursor-pointer"
              aria-label={`Play ${title}`}
            >
              <Image
                src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          )
        ) : platform === 'SoundCloud' && soundcloudId ? (
          <iframe
            width="100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${soundcloudId}&color=%236366f1&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false`}
            title={title}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline font-medium"
            >
              View on {platform}
            </a>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Subtle Meta Line: Platform · Duration */}
        <div className="text-sm text-gray-500 mb-3">
          {platform} · {duration}
        </div>

        {/* Title */}
        <h3 className="font-serif font-bold text-xl mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        {/* Topics (excluding "Video" and "Audio") */}
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <TagPill key={topic} label={topic} />
          ))}
        </div>
      </div>
    </article>
  );
}

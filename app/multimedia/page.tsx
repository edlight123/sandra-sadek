"use client";

import { useMemo } from "react";
import PageHeader from "@/components/PageHeader";
import MultimediaCard from "@/components/MultimediaCard";
import { multimediaItems } from "@/data/multimedia";

export default function MultimediaPage() {
  // Separate items by kind
  const videoItems = useMemo(
    () => multimediaItems.filter((item) => item.kind === 'video'),
    []
  );

  const audioItems = useMemo(
    () => multimediaItems.filter((item) => item.kind === 'audio'),
    []
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageHeader
        title="Multimedia"
        subtitle="Audio and video journalism across platforms"
      />

      {/* Video Section */}
      {videoItems.length > 0 && (
        <section className="mb-16">
          <h2 className="font-serif font-bold text-3xl mb-4 border-b-2 border-accent pb-2">
            Video
          </h2>
          <p className="text-gray-600 mb-6">
            Produced three short features at the Craig Newmark Graduate School of Journalism.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videoItems.map((item) => (
              <MultimediaCard
                key={item.id}
                kind={item.kind}
                platform={item.platform}
                duration={item.duration}
                title={item.title}
                description={item.description}
                topics={item.topics}
                url={item.url}
              />
            ))}
          </div>
        </section>
      )}

      {/* Audio Section */}
      {audioItems.length > 0 && (
        <section>
          <h2 className="font-serif font-bold text-3xl mb-4 border-b-2 border-accent pb-2">
            Audio
          </h2>
          <p className="text-gray-600 mb-6">
            During my time at the Fort Worth Report, I had the opportunity to produce audio spots and features for KERA News, the local North Texas NPR affiliate station. I've also co-hosted a 30-minute live segment for CUNY's Audio Files.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {audioItems.map((item) => (
              <MultimediaCard
                key={item.id}
                kind={item.kind}
                platform={item.platform}
                duration={item.duration}
                title={item.title}
                description={item.description}
                topics={item.topics}
                url={item.url}
              />
            ))}
          </div>
        </section>
      )}

      {/* No Results */}
      {multimediaItems.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-gray-600 mb-4">No multimedia found</p>
        </div>
      )}
    </div>
  );
}

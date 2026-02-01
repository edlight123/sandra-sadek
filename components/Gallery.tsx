"use client";

import { useState } from "react";
import { PhotoImage } from "@/data/types";

interface GalleryProps {
  images: PhotoImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<PhotoImage | null>(null);

  return (
    <>
      {/* Gallery Grid - Single column for chronological storytelling with captions under each image */}
      <div className="space-y-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="max-w-4xl mx-auto"
          >
            <div
              className="relative bg-gray-100 cursor-pointer overflow-hidden rounded-lg group"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            {/* Caption directly under image */}
            <div className="mt-3 px-1">
              <p className="text-gray-700 text-base leading-relaxed">{image.caption}</p>
              <p className="text-sm text-gray-500 mt-1">
                {image.location} • {image.year}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <div className="max-w-6xl w-full">
            {/* Image */}
            <div className="bg-gray-800 mb-4 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>

            {/* Caption */}
            <div className="text-white">
              <p className="text-lg mb-2">{selectedImage.caption}</p>
              <p className="text-sm text-gray-300">
                {selectedImage.location} • {selectedImage.year}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

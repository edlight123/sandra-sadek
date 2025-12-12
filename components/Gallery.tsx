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
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] bg-gray-100 cursor-pointer overflow-hidden rounded-lg group"
            onClick={() => setSelectedImage(image)}
          >
            {/* Placeholder for image */}
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 group-hover:scale-105 transition-transform duration-300" />
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-4">
              <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                {image.location}
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
            <div className="aspect-video bg-gray-800 mb-4 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800" />
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

import { notFound } from "next/navigation";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import { photoProjects } from "@/data/photography";

export async function generateStaticParams() {
  return photoProjects.map((project) => ({
    slug: project.slug,
  }));
}

interface PhotoProjectPageProps {
  params: {
    slug: string;
  };
}

export default function PhotoProjectPage({ params }: PhotoProjectPageProps) {
  const project = photoProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Extract location and year range from images
  const locations = Array.from(
    new Set(project.images.map((img) => img.location))
  );
  const years = Array.from(new Set(project.images.map((img) => img.year)));
  const yearRange =
    years.length > 1
      ? `${Math.min(...years)}–${Math.max(...years)}`
      : years[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Link */}
      <Link
        href="/photography"
        className="inline-flex items-center text-accent hover:underline mb-8"
      >
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Photography
      </Link>

      {/* Project Hero */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-gray-600 mb-4 max-w-3xl">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {locations.join(", ")}
          </span>
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {yearRange}
          </span>
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {project.images.length} images
          </span>
        </div>
      </div>

      {/* Gallery */}
      <Gallery images={project.images} />
    </div>
  );
}

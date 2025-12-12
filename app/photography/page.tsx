import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { photoProjects } from "@/data/photography";

export default function PhotographyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageHeader
        title="Photography"
        subtitle="Visual stories from the field"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoProjects.map((project) => (
          <Link
            key={project.id}
            href={`/photography/${project.slug}`}
            className="group"
          >
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Cover Image */}
              <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 group-hover:scale-105 transition-transform duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif font-bold text-2xl mb-3 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center text-accent font-medium">
                  View gallery
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
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
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

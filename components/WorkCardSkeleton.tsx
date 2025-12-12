export default function WorkCardSkeleton() {
  return (
    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden animate-pulse">
      {/* Thumbnail Skeleton */}
      <div className="aspect-video bg-gray-200" />
      
      <div className="p-6">
        {/* Meta Line Skeleton */}
        <div className="h-4 bg-gray-200 rounded w-2/3 mb-3" />

        {/* Title Skeleton */}
        <div className="space-y-2 mb-3">
          <div className="h-6 bg-gray-300 rounded w-full" />
          <div className="h-6 bg-gray-300 rounded w-4/5" />
        </div>

        {/* Dek Skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-3/4" />
        </div>

        {/* Footer Skeleton */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="h-4 bg-gray-200 rounded w-1/3" />
          <div className="h-4 bg-gray-200 rounded w-1/4" />
        </div>
      </div>
    </article>
  );
}

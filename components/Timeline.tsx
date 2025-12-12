import { TimelineItem } from "@/data/types";

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 border-l-2 border-gray-200">
          {/* Year badge */}
          <div className="absolute -left-[1.875rem] top-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
            {item.year}
          </div>

          {/* Content */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-2">{item.title}</h4>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

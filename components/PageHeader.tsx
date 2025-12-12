interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="border-b border-gray-200 pb-8 mb-12">
      <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

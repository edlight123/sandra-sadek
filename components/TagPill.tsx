interface TagPillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function TagPill({ label, active, onClick }: TagPillProps) {
  const baseClasses = "inline-block px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200";
  const colorClasses = active
    ? "bg-accent text-white"
    : "bg-gray-100 text-gray-700 hover:bg-gray-200";
  const clickableClasses = onClick ? "cursor-pointer" : "";

  return (
    <span
      className={`${baseClasses} ${colorClasses} ${clickableClasses}`}
      onClick={onClick}
    >
      {label}
    </span>
  );
}

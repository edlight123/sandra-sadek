import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
}

export default function Grid({ children, columns = 3 }: GridProps) {
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${columnClasses[columns]} gap-6`}>
      {children}
    </div>
  );
}

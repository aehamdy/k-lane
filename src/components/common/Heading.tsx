import type { JSX } from "react";

interface HeadingProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export default function Heading({
  children,
  level = 1,
  className = "",
}: HeadingProps) {
  const Tag: keyof JSX.IntrinsicElements =
    `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={`${className}`}>{children}</Tag>;
}

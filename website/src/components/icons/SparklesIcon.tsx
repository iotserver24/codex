interface IconProps {
  className?: string;
  size?: number;
}

export function SparklesIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      <path d="M19 3v4" />
      <path d="M21 5h-4" />
      <path d="M5 3v4" />
      <path d="M7 5H3" />
      <path d="M19 17v4" />
      <path d="M21 19h-4" />
      <path d="M5 17v4" />
      <path d="M7 19H3" />
    </svg>
  );
}

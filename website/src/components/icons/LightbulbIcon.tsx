interface IconProps {
  className?: string;
  size?: number;
}

export function LightbulbIcon({ className = "", size = 24 }: IconProps) {
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
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15.45 15.4a6.5 6.5 0 0 0 1.05-3.4c0-3.6-2.9-6.5-6.5-6.5s-6.5 2.9-6.5 6.5c0 1.2.3 2.4.8 3.4" />
    </svg>
  );
}

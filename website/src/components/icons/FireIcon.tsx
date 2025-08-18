interface IconProps {
  className?: string;
  size?: number;
}

export function FireIcon({ className = "", size = 24 }: IconProps) {
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
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1.5-2.5S8 8.5 8 9c0 1.5 1 2.5 2.5 2.5z" />
      <path d="M14.5 9.5A2.5 2.5 0 0 0 12 12c0 1.38.5 2 1.5 2.5S16 15.5 16 15c0-1.5-1-2.5-2.5-2.5z" />
      <path d="M9 12c0 1.38.5 2 1.5 2.5S12 15.5 12 15c0-1.5-1-2.5-2.5-2.5S8 10.5 8 9c0 1.38.5 2 1.5 2.5S9 10.62 9 12z" />
      <path d="M12 12c0 1.38.5 2 1.5 2.5S15 15.5 15 15c0-1.5-1-2.5-2.5-2.5S10 10.5 10 9c0 1.38.5 2 1.5 2.5S12 10.62 12 12z" />
    </svg>
  );
}

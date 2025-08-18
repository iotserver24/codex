interface IconProps {
  className?: string;
  size?: number;
}

export function PartyIcon({ className = "", size = 24 }: IconProps) {
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
      <path d="M8 21h8" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
      <path d="M3 17h2c2 0 5 1 7 2 2-1 5-2 7-2h2" />
      <path d="M12 3a9 9 0 0 1 0 18" />
    </svg>
  );
}

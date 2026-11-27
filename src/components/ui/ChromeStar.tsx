import { useId } from "react";

export function ChromeStar({ size = 160, className = "" }: { size?: number; className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true" overflow="visible">
      <defs>
        <linearGradient id={`chrome-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.35" stopColor="#8a8a99" />
          <stop offset="0.55" stopColor="#ffffff" />
          <stop offset="1" stopColor="#3a3a4a" />
        </linearGradient>
        <filter id={`glow-${id}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path
        d="M50 2 C53 32 68 47 98 50 C68 53 53 68 50 98 C47 68 32 53 2 50 C32 47 47 32 50 2Z"
        fill="none" stroke={`url(#chrome-${id})`} strokeWidth="3.2" strokeLinejoin="round" filter={`url(#glow-${id})`}
      />
      <path
        d="M50 14 C52 36 64 48 86 50 C64 52 52 64 50 86 C48 64 36 52 14 50 C36 48 48 36 50 14Z"
        fill={`url(#chrome-${id})`} opacity="0.14"
      />
    </svg>
  );
}

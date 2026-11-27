import { useId } from "react";

interface ChromeStarProps {
  size?: number;
  className?: string;
  /** Tampilkan orbit putus-putus & titik konstelasi untuk kesan abstrak celestial */
  orbital?: boolean;
}

export function ChromeStar({
  size = 160,
  className = "",
  orbital = true,
}: ChromeStarProps) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
      overflow="visible"
    >
      <defs>
        <linearGradient id={`chrome-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.35" stopColor="#a6a6b8" />
          <stop offset="0.6" stopColor="#ffffff" />
          <stop offset="1" stopColor="#525266" />
        </linearGradient>
        <radialGradient id={`core-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id={`glow-${id}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Core ambient light */}
      <circle cx="60" cy="60" r="36" fill={`url(#core-${id})`} />

      {orbital && (
        <g className="origin-center animate-[spin_28s_linear_infinite]">
          {/* Cincin orbit putus-putus */}
          <circle
            cx="60"
            cy="60"
            r="48"
            fill="none"
            stroke="white"
            strokeOpacity="0.22"
            strokeWidth="0.9"
            strokeDasharray="2 5"
          />
          {/* Cincin halus eksentrik */}
          <circle
            cx="60"
            cy="60"
            r="35"
            fill="none"
            stroke="white"
            strokeOpacity="0.12"
            strokeWidth="0.7"
            strokeDasharray="34 18"
          />
          {/* Titik konstelasi pada orbit */}
          <circle cx="60" cy="12" r="2.2" fill="#fff" fillOpacity="0.85" />
          <circle cx="102" cy="84" r="1.5" fill="#fff" fillOpacity="0.6" />
          <rect
            x="16"
            y="38"
            width="3.2"
            height="3.2"
            transform="rotate(45 17.6 39.6)"
            fill="#fff"
            fillOpacity="0.75"
          />
        </g>
      )}

      {/* Garis diagonal tipis melintasi pusat */}
      <line
        x1="14"
        y1="106"
        x2="106"
        y2="14"
        stroke="white"
        strokeOpacity="0.16"
        strokeWidth="0.75"
        strokeDasharray="2 4"
      />

      {/* Needle-point 4-point starburst tajam */}
      <path
        d="M60 4 C61.2 44 76 58.8 116 60 C76 61.2 61.2 76 60 116 C58.8 76 44 61.2 4 60 C44 58.8 58.8 44 60 4Z"
        fill="none"
        stroke={`url(#chrome-${id})`}
        strokeWidth="1.6"
        strokeLinejoin="round"
        filter={`url(#glow-${id})`}
      />
      {/* Lapisan isi tipis */}
      <path
        d="M60 18 C61 48 72 59 102 60 C72 61 61 72 60 102 C59 72 48 61 18 60 C48 59 59 48 60 18Z"
        fill={`url(#chrome-${id})`}
        opacity="0.2"
      />
      {/* Bintang aksen kecil di sudut kanan atas */}
      <path
        d="M94 20 C94.5 24 96 25.5 100 26 C96 26.5 94.5 28 94 32 C93.5 28 92 26.5 88 26 C92 25.5 93.5 24 94 20Z"
        fill="#fff"
        fillOpacity="0.7"
      />
    </svg>
  );
}

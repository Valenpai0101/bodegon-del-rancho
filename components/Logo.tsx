import React from "react";

export const Logo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="100" cy="100" r="84" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1 5" />

    {/* Chef hat */}
    <path
      d="M76 78c-10-2-16-12-10-22 4-7 12-9 17-5 2-9 12-15 17-9 4-8 16-8 19 1 8-4 17 2 15 11 7 2 10 12 3 18-2 8-10 12-18 10-8 3-17 1-22-5-9 3-17-1-21-9z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
    />
    <path d="M70 80c0 4 2 8 6 9h48c4-1 6-5 6-9" fill="none" stroke="currentColor" strokeWidth="2.2" />

    {/* Face */}
    <circle cx="100" cy="104" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
    {/* Moustache */}
    <path
      d="M88 110c-4 3-9 2-11-1 3 1 6 0 7-2-3 1-6-1-6-4 4 2 7 1 9-1 2 3 1 6-1 7z"
      fill="currentColor"
    />
    <path
      d="M112 110c4 3 9 2 11-1-3 1-6 0-7-2 3 1 6-1 6-4-4 2-7 1-9-1-2 3-1 6 1 7z"
      fill="currentColor"
    />

    {/* Tray */}
    <ellipse cx="140" cy="140" rx="20" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M100 120c14 6 26 14 32 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M118 96c4 8 10 20 22 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

    {/* Curved text ring */}
    <defs>
      <path id="ringTop" d="M25 100a75 75 0 0 1 150 0" />
      <path id="ringBottom" d="M35 130a65 65 0 0 0 130 0" />
    </defs>
    <text fontSize="13" letterSpacing="3" fill="currentColor" fontFamily="var(--font-display), sans-serif">
      <textPath href="#ringTop" startOffset="50%" textAnchor="middle">
        EL BODEGON
      </textPath>
    </text>
    <text fontSize="9" letterSpacing="4" fill="currentColor" fontFamily="var(--font-display), sans-serif">
      <textPath href="#ringBottom" startOffset="50%" textAnchor="middle">
        DEL RANCHO · PILAR
      </textPath>
    </text>
  </svg>
);

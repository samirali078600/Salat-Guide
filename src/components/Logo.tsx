import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div
      className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-amber-300 shadow-md border border-emerald-700/60 transition-transform duration-200 group-hover:scale-105 ${sizeClasses[size]} ${className}`}
      aria-label="Salat Guide Logo"
    >
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4/5 h-4/5 drop-shadow-xs"
      >
        {/* Outer subtle decorative ring */}
        <circle
          cx="18"
          cy="18"
          r="16"
          stroke="#D4AF37"
          strokeWidth="0.8"
          strokeDasharray="2 2"
          className="opacity-40"
        />

        {/* Sacred Islamic Arch / Mihrab silhouette */}
        <path
          d="M 10 27 L 10 16 C 10 11.5 14 8 18 6 C 22 8 26 11.5 26 16 L 26 27 Z"
          fill="none"
          stroke="#F6E05E"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-90"
        />

        {/* Inner Arch Accent */}
        <path
          d="M 12.5 27 L 12.5 17.5 C 12.5 13.5 15.5 11 18 9.5 C 20.5 11 23.5 13.5 23.5 17.5 L 23.5 27"
          fill="none"
          stroke="#FEEBC8"
          strokeWidth="0.8"
          className="opacity-60"
        />

        {/* Crescent Moon (Hilal) */}
        <path
          d="M 19 13.5 C 17.2 13.5 15.8 14.8 15.8 16.5 C 15.8 18.2 17.2 19.5 19 19.5 C 19.4 19.5 19.8 19.4 20.2 19.2 C 18.8 20.2 16.8 19.8 16.2 18.2 C 15.7 16.8 16.5 15.1 18 14.6 C 18.3 14.5 18.7 14.5 19 14.6 Z"
          fill="#FAF089"
        />

        {/* Shining Five-pointed Star / Noor */}
        <polygon
          points="20.5,13 21,14.2 22.2,14.2 21.2,15 21.6,16.2 20.5,15.4 19.4,16.2 19.8,15 18.8,14.2 20,14.2"
          fill="#FEFCBF"
        />

        {/* Baseline Divider */}
        <line
          x1="8"
          y1="27"
          x2="28"
          y2="27"
          stroke="#D4AF37"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Small minaret tip */}
        <circle cx="18" cy="5.2" r="1" fill="#ECC94B" />
      </svg>
    </div>
  );
};

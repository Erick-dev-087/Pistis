import React from "react";

// Zero unicode emojis policy: All visual elements rendered as sharp SVGs
export function LaurelLogo({ className = "w-10 h-10 text-gold-500" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Left Laurel Branch */}
      <path
        d="M32 82C24 72 20 58 22 42C23 35 26 28 30 22C28 28 29 35 32 40C30 33 32 25 37 19C37 25 39 31 43 35C40 28 43 20 49 15C48 22 51 28 55 32"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M22 66C17 62 15 54 18 48C21 54 26 58 31 59" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M27 75C21 72 19 65 23 59C27 64 32 67 36 67" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Right Laurel Branch */}
      <path
        d="M68 82C76 72 80 58 78 42C77 35 74 28 70 22C72 28 71 35 68 40C70 33 68 25 63 19C63 25 61 31 57 35C60 28 57 20 51 15C52 22 49 28 45 32"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M78 66C83 62 85 54 82 48C79 54 74 58 69 59" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M73 75C79 72 81 65 77 59C73 64 68 67 64 67" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Monogram P in Center */}
      <path
        d="M44 38H53C57 38 60 41 60 45C60 49 57 52 53 52H44V68"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Base Ribbon */}
      <path d="M38 84C44 87 56 87 62 84" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-5 h-5 fill-current" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.677.15-.2.301-.777.98-.953 1.181-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.3-.501.101-.2.05-.376-.025-.527-.075-.15-.677-1.631-.928-2.235-.245-.588-.493-.508-.677-.518-.176-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.029-1.053 2.509 0 1.48 1.078 2.909 1.229 3.11.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.379.197 1.9.12.58-.087 1.78-.727 2.031-1.429.251-.702.251-1.304.176-1.43-.075-.125-.276-.2-.577-.35zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.176L2 22l4.98-1.385A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.62 0-3.125-.49-4.385-1.332l-.314-.21-2.955.821.838-2.88-.231-.334A8.167 8.167 0 013.8 12c0-4.522 3.678-8.2 8.2-8.2 4.522 0 8.2 3.678 8.2 8.2 0 4.522-3.678 8.2-8.2 8.2z" />
    </svg>
  );
}

export function CutleryIcon({ className = "w-5 h-5 text-current" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2v6c0 1.1-.9 2-2 2h-1V2" />
      <path d="M15 10v12" />
      <path d="M6 2v7a3 3 0 0 0 6 0V2" />
      <path d="M9 9v13" />
    </svg>
  );
}

export function StarIcon({ className = "w-4 h-4 fill-gold-500 text-gold-500" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

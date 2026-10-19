import React from "react";

export default function MarqueeTicker() {
  const statements = [
    "Fresh Farm-To-Table Ingredients",
    "Punctual Outside Catering Logistics",
    "Masterful Presentation & Chafing Displays",
    "Serving All 47 Counties in Kenya",
    "High Capacity Feasts (25 - 2,000+ Guests)",
    "Dedicated Floor Captains & Uniformed Staff",
    "Compassionate Memorial Care & Grand Weddings",
  ];

  return (
    <div className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-navy-950 py-3.5 overflow-hidden shadow-inner border-y border-gold-400 select-none">
      <div className="flex w-max animate-[marquee_35s_linear_infinite] gap-8 items-center text-xs sm:text-sm font-bold tracking-wider uppercase">
        {/* First repetition */}
        {statements.map((text, i) => (
          <div key={`s1-${i}`} className="flex items-center gap-6">
            <span>{text}</span>
            <span className="inline-block w-2 h-2 rounded-full bg-navy-950/60 shrink-0" />
          </div>
        ))}

        {/* Second repetition for seamless looping */}
        {statements.map((text, i) => (
          <div key={`s2-${i}`} className="flex items-center gap-6">
            <span>{text}</span>
            <span className="inline-block w-2 h-2 rounded-full bg-navy-950/60 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

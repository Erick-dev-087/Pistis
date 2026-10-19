import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-navy-950 text-gold-200 border-b border-gold-500/20 text-xs py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <div className="flex items-center gap-1.5 text-gold-300">
            <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span className="truncate">Opp. Imperial College, Near MKU Campus, Thika</span>
          </div>
          <span className="hidden md:inline text-gold-500/40">|</span>
          <div className="hidden md:flex items-center gap-1.5 text-gold-300">
            <Clock className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span>Serving All 47 Counties in Kenya</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <a
            href="tel:+254707926971"
            className="flex items-center gap-1.5 text-gold-100 hover:text-gold-400 transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>0707 926 971</span>
          </a>
          <span className="text-gold-500/40">•</span>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-3.5 py-1 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-navy-950 font-bold tracking-wider uppercase text-[10px] shadow-xs hover:shadow-gold-glow hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <span>Quick Quote</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./Icons";

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 backdrop-blur-lg border-t border-gold-500/30 p-2.5 px-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="tel:+254707926971"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-gold-100 border border-gold-500/20 text-xs font-semibold tracking-wide transition-colors"
        >
          <Phone className="w-4 h-4 text-gold-400" />
          <span>Call 0707 926 971</span>
        </a>

        <a
          href="https://wa.me/254707926971?text=Hello%20Pistis%20Caterers,%20I%20would%20like%20to%20inquire%20about%20catering%20services%20for%20my%20event."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-navy-950 text-xs font-bold tracking-wide shadow-md shadow-gold-500/20 active:scale-[0.98] transition-transform"
        >
          <WhatsAppIcon className="w-4 h-4 fill-navy-950" />
          <span>WhatsApp Quote</span>
        </a>
      </div>
    </div>
  );
}

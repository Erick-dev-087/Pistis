"use client";

import React from "react";
import { motion } from "framer-motion";
import { WhatsAppIcon } from "./Icons";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/254707926971?text=Hello%20Pistis%20Caterers,%20I%20would%20like%20to%20inquire%20about%20catering%20services%20for%20my%20event."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Consultation with Pistis Caterers — Ready to plan your event?"
      className="fixed bottom-20 md:bottom-8 right-5 z-50 flex items-center group focus:outline-none select-none"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        scale: { delay: 0.5, type: "spring", stiffness: 260, damping: 20 },
        opacity: { delay: 0.5, duration: 0.3 },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      {/* Revealed text alongside the icon on hover */}
      <div className="flex items-center mr-3 pointer-events-none transition-all duration-300 ease-out opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-x-0">
        <div className="relative bg-navy-950/95 backdrop-blur-md text-white py-2.5 px-4 rounded-2xl shadow-2xl border border-gold-500/40 flex items-center gap-3">
          <span className="flex h-2.5 w-2.5 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <div className="flex flex-col text-left whitespace-nowrap">
            <span className="text-xs sm:text-sm font-bold text-gold-200 tracking-wide">
              Ready to plan your event?
            </span>
            <span className="text-[10px] text-slate-300 font-medium">
              Chat instantly on WhatsApp
            </span>
          </div>
          {/* Arrow pointing towards the icon */}
          <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-navy-950/95 border-t border-r border-gold-500/40 rotate-45" />
        </div>
      </div>

      {/* Hovering Circular WhatsApp Icon */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#25D366] text-white shadow-xl shadow-emerald-600/35 border-2 border-white/80 group-hover:shadow-2xl group-hover:shadow-emerald-500/50 group-hover:scale-110 group-active:scale-95 transition-all duration-300">
        <WhatsAppIcon className="w-7 h-7 fill-white group-hover:rotate-12 transition-transform duration-300" />

        {/* Pulsing online badge indicator */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-80"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gold-400 border-2 border-navy-950"></span>
        </span>
      </div>
    </motion.a>
  );
}

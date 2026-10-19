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
      aria-label="Direct WhatsApp Consultation with Pistis Caterers"
      className="fixed bottom-20 md:bottom-8 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-navy-950 font-bold shadow-lg shadow-gold-500/25 hover:shadow-xl hover:shadow-gold-500/40 border border-white/40 transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        <WhatsAppIcon className="w-5 h-5 fill-navy-950 group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-navy-900 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-navy-950"></span>
        </span>
      </div>

      <div className="flex flex-col text-left">
        <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider text-navy-950 leading-none">
          WhatsApp Inquiry
        </span>
        <span className="hidden sm:inline text-[9px] text-navy-900/80 font-medium">
          Instant 1-Tap Response
        </span>
      </div>
    </motion.a>
  );
}

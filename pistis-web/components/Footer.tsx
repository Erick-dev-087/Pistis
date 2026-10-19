"use client";

import React from "react";
import Link from "next/link";
import { LaurelLogo, WhatsAppIcon } from "./Icons";
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-gold-500/20 pt-16 pb-24 md:pb-12 relative overflow-hidden">
      {/* Decorative ambient gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gold-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-navy-800">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center border border-gold-500/40 text-gold-400">
                <LaurelLogo className="w-9 h-9 text-gold-400" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  PISTIS <span className="text-gold-500 font-serif font-normal italic">Caterers</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gold-300 font-semibold">
                  Taste, Our Passion
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Premier outside catering house rooted in Thika and serving prestigious events across all 47 counties of Kenya. Crafted with culinary discipline, farm-fresh ingredients, and authentic hospitality.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-gold-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Certified Hygiene & High-Capacity Logistics</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-4 pb-1 border-b border-gold-500/20 inline-block font-sans">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-gold-500/60" />
                  <span>The Pistis Story</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-gold-500/60" />
                  <span>Catering Disciplines</span>
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-gold-500/60" />
                  <span>Curated Menus & Buffets</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-gold-500/60" />
                  <span>Our Heritage & Chefs</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-gold-500/60" />
                  <span>Event Setup Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-gold-500/60" />
                  <span>Request Custom Quote</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Catering Disciplines */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-4 pb-1 border-b border-gold-500/20 inline-block font-sans">
              Disciplines
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                <span>Corporate Summits & Lunches</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                <span>Grand Wedding Receptions</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                <span>Milestone Birthdays & Graduations</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                <span>Dignified Memorials & Burials</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                <span>Artisanal Canapés & Fruit Platters</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                <span>Outside Catering Across All Counties</span>
              </li>
            </ul>
          </div>

          {/* Contact & Consultation */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-4 pb-1 border-b border-gold-500/20 inline-block font-sans">
              Headquarters
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
                <span className="text-slate-300">
                  Mapema Accommodation, Opposite Imperial College / Next to MKU Main Campus, Thika, Kenya
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="tel:+254707926971" className="hover:text-gold-400 transition-colors text-white font-medium">
                  +254 707 926 971 / 070926971
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="mailto:pistisjoint@gmail.com" className="hover:text-gold-400 transition-colors text-slate-300">
                  pistisjoint@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="text-slate-400">Available 7 Days a Week for Bookings</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/254707926971?text=Hello%20Pistis%20Caterers,%20I%20would%20like%20to%20inquire%20about%20catering%20services%20for%20my%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wide hover:shadow-gold-glow transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-navy-950" />
                <span>Inquire via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Pistis Caterers & Services. All Rights Reserved.</p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Rooted in Thika</span>
            <span className="text-gold-500">•</span>
            <span>Serving All 47 Counties of Kenya</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

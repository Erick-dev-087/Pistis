"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LaurelLogo, WhatsAppIcon } from "./Icons";
import { Menu, X, Phone, ArrowRight, MapPin } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Curated Menus", href: "/menu" },
    { name: "Our Story", href: "/about" },
    { name: "Event Gallery", href: "/gallery" },
    { name: "Contact & Booking", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gold-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-navy-950 flex items-center justify-center border border-gold-500/40 text-gold-400 group-hover:scale-105 transition-transform duration-300 shadow-sm">
              <LaurelLogo className="w-8 h-8 text-gold-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-navy-950 leading-tight">
                PISTIS <span className="text-gold-600 font-serif font-normal italic">Caterers</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                Culinary Excellence • Kenya
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 relative ${
                    active
                      ? "text-navy-950 font-bold bg-gold-50 border border-gold-300/80"
                      : "text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gold-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/254707926971?text=Hello%20Pistis%20Caterers,%20I%20would%20like%20to%20inquire%20about%20catering%20services%20for%20my%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-navy-950 font-semibold text-xs tracking-wide uppercase shadow-sm hover:shadow-gold-glow hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 fill-navy-950" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://wa.me/254707926971?text=Hello%20Pistis%20Caterers,%20I%20would%20like%20to%20inquire%20about%20catering%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gold-100 text-gold-700 border border-gold-300"
              aria-label="WhatsApp Pistis"
            >
              <WhatsAppIcon className="w-4 h-4 fill-gold-700" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-slate-100 text-navy-950 hover:bg-gold-50 focus:outline-hidden transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-gold-200/80 bg-white/98 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-3">
            <div className="grid gap-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      active
                        ? "bg-gold-100 text-navy-950 font-bold border-l-4 border-gold-600"
                        : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-gold-600 opacity-60" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <a
                href="https://wa.me/254707926971?text=Hello%20Pistis%20Caterers,%20I%20would%20like%20to%20inquire%20about%20catering%20services%20for%20my%20event."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-navy-950 font-bold text-sm shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 fill-navy-950" />
                <span>Chat on WhatsApp Directly</span>
              </a>

              <a
                href="tel:+254707926971"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-navy-900/20 text-navy-950 font-medium text-sm hover:bg-slate-50"
              >
                <Phone className="w-4 h-4 text-gold-600" />
                <span>Call 0707 926 971</span>
              </a>

              <div className="text-center text-xs text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                <MapPin className="w-3.5 h-3.5 text-gold-600" />
                <span>Mapema Accommodation, Next to MKU Thika</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LaurelLogo, WhatsAppIcon } from "@/components/Icons";
import {
  X,
  Users,
  MapPin,
  ArrowRight,
  Maximize2,
  Calendar,
  CheckCircle2
} from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "garden" | "chafing" | "platters" | "team";
  image: string;
  aspect: string;
  tag: string;
  guestCount: string;
  location: string;
  description: string;
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filters = [
    { id: "all", label: "All Setups" },
    { id: "garden", label: "Garden & Outdoor Buffets" },
    { id: "chafing", label: "Gold Chafing Warmers" },
    { id: "platters", label: "Fruit & Platter Displays" },
    { id: "team", label: "The Team in Action" },
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: "garden-outdoor-buffet",
      title: "Outdoor Garden Banquet & Salad Presentation",
      category: "garden",
      image: "/media/Event.jpg",
      aspect: "aspect-4/3",
      tag: "Garden Wedding",
      guestCount: "500 Guests",
      location: "Limuru Tea Farm Grounds",
      description:
        "Full outdoor garden buffet station with crisp white table linens, glass salad bowls, fresh tossed slaw, and hot chafing lines set under marquee tents.",
    },
    {
      id: "gold-chafing-line",
      title: "Gleaming Gold Chafing Warmers & Roasted Feasts",
      category: "chafing",
      image: "/media/Food.jpg",
      aspect: "aspect-16/11",
      tag: "Executive Buffet",
      guestCount: "350 Attendees",
      location: "Safari Park Hotel Pavilion, Nairobi",
      description:
        "Signature golden stainless chafing dishes keeping herb-marinated chicken roasts and slow-braised rosemary beef piping hot throughout the conference lunch.",
    },
    {
      id: "culinary-close-up",
      title: "Hearty Rosemary Beef Stew & Traditional Feasts",
      category: "chafing",
      image: "/media/food_2.jpg",
      aspect: "aspect-4/3",
      tag: "Heritage Stews",
      guestCount: "800 Mourners",
      location: "Murang'a Memorial Ceremony",
      description:
        "Rich, tender beef cuts slow-simmered in aromatic vegetables and pan gravy, ready to nourish large family gatherings with warmth and dignity.",
    },
    {
      id: "services-layout",
      title: "Full Banquet Table Settings & Service Line",
      category: "garden",
      image: "/media/Services.jpg",
      aspect: "aspect-16/10",
      tag: "Corporate Luncheon",
      guestCount: "250 Guests",
      location: "Thika Greens Golf Resort",
      description:
        "Elegant banquet layout with melamine and porcelain dinnerware, organized condiment stations, and polished cutlery.",
    },
    {
      id: "pistis-chefs-crew",
      title: "Pistis Head Chefs & Uniformed Catering Personnel",
      category: "team",
      image: "/media/Who_we_Are.jpg",
      aspect: "aspect-4/3",
      tag: "Culinary Crew",
      guestCount: "Professional Staff",
      location: "Mapema Kitchen Headquarters, Thika",
      description:
        "Our proud kitchen brigade in crisp chef jackets, accompanied by floor attendants trained to deliver attentive, respectful Kenyan hospitality.",
    },
    {
      id: "cocktail-platters-display",
      title: "Artisanal Canapés & Fiesta Snack Platters",
      category: "platters",
      image: "/media/more_food.jpg",
      aspect: "aspect-16/11",
      tag: "Cocktail Hours",
      guestCount: "150 Delegates",
      location: "Nairobi Innovation Hub",
      description:
        "Bespoke finger foods, cocktail taco bites, crispy vegetable samosas, and house-made dipping salsas for evening corporate networking.",
    },
    {
      id: "mobile-dispatch-van",
      title: "Outside Catering Mobile Van & Dispatch Setup",
      category: "team",
      image: "/media/services_more.jpg",
      aspect: "aspect-16/10",
      tag: "Countrywide Logistics",
      guestCount: "All 47 Counties",
      location: "Dispatch Hub, Thika",
      description:
        "Pistis Outside Catering transport vehicle loaded with thermal food carriers, chafing fuel, and equipment for long-distance event delivery.",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Header */}
      <section className="pt-14 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gold-200/80">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold-100 text-gold-800 text-xs font-bold uppercase tracking-wider">
            <span>Visual Portfolio</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-950 tracking-tight leading-tight">
            Moments of Celebration & Culinary Craftsmanship
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Every celebration we cater leaves an indelible memory of warmth, flavor, and elegance. Browse our past buffet installations, golden chafing lines, and the team in action.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filters.map((f) => {
            const active = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  active
                    ? "bg-gold-500 text-navy-950 font-bold shadow-md shadow-gold-500/20"
                    : "bg-white text-slate-700 border border-gold-200 hover:bg-slate-50"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-6 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="bg-white rounded-3xl overflow-hidden border border-gold-200/80 shadow-xs hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex items-center gap-2 text-white text-xs font-bold">
                    <Maximize2 className="w-4 h-4 text-gold-400" />
                    <span>View Setup Details</span>
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-navy-950/90 text-gold-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-xs border border-gold-500/30">
                  {item.tag}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-serif text-lg font-bold text-navy-950 group-hover:text-gold-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-gold-600" />
                    <span>{item.guestCount}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gold-600" />
                    <span className="truncate max-w-[140px]">{item.location}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-gold-300 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-navy-950/80 text-white flex items-center justify-center hover:bg-navy-950 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-16/10 w-full bg-slate-900">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-navy-950 text-gold-400 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-gold-500/30">
                {activeModalItem.tag}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-navy-950">
                  {activeModalItem.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-2">
                  <span className="flex items-center gap-1.5 font-medium text-navy-950 bg-gold-100 px-2.5 py-1 rounded-md">
                    <Users className="w-3.5 h-3.5 text-gold-700" />
                    <span>{activeModalItem.guestCount}</span>
                  </span>
                  <span className="flex items-center gap-1.5 font-medium text-navy-950 bg-gold-100 px-2.5 py-1 rounded-md">
                    <MapPin className="w-3.5 h-3.5 text-gold-700" />
                    <span>{activeModalItem.location}</span>
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeModalItem.description}
              </p>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3 justify-between">
                <span className="text-xs text-slate-500">
                  Want a similar setup for your event?
                </span>

                <a
                  href={`https://wa.me/254707926971?text=Hello%20Pistis%20Caterers,%20I%20am%20interested%20in%20a%20setup%20like%20'${encodeURIComponent(activeModalItem.title)}'%20for%20my%20event.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wide shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-navy-950" />
                  <span>Inquire for This Setup on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

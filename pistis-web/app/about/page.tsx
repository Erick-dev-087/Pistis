"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LaurelLogo, WhatsAppIcon } from "@/components/Icons";
import {
  ShieldCheck,
  Award,
  Heart,
  Users,
  CheckCircle2,
  MapPin,
  Clock,
  ArrowRight,
  Leaf
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Pistis (Fidelity & Trust)",
      description:
        "Rooted in the ancient Greek principle of 'Pistis'—representing faithful commitment, unyielding trust, and dependability. When we commit to an event date, our hosts can breathe entirely easy.",
      icon: ShieldCheck,
    },
    {
      title: "Farm-to-Table Freshness",
      description:
        "We source premium grass-fed beef, poultry, and highland crisp vegetables directly from certified farms across Kiambu and central Kenya, ensuring uncompromised nutritional vitality.",
      icon: Leaf,
    },
    {
      title: "Culinary Discipline & Hygiene",
      description:
        "Every batch of food is prepared in immaculate, commercially inspected kitchens under strict temperature regulation, guaranteeing safety, freshness, and pristine presentation.",
      icon: Award,
    },
    {
      title: "Genuine Kenyan Hospitality",
      description:
        "Our uniformed banquet attendants and floor captains are trained not just to serve food, but to make every guest feel honored, respected, and welcomed like cherished family.",
      icon: Heart,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* SECTION 1: FOOD BACKGROUND WITH FROSTED SCRIM (USER'S EXPLICIT FEATURE) */}
      <section className="relative min-h-[75vh] flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Full-bleed Food Photography Background with Fixed / Parallax Feel */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/food_2.jpg"
            alt="Pistis Culinary Craftsmanship Feast Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          {/* Deep Navy Scrim Overlay with Frosted Blur */}
          <div className="absolute inset-0 bg-navy-950/85 backdrop-blur-[3px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/80" />
        </div>

        {/* Foreground Content: Frosted Glassmorphic Story Card */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold-400/40 text-gold-300 text-xs font-bold uppercase tracking-widest shadow-xl">
            <LaurelLogo className="w-5 h-5 text-gold-400" />
            <span>Rooted in Thika • Catering Across Kenya</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
            A Decade of Culinary Discipline and Uncompromising Passion
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-sans">
            We are Pistis Caterers. We believe that catering is not a mere transaction of food, but a sacred covenant of hospitality between the host and their honored guests.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/254707926971?text=Hello%20Pistis%20Caterers,%20I%20would%20like%20to%20learn%20more%20about%20your%20story%20and%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wide shadow-lg hover:shadow-gold-glow transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 fill-navy-950" />
              <span>Talk to Our Executive Chef</span>
            </a>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wide border border-white/20 backdrop-blur-md transition-all"
            >
              <span>View Past Event Setups</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE HERITAGE & ORIGIN STORY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold-100 text-gold-800 text-xs font-bold uppercase tracking-wider">
              <span>The Journey of Pistis</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 leading-tight">
              From Humble Beginnings in Thika to Outside Catering Across 47 Counties
            </h2>

            <p className="text-slate-600 leading-relaxed text-base">
              Pistis Caterers began with a single steadfast conviction: that Kenyan events deserved catering that combined the soulful authenticity of traditional recipes with the punctuality and elegance of international hospitality standards.
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              Headquartered at Mapema Accommodation, near Imperial College and Mount Kenya University in Thika, our central production kitchen and logistics hub coordinate outside catering for events of every magnitude—from 30-person intimate family dinners to 5,000-person memorial assemblies.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-gold-300 shadow-sm space-y-2">
              <span className="font-serif italic text-gold-700 text-lg block font-semibold">
                &quot;Food is the memory guests take home. We make sure that memory is golden.&quot;
              </span>
              <span className="text-xs font-bold text-navy-950 uppercase tracking-wider block">
                — Pistis Executive Management
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-300 aspect-4/3">
              <Image
                src="/media/Who_we_Are.jpg"
                alt="Pistis Dedicated Catering Team in Uniform"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold tracking-wider text-gold-400 block">
                  The Hands Behind Your Feast
                </span>
                <span className="font-serif text-xl font-bold block mt-1">
                  Lead Chefs, Attentive Floor Staff & Dispatch Drivers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE PILLARS & VALUES */}
      <section className="py-20 bg-white border-t border-gold-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
              Uncompromising Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
              The Four Cornerstones of Pistis
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every banquet, buffet line, and plate leaving our kitchen is held to rigorous benchmarks of excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-8 rounded-3xl bg-[#FAF8F5] border border-gold-200/80 shadow-xs hover:shadow-lg transition-all flex gap-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gold-400 text-navy-950 flex items-center justify-center shrink-0 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-navy-950">
                      {val.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUTSIDE CATERING FLEET & REACH */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-navy-950 text-white p-8 sm:p-12 lg:p-16 border border-gold-500/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Geographic Scope</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Fully Mobile Outside Catering Logistics
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether your venue is an outdoor tea farm in Limuru, a conference auditorium in Westlands Nairobi, a private residence in Machakos, or a memorial ground in Murang&apos;a—our dedicated outside catering vans transport hot food containers, golden chafing displays, and serving teams directly to your doorstep.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 text-xs">
                <div className="p-3 rounded-xl bg-navy-900 border border-navy-800">
                  <span className="font-bold text-gold-400 block text-sm">Thika & Kiambu</span>
                  <span className="text-slate-400">Same-Day Logistics</span>
                </div>
                <div className="p-3 rounded-xl bg-navy-900 border border-navy-800">
                  <span className="font-bold text-gold-400 block text-sm">Nairobi Metro</span>
                  <span className="text-slate-400">Corporate & Events</span>
                </div>
                <div className="p-3 rounded-xl bg-navy-900 border border-navy-800">
                  <span className="font-bold text-gold-400 block text-sm">All 47 Counties</span>
                  <span className="text-slate-400">Countrywide Reach</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-16/11 rounded-2xl overflow-hidden border border-gold-500/40 shadow-xl">
                <Image
                  src="/media/services_more.jpg"
                  alt="Pistis Outside Catering Mobile Dispatch Van"
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

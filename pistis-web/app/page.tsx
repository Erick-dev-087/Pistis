"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MarqueeTicker from "@/components/MarqueeTicker";
import { LaurelLogo, WhatsAppIcon, StarIcon, CutleryIcon } from "@/components/Icons";
import {
  Calendar,
  Users,
  ShieldCheck,
  MapPin,
  Clock,
  ArrowRight,
  Phone,
  CheckCircle2,
  Award,
  Heart,
  Briefcase,
  GraduationCap
} from "lucide-react";

export default function HomePage() {
  const pillars = [
    {
      title: "Corporate Summits & Conferences",
      subtitle: "Executive VIP Buffets & Boardroom Service",
      description:
        "Full-day conference catering, morning tea with pastries, hot executive buffets, and prompt logistics tailored for corporate schedules.",
      icon: Briefcase,
      tag: "Corporate Excellence",
      capacity: "50 - 2,500+ Attendees",
    },
    {
      title: "Weddings & Grand Receptions",
      subtitle: "Unforgettable Banquets for Your Big Day",
      description:
        "Golden chafing lines, tiered fruit displays, bridal party plated dining, and courteous uniformed service ensuring pure celebration.",
      icon: Heart,
      tag: "Romantic Banquets",
      capacity: "100 - 3,000+ Guests",
    },
    {
      title: "Milestones & Celebrations",
      subtitle: "Birthdays, Graduations & Family Feasts",
      description:
        "From vibrant graduation parties to intimate family reunions, savor artisanal roasts, fragrant pilau, and delightful cocktail platters.",
      icon: GraduationCap,
      tag: "Joyous Gatherings",
      capacity: "25 - 500+ Guests",
    },
    {
      title: "Dignified Memorials & Burials",
      subtitle: "Compassionate, Stress-Free Catering",
      description:
        "High-volume, seamless catering delivered with solemn respect and care, ensuring family and arriving mourners are fed warmly without burden.",
      icon: ShieldCheck,
      tag: "Compassionate Care",
      capacity: "100 - 5,000+ Guests",
    },
  ];

  const signatureDishes = [
    {
      title: "Slow-Braised Rosemary Beef",
      category: "Signature Stews",
      badge: "Chef's Table Pick",
      description:
        "Tender grass-fed beef slow-simmered in rich rosemary pan jus with caramelized onions, carrots, and sweet bell peppers.",
      image: "/media/food_2.jpg",
      tags: ["Slow Braised", "Farm Fresh", "Kenyan Heritage"],
    },
    {
      title: "Executive Golden Banquet Line",
      category: "Grand Buffets",
      badge: "Crowd Favorite",
      description:
        "Gleaming chafing displays loaded with spiced chicken roast, aromatic beef stew, fragrant vegetable rice, and fresh tossed greens.",
      image: "/media/Food.jpg",
      tags: ["Multi-Protein", "Golden Chafing", "Hot Service"],
    },
    {
      title: "Garden Salad & Fresh Buffet Accents",
      category: "Accompaniments",
      badge: "Organic Farm-Sourced",
      description:
        "Crisp garden slaw, sweet corn salads, sautéed greens, and seasoned accompaniments prepared fresh on-site for peak flavor.",
      image: "/media/Event.jpg",
      tags: ["Fresh Veggies", "Zesty Dressing", "Crisp Texture"],
    },
  ];

  const testimonials = [
    {
      quote:
        "Pistis catered our 450-person corporate leadership summit in Thika. The food was hot, exceptionally flavorful, and served with incredible speed and grace. The gold chaffing display elevated our entire stage.",
      author: "David K. Mwangi",
      role: "Lead Event Coordinator, Regional Summit",
      event: "Corporate Summit (450 Guests)",
    },
    {
      quote:
        "For our wedding in Kiambu, we wanted food our guests would talk about for years. Pistis delivered beyond expectations! The beef stew and pilau were legendary, and the staff were polite and well-groomed.",
      author: "Faith & Brian Nderitu",
      role: "Bride & Groom",
      event: "Garden Wedding (600 Guests)",
    },
    {
      quote:
        "During our grandfather’s memorial service, Pistis took total charge of the catering. Over 1,200 people were served warm meals seamlessly. Their compassion and reliability gave our family peace of mind.",
      author: "Wanjiru Kariuki",
      role: "Family Committee Chair",
      event: "Memorial Gathering (1,200 Guests)",
    },
  ];

  return (
    <div className="space-y-0">
      {/* CHAPTER 1: THE OVERTURE (HERO NARRATIVE) */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-[#FAF8F5] via-[#F3EFEA] to-[#FAF8F5] pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Soft background accents */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          {/* Left Column: Narrative Headline */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Heritage Badge with Laurel SVG */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gold-300 shadow-xs text-navy-950 text-xs font-semibold">
              <LaurelLogo className="w-5 h-5 text-gold-600" />
              <span className="tracking-wide uppercase text-[11px] text-slate-800">
                10+ Years of Culinary Prestige in Kenya
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-950 leading-[1.12]">
              Where Taste Meets Passion.{" "}
              <span className="block mt-2 font-serif italic text-gold-600">
                Unforgettable Catering Across Kenya.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              From corporate executive summits in Nairobi and lavish garden weddings in Kiambu, to dignified memorials and family milestones—Pistis delivers immaculate culinary discipline, gleaming golden chafing displays, and authentic Kenyan warmth.
            </p>

            {/* Quick Proof Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="p-3 rounded-xl bg-white/80 border border-gold-200/80 shadow-xs">
                <span className="font-serif text-2xl font-bold text-navy-950 block">2,000+</span>
                <span className="text-[11px] text-slate-500 font-medium">Guest Capacity</span>
              </div>
              <div className="p-3 rounded-xl bg-white/80 border border-gold-200/80 shadow-xs">
                <span className="font-serif text-2xl font-bold text-navy-950 block">47</span>
                <span className="text-[11px] text-slate-500 font-medium">Counties Covered</span>
              </div>
              <div className="p-3 rounded-xl bg-white/80 border border-gold-200/80 shadow-xs">
                <span className="font-serif text-2xl font-bold text-navy-950 block">100%</span>
                <span className="text-[11px] text-slate-500 font-medium">Farm-To-Table</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="https://wa.me/254707926971?text=Hello%20Pistis%20Caterers,%20I%20would%20like%20to%20request%20a%20quote%20for%20an%20upcoming%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-navy-950 font-bold text-sm tracking-wide shadow-md hover:shadow-gold-glow hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <WhatsAppIcon className="w-5 h-5 fill-navy-950" />
                <span>Instant WhatsApp Consultation</span>
              </a>

              <Link
                href="/menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-slate-50 text-navy-950 font-semibold text-sm border border-gold-300 shadow-xs hover:border-gold-500 transition-all"
              >
                <span>Explore Curated Menus</span>
                <ArrowRight className="w-4 h-4 text-gold-600" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Visual Composition with real photography */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image: Golden Chafing Line */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-300/80 aspect-4/3 sm:aspect-16/11">
                <Image
                  src="/media/Food.jpg"
                  alt="Pistis Caterers Golden Chafing Dishes and Kenyan Feast"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 block">
                    Authentic Gastronomy
                  </span>
                  <span className="font-serif text-lg font-bold">
                    Signature Golden Chafing Buffets
                  </span>
                </div>
              </div>

              {/* Secondary Floating Card: Garden Banquet */}
              <div className="absolute -bottom-8 -left-6 z-20 w-48 sm:w-56 rounded-xl overflow-hidden shadow-xl border-2 border-white bg-white hidden sm:block">
                <div className="relative h-28 w-full">
                  <Image
                    src="/media/Event.jpg"
                    alt="Outdoor Garden Catering Setup"
                    fill
                    sizes="250px"
                    className="object-cover"
                  />
                </div>
                <div className="p-2.5">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-navy-950">
                    <span>Garden Setups</span>
                  </div>
                  <p className="text-[10px] text-slate-500">Immaculate table drapes & salads</p>
                </div>
              </div>

              {/* Floating Chef Badge */}
              <div className="absolute -top-4 -right-4 z-20 bg-navy-950 text-gold-300 p-3.5 rounded-2xl shadow-xl border border-gold-500/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500 text-navy-950 flex items-center justify-center font-bold font-serif">
                  <CutleryIcon className="w-5 h-5 text-navy-950" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 block">
                    Master Chefs
                  </span>
                  <span className="text-xs font-bold text-white">Authentic Kenyan Flavors</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CHAPTER 2: THE CREDO (GOLD MARQUEE TICKER) */}
      <MarqueeTicker />

      {/* CHAPTER 3: THE FOUR PILLARS OF SERVICE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold-100 text-gold-800 text-xs font-bold uppercase tracking-wider">
            <span>Core Catering Disciplines</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950">
            Tailored Dining Experiences for Every Milestone
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            No matter the scale or formality of your occasion, Pistis brings culinary artistry, seamless equipment logistics, and heartfelt service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                className="bg-white rounded-2xl p-6 border border-gold-200/80 shadow-xs hover:shadow-xl hover:border-gold-400 transition-all duration-300 flex flex-col justify-between group"
                whileHover={{ y: -6 }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gold-100/80 text-navy-950 flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-gold-700 group-hover:text-navy-950 transition-colors" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      {pillar.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-navy-950 group-hover:text-gold-700 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-gold-600 mt-0.5">{pillar.subtitle}</p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">{pillar.capacity}</span>
                  <Link
                    href="/services"
                    className="font-bold text-navy-950 hover:text-gold-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-950 text-gold-300 hover:text-white font-semibold text-sm transition-colors"
          >
            <span>Explore All Services & Logistics Packages</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </section>

      {/* CHAPTER 4: THE GASTRONOMY EXPERIENCE (CURATED DISH PREVIEW) */}
      <section className="py-20 bg-gradient-to-b from-[#F3EFEA] to-[#FAF8F5] px-4 sm:px-6 lg:px-8 border-y border-gold-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-script text-2xl text-gold-600 block mb-1">
                Handcrafted With Care
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
                A Symphony of Fresh Kenyan Flavors
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                We believe exceptional catering starts in the soil. Fresh farm-sourced meats, crisp garden vegetables, and aromatic spices cooked with precision.
              </p>
            </div>

            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gold-300 text-navy-950 font-bold text-xs uppercase tracking-wider hover:border-gold-500 transition-colors shrink-0 shadow-xs self-start md:self-end"
            >
              <span>View Full Menu Catalog</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-600" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureDishes.map((dish, i) => (
              <div
                key={dish.title}
                className="bg-white rounded-2xl overflow-hidden border border-gold-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-navy-950/90 text-gold-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-xs border border-gold-500/30">
                    {dish.badge}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600">
                      {dish.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-navy-950">
                      {dish.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {dish.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={`https://wa.me/254707926971?text=Hello%20Pistis%20Caterers,%20I%20am%20interested%20in%20having%20the%20${encodeURIComponent(dish.title)}%20at%20my%20event.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gold-100 hover:bg-gold-500 text-navy-950 text-xs font-bold transition-colors"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-navy-950" />
                      <span>Inquire About This Dish</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 5: THE HUMAN WARMTH & HERITAGE TEASER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo Collage */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-300 aspect-16/10">
              <Image
                src="/media/Who_we_Are.jpg"
                alt="Pistis Caterers Professional Staff and Chefs"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 block">
                  The Pistis Team
                </span>
                <span className="font-serif text-lg font-bold">
                  Chefs, Logistics Crew & Courteous Floor Staff
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-md aspect-16/9 border border-gold-200">
                <Image
                  src="/media/services_more.jpg"
                  alt="Outside Catering Mobile Dispatch Van and Setup"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
              <div className="p-4 rounded-xl bg-gold-100/70 border border-gold-300 flex flex-col justify-center">
                <span className="font-serif text-2xl font-bold text-navy-950">100%</span>
                <span className="text-xs text-slate-700 font-medium">
                  Outside Catering Fleet & Hot-Chaffing Logistics
                </span>
              </div>
            </div>
          </div>

          {/* Story Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-bold uppercase tracking-wider">
              <LaurelLogo className="w-4 h-4 text-gold-700" />
              <span>Our Culinary Ethos</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
              &quot;We treat every event as if we are feeding our own family.&quot;
            </h2>

            <p className="text-slate-600 leading-relaxed text-base">
              Founded in Thika, Pistis draws its name from the ancient Greek ideal of <em>fidelity, trust, and unwavering reliability</em>. For over a decade, we have built a reputation not just on delicious food, but on impeccable timekeeping, spotless hygiene, and the kind of gracious hospitality that puts hosts completely at ease.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-navy-950">Immaculate Temperature Regulation</h4>
                  <p className="text-xs text-slate-600">Hot meals stay steaming hot from the first guest to the final plate.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-navy-950">Uniformed & Gracious Service Team</h4>
                  <p className="text-xs text-slate-600">Professional floor captains, table servers, and clean-up crews.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-navy-950">Turnkey Outside Catering Equipment</h4>
                  <p className="text-xs text-slate-600">Complete setups with golden chafing warmers, porcelain dinnerware, and crisp linens.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-gold-700 hover:text-gold-800"
              >
                <span>Read the full story of Pistis Caterers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 6: WORDS OF TRUST (TESTIMONIALS) */}
      <section className="py-20 bg-navy-950 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-navy-800 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider">
              <span>Client Endorsements</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Trusted by Hosts Across Kenya
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Hear firsthand from conference planners, wedding couples, and families who placed their milestone moments in our hands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-navy-900/90 border border-gold-500/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-gold-500/50 transition-colors shadow-lg"
              >
                <div className="space-y-4">
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed italic">
                    &quot;{t.quote}&quot;
                  </p>
                </div>

                <div className="pt-4 border-t border-navy-800">
                  <h4 className="font-bold text-sm text-white">{t.author}</h4>
                  <p className="text-xs text-gold-400">{t.role}</p>
                  <span className="inline-block mt-2 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-navy-800 text-slate-300 border border-navy-700">
                    {t.event}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 7: THE INVITATION & DIRECT CONSULTATION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-tr from-gold-600 via-gold-500 to-gold-400 p-8 sm:p-12 lg:p-16 text-navy-950 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-navy-900/80 block">
                Let Us Elevate Your Next Feast
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Planning an Event? Let&apos;s Craft a Custom Catering Package Today.
              </h2>
              <p className="text-base text-navy-950/80 max-w-2xl font-medium">
                Connect directly with our head event manager on WhatsApp. Tell us your date, location, and guest count for an immediate tailored menu proposal.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold">
                <span className="flex items-center gap-1.5 bg-navy-950/10 px-3 py-1.5 rounded-full">
                  <MapPin className="w-4 h-4 text-navy-950" />
                  <span>Mapema Accommodation, Thika</span>
                </span>
                <span className="flex items-center gap-1.5 bg-navy-950/10 px-3 py-1.5 rounded-full">
                  <Phone className="w-4 h-4 text-navy-950" />
                  <span>0707 926 971</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href="https://wa.me/254707926971?text=Hello%20Pistis%20Caterers,%20I%20would%20like%20to%20request%20a%20catering%20quote%20for%20my%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-navy-950 text-gold-300 hover:text-white font-bold text-sm tracking-wide shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>Message on WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-white text-navy-950 font-bold text-sm hover:bg-slate-50 transition-colors shadow-sm"
              >
                <span>Online Quote Calculator</span>
                <ArrowRight className="w-4 h-4 text-gold-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

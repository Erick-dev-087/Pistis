"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LaurelLogo, WhatsAppIcon } from "@/components/Icons";
import {
  Briefcase,
  Heart,
  GraduationCap,
  ShieldCheck,
  Award,
  Truck,
  CheckCircle2,
  Users,
  Clock,
  ArrowRight,
  Phone
} from "lucide-react";

export default function ServicesPage() {
  const serviceList = [
    {
      id: "corporate",
      title: "Corporate Conferences & Executive Banquets",
      badge: "Punctual & Professional",
      icon: Briefcase,
      image: "/media/Services.jpg",
      capacity: "50 - 2,500+ Delegates",
      leadTime: "48h Notice Available",
      description:
        "Engineered for strict corporate timetables. From morning coffee, herbal teas, and fresh savory pastries to hot executive buffet luncheons and VIP boardroom plated service.",
      inclusions: [
        "Executive hot buffet lines with gold chafing warmers",
        "Morning & afternoon conference tea breaks with artisan pastries",
        "Uniformed banquet attendants & dedicated floor manager",
        "Melamine or fine porcelain dinnerware & crisp linen setups",
        "Special dietary provisions (Vegetarian, Halal-compliant, Gluten-Free)",
      ],
      whatsappMsg: "Hello Pistis Caterers, I would like to inquire about Corporate Conference Catering for our upcoming event.",
    },
    {
      id: "weddings",
      title: "Grand Weddings & Garden Receptions",
      badge: "Pure Culinary Romance",
      icon: Heart,
      image: "/media/Event.jpg",
      capacity: "100 - 3,500+ Guests",
      leadTime: "2-4 Weeks Recommended",
      description:
        "Your wedding feast is the centerpiece of celebration. We transform garden and indoor venues into gastronomic paradises with gleaming chafing displays, bridal party VIP table service, and radial fruit centerpieces.",
      inclusions: [
        "Lavish multi-protein buffet (Chicken, Beef, Goat/Nyama Choma options)",
        "VIP Bridal party high-table plated service with personal servers",
        "Radial carved fruit displays & cocktail finger-food welcome station",
        "Gold-trimmed chafing dishes, chafing fuel & temperature captains",
        "Immaculate clean-up and waste management after service",
      ],
      whatsappMsg: "Hello Pistis Caterers, I am planning a Wedding Reception and would like to consult on your catering packages.",
    },
    {
      id: "milestones",
      title: "Milestone Birthdays, Graduations & Family Feasts",
      badge: "Joyful Celebrations",
      icon: GraduationCap,
      image: "/media/Food.jpg",
      capacity: "30 - 800+ Guests",
      leadTime: "3-5 Days Notice",
      description:
        "Celebrate academic triumphs, birthdays, and family reunions with hearty, authentic Kenyan favorites cooked to perfection. Enjoy aromatic pilau, tender braised meats, and vibrant fresh salads.",
      inclusions: [
        "Customized home or venue buffet setup",
        "Outdoor live grill & carving options",
        "All chaffing equipment, serving spoons, and plates provided",
        "Courteous staff so the host family relaxes and celebrates",
        "Takeaway packaging assistance for left-over celebrations",
      ],
      whatsappMsg: "Hello Pistis Caterers, I want to book catering for a Graduation/Birthday party.",
    },
    {
      id: "memorials",
      title: "Dignified Memorials & Funeral Services",
      badge: "Compassionate Care",
      icon: ShieldCheck,
      image: "/media/food_2.jpg",
      capacity: "100 - 5,000+ Mourners",
      leadTime: "Rapid Mobilization Available",
      description:
        "In times of bereavement, hospitality should never add stress. Pistis brings high-capacity catering logistics, serving comforting hot meals to hundreds or thousands of mourners with utmost dignity and promptness.",
      inclusions: [
        "Rapid mobilization and dependable large-scale meal preparation",
        "Comforting hearty menus (Rice, Chapati, Beef Stew, Mukimo/Ndengu)",
        "Efficient multi-station buffet lines to minimize queuing",
        "Respectful, disciplined staff sensitive to grieving families",
        "Clean, discreet service and total logistical peace of mind",
      ],
      whatsappMsg: "Hello Pistis Caterers, I am reaching out regarding catering for a Memorial/Funeral service.",
    },
    {
      id: "platters",
      title: "Artisanal Canapés, Fruit Centerpieces & Finger Foods",
      badge: "Bespoke Presentation",
      icon: Award,
      image: "/media/more_food.jpg",
      capacity: "25 - 1,000+ Guests",
      leadTime: "48h Notice",
      description:
        "Ideal for cocktail parties, product launches, bridal showers, and evening receptions. Striking carved watermelon centerpieces, savory fiesta taco platters, samosas, and gourmet skewers.",
      inclusions: [
        "Artisanal radial fruit platters (Watermelon, Pineapple, Grapes, Melon)",
        "Crisp beef/chicken samosas, spring rolls, and skewers",
        "Gourmet slider stations & dipping sauces",
        "Finger-food service trays & cocktail napkins",
        "Stylized table decor tailored to your event theme",
      ],
      whatsappMsg: "Hello Pistis Caterers, I would like to inquire about Canapés, Finger Foods, and Fruit Centerpieces.",
    },
    {
      id: "institutional",
      title: "Bulk Meal Logistics & Institutional Supplies",
      badge: "High-Volume Dependability",
      icon: Truck,
      image: "/media/services_more.jpg",
      capacity: "150 - 10,000+ Daily Meals",
      leadTime: "Contract or Scheduled",
      description:
        "High-volume meal solutions for workshops, educational seminars, sports tournaments, and industrial teams. Delivered hot on schedule using our outside catering dispatch fleet.",
      inclusions: [
        "Dedicated transport via Pistis Outside Catering vehicles",
        "Insulated thermal transport containers keeping food steaming hot",
        "Standardized nutritional balanced menus",
        "Individual eco-friendly packed meals or on-site bulk chaffing",
        "Flexible contract terms for multi-day workshops",
      ],
      whatsappMsg: "Hello Pistis Caterers, I would like to inquire about Bulk Meal Delivery and Institutional Catering.",
    },
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Editorial Header */}
      <section className="pt-14 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gold-200/80">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-bold uppercase tracking-wider">
            <LaurelLogo className="w-4 h-4 text-gold-700" />
            <span>Our Catering Disciplines</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-950 tracking-tight leading-tight">
            Tailored Culinary Solutions for Every Occasion
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every event has a rhythm and character of its own. Pistis pairs exceptional culinary craftsmanship with turnkey outside catering logistics—from golden chafing lines to courteous floor captains.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {serviceList.map((service, index) => {
          const isEven = index % 2 === 0;
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-gold-200/80 shadow-xs hover:shadow-xl transition-all duration-300 ${
                !isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className={`lg:col-span-5 relative ${!isEven ? "lg:order-2" : ""}`}>
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg border-2 border-gold-300/80">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-navy-950/85 text-gold-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-xs border border-gold-500/30">
                    {service.badge}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
                  <div className="p-2.5 rounded-xl bg-gold-50 border border-gold-200 flex items-center gap-2">
                    <Users className="w-4 h-4 text-gold-700 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-500 block">Capacity</span>
                      <span className="font-bold text-navy-950 text-xs">{service.capacity}</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-gold-50 border border-gold-200 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold-700 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-500 block">Lead Time</span>
                      <span className="font-bold text-navy-950 text-xs">{service.leadTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className={`lg:col-span-7 space-y-5 ${!isEven ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-800 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gold-700" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                    Discipline #{index + 1}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
                  {service.title}
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    What&apos;s Included In This Package:
                  </span>
                  <ul className="space-y-2">
                    {service.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={`https://wa.me/254707926971?text=${encodeURIComponent(service.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wide shadow-md hover:shadow-gold-glow transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-navy-950" />
                    <span>Inquire for this Service via WhatsApp</span>
                  </a>

                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-navy-950 font-semibold text-xs tracking-wide transition-colors"
                  >
                    <span>Request Custom Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Equipment & Standards Banner */}
      <section className="py-16 bg-navy-950 text-white px-4 sm:px-6 lg:px-8 border-t border-gold-500/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
              The Pistis Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Full Equipment Logistics Included
            </h2>
            <p className="text-slate-400 text-sm">
              We eliminate equipment rental headaches. When you book Pistis, the complete presentation infrastructure is handled.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-6 rounded-2xl bg-navy-900 border border-gold-500/20 space-y-2">
              <Award className="w-6 h-6 text-gold-400 mx-auto" />
              <h4 className="font-bold text-sm text-white">Gold Chafing Warmers</h4>
              <p className="text-xs text-slate-400">Gleaming stainless gold chafing dishes with windproof burner holders.</p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900 border border-gold-500/20 space-y-2">
              <Users className="w-6 h-6 text-gold-400 mx-auto" />
              <h4 className="font-bold text-sm text-white">Uniformed Waitstaff</h4>
              <p className="text-xs text-slate-400">Courteous, groomed floor servers and attentive beverage stewards.</p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900 border border-gold-500/20 space-y-2">
              <ShieldCheck className="w-6 h-6 text-gold-400 mx-auto" />
              <h4 className="font-bold text-sm text-white">Full Tableware Sets</h4>
              <p className="text-xs text-slate-400">Dinner plates, soup bowls, forks, knives, and table napkins provided.</p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900 border border-gold-500/20 space-y-2">
              <Truck className="w-6 h-6 text-gold-400 mx-auto" />
              <h4 className="font-bold text-sm text-white">Transport & Logistics</h4>
              <p className="text-xs text-slate-400">Reliable delivery across Thika, Nairobi, and all counties in Kenya.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

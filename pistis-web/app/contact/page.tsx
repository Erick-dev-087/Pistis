"use client";

import React, { useState } from "react";
import { LaurelLogo, WhatsAppIcon } from "@/components/Icons";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Users,
  Send,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    eventType: "Corporate Conference / Summit",
    guestCount: "150",
    eventDate: "",
    venueLocation: "",
    specialNotes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const eventTypes = [
    "Corporate Conference / Summit",
    "Wedding & Grand Reception",
    "Graduation / Birthday Milestone",
    "Dignified Memorial / Funeral",
    "Artisanal Canapés & Cocktail Party",
    "Bulk Meal Institutional Supply",
    "Other Special Gathering",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Catering Inquiry - Pistis Caterers*%0A%0A` +
      `*Client Name:* ${encodeURIComponent(formData.fullName || "Not provided")}%0A` +
      `*Phone Number:* ${encodeURIComponent(formData.phone || "Not provided")}%0A` +
      `*Event Type:* ${encodeURIComponent(formData.eventType)}%0A` +
      `*Estimated Guests:* ${encodeURIComponent(formData.guestCount)} guests%0A` +
      `*Event Date:* ${encodeURIComponent(formData.eventDate || "To be confirmed")}%0A` +
      `*Venue / County:* ${encodeURIComponent(formData.venueLocation || "Not specified")}%0A` +
      `*Notes / Dietary:* ${encodeURIComponent(formData.specialNotes || "None")}%0A%0A` +
      `Please provide menu recommendations and a formal quotation.`;

    return `https://wa.me/254707926971?text=${text}`;
  };

  const handleOnlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Header */}
      <section className="pt-14 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gold-200/80">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold-100 text-gold-800 text-xs font-bold uppercase tracking-wider">
            <span>Consultations & Bookings</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-950 tracking-tight leading-tight">
            Let&apos;s Plan Your Next Unforgettable Event
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Ready to delight your guests with exceptional food and seamless service? Fill in the details below to generate an instant WhatsApp quote request, or reach our central catering desk directly.
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Info */}
      <section className="py-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Interactive Lead Engine Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gold-200/80 shadow-md">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-gold-100 text-gold-600 flex items-center justify-center mx-auto border-2 border-gold-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-950">
                  Thank You, {formData.fullName || "Valued Host"}!
                </h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  Your event inquiry has been registered. For immediate priority booking and menu review, tap the WhatsApp button below to start an instant chat with our event manager.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wide shadow-md"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-navy-950" />
                    <span>Open in WhatsApp Now</span>
                  </a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-3 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    Modify Inquiry Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleOnlineSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-navy-950">
                    Event Quotation Calculator
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your event details to generate an instant quotation request.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Christine Wangari"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-hidden text-sm bg-slate-50/50"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 0712 345 678"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-hidden text-sm bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Event Type */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Type of Catering Service *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-hidden text-sm bg-white"
                  >
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Guest Count */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Estimated Guest Count: <span className="text-gold-700 font-bold">{formData.guestCount} Guests</span>
                    </label>
                    <input
                      type="range"
                      name="guestCount"
                      min="25"
                      max="2500"
                      step="25"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      className="w-full accent-gold-500 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                      <span>25 Guests</span>
                      <span>500</span>
                      <span>1,000</span>
                      <span>2,500+</span>
                    </div>
                  </div>

                  {/* Event Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Target Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-hidden text-sm bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Venue Location */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Venue Location & County
                  </label>
                  <input
                    type="text"
                    name="venueLocation"
                    value={formData.venueLocation}
                    onChange={handleInputChange}
                    placeholder="e.g. Garden Estate, Nairobi / Limuru Grounds / Thika"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-hidden text-sm bg-slate-50/50"
                  />
                </div>

                {/* Special Requests / Menu Notes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Menu Preferences & Special Requests
                  </label>
                  <textarea
                    name="specialNotes"
                    rows={3}
                    value={formData.specialNotes}
                    onChange={handleInputChange}
                    placeholder="e.g. Swahili pilau, slow-braised beef, vegetarian options for 30 delegates, gold chafing setup..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-hidden text-sm bg-slate-50/50 resize-none"
                  />
                </div>

                {/* Primary Dual Actions */}
                <div className="pt-2 space-y-3">
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-navy-950 font-bold text-sm uppercase tracking-wide shadow-md hover:shadow-gold-glow hover:scale-[1.01] transition-all"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-navy-950" />
                    <span>Send Inquiry Directly via WhatsApp</span>
                  </a>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-navy-950 hover:bg-navy-900 text-gold-300 font-semibold text-xs uppercase tracking-wide transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Online Form</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details, Location & Trust Snapshot */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy-950 text-white rounded-3xl p-6 sm:p-8 border border-gold-500/30 space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400 block">
                  Central Catering Desk
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  Pistis Caterers Headquarters
                </h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-400 mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Physical Location:</span>
                    <span className="text-slate-300 leading-relaxed block">
                      Mapema Accommodation, Opposite Imperial College / Next to MKU Main Campus, Thika, Kenya
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold-400 mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Direct Lines (Call/WhatsApp):</span>
                    <a
                      href="tel:+254707926971"
                      className="text-gold-300 hover:text-white transition-colors block font-semibold"
                    >
                      +254 707 926 971
                    </a>
                    <a
                      href="tel:070926971"
                      className="text-gold-300 hover:text-white transition-colors block text-xs"
                    >
                      070926971
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold-400 mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Email Dispatch:</span>
                    <a
                      href="mailto:pistisjoint@gmail.com"
                      className="text-slate-300 hover:text-gold-300 transition-colors block"
                    >
                      pistisjoint@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-400 mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Booking Desk Hours:</span>
                    <span className="text-slate-300 block">
                      Monday – Sunday: 7:00 AM – 9:00 PM
                    </span>
                    <span className="text-xs text-gold-400 block mt-0.5">
                      Outside Catering Fleet Dispatched 24/7 for Events
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-navy-800">
                <a
                  href="tel:+254707926971"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wide border border-white/20 transition-all"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call Head Office Immediately</span>
                </a>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="bg-white rounded-3xl p-6 border border-gold-200 space-y-3.5 shadow-sm">
              <h4 className="font-serif text-lg font-bold text-navy-950">
                Our Booking Guarantee
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Fixed upfront quotation with no surprise fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Punctual logistics with 1-hour buffer arrival prior to service</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Temperature guaranteed: steaming hot food throughout service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

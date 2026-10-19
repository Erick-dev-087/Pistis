"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LaurelLogo, WhatsAppIcon, CutleryIcon } from "@/components/Icons";
import {
  CheckCircle2,
  Clock,
  ArrowRight,
  Plus,
  Check,
  ShieldCheck,
  Leaf
} from "lucide-react";

interface Dish {
  id: string;
  name: string;
  category: "all" | "executive" | "heritage" | "platters" | "vegetarian";
  scriptBadge?: string;
  image: string;
  description: string;
  ingredients: string[];
  dietary: string[];
  recommendedFor: string;
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);

  const categories = [
    { id: "all", label: "All Offerings" },
    { id: "executive", label: "Executive Buffets" },
    { id: "heritage", label: "Kenyan Heritage Classics" },
    { id: "platters", label: "Platters & Canapés" },
    { id: "vegetarian", label: "Vegetarian & Continental" },
  ];

  const dishes: Dish[] = [
    {
      id: "slow-braised-beef",
      name: "Slow-Braised Rosemary Beef Stew",
      category: "heritage",
      scriptBadge: "Chef's Signature Pick",
      image: "/media/food_2.jpg",
      description:
        "Tender grass-fed beef slow-simmered in a rich garlic & fresh rosemary pan reduction, folded with caramelized shallots, sweet bell peppers, and garden carrots.",
      ingredients: ["Prime Kenyan Beef", "Garden Rosemary", "Sweet Bell Peppers", "Slow Pan Reduction"],
      dietary: ["Halal-Compliant", "Gluten-Free", "High Protein"],
      recommendedFor: "Weddings, VIP Luncheons, Dignified Memorials",
    },
    {
      id: "golden-buffet-roast",
      name: "Herb-Marinated Golden Chicken Roast",
      category: "executive",
      scriptBadge: "Guest Favorite",
      image: "/media/Food.jpg",
      description:
        "Succulent farm-raised chicken quarters infused with crushed thyme, ginger, coriander, and lemon zest, oven-roasted to a crispy golden skin and tender finish.",
      ingredients: ["Farm-Fresh Chicken", "Fresh Ginger & Garlic", "Crushed Thyme", "Lemon Coriander Glaze"],
      dietary: ["Halal-Compliant", "Nut-Free"],
      recommendedFor: "Corporate Conferences & Wedding Banquets",
    },
    {
      id: "swahili-pilau",
      name: "Aromatic Swahili Spiced Pilau",
      category: "heritage",
      scriptBadge: "Coastal Tradition",
      image: "/media/Food.jpg",
      description:
        "Aged fragrant basmati rice masterfully infused with toasted whole cumin, cardamom pods, cinnamon bark, and cloves, cooked in rich bone broth.",
      ingredients: ["Aged Basmati Rice", "Whole Spices", "Caramelized Red Onions", "Fragrant Broth"],
      dietary: ["Halal-Compliant", "Gluten-Free"],
      recommendedFor: "Celebrations, Graduations, Weddings",
    },
    {
      id: "radial-fruit-centerpiece",
      name: "Artisanal Carved Fruit Centerpiece",
      category: "platters",
      scriptBadge: "Visual Masterpiece",
      image: "/media/services_more.jpg",
      description:
        "A show-stopping tiered radial display of sweet ripe watermelon, golden pineapple cubes, fresh grapes, pawpaw, and mint sprigs.",
      ingredients: ["Ripe Watermelon", "Golden Sweet Pineapple", "Sweet Seedless Grapes", "Fresh Mint"],
      dietary: ["100% Plant-Based", "Gluten-Free", "Farm-Sourced"],
      recommendedFor: "Cocktail Hours, Bridal High-Tables, Receptions",
    },
    {
      id: "creamed-spinach-greens",
      name: "Creamed Garden Spinach & Sukuma Medley",
      category: "vegetarian",
      scriptBadge: "Organic Farm Pick",
      image: "/media/Event.jpg",
      description:
        "Freshly harvested Kiambu spinach sautéed with sweet onions, cream, and a hint of nutmeg, accompanied by traditional seasoned sukuma wiki.",
      ingredients: ["Kiambu Farm Spinach", "Sweet White Onions", "Farm Cream", "Light Nutmeg Infusion"],
      dietary: ["Vegetarian", "Rich in Iron", "Nut-Free"],
      recommendedFor: "All Buffet Lines & Executive Dinners",
    },
    {
      id: "fiesta-cocktail-platter",
      name: "Fiesta Tacos & Artisan Canapé Platter",
      category: "platters",
      scriptBadge: "Cocktail Special",
      image: "/media/more_food.jpg",
      description:
        "Mini crispy tortilla tacos stuffed with seasoned shredded chicken, homemade tomato salsa, guacamole, and crispy samosas with tamarind dip.",
      ingredients: ["Crisp Corn Tortillas", "Shredded Seasoned Chicken", "Avocado Guacamole", "Fresh Coriander Salsa"],
      dietary: ["Nut-Free", "Freshly Assembled"],
      recommendedFor: "Cocktails, Showers, Product Launches",
    },
    {
      id: "creamy-potato-mash",
      name: "Garlic Butter Parsley Mashed Potatoes",
      category: "vegetarian",
      scriptBadge: "Comfort Classic",
      image: "/media/Food.jpg",
      description:
        "Steamed highland potatoes whipped with rich butter, roasted garlic, farm milk, and finely chopped Italian parsley.",
      ingredients: ["Highland Potatoes", "Roasted Garlic", "Pure Farm Butter", "Fresh Parsley"],
      dietary: ["Vegetarian", "Gluten-Free"],
      recommendedFor: "Executive Luncheons & Dinners",
    },
    {
      id: "traditional-mukimo",
      name: "Traditional Soft Mukimo with Sweet Corn",
      category: "heritage",
      scriptBadge: "Kenyan Heritage",
      image: "/media/Event.jpg",
      description:
        "Authentic mashed potatoes blended with tender pumpkin leaves (kahurura), soft sweet yellow maize, and fresh green peas.",
      ingredients: ["Highland Potatoes", "Sweet Yellow Maize", "Green Garden Peas", "Tender Pumpkin Leaves"],
      dietary: ["Vegetarian", "Gluten-Free", "Rich in Fiber"],
      recommendedFor: "Traditional Ceremonies, Memorials, Feasts",
    },
  ];

  const filteredDishes =
    activeCategory === "all"
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  const toggleDishSelection = (dishId: string) => {
    if (selectedDishes.includes(dishId)) {
      setSelectedDishes(selectedDishes.filter((id) => id !== dishId));
    } else {
      setSelectedDishes([...selectedDishes, dishId]);
    }
  };

  const banquetTiers = [
    {
      name: "The Silver Feast",
      subtitle: "Essential Celebration Buffet",
      idealFor: "Family Gatherings, Memorials, Graduations",
      dishesCount: "1 Protein • 2 Starches • 1 Veg • Salad",
      features: [
        "Choice of Braised Beef Stew or Spiced Chicken",
        "Fragrant Rice & Fluffy Chapati or Mukimo",
        "Sautéed Seasoned Greens & Fresh Kachumbari",
        "Stainless Gold Chafing Warmers & Serving Spoons",
        "Standard Dining Plates & Flatware Included",
      ],
      whatsappPrefill: "Hello Pistis Caterers, I am inquiring about The Silver Feast buffet package.",
    },
    {
      name: "The Gold Standard",
      subtitle: "Multi-Protein Gourmet Banquet",
      popular: true,
      idealFor: "Weddings, Corporate Conferences, Milestones",
      dishesCount: "2 Proteins • 3 Starches • 2 Veggies • Salad • Fresh Fruit",
      features: [
        "Herb-Roasted Chicken & Slow-Braised Rosemary Beef",
        "Aromatic Swahili Pilau, Steamed Rice & Soft Chapati",
        "Creamed Spinach & Traditional Seasoned Greens",
        "Garden Crisp Salad & Radial Watermelon Centerpiece",
        "Gleaming Gold Chafing Lines & Uniformed Attendants",
        "Porcelain Plates & Stainless Cutlery",
      ],
      whatsappPrefill: "Hello Pistis Caterers, I want to book The Gold Standard banquet package for our event.",
    },
    {
      name: "The Imperial Table",
      subtitle: "Executive VIP & Luxury Gala",
      idealFor: "Executive Summits, High-End Weddings, VIP Banquets",
      dishesCount: "3 Proteins (Live Station Option) • Premium Displays",
      features: [
        "Nyama Choma Carving, Golden Chicken & Prime Rosemary Beef",
        "Full Continental & Swahili Starch Selection",
        "Tiered Radial Fruit Towers & Cocktail Welcome Canapés",
        "Dedicated VIP Bridal / Boardroom High-Table Service",
        "Senior Floor Captain, Attendants & Beverage Stewards",
        "Full Setup, Linens, Table Styling & Post-Event Clean",
      ],
      whatsappPrefill: "Hello Pistis Caterers, I am inquiring about The Imperial Table VIP Catering package.",
    },
  ];

  const constructWhatsAppQuote = () => {
    const selectedNames = dishes
      .filter((d) => selectedDishes.includes(d.id))
      .map((d) => `• ${d.name}`)
      .join("%0A");

    let message = `Hello%20Pistis%20Caterers,%20I%20am%20exploring%20your%20curated%20menus%20and%20would%20like%20a%20quote.`;
    if (selectedDishes.length > 0) {
      message += `%0A%0A*Selected%20Menu%20Items:*%0A${selectedNames}%0A%0APlease%20let%20me%20know%20availability%20and%20pricing.`;
    }
    return `https://wa.me/254707926971?text=${message}`;
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Header */}
      <section className="pt-14 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gold-200/80">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-bold uppercase tracking-wider">
            <CutleryIcon className="w-4 h-4 text-gold-700" />
            <span>Curated Gastronomy</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-950 tracking-tight leading-tight">
            Culinary Craftsmanship for Exceptional Palates
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Every dish in the Pistis kitchen is treated with gastronomic reverence. Explore our signature offerings, build your dream menu lineup, and send your custom selection directly to our catering team via WhatsApp.
          </p>
        </div>
      </section>

      {/* Category Tabs & Interactive Selector */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto sticky top-20 z-30 bg-[#FAF8F5]/95 backdrop-blur-md">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
            {categories.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap relative ${
                    active
                      ? "text-navy-950 bg-gold-400 font-bold shadow-md shadow-gold-500/20"
                      : "text-slate-700 bg-white hover:bg-slate-100 border border-gold-200"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Quick Selected Counter */}
          {selectedDishes.length > 0 && (
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-navy-950 bg-gold-200 px-3 py-1.5 rounded-full">
                {selectedDishes.length} Dish{selectedDishes.length > 1 ? "es" : ""} Selected
              </span>
              <a
                href={constructWhatsAppQuote()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-navy-950 text-gold-300 hover:text-white text-xs font-bold shadow-sm"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>Send List to WhatsApp</span>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Pinterest-Style Food Grid */}
      <section className="py-6 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredDishes.map((dish) => {
              const isSelected = selectedDishes.includes(dish.id);

              return (
                <motion.div
                  key={dish.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl group ${
                    isSelected ? "border-gold-500 ring-2 ring-gold-400/50" : "border-gold-200/80"
                  }`}
                >
                  {/* Image Presentation */}
                  <div>
                    <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                      {/* Script Badge */}
                      {dish.scriptBadge && (
                        <div className="absolute top-3 left-3 bg-white/95 text-navy-950 font-serif text-xs font-bold px-3 py-1 rounded-full shadow-md border border-gold-300">
                          {dish.scriptBadge}
                        </div>
                      )}

                      {/* Select Checkbox Button */}
                      <button
                        onClick={() => toggleDishSelection(dish.id)}
                        className={`absolute top-3 right-3 p-2 rounded-full transition-all shadow-md ${
                          isSelected
                            ? "bg-gold-500 text-navy-950"
                            : "bg-white/90 hover:bg-white text-slate-700"
                        }`}
                        title={isSelected ? "Remove from custom quote" : "Add to custom quote"}
                      >
                        {isSelected ? <Check className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Content Details */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-serif text-xl font-bold text-navy-950 leading-tight">
                          {dish.name}
                        </h3>
                        <p className="text-xs text-gold-700 font-semibold mt-1">
                          Ideal for: {dish.recommendedFor}
                        </p>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {dish.description}
                      </p>

                      {/* Ingredient Highlights */}
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                          Key Ingredients:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {dish.ingredients.map((ing) => (
                            <span
                              key={ing}
                              className="text-[11px] bg-gold-50 text-gold-900 border border-gold-200/80 px-2 py-0.5 rounded-md font-medium"
                            >
                              {ing}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Dietary Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {dish.dietary.map((d) => (
                          <span
                            key={d}
                            className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium flex items-center gap-1"
                          >
                            <ShieldCheck className="w-3 h-3 text-gold-600" />
                            <span>{d}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                    <button
                      onClick={() => toggleDishSelection(dish.id)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wide transition-all flex items-center justify-center gap-2 ${
                        isSelected
                          ? "bg-navy-950 text-gold-300 hover:bg-navy-900"
                          : "bg-gold-100 hover:bg-gold-500 text-navy-950"
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added to Custom Inquiry</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Event Quote</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* BANQUET TIER COMPARISON MATRIX */}
      <section className="py-20 bg-white border-t border-gold-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold-100 text-gold-800 text-xs font-bold uppercase tracking-wider">
              <span>Turnkey Event Menus</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
              Curated Banquet Packages
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Choose from our established service tiers or let our chefs customize a bespoke culinary blueprint for your event.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {banquetTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  tier.popular
                    ? "bg-navy-950 text-white shadow-2xl ring-2 ring-gold-400"
                    : "bg-[#FAF8F5] text-navy-950 border border-gold-200"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-navy-950 text-[11px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className={`font-serif text-2xl font-bold ${tier.popular ? "text-white" : "text-navy-950"}`}>
                      {tier.name}
                    </h3>
                    <p className={`text-xs mt-1 font-semibold ${tier.popular ? "text-gold-400" : "text-gold-700"}`}>
                      {tier.subtitle}
                    </p>
                  </div>

                  <div className={`p-4 rounded-2xl ${tier.popular ? "bg-navy-900 border border-gold-500/30" : "bg-white border border-gold-200"}`}>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                      Recommended Scope
                    </span>
                    <span className={`text-sm font-bold block mt-1 ${tier.popular ? "text-gold-300" : "text-navy-950"}`}>
                      {tier.dishesCount}
                    </span>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      {tier.idealFor}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <span className={`text-xs font-bold uppercase tracking-wider block ${tier.popular ? "text-slate-300" : "text-slate-700"}`}>
                      Package Inclusions:
                    </span>
                    <ul className="space-y-2.5">
                      {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${tier.popular ? "text-gold-400" : "text-gold-600"}`} />
                          <span className={tier.popular ? "text-slate-300" : "text-slate-700"}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href={`https://wa.me/254707926971?text=${encodeURIComponent(tier.whatsappPrefill)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-bold text-xs uppercase tracking-wide transition-all shadow-md ${
                      tier.popular
                        ? "bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-navy-950 hover:shadow-gold-glow"
                        : "bg-navy-950 text-gold-300 hover:text-white"
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>Inquire for {tier.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

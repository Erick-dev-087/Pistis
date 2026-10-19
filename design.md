# PISTIS CATERERS & SERVICES — DESIGN SYSTEM & MULTI-PAGE ARCHITECTURE
**Document Version:** 2.0 (Multi-Page & Narrative-Led Architecture)  
**Project:** Pistis Catering Web Platform & Business Prototype  
**Target Delivery:** 48 Hours  
**Tech Stack:** Next.js 14/15 (App Router), Tailwind CSS v3.4, Framer Motion, Lucide React (SVGs only)  
**Primary Contact:** Call/WhatsApp: `+254 707 926 971` / `070926971` | Email: `pistisjoint@gmail.com`  
**Location:** Mapema Accommodation, Opposite Imperial College / Next to MKU Main Campus, Thika, Kenya  

---

## 1. High-Level Vision: "Building a Tech-Enabled Catering Business"

This platform is not merely a static digital brochure. It is a **high-conversion commercial engine** engineered to:
1. **Dignify and Elevate Pistis’s Brand Equity**: Position Pistis as the undisputed premier catering house in Thika and across Kenya.
2. **Drive Instant Direct Conversions**: Funnel corporate event planners, wedding couples, and event committees into qualified, pre-formatted WhatsApp consultations and instant phone bookings.
3. **Tell a Compelling Culinary Narrative**: The homepage reads like an editorial journey—unfolding the craft, heritage, discipline, and warmth of Pistis—while dedicated sub-pages provide immediate, focused answers without filler.
4. **Deliver Extreme Mobile-First Polish**: 85%+ of Kenyan catering clientele browse on mobile devices via WhatsApp links, Instagram, and direct recommendations. Mobile ergonomics, touch targets, and instant communication are paramount.
5. **Strict Visual Discipline (Zero Emojis)**: Zero unicode emojis anywhere on the platform. All iconography is rendered via bespoke, vector-sharp SVGs and Lucide icons styled in brand gold and navy.

---

## 2. Color System & Aesthetic Tokens

The visual foundation combines **Imperial Gold**, **Prestige Deep Navy**, and **Warm Porcelain Ivory** for warmth, elegance, and gastronomic prestige.

### 2.1 CSS Custom Properties
```css
:root {
  /* Brand Primary: Imperial Gold */
  --gold-50:  #FDFBF7;
  --gold-100: #FBF4E4;
  --gold-200: #F5E4BE;
  --gold-300: #EBD094;
  --gold-400: #E6CA65;       /* Shimmer highlight */
  --gold-500: #D4AF37;       /* Core Imperial Gold */
  --gold-600: #C59B4B;       /* Deep Antique Gold */
  --gold-700: #9C7830;
  --gold-800: #72561F;

  /* Contrast Grounding: Prestige Deep Navy */
  --navy-950: #08111D;       /* Ultra Deep Midnight (Footer, text, contrast headers) */
  --navy-900: #0C1829;       /* Deep Navy primary surface */
  --navy-800: #15263F;       /* Navy card background / border */
  --navy-700: #1F385C;

  /* Canvas & Warm Culinary Surfaces */
  --canvas-bg:   #FAF8F5;    /* Warm Porcelain Ivory (main background) */
  --card-bg:     #FFFFFF;    /* Crisp Alabaster White */
  --surface-alt: #F3EFEA;    /* Soft Culinary Linen */

  /* Typography */
  --text-primary:   #0C1829; /* High-contrast Deep Navy */
  --text-secondary: #5A6472; /* Slate neutral for body text */
  --text-muted:     #8893A4; /* Muted captions & timestamps */

  /* Functional Accents */
  --botanical-green: #2E5A44; /* Farm-fresh / dietary badge */
  --wine-accent:     #4A1525; /* Subtle burgundy touch from original brand poster */
}
```

### 2.2 Tailwind CSS Configuration Tokens (v3.4)
```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#FBF4E4',
          200: '#F5E4BE',
          300: '#EBD094',
          400: '#E6CA65',
          500: '#D4AF37',
          600: '#C59B4B',
          700: '#9C7830',
          800: '#72561F',
        },
        navy: {
          700: '#1F385C',
          800: '#15263F',
          900: '#0C1829',
          950: '#08111D',
        },
        canvas: '#FAF8F5',
        linen: '#F3EFEA',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-jakarta)', 'sans-serif'],
        script: ['var(--font-caveat)', 'cursive'],
      },
      boxShadow: {
        'culinary': '0 10px 30px -10px rgba(12, 24, 41, 0.07)',
        'culinary-hover': '0 20px 40px -15px rgba(212, 175, 55, 0.22)',
        'gold-glow': '0 0 25px -4px rgba(212, 175, 55, 0.35)',
        'gold-floating': '0 8px 30px rgba(197, 155, 75, 0.35)',
      },
    },
  },
  plugins: [],
};
```

---

## 3. Typography & Vector Iconography System

### 3.1 Font Pairing
1. **Display & Primary Headings**: `Playfair Display` (Google Fonts, weights 600 & 700).  
   Conveys editorial luxury, wedding prestige, and gastronomic authority.
2. **Body, Microcopy & Data**: `Plus Jakarta Sans` (Google Fonts, weights 400, 500, 600, 700).  
   Ultra-clean geometric sans-serif ensuring effortless readability on smartphone screens.
3. **Artisanal Flourishes**: `Caveat` (Google Fonts, weight 500).  
   Used strictly for subtle handcrafted accents (e.g., *"Taste, Our Passion"*, *"Chef's Table Pick"*).

### 3.2 Iconography Rules (Strict Zero-Emoji Policy)
- **Zero Unicode Emojis**: Absolutely no emojis in headers, lists, buttons, or toast notifications.
- **SVG Icon Library**: Handcrafted SVG icons & `lucide-react` vectors:
  - Phone: `<Phone className="w-4 h-4 text-gold-500" />`
  - WhatsApp: Custom vector WhatsApp icon styled in Pistis gold (`text-navy-950 bg-gradient-to-tr from-gold-600 to-gold-400`)
  - Location: `<MapPin className="w-4 h-4 text-gold-500" />`
  - Ratings & Laurels: `<Star className="w-4 h-4 fill-gold-500 text-gold-500" />` and custom SVG gold laurel branches
  - Event Milestones: `<Briefcase />`, `<Heart />`, `<GraduationCap />`, `<Calendar />`, `<ShieldCheck />`, `<Clock />`, `<Sparkles />`

---

## 4. Multi-Page Information Architecture

Rather than a single endless scroll, Pistis operates as a **focused multi-page platform**. The homepage tells the overarching story; each dedicated page gets straight to the point with zero unnecessary fluff.

```
                  ┌───────────────────────────────┐
                  │       PISTIS CATERING         │
                  │   tech-enabled web platform   │
                  └──────────────┬────────────────┘
                                 │
         ┌──────────────┬────────┴─────┬──────────────┬──────────────┐
         ▼              ▼              ▼              ▼              ▼
     [ / ]        [ /services ]    [ /menu ]     [ /about ]    [ /gallery ]
   Home Page        Dedicated      Pinterest      Story with    Event Proof
  Story & Trust     Services       Gastronomy      Parallax      & Setups
   Essentials       Deep-Dive       Showcase       Backdrop      Masonry
                                       │
                                       ▼
                                 [ /contact ]
                                Instant WhatsApp
                                Booking Engine
```

---

### 4.1 Route 1: `/` (Homepage — The Story of Pistis)
The homepage is designed as an **editorial narrative journey** rather than an image dump. It guides the visitor through trust, craft, taste, and hospitality:

1. **Chapter 1: The Overture (Hero Narrative)**
   - Minimalist prestige header with brand laurel emblem.
   - Narrative Headline: *"Where Taste Meets Passion — Unforgettable Catering Rooted in Thika, Serving Across Kenya."*
   - Subtle proof badge with SVG laurel: `10+ Years of Culinary Heritage`.
   - Dual actions: `Explore Our Story & Menus` | `Direct WhatsApp Consultation`.
   - Asymmetric visual feature: A single captivating composition of Pistis's golden chafing displays and garden banquet setting (`Food.jpg` & `Event.jpg`).
2. **Chapter 2: The Credo (Subtle Marquee Divider)**
   - Monochromatic gold ribbon with SVG divider stars:  
     `Fresh Ingredients • Punctual Logistics • Masterful Presentation • Outside Catering Across Kenya`
3. **Chapter 3: The Four Pillars of Service (Essence of What We Do)**
   - High-level narrative introduction to:
     - *Corporate Summits & Executive Banquets*
     - *Weddings & Intimate Receptions*
     - *Celebratory Feasts (Graduations, Birthdays, Showers)*
     - *Dignified Memorials & Burials*
   - Direct link: *"View all catering disciplines and packages →"*
4. **Chapter 4: The Food Experience (Pinterest-Inspired Curated Preview)**
   - 3 signature hero dishes displayed with floating cutouts, ingredient callouts, and dietary badges.
   - Direct link: *"Discover the complete seasonal menu catalog →"*
5. **Chapter 5: The Human Warmth (Our Chefs & Heritage Teaser)**
   - A warm glimpse of the lead chefs and catering van crew from `Who_we_Are.jpg`.
   - Quote: *"We treat every event as if we are feeding our own family."*
6. **Chapter 6: Words of Trust (Client Endorsements)**
   - 3 clean review cards featuring SVG 5-star ratings, event type tags, and client feedback.
7. **Chapter 7: The Invitation (Direct Contact & Location Anchor)**
   - Location details (Mapema Accommodation, Next to MKU Thika) + Instant 1-tap WhatsApp consultation.

---

### 4.2 Route 2: `/services` (Dedicated Services Page — Direct & Focused)
**No generic, bloated hero banner.** Jumps straight into the core value:
- **Header Eyebrow**: `OUR DISCIPLINES`
- **Headline**: *"Tailored Catering Solutions for Every Milestone"*
- **Service Modules (Detailed Breakdown for Event Organizers)**:
  1. **Corporate Luncheons & Conferences**: Boardroom drop-offs, full-day conference tea & hot lunch buffets, executive VIP plated service. Includes setup, chaffing warmers, and service staff.
  2. **Weddings & Receptions**: Grand banquet lines, bridal party plated service, canapé cocktail hours, bespoke tiered fruit displays.
  3. **Milestone Celebrations**: Graduation parties, birthdays, anniversaries, outdoor live barbecue / nyama choma stations.
  4. **Dignified Memorials & Burials**: Compassionate, high-volume, respectful catering ensuring family and guests are cared for without stress.
  5. **Bespoke Displays & Finger Foods**: Artisanal taco bars, radial carved fruit arrangements, slider bars, mocktail/cocktail snacks.
  6. **Bulk Meal Logistics & Institutional Supplies**: Reliable hot meal delivery for institutions, workshops, and large workforce events.
- **Feature Card for Each Service**:
  - Capacity range (e.g., `25 - 2,000+ Guests`)
  - Included equipment (Gold chafing dishes, premium cutlery, melamine/porcelain dinnerware, linens)
  - Dedicated *"Inquire for this Service via WhatsApp"* button with prefilled message.

---

### 4.3 Route 3: `/menu` (Dedicated Gastronomy Showcase — Food as Hero)
Inspired directly by the user's Pinterest reference, this page is where the **gastronomy takes center stage**:
- **Direct Header**: *"Curated Menus Crafted for Exceptional Palates"*
- **Interactive Category Filter Bar**:
  - `All Offerings` | `Executive Buffets` | `Kenyan Heritage Classics` | `Platters & Canapés` | `Vegetarian & Continental`
  - Sliding gold indicator pill using Framer Motion `layoutId="menuActiveCategory"`.
- **Pinterest-Style Culinary Card Anatomy**:
  - Top-down floating dish presentation with soft ambient drop-shadow.
  - Handwritten script badge (*"Chef's Signature"*, *"Guest Favorite"*).
  - Dish title in Playfair serif.
  - Complete culinary description and ingredient highlights (e.g., *Slow-braised rosemary beef stew with sweet bell peppers, fragrant basmati pilau, creamed spinach, and artisanal kachumbari*).
  - Dietary badges: SVG icons for `Farm-Fresh`, `Halal-Compliant`, `Gluten-Free Available`.
  - Action button: `Select for Event Quote`.
- **Banquet Tier Comparison Matrix**:
  - *The Silver Feast* (Essential classic buffet)
  - *The Gold Standard* (Multi-protein gourmet buffet + dessert)
  - *The Imperial Table* (Full VIP banquet with live stations & carved fruit centerpieces)

---

### 4.4 Route 4: `/about` (The Story, Heritage & Parallax Backdrop)
This page fulfills the user's vision of having a **rich food background with elegant parallax depth**:
- **Background Feature**:
  - High-res culinary photo (`food_2.jpg` or `Food.jpg`) set as full-width scroll-linked parallax background.
  - Semi-translucent prestige navy scrim (`bg-navy-950/85 backdrop-blur-sm`).
- **Foreground Content (Frosted Glassmorphic Story Card)**:
  - Gold badge: `ROOTED IN THIKA • CATERING ACROSS KENYA`
  - Headline: *"A Decade of Culinary Discipline and Uncompromising Passion"*
  - The Story of Pistis: Founded on the Greek principle of *Pistis* (trust, good faith, reliability), detailing 10+ years of growth from Thika to catering major summits across Kenya.
  - **Meet the Artisans Behind Your Feast**: Real photos of the head chefs in their crisp white jackets and the dedicated outside catering fleet (`Who_we_Are.jpg` & `services_more.jpg`).
  - Core Standards:
    - *Locally Sourced Farm-to-Table*: Fresh produce from Kiambu and Kenyan agricultural hubs.
    - *Food Safety & Hygiene*: Immaculate handling and commercial-grade temperature regulation.
    - *Warm Kenyan Hospitality*: Courteous, uniformed waitstaff and attentive floor captains.

---

### 4.5 Route 5: `/gallery` (Visual Proof of Past Feasts)
- **Direct Headline**: *"Moments of Celebration & Culinary Craftsmanship"*
- **Filterable Masonry Grid**:
  - `All Setups` | `Garden & Outdoor Buffets` | `Gold Chafing Warmers` | `Fruit & Platter Displays` | `The Team in Action`
- **Real Photography Highlights**:
  - Outdoor garden buffet with white draping and fresh salad bowls (`Event.jpg`)
  - Gold chafing dish line with roasted meats and seasoned stews (`Food.jpg` & `food_2.jpg`)
  - Radial watermelon centerpiece with fruit skewers (`services_more.jpg`)
  - Fiesta taco and dip platter (`services_more.jpg`)
  - Uniformed chefs and outside catering dispatch van (`services_more.jpg`)
- Lightbox Modal: Clicking any photo opens an elegant full-screen modal with setup details, guest capacity, and instant quote action.

---

### 4.6 Route 6: `/contact` (Instant Booking & Location Engine)
- **Direct Headline**: *"Let's Plan Your Next Unforgettable Event"*
- **Location & Contact Snapshot**:
  - Address: `Mapema Accommodation, Opposite Imperial College / Next to MKU Main Campus, Thika, Kenya`
  - Coverage: `Serving Thika, Nairobi, Kiambu, and all 47 counties of Kenya`
  - Direct Phone: `+254 707 926 971` / `070926971`
  - Direct Email: `pistisjoint@gmail.com`
- **Interactive Quick Event Inquiry Form (Tech-Enabled Lead Engine)**:
  - Client Name & Phone Number
  - Event Type (Dropdown: Corporate, Wedding, Birthday/Graduation, Memorial, Bulk Meal Supply)
  - Estimated Guest Count slider or input (e.g., `50 - 1,000+`)
  - Event Date & Venue Location
  - Optional Menu Notes
  - **Primary Action (Instant Conversion)**:
    - Button: *"Send Inquiry via WhatsApp"* (Constructs a clean, pre-formatted message sent directly to `070926971` so the client gets an immediate response without waiting for an email reply).
    - Alternative Button: *"Submit Online Form"* with instant confirmation.

---

## 5. Mobile-First Architecture & Brand-Colored Floating WhatsApp

### 5.1 The Brand-Colored Floating WhatsApp Widget
Unlike generic green widgets that clash with high-end websites, Pistis's WhatsApp button is styled strictly in the **brand's Imperial Gold & Navy palette**:
```tsx
// Floating WhatsApp Button Spec
<motion.a
  href="https://wa.me/254707926971?text=Hello%20Pistis%20Caterers,%20I%20would%20like%20to%20inquire%20about%20catering%20services%20for%20my%20event."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3.5 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-navy-950 font-semibold shadow-gold-floating hover:shadow-gold-glow transition-all duration-300 group"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  {/* Custom SVG WhatsApp vector styled in Navy */}
  <WhatsAppIcon className="w-6 h-6 fill-navy-950" />
  <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
    WhatsApp Inquiries
  </span>
  <span className="relative flex h-2.5 w-2.5">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-navy-900 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-navy-950"></span>
  </span>
</motion.a>
```

### 5.2 Mobile Bottom Action Bar (Viewports < 768px)
Docked seamlessly at the bottom of smartphone screens:
- **Left 45%**: `[ 📞 Call 0707 926 971 ]` with white frosted glass background and gold phone SVG icon.
- **Right 55%**: `[ 💬 WhatsApp Quote ]` with glowing brand gold gradient background.

### 5.3 Mobile Navigation Drawer
- Full-screen frosted backdrop (`backdrop-blur-xl bg-navy-950/95`).
- Staggered entrance for page links (`Home`, `Services`, `Menus`, `About Pistis`, `Gallery`, `Contact`).
- Direct call and location buttons pinned at drawer base.

---

## 6. Motion & Animation Specification (Framer Motion)

Animations are **tactile, smooth, and minimalist** (never dizzying or slow):
1. **Route Page Transitions**: Sub-pages enter with a gentle fade (`opacity: 0, y: 8` -> `opacity: 1, y: 0` in `0.35s`).
2. **Food Background Parallax (About Page)**:
   - Utilizes `useScroll` and `useTransform(scrollYProgress, [0, 1], ["-5%", "15%"])` for a calm, slow-gliding background that adds cinematic depth.
3. **Menu Category Tab Underline**:
   - Framer Motion `layoutId="activeTabPill"` providing a liquid gold slide when switching between categories.
4. **Food Card Hover Elevation**:
   - Card lifts by `4px` with subtle shadow expansion (`shadow-culinary` to `shadow-culinary-hover`).
   - Image inside scales by `1.03x` smoothly within `overflow-hidden`.
5. **Zero Jank / 60fps Performance**:
   - Hardware-accelerated properties (`transform`, `opacity`) exclusively.

---

## 7. Tech Stack & Implementation Roadmap

- **Framework**: Next.js 14/15 App Router (`app/` directory)
- **Styling**: Tailwind CSS v3.4 (with customized design tokens)
- **Motion**: Framer Motion (`framer-motion`)
- **Icons**: Lucide React + custom inline SVGs (Strictly zero emojis)
- **Fonts**: `@next/font/google` loading Playfair Display, Plus Jakarta Sans, and Caveat
- **Image Assets**: Native `next/image` with WebP optimization loading authentic assets from `media/`

### File Structure Map
```
pistis/
├── app/
│   ├── layout.tsx             # Root layout with fonts, TopBar, Navbar, Footer, Floating WhatsApp
│   ├── page.tsx               # Homepage (Narrative Story of Pistis)
│   ├── services/
│   │   └── page.tsx           # Dedicated Services breakdown
│   ├── menu/
│   │   └── page.tsx           # Pinterest-inspired Gastronomy showcase
│   ├── about/
│   │   └── page.tsx           # About Pistis with Parallax Food Background
│   ├── gallery/
│   │   └── page.tsx           # Event setups and catering proof
│   └── contact/
│       └── page.tsx           # Direct booking & WhatsApp lead generator
├── components/
│   ├── Navbar.tsx             # Responsive header with gold laurel logo
│   ├── TopBar.tsx             # Utility contact bar
│   ├── Footer.tsx             # Prestige navy/gold footer
│   ├── FloatingWhatsApp.tsx   # Brand-colored floating WhatsApp widget
│   ├── MobileStickyBar.tsx    # Mobile bottom quick-action bar
│   ├── MarqueeTicker.tsx      # Infinite gold marquee divider
│   ├── MenuCard.tsx           # Pinterest-style culinary card
│   ├── FoodParallaxBanner.tsx # Parallax food background component
│   └── Icons.tsx              # Bespoke SVGs (Laurel, WhatsApp, Cutlery)
├── public/
│   └── media/                 # Optimized local photography assets
├── design.md                  # This architecture document
├── tailwind.config.js         # Design token configuration
└── package.json               # Dependencies specification
```

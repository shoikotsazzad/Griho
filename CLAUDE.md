# GRIHO — Landing Website

## Project Overview
GRIHO is Bangladesh's first certified used flat marketplace. This is a marketing/landing website only — no backend, no authentication, no real data. Pure static React + Tailwind CSS. The goal is to look incredibly polished and modern — good enough for a startup competition pitch and investor presentation.

## Tech Stack
- React (Vite)
- Tailwind CSS
- Framer Motion (for animations)
- React Icons or Lucide React (for icons)
- No backend, no API calls, no authentication

## Fonts
- Import from Google Fonts: Playfair Display (for headlines) and Inter (for body text)
- Add to index.html or via @import in CSS
- Use Playfair Display for all section headlines, hero title, and the logo
- Use Inter for all body text, nav links, buttons, descriptions, labels

## Color Palette — USE THESE EXACT VALUES
- Navy (primary dark): #0D1B2A
- Gold (accent): #D4A853
- Off-white (background): #F7F4EF
- Light gray (alternate sections): #EFEFEB
- White: #FFFFFF
- Grade A Green: #27AE60
- Grade B Blue: #2980B9
- Grade C Amber: #F39C12
- Grade D Red: #E74C3C
- Muted text: #6B7280
- Dark text: #1F2937

## General Rules
- No lorem ipsum anywhere — use real GRIHO content from this file
- Every section must have proper padding: py-20 or py-24 on desktop, py-12 on mobile
- Max content width: max-w-7xl mx-auto px-6
- All buttons must have hover states with scale and shadow transitions
- All cards must have hover states — lift effect (translateY -4px) with shadow
- Smooth scroll behavior on the html element
- Use Framer Motion for scroll-triggered fade-up animations on every section
- Mobile responsive — everything must work on small screens
- No placeholder images — use gradient placeholder divs with overlay text for flat photos
- border-radius: use rounded-2xl for cards, rounded-full for badges and pills, rounded-xl for buttons

## File Structure
src/
  components/
    Navbar.jsx
    Hero.jsx
    ProblemSection.jsx
    HowItWorks.jsx
    GradingSystem.jsx
    FractionalInvestment.jsx
    StatsBar.jsx
    ForSellers.jsx
    Testimonials.jsx
    FAQ.jsx
    FinalCTA.jsx
    Footer.jsx
  App.jsx
  index.css
index.html

## Component Details

---

### Navbar.jsx
- Fixed top, full width, z-50
- backdrop-blur-md bg-white/80 on scroll (add shadow-md too), transparent when at top
- Use useEffect + window.addEventListener('scroll') to detect scroll position
- Left: "GRIHO" in Playfair Display font-bold text-2xl text-[#0D1B2A], with a small gold underline accent (a div with w-8 h-0.5 bg-[#D4A853] below the logo text)
- Right: nav links — How It Works, For Sellers, For Buyers, Invest, About
  - Each link: text-sm font-medium text-[#1F2937] hover:text-[#D4A853] transition-colors
  - Hover effect: gold underline that slides in from left using CSS — after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4A853] hover:after:w-full after:transition-all after:duration-300 relative
- Far right: "Get Started" button — bg-[#0D1B2A] text-[#D4A853] px-5 py-2 rounded-xl text-sm font-medium hover:bg-[#D4A853] hover:text-[#0D1B2A] transition-all duration-300
- Mobile: hamburger icon (Lucide Menu icon), clicking opens a full-screen overlay drawer with all nav links stacked vertically, close button top right, smooth slide-in from right animation using Framer Motion

---

### Hero.jsx
- Full viewport height: min-h-screen
- Background: bg-[#F7F4EF]
- Split layout: flex on desktop, stack on mobile
- Left side (55% width):
  - Small eyebrow text: "Bangladesh's First Certified Used Flat Platform" — text-xs font-semibold uppercase tracking-widest text-[#D4A853] with a short gold line before it (inline-flex items-center gap-2, line is w-8 h-px bg-[#D4A853])
  - Main headline: "Buy a Flat You Can Actually Trust." — font size text-5xl md:text-6xl lg:text-7xl, Playfair Display, text-[#0D1B2A], leading-tight, font-bold
  - Subtext: "Every listing inspected, graded, and certified. No dalals, no hidden issues, no surprises." — text-lg text-[#6B7280] mt-4 max-w-md
  - Two CTA buttons side by side (flex gap-4 mt-8):
    - "Browse Certified Flats" — bg-[#0D1B2A] text-white px-8 py-4 rounded-xl font-medium hover:scale-105 hover:shadow-xl transition-all duration-300
    - "List Your Flat" — border-2 border-[#D4A853] text-[#0D1B2A] px-8 py-4 rounded-xl font-medium hover:bg-[#D4A853] hover:text-[#0D1B2A] transition-all duration-300
  - Trust badges row below buttons (flex gap-6 mt-6):
    - Three items, each: small checkmark icon (green) + text
    - "Legal Verified", "Structurally Inspected", "Grade Certified"
    - text-sm text-[#6B7280] flex items-center gap-1
- Right side (45% width):
  - A floating flat listing card mockup — build this as a real styled div, not an image
  - Card: bg-white rounded-2xl shadow-2xl p-4 w-80 mx-auto
  - Inside the card:
    - Photo placeholder: rounded-xl bg-gradient-to-br from-[#0D1B2A] to-[#2C4A6E] h-44 w-full flex items-center justify-center text-white/30 text-sm "Flat Photo"
    - Below photo: flex justify-between items-start mt-3
    - Left: flat title "2BHK — Mirpur 10, Dhaka" font-semibold text-[#0D1B2A], price "BDT 24,00,000" text-[#D4A853] font-bold text-lg
    - Right: Grade A badge — large pill bg-[#27AE60] text-white font-bold text-xl px-4 py-2 rounded-xl with letter "A" big and "Grade" text tiny above it
    - Below: "GRIHO Certified ✓" badge — bg-[#0D1B2A] text-[#D4A853] text-xs px-3 py-1 rounded-full mt-2 inline-block
    - Inspection date: text-xs text-[#6B7280] mt-1 "Inspected: 12 June 2025"
  - Card has CSS animation: floating up and down — use keyframes in index.css: @keyframes float with translateY(0px) to translateY(-12px) to translateY(0px), animation: float 4s ease-in-out infinite
  - Behind the card: a large faint circle bg-[#D4A853]/10 rounded-full absolute -z-10 for atmosphere

---

### ProblemSection.jsx
- Background: bg-[#0D1B2A]
- Centered headline: "The Used Flat Market in Bangladesh is Broken." — Playfair Display text-4xl md:text-5xl text-white text-center font-bold
- Subtext below: "Millions of flats. Zero structure. We're fixing that." — text-[#D4A853] text-center mt-3
- 6 problem cards in a 3x2 grid (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12):
  Each card:
  - bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#D4A853]/50 hover:bg-white/10 transition-all duration-300 cursor-default
  - Icon at top: use Lucide icons, text-[#E74C3C] or text-[#F39C12] (warning/danger tones), size 28px
  - Title: text-white font-semibold text-lg mt-3
  - Description: text-white/60 text-sm mt-1 leading-relaxed
  Content:
  1. Icon: AlertTriangle — "No Standard Pricing" — "Sellers price arbitrarily. Buyers have no benchmark."
  2. Icon: ShieldOff — "No Structural Checks" — "Hidden cracks, bad wiring, and weak foundations go undetected."
  3. Icon: UserX — "Unaccountable Brokers" — "Dalals with no regulation, no liability, and no transparency."
  4. Icon: FileX — "Hidden Legal Risks" — "Title disputes and encumbrance issues discovered only after purchase."
  5. Icon: Lock — "Young Buyers Locked Out" — "A flat in Dhaka costs BDT 50–100 lakh. Fresh graduates have no path in."
  6. Icon: Wrench — "Renovation Is a Nightmare" — "No trusted vendors. No quality control. Just chaos after purchase."
- Framer Motion: staggered fade-up as cards enter viewport (staggerChildren 0.1s)

---

### HowItWorks.jsx
- Background: bg-[#F7F4EF]
- Centered headline: "How GRIHO Works" — Playfair Display text-4xl text-[#0D1B2A] font-bold
- Two tab buttons below: "For Sellers" and "For Buyers & Investors"
  - Tab style: pill buttons, active tab is bg-[#0D1B2A] text-white, inactive is bg-white border border-[#0D1B2A] text-[#0D1B2A]
  - Smooth content switch with Framer Motion AnimatePresence fade
- For Sellers tab — 5 steps:
  1. "Submit Listing" — Upload photos, documents, and flat details via the app
  2. "Initial Review" — Griho's BD team screens your submission within 48 hours
  3. "On-Site Inspection" — Our technical team visits and evaluates structure, legal, utility
  4. "Grade Assigned" — Your flat receives an A–D grade with full valuation report
  5. "List or Revamp" — List as-is at graded price, or renovate with Griho's team for a higher grade
- For Buyers & Investors tab — 5 steps:
  1. "Browse Certified Flats" — Filter by grade, location, size, and price
  2. "View Full Grade Report" — See structural, legal, and utility scores in plain language
  3. "Express Interest" — Griho connects you within 24 hours
  4. "Legal Facilitation" — Our partnered legal firms handle documentation and title transfer
  5. "Own Your Home" — Get your ownership documents uploaded to your profile
- Step layout: horizontal on desktop (flex row with connecting dashed gold line between circles), stacked on mobile
- Each step: circle with step number (bg-[#D4A853] text-[#0D1B2A] font-bold w-10 h-10 rounded-full), title below bold, description below muted text
- Animate steps in one by one with stagger on tab switch

---

### GradingSystem.jsx
- Background: bg-white
- Centered headline: "Every Flat Gets a Grade." — Playfair Display text-4xl text-[#0D1B2A] font-bold, with the period in text-[#D4A853]
- Subtext: "Inspired by how cars are certified. Applied to Bangladesh's most unorganized asset class." — text-[#6B7280] text-center mt-3 max-w-xl mx-auto
- Four grade cards in a row (grid-cols-2 lg:grid-cols-4 gap-6 mt-12):
  Each card is a 3D flip card (CSS perspective + rotateY):
  - Outer wrapper: relative h-72 cursor-pointer [perspective:1000px] group
  - Inner wrapper: relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]
  - Front face: absolute inset-0 [backface-visibility:hidden] rounded-2xl flex flex-col items-center justify-center border-2
    - Grade A: border-[#27AE60] bg-[#27AE60]/5
      - Giant letter "A" in text-8xl font-bold Playfair Display text-[#27AE60]
      - "Excellent" below in text-lg font-semibold text-[#0D1B2A]
      - "Full Valuation" pill badge below
    - Grade B: border-[#2980B9] bg-[#2980B9]/5, text-[#2980B9], "Good", "-10% to -20%"
    - Grade C: border-[#F39C12] bg-[#F39C12]/5, text-[#F39C12], "Fair", "-25% to -40%"
    - Grade D: border-[#E74C3C] bg-[#E74C3C]/5, text-[#E74C3C], "Poor", "-45% to -60%"
    - Small "hover to see criteria →" text at bottom in text-xs text-[#6B7280]
  - Back face: absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl p-5 flex flex-col justify-center
    - Grade A back: bg-[#27AE60] text-white
      - Title: "Grade A Criteria" font-bold
      - List of criteria: ✓ Structurally Sound, ✓ Legally Clear, ✓ Prime Location, ✓ Modern Utilities, ✓ No Encumbrance
    - Each grade back has matching color bg and white text
    - List items in text-sm with checkmark icons
- Below cards: callout bar — bg-[#0D1B2A] text-white rounded-2xl p-4 mt-8 text-center: "Grade is always visible to buyers. No hidden surprises. No dalal games."

---

### FractionalInvestment.jsx
- Background: bg-[#0D1B2A]
- Two-column layout (flex col on mobile, flex row on desktop)
- Left side:
  - Eyebrow: "Fractional Ownership" in gold uppercase tracking-widest text-xs
  - Headline: "Can't Afford a Full Flat? Own a Share." — Playfair Display text-4xl text-white font-bold mt-2
  - Subtext: "Invest monthly. Cross the threshold. Get matched with co-owners. Own a certified flat together." — text-white/60 mt-4
  - 4 vertical steps with connecting gold line on the left:
    Each step: flex row, left is a gold circle with number, right is title + description
    1. "Invest Monthly" — Set your monthly deposit amount. As low as BDT 10,000/month.
    2. "Cross the Threshold" — Once you reach BDT 6,00,000 in your account, you become eligible.
    3. "Get Matched" — Griho matches you with 3 other eligible investors for a certified flat.
    4. "Co-Own the Flat" — Each investor owns 25%. Rent it out. Build equity together.
  - Step circles: bg-[#D4A853] text-[#0D1B2A] font-bold rounded-full w-8 h-8 flex items-center justify-center
  - Connecting line: a vertical line left-4 absolute h-full border-l-2 border-[#D4A853]/30 border-dashed
- Right side:
  - Stack of two mockup cards (flex flex-col gap-4)
  - Card 1 — Investment Progress Card:
    - bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm
    - Title: "Your Investment Account" text-white font-semibold
    - Amount: "BDT 4,20,000" text-3xl font-bold text-[#D4A853]
    - Subtext: "of BDT 6,00,000 threshold" text-white/50 text-sm
    - Progress bar: bg-white/20 rounded-full h-3 mt-3, inner div bg-[#D4A853] rounded-full h-3 w-[70%] with animate-pulse glow or shimmer animation
    - "70% Complete — Est. 2 months to eligibility" text-white/60 text-xs mt-2
  - Card 2 — Co-Ownership Offer Card:
    - bg-white rounded-2xl p-5 shadow-xl
    - Top: "🏠 Co-Ownership Offer" text-[#0D1B2A] font-semibold — actually use Home icon from Lucide, not emoji
    - Flat details: "2BHK — Uttara, Dhaka" font-bold text-[#0D1B2A], Grade B badge blue
    - Total price: "BDT 24,00,000" and "Your Share: BDT 6,00,000 (25%)"
    - Co-owners row: 4 avatar circles side by side (initials: SA, RH, TI, You) — You circle has gold border
    - Two buttons: "Accept Offer" bg-[#0D1B2A] text-white rounded-xl px-4 py-2 text-sm and "View Details" outlined
    - "Offer expires in 47:32:10" countdown in red text-xs (static display, no real timer needed)

---

### StatsBar.jsx
- Background: bg-[#D4A853]/10 border-y border-[#D4A853]/20
- Four stats in a row (grid-cols-2 lg:grid-cols-4 gap-8 py-16 px-6)
- Each stat: centered, large number/text in Playfair Display text-4xl font-bold text-[#0D1B2A], label below in text-sm text-[#6B7280] uppercase tracking-wide
- Stats:
  1. "6-Step" — "Inspection Process"
  2. "A to D" — "Grade Transparency"
  3. "1 Month" — "Structural Guarantee"
  4. "100%" — "Certified Listings Only"
- Vertical dividers between stats (hidden on mobile)
- Animate numbers counting up with Framer Motion when section enters viewport (use useMotionValue and animate)

---

### ForSellers.jsx
- Background: bg-[#F7F4EF]
- Two-column layout
- Left side: stacked card flow showing seller journey
  - Three cards connected by a dashed vertical arrow line:
  - Card 1: "Flat Submitted" — gray badge "Pending Review", flat address, submission date
  - Card 2: "Grade Assigned: B" — blue grade badge, valuation BDT 22,00,000, inspection date
  - Card 3: Two choice buttons — "List As-Is at BDT 22,00,000" and "Revamp for Higher Grade →"
  - Cards: bg-white rounded-2xl shadow-md p-5 border border-gray-100
  - Arrow between cards: dashed vertical line with arrow tip in gold
- Right side:
  - Eyebrow: "For Flat Owners" gold uppercase
  - Headline: "Sell Smarter. Not Cheaper." Playfair Display text-4xl text-[#0D1B2A] font-bold
  - Subtext: "Stop guessing your flat's worth. Let Griho inspect, grade, and market it — so you get the right price, not just a fast sale."
  - Benefits list (5 items, each with a green checkmark circle icon):
    - Fair Market Valuation
    - Transparent Grading Report
    - Legal Documentation Support
    - Optional Renovation Service
    - Faster, Structured Sale Process
  - CTA: "Submit Your Flat for Free →" — large gold button bg-[#D4A853] text-[#0D1B2A] font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all

---

### Testimonials.jsx
- Background: bg-white
- Centered headline: "Built for Dhaka's Next Generation of Homeowners." Playfair Display text-3xl text-[#0D1B2A] font-bold
- Three testimonial cards (grid-cols-1 md:grid-cols-3 gap-6 mt-10)
  Each card:
  - bg-[#F7F4EF] rounded-2xl p-6 border-l-4 border-[#D4A853] hover:-translate-y-1 hover:shadow-lg transition-all duration-300
  - Large quotation mark " in text-6xl text-[#D4A853]/30 font-serif leading-none
  - Quote text in text-[#1F2937] text-sm leading-relaxed
  - Bottom: avatar circle (initials) + name bold + location muted text-xs
  - Badge: "Beta Participant" pill in bg-[#0D1B2A]/10 text-[#0D1B2A] text-xs rounded-full px-3 py-1
  Content:
  1. "Finally a platform that treats flat buyers like adults. The grade report told me exactly what I was getting into. No surprises." — Sami R., Mirpur, Dhaka
  2. "I was about to sell through a broker and lose lakhs. Griho's valuation was 18% higher than what the dalal quoted me." — Farida K., Mohammadpur, Dhaka
  3. "The fractional model is the only realistic path to property ownership for someone earning under 50k a month in Dhaka." — Tanvir H., Uttara, Dhaka

---

### FAQ.jsx
- Background: bg-[#F7F4EF]
- Centered headline: "Common Questions" Playfair Display text-3xl text-[#0D1B2A] font-bold
- Subtext: "Everything you need to know before your first step." text-[#6B7280] text-center mt-2
- 6 accordion items (max-w-3xl mx-auto mt-10):
  Each item:
  - bg-white rounded-2xl mb-3 overflow-hidden border border-gray-100
  - Header: flex justify-between items-center p-5 cursor-pointer hover:bg-gray-50 transition-colors
  - Question text: font-semibold text-[#0D1B2A] text-base
  - Right icon: Plus icon that rotates 45deg to X when open (transition-transform duration-300)
  - Answer: AnimatePresence in Framer Motion — height animation from 0 to auto, text-[#6B7280] text-sm leading-relaxed px-5 pb-5
  - Open state: border-l-4 border-[#D4A853] on the left
  Questions:
  1. "How is the flat grade determined?" — A team of engineers and legal experts inspects 8+ criteria including structural integrity, legal title clarity, utility condition, and location quality. Each factor is scored and combined into the A–D grade.
  2. "What does the 1-month structural guarantee cover?" — It covers major structural defects discovered after purchase — things like foundation issues, beam cracks, or severe water damage that were not visible during inspection. Cosmetic issues are not covered.
  3. "How does fractional ownership work legally?" — Co-owners enter a legally registered co-ownership agreement drafted by Griho's partnered legal firms. Each owner's share is documented and registered.
  4. "Can I exit my fractional investment?" — Yes. You can sell your share peer-to-peer or list it back on Griho's platform for the next eligible investor.
  5. "How long does the inspection process take?" — After your submission is approved, inspection is typically scheduled within 5–7 business days. The full grading report is delivered within 3 days of the site visit.
  6. "Is Griho available outside Dhaka?" — Currently Griho is operating in Dhaka only — starting with Mirpur, Mohammadpur, and Uttara. Expansion to Chattogram is planned for Year 2.
- Only one item open at a time

---

### FinalCTA.jsx
- Background: bg-[#0D1B2A] with a subtle repeating diagonal line pattern using CSS background-image: repeating-linear-gradient(45deg, rgba(212,168,83,0.03) 0px, rgba(212,168,83,0.03) 1px, transparent 0px, transparent 50%)
- Full padding py-28
- Centered content:
  - Small eyebrow: "Join the Waitlist" gold uppercase text-xs tracking-widest
  - Headline: "Your Certified Home Starts Here." Playfair Display text-5xl text-white font-bold mt-3 max-w-2xl mx-auto text-center
  - Subtext: "Be among the first to access Bangladesh's most transparent flat marketplace." text-white/60 mt-4 text-center
  - Two buttons side by side (flex justify-center gap-4 mt-8):
    - "Find a Flat" — bg-[#D4A853] text-[#0D1B2A] font-bold px-8 py-4 rounded-xl hover:scale-105 hover:shadow-xl transition-all
    - "Start Investing" — border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:border-[#D4A853] hover:text-[#D4A853] transition-all
  - Three trust badges below (flex justify-center gap-8 mt-10):
    Each badge: flex items-center gap-2 text-white/70 text-sm
    - Shield icon + "Certified Listings"
    - CheckCircle icon + "Legal Verified"
    - Star icon + "Graded & Inspected"

---

### Footer.jsx
- Background: bg-[#0D1B2A] border-t border-white/10
- Four-column grid (grid-cols-2 md:grid-cols-4 gap-8 py-16 px-8)
- Column 1 — Brand:
  - "GRIHO" in Playfair Display text-2xl font-bold text-white
  - Gold underline accent div w-8 h-0.5 bg-[#D4A853] mt-1
  - Tagline: "Your Certified Home. Your Trusted Investment." text-white/50 text-sm mt-3 leading-relaxed
  - Social icons row (mt-4 flex gap-3): Facebook, Instagram, LinkedIn — each icon in a circle border border-white/20 p-2 rounded-full text-white/50 hover:border-[#D4A853] hover:text-[#D4A853] transition-all
- Column 2 — Platform:
  - "Platform" heading text-white/30 text-xs uppercase tracking-widest mb-3
  - Links: How It Works, Browse Flats, List Your Flat, Grading System
  - Link style: text-white/60 text-sm hover:text-[#D4A853] transition-colors block mb-2
- Column 3 — Investors:
  - "Investors" heading
  - Links: Fractional Ownership, How to Invest, Eligibility Calculator, Co-Owner Portal
- Column 4 — Company:
  - "Company" heading
  - Links: About Griho, Our Team, Careers, Contact
  - Below links: "📍 Dhaka, Bangladesh" (use MapPin icon from Lucide) text-white/40 text-xs mt-4
  - "hello@griho.com.bd" text-white/40 text-xs
- Bottom bar: border-t border-white/10 mt-8 pt-6 flex justify-between items-center
  - Left: "© 2025 GRIHO. All rights reserved." text-white/30 text-xs
  - Right: "Pre-Launch Platform — Confidential" text-white/20 text-xs

---

## Animation Rules (Framer Motion)
- Every section: wrap main content in motion.div with initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
- Card grids: use variants with staggerChildren: 0.1 on the container, and each card fades up with delay
- Hero elements: stagger in sequence — eyebrow first, headline, subtext, buttons, trust badges — each 0.15s apart
- Floating card: CSS keyframe animation only (not Framer Motion), defined in index.css
- Grade card flip: pure CSS hover, not Framer Motion
- FAQ accordion: Framer Motion AnimatePresence with height from 0 to auto
- Tab switch in HowItWorks: AnimatePresence with fade (opacity 0 to 1)
- Stats bar counter: useEffect with a count-up loop when section enters viewport

## index.css additions
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap');

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}

.font-playfair { font-family: 'Playfair Display', serif; }
.animate-float { animation: float 4s ease-in-out infinite; }

html { scroll-behavior: smooth; }

## Notes
- All button clicks can show a toast or console.log for now — no real functionality needed
- No forms need to actually submit — just visually complete
- Prioritize visual quality over functionality
- When in doubt, add more whitespace — the design breathes
- The grade flip cards are the signature element — make them feel premium
- The hero floating card is the first thing people see — make it look real and polished
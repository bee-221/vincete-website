# Vincete Events — Project Status

## What Has Been Built

A full premium single-page Next.js website for Vincete Events, an East London luxury event decor company.

### Tech Stack
- **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**, **Framer Motion**
- **Fonts:** Cormorant Garamond (headings, light/italic) + Jost (body, weight 200–300)
- **Contact form:** Formspree (needs `NEXT_PUBLIC_FORMSPREE_ID` in `.env.local`)
- **Deployment target:** Vercel (free tier)

### Design System
Matched to the reference HTML (`index_4.html`) with:
- Colours: `off-white #faf9f7`, `cream #f3f0eb`, `charcoal #1a1714`, `accent #c9a96e`
- No border-radius anywhere — all square/rectangular elements
- Cormorant Garamond with italic gold `<em>` accents in all major headings
- Buttons: charcoal primary (turns gold on hover), ghost underline secondary
- Section labels have a thin gold line prefix (CSS `::before`)

### Pages / Sections (all in `src/app/page.tsx`)
1. **Navigation** — transparent → solid on scroll, mobile drawer
2. **Hero** — split layout: text left, 2×2 animated image grid right
3. **Marquee** — dark scrolling ticker strip (service names)
4. **About** — overlapping image layout + stats (200+ / 100% / 5★)
5. **Services** — 2-column grid, numbered cards (01–13), dark hover state
6. **Portfolio** — filtered gallery + lightbox + Instagram CTA
7. **Process** — 6-step grid
8. **Testimonials** — 6 review cards with italic Cormorant quotes
9. **FAQ** — accordion (one open at a time)
10. **Contact** — dark charcoal section, full enquiry form (13 fields) + Formspree
11. **Footer** — minimal single row
12. **Custom cursor** — gold dot + ring (desktop only)

### Key File Locations
| What | Where |
|---|---|
| All content data | `src/data/` (services, portfolio, testimonials, faqs, process) |
| Section components | `src/components/sections/` |
| UI components | `src/components/ui/` |
| Design tokens | `tailwind.config.ts` |
| Global styles | `src/app/globals.css` |
| SEO metadata | `src/lib/metadata.ts` |
| Motion variants | `src/lib/motionVariants.ts` |

---

## What Still Needs To Be Done

### Before Launch (required)
- [ ] **Replace placeholder images** — all portfolio images are Unsplash URLs. Replace `src` values in `src/data/portfolio.ts` with real event photos. Also replace hero images in `src/components/sections/HeroSection.tsx` and the about image in `src/components/sections/AboutSection.tsx`. Recommended: WebP, under 200KB each.
- [ ] **Connect the contact form** — create a free account at formspree.io, create a form, copy the ID, add `NEXT_PUBLIC_FORMSPREE_ID=your_id` to `.env.local` (and Vercel environment variables when deploying).
- [ ] **Update contact details** — replace placeholder email/phone/social handles in `src/components/sections/ContactSection.tsx` and `src/components/layout/Footer.tsx` once confirmed.
- [ ] **Create `public/og-image.jpg`** — 1200×630px branded image for social sharing previews.
- [ ] **Update domain in metadata** — replace `vinceteevents.com` placeholder in `src/lib/metadata.ts` and `src/app/robots.ts` with the actual domain.

### Before Launch (recommended)
- [ ] **Real testimonials** — swap placeholder reviews in `src/data/testimonials.ts` with genuine client reviews.
- [ ] **Update stats in About** — change "200+ Events Styled" to accurate numbers in `src/components/sections/AboutSection.tsx`.
- [ ] **Mobile test** — open on a real phone (375px / 390px). Key areas to check: hero split layout (stacks on mobile), nav drawer, services grid, contact form.
- [ ] **Accessibility audit** — run Lighthouse (target: Performance ≥ 85, Accessibility ≥ 95, SEO ≥ 95).

### Nice To Have (post-launch)
- [ ] **Instagram feed** — connect Behold.so (free tier, 9 posts) to replace the static portfolio gallery or add a live feed section. See `SETUP.md` for instructions.
- [ ] **Portfolio section responsiveness on mobile** — currently shows 3 columns on desktop, could benefit from a 2-column masonry layout on tablet.
- [ ] **Custom domain** — buy `vinceteevents.com` (~£10–15/year) and connect via Vercel dashboard.
- [ ] **Privacy Policy & T&C pages** — footer links currently point to `#`. Create simple pages at `/privacy` and `/terms` if needed.
- [ ] **Google Analytics or Plausible** — add lightweight analytics before launch to track enquiry conversion.

---

## Running the Project

```bash
# Install Node (first time only — already done via nvm)
export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh"

# Start dev server
npm run dev
# → http://localhost:3000

# Production build check
npm run build
```

## Deployment

See `SETUP.md` for full Vercel deployment + custom domain instructions.

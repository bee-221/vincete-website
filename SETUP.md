# Vincete Events — Website Setup & Customisation Guide

## Quick Start

```bash
# 1. Install dependencies (first time only)
npm install

# 2. Start the development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## First Steps After Download

### 1. Set up the contact form (required for enquiries)

1. Go to **formspree.io** and create a free account
2. Create a new form — give it a name like "Vincete Events Enquiry"
3. Copy the **Form ID** from the URL (e.g. `xpwzrqvb`)
4. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
5. Open `.env.local` and paste your form ID:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=xpwzrqvb
   ```
6. Restart the dev server — the contact form will now send emails to your Formspree inbox

> Free tier: 50 submissions/month. Upgrade to Basic (~$10/month) for 1,000/month.

---

## Replacing Placeholder Images

All images are currently Unsplash placeholders. Replace them with your real event photos.

### Hero Image
Open `src/components/sections/HeroSection.tsx`, find the `<Image>` tag and replace the `src`:
```tsx
<Image
  src="/images/hero/hero-bg.jpg"  // ← change this
  alt="..."
  ...
/>
```
Put your photo at `public/images/hero/hero-bg.jpg` (recommended: 1920×1080px, WebP or JPEG, under 300KB).

### About Image
Open `src/components/sections/AboutSection.tsx` and replace the `src` in the `<Image>` tag.
Put your photo at `public/images/about/about.jpg` (recommended: 800×1000px portrait).

### Portfolio Gallery
Open `src/data/portfolio.ts`. Each item has a `src` field — replace the Unsplash URL with either:
- A local path: `"/images/portfolio/wedding-01.jpg"` (add photos to `public/images/portfolio/`)
- Or any HTTPS image URL (add the domain to `next.config.mjs` under `remotePatterns`)

**Tip:** Keep photo filenames descriptive (e.g. `nikkah-stratford-2024.jpg`) and compress them to under 200KB each using [Squoosh](https://squoosh.app) before uploading.

---

## Updating Content

All content lives in plain TypeScript files — no coding knowledge needed to edit text.

### Services (`src/data/services.ts`)
Add, remove, or edit services. Each service has:
- `title` — service name shown on cards
- `shortDescription` — 1-2 sentence description
- `featured: true` — shown on homepage preview (keep to ~6 featured)

### Testimonials (`src/data/testimonials.ts`)
Add real client reviews here. Replace placeholder reviews as you collect them.
- `name` — client name (first name only is fine)
- `eventType` — e.g. `"Wedding — August 2024"`
- `quote` — the review text
- `avatarInitials` — 2 letters shown in the avatar circle

### FAQs (`src/data/faqs.ts`)
Edit questions and answers here. Add new FAQs as you receive common questions.

### Process Steps (`src/data/process.ts`)
Customise the 6-step process description if your workflow differs.

### Contact Details
Update your contact info in two places:
- `src/components/sections/ContactSection.tsx` — email, Instagram, TikTok, location
- `src/components/layout/Footer.tsx` — same details in the footer

### Brand Name / Tagline
Search the project for `"Vincete Events"` and replace with your actual trading name once confirmed.

---

## Connecting an Instagram Feed (Optional)

To show your live Instagram posts on the website:

1. Go to **behold.so** and create a free account
2. Connect your Instagram Business/Creator account
3. Create a new "Grid" widget
4. Copy the `feed-id` from the embed snippet
5. Open `src/components/sections/PortfolioSection.tsx`
6. The Instagram CTA section is already there — the gallery itself uses static images from `portfolio.ts`. If you want a live feed, you can embed the Behold widget below the gallery by adding:

```tsx
<script
  type="module"
  src="https://w.behold.so/widget.js"
/>
<behold-widget feed-id="YOUR_FEED_ID" />
```

> Free tier shows 9 posts. Upgrade to Pro (~$10/month) for more posts and custom styling.

---

## Deploying to Vercel (Free)

1. Push the project to **GitHub** (create a new repo at github.com)
2. Go to **vercel.com**, sign in with GitHub
3. Click "Add New Project" → Import your repository
4. Next.js will be auto-detected — no configuration needed
5. **Add your environment variable:**
   - Go to Project → Settings → Environment Variables
   - Add `NEXT_PUBLIC_FORMSPREE_ID` = your Formspree ID
   - Select all environments (Production, Preview, Development)
6. Click Deploy

Your site will be live at `your-project-name.vercel.app` within ~2 minutes.

### Connecting a Custom Domain

1. Buy a domain (e.g. `vinceteevents.com`) from Namecheap or GoDaddy (~£10–15/year)
2. In Vercel → Project → Settings → Domains, add your domain
3. At your domain registrar, update DNS:
   - Add `A` record pointing to `76.76.21.21`
   - Add `CNAME` for `www` pointing to `cname.vercel-dns.com`
4. SSL is automatic — live within minutes of DNS propagation

---

## Cost Summary

| Service | Plan | Cost |
|---|---|---|
| Vercel hosting | Hobby (free) | £0/month |
| Formspree contact form | Free (50 enquiries/month) | £0/month |
| Behold Instagram feed | Free (9 posts) | £0/month |
| Google Fonts | Free | £0 |
| **Domain name** | — | ~£10–15/year |

**Recommended upgrades as you grow:**
- Formspree Basic: $10/month → 1,000 form submissions/month
- Behold Pro: $10/month → unlimited Instagram posts, custom styling

---

## File Structure Overview

```
src/
├── app/
│   ├── layout.tsx          ← fonts, metadata, root HTML
│   ├── page.tsx            ← assembles all sections in order
│   └── globals.css         ← global styles and Tailwind utilities
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx  ← sticky nav with mobile menu
│   │   └── Footer.tsx      ← links, socials, copyright
│   ├── sections/           ← one file per page section
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FaqSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/                 ← reusable components
│       ├── ContactForm.tsx ← form with validation + Formspree
│       └── Lightbox.tsx    ← portfolio image viewer
├── data/                   ← ✏️  EDIT THESE to update content
│   ├── services.ts
│   ├── portfolio.ts
│   ├── testimonials.ts
│   ├── faqs.ts
│   └── process.ts
└── lib/
    └── metadata.ts         ← SEO titles and meta descriptions
```

---

## SEO Checklist Before Launch

- [ ] Replace `vinceteevents.com` in `src/lib/metadata.ts` and `src/app/robots.ts` with your actual domain
- [ ] Create a real `public/og-image.jpg` (1200×630px) — used when links are shared on social media
- [ ] Replace all placeholder portfolio images with real event photos
- [ ] Update the meta description in `src/lib/metadata.ts` if you want to tweak the wording
- [ ] Submit your sitemap to Google Search Console: `https://yourdomain.com/sitemap.xml`

---

## Support

If you need help with this website, open a conversation and reference this project.
The full source code is yours — there are no platform lock-ins or monthly fees beyond the optional services above.

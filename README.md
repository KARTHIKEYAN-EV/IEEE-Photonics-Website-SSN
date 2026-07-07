# SSN IEEE Photonics Society — Website

A static, multi-page website for the SSN IEEE Photonics Society Student Chapter. Plain HTML/CSS/JS — no build step, so it deploys to Vercel as-is.

## 1. Replace the logo (do this first)

`assets/logo.svg` is a **placeholder** prism emblem I generated — not your official chapter logo.

1. Get your official logo file (SVG preferred; PNG with a transparent background also works).
2. Rename it to `logo.svg` (or `logo.png`, then update the `src` references below) and drop it into `assets/`, replacing the placeholder.
3. If you use a different filename/extension, find-and-replace `assets/logo.svg` across all `.html` files.

The logo already appears in the navbar, hero-adjacent brand mark, and footer on every page — you only need to swap the one file.

## 2. Deploy to Vercel

**Option A — via GitHub (recommended)**
1. Push this folder to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: choose **"Other"** (it's a static site — no build command, no output directory needed; root is fine).
4. Click **Deploy**. Done — you'll get a live `.vercel.app` URL, and can attach a custom domain in Project Settings → Domains.

**Option B — via Vercel CLI**
```bash
npm i -g vercel
cd ssn-photonics
vercel
```
Follow the prompts (set up and deploy → yes; no build settings needed).

## 3. What's already built

- **Home** — hero with animated prism/spectrum graphic, about the society, vision/mission/objectives, announcement cards.
- **Events** — countdown timer to the next event, interactive month calendar (click a highlighted date), filterable + searchable event grid (upcoming/past).
- **Team** — categorized member cards (Faculty Advisor, Executive Committee, Technical/Web/Event/Media teams).
- **Achievements** — filterable achievement cards (competitions, publications, patents, scholarships, IEEE awards).
- **Gallery** — categorized masonry grid with a lightbox preview.
- **Resources** — slide decks, study material, and paper links.
- **Student Queries** — categorized submission form.
- **Contact** — email/address/embedded Google Map + contact form.
- Site-wide: fixed navbar, mobile menu, dark/light mode toggle (saved across visits), smooth scroll, scroll-to-top button, scroll reveal animations.

## 4. Editing content

Everything is plain HTML, so content lives directly in each page:

- **Events**: edit the `EVENTS` array at the top of `js/main.js`. This single array powers the countdown timer, the calendar, and the event cards on `events.html` — add an object, and it shows up everywhere automatically.
- **Team**: edit the member cards directly in `team.html` (swap the initials `<div class="member-photo">` for an `<img>` tag once you have real photos).
- **Achievements**: edit the cards in `achievements.html`.
- **Gallery**: currently generated from a small `CATS` array inline at the bottom of `gallery.html` — swap the colored placeholder tiles for real `<img>` tags once you have photos (recommended: 800px wide, compressed JPG/WebP).
- **Colors/fonts**: all design tokens are CSS variables at the top of `css/style.css` (`:root { ... }`).

## 5. Forms need a backend

The Student Queries and Contact forms currently just show a confirmation message in the browser — they don't send anywhere yet, since this is a static site with no server. Before going live, connect them to one of:
- [Formspree](https://formspree.io) — easiest, free tier available, just point the form's `action` at your Formspree endpoint.
- [Getform](https://getform.io) or Google Forms (embed instead).
- A small serverless function on Vercel if you want emails to go through your own domain.

## 6. Map

The embedded map on `contact.html` currently points to "SSN College of Engineering, Kalavakkam, Chennai." If your exact building/block differs, replace the query in the iframe `src` on that page.

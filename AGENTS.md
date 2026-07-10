# SSN IEEE Photonics Society — Website

## Project overview

Static multi-page website for the SSN IEEE Photonics Society Student Chapter. Built with vanilla HTML/CSS/JS — no build step. Deploys to Vercel.

## Completed tasks

- Initial project setup and deployment config
- Home page with prism/spectrum hero, about section, announcements, VMO cards
- Events page with countdown timer, interactive calendar, filterable/searchable event grid
- Team page with placeholder member cards (initials, name, role, dept) for all teams
- Achievements page with filterable achievement cards
- Gallery page with masonry grid and lightbox (placeholder tiles)
- Resources page with resource link cards
- Queries page with embedded Google Form
- Contact page with email, address, map, and contact form
- Dark/light mode toggle with localStorage persistence
- Mobile responsive layout
- Logo SVG asset
- **Team page** — Updated Faculty Advisor placeholder with generic name, dept, and designation
- **Contact page** — Removed contact form; added Chairperson & Vice Chairperson contact cards with placeholder values
- **Social media** — Added platform name labels (Instagram, LinkedIn, YouTube) with placeholder links across all pages

## Pending tasks

### High priority

- [ ] **Team page** — Add profile photos for all team members (place in `assets/team/`)
- [ ] **Team page** — Replace Faculty Advisor placeholder with confirmed name, department, and designation
- [ ] **Contact page** — Replace Chairperson, Vice Chairperson, and Faculty Advisor placeholders with actual contact info
- [ ] **Social media** — Replace `#` placeholder hrefs with actual Instagram, LinkedIn, YouTube URLs

### Medium priority

- [x] **Events page** — Populated with 16 events (4 upcoming, 12 past) including Inauguration, LIGHTSCAPE, Invited Talks, Workshops, Industrial Visit, Tech Talk, Outreach, Laser Tag, International Light Day, and Cryptic Code Crash. Each past event has a "View Recap" button that opens a modal with full recap text.
- [ ] **Events page** — Add more upcoming events as they are scheduled
- [ ] **Achievements page** — Populate with real student achievements (names, photos, descriptions)
- [ ] **Gallery page** — Replace placeholder tiles with actual event photos

### Low priority

- [ ] **Resources page** — Either populate with real PDFs/docs/slides or remove/hide the page
- [ ] **Logo** — Replace placeholder `assets/logo.svg` with official chapter logo
- [ ] **Queries form** — Connect the embedded Google Form to collect responses; or replace with a Formspree/Getform endpoint
- [ ] **Map** — Verify/update Google Maps embed iframe URL

## Code conventions

- HTML: 2-space indentation, semantic elements, inline SVG icons
- CSS: Design tokens in `:root` variables in `css/style.css`, spectrum-themed section labels
- JS: All behaviour in `js/main.js`, event data in the `EVENTS` array at the top
- Dark mode: Controlled via `data-theme` attribute on `<html>`, persisted in localStorage under key `ssnps-theme`
- Team member photos: Use `<img>` tags inside `.member-photo` div, circular crop (border-radius: 50%), square images recommended

## Quick reference

| Task | File(s) |
|------|---------|
| Add/update events | `js/main.js` lines 8-79 |
| Team members | `team.html` |
| Achievements | `achievements.html` |
| Gallery images | `gallery.html` + `assets/` |
| Design tokens | `css/style.css` lines 8-64 |
| Theme toggle | `js/main.js` lines 82-103 |

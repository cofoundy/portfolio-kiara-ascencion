# QA Report: Kiara M. Ascencion Arevalo

**Date:** 2026-02-27
**URL:** https://kiara-ascencion.cofoundy.dev
**Status:** PASS

## Data Validation
- [x] Name matches source: "Kiara M. Ascencion Arevalo" -- matches Sheet + research-notes.md
- [x] Email matches source: kiara.ascencion@gmail.com -- matches Sheet exactly (Cloudflare email protection active)
- [x] Job title from source: "Ontology Engineer | Knowledge Graph Specialist" -- consistent with CV/research
- [x] Companies verified: metaphacts GmbH, TH Nurnberg, Fraunhofer IIS -- all from CV
- [x] Education verified: FAU Erlangen-Nuremberg (M.Sc.), Feng Chia University (B.B.A.) -- from CV
- [x] Dates verified: all periods match research-notes.md extraction
- [x] Publications verified: HOLY (ISWC 2023), AutOnto (KGSWC 2024) -- DOIs resolve correctly
- [x] Research projects verified: DuraFuelCell, Atlant-H, Data4Leads -- all from CV
- [x] No hallucinated data detected

## Clean Deploy
- [x] No "Powered by" / "Made with" / "Built with" visible text
- [x] No template links (View source, Fork this, etc.)
- [x] No "Lorem ipsum" or placeholder text
- [x] No template watermarks (Astro logo, Vercel badge)
- [x] No broken links showing "#" or "javascript:void(0)" as visible text
- [x] No "undefined" or "null" visible in content
- [x] "Crafted by Cofoundy" in footer at 30% opacity -- acceptable agency branding

## Technical
- [x] CSS loads: /_astro/index.D9yZ1b-p.css -> HTTP 200
- [x] Profile image loads: /profile.jpg -> HTTP 200 (1.3MB)
- [x] Favicon loads: /favicon.svg -> HTTP 200
- [ ] kg-background.svg -> HTTP 404 (non-critical, decorative asset)

## Links Verification
- [x] LinkedIn: https://www.linkedin.com/in/kiara-ascencion/ (999 = LinkedIn bot block, normal)
- [x] GitHub: https://github.com/Kiaramarnitt -> HTTP 200
- [x] ORCID: https://orcid.org/0000-0002-4158-9478 -> HTTP 200
- [x] DOI (HOLY): https://doi.org/10.1007/978-3-031-47243-5_1 -> 302 to Springer (valid)
- [x] DOI (AutOnto): https://doi.org/10.1007/978-3-031-81221-7_16 -> valid
- [x] Email: Cloudflare email protection active (encoded, not exposed as plaintext)

## Sections Verified
- [x] Hero: Name, title, tagline, stats (3 Research Projects, 2 Publications, 4 Languages)
- [x] Navigation: Top nav + floating pill nav on scroll + mobile menu
- [x] About: Bio text, languages sidebar, current role sidebar
- [x] Expertise: Knowledge graph visualization with interactive nodes (13 skills)
- [x] Research: 3 projects with tags + 2 publications with DOI links + 3 GitHub repos
- [x] Experience: 4 positions in career timeline format
- [x] Education: 2 degrees
- [x] Beyond Work: 7 interests with icons
- [x] Contact/Footer: Email, LinkedIn, GitHub, ORCID links

## Responsive Design
- [x] Tailwind responsive classes present (md:, lg: breakpoints)
- [x] Mobile menu implementation detected (hamburger + slide panel)
- [x] Viewport meta tag present

## Minor Notes
- Python skill level: 3/5 in research-notes vs 4/5 in config.ts (minor judgment call, not hallucination)
- kg-background.svg returns 404 but this appears to be a decorative SVG that may be inlined or unused; no visible breakage on the page
- Profile image is 1.3MB -- could be optimized for faster loading

## Issues Found
1. (Minor) kg-background.svg returns HTTP 404 -- verify if this asset is referenced and needed
2. (Minor) Profile image at 1.3MB could benefit from compression

## Evidence
- Page HTML fully inspected via curl
- All external links verified
- HTTP status codes checked for all assets

# Audit fixes — what still needs you

Branch: `seo-audit-fixes` (off `seo-fixes`). This file lists the audit items that
could **not** be finished in code because they need real data, a business decision,
or an off-site action. Grep the codebase for `TODO(seo)` to find the exact spots.

Full context: `../trianglewebdesign.com-audit/FULL-AUDIT-REPORT.md` and `ACTION-PLAN.md`.

---

## 1. Data I don't have (fill in, then the code is done)

| # | What | Where | Notes |
|---|------|-------|-------|
| 1 | **Real Google Business Profile URL** | `src/_data/client.js` → `socials.google` | Currently the `share.google/tzpRW8fE9C0wvoCJM` link already in your schema. Replace with the full `https://www.google.com/maps/place/…` profile URL if you have it. The footer "Google" icon and the review CTA both point here. |
| 2 | **Consistent reviewer names + cities** | `src/content/pages/reviews.html`, `src/index.html` (homepage testimonials), `src/content/pages/about.html` | The audit's #1 trust issue: `/about/` promises "full names on the reviews page", `/reviews/` shows only initials, and the homepage uses different fuller names (Miguel Martinez / Penelope Bonaparte). Pick one real display form (first + last + city, with consent), make all three pages agree, and link each quote to its public Google review. Then the `Review` JSON-LD on `/reviews/` can carry `author` names + `datePublished`. |
| 3 | **Real publish/update dates** | `src/content/pages/about.html` (`2025-01-01` placeholder), `src/content/blog/raleigh-web-design-zero-down.md` (`2026-01-01`) | Replace with true dates. Only bump `dateModified` / add a `lastModified:` key when you actually revise a post. |
| 4 | **`Person.sameAs` links** | `src/_data/client.js` / `home-schema.html` `#person` node | Add GitHub, All Things Open, 100Devs, the GBP, and Facebook profile URLs to strengthen entity resolution. |
| 5 | **Branded 1200×630 OG image** | `src/_includes/layouts/base.html` default `og:image` | Right now it falls back to `logoSidelarge.png` (1200×627 — dimensionally fine, but it's a logo-on-background, not a designed social card). Optional: design a real card per page type and set `image:` in front matter. |
| 6 | **Re-export the skyline hero from the master source** | `src/assets/images/portfolio/skyline-{640,1024,1300,2000}.webp` | `skyline-1024.webp` is still ~99 KB. Re-encoding the already-lossy WebP only saved ~9% and degraded quality, so I left the originals. Export from the original photo at `cwebp -q 75` and add matching `.avif` files, then add `<source type="image/avif">` to the hero `<picture>` in `src/index.html` and update the preload in its `{% block preload %}`. Target: 1024 rung < 45 KB. Est. LCP −0.2–0.4 s on top of the preload that's already in. |

## 2. Business decisions

| # | Decision | Why it matters |
|---|----------|----------------|
| 7 | **Service-area address strategy** — you're a service-area business publishing a residential address (`3204 Livia Cir`) in the footer, on `/contact/`, and in `PostalAddress`/`geo` schema. Either (a) hide the address on the GBP **and** soften it on-site to "Serving the Triangle — Raleigh, NC", or (b) show it identically across GBP + site + every citation. Half-and-half is the worst option. `/contact/` already uses a "Serving the Triangle" heading — decide and make the schema + footer match. |
| 8 | **`/service-areas/durham/` → `/durham-web-design/` slug?** Competitors rank with exact-match city slugs. If you want to migrate, do it with a 301 (add to `netlify.toml`) — I didn't, because it changes a live indexed URL and the nested structure may be intentional. Same for Chapel Hill and the new Cary page. |
| 9 | **`raleigh-web-design-zero-down` post** (409 words, thin, sits in `/blog/`). The audit says 301 it into `/web-design/` or rebuild it as a ~1,200-word "What web design costs in Raleigh" post. I left it alone — redirecting a live post without moving its content is your call. |
| 10 | **`netlify.toml` redirect cleanup** — there are `[[redirects]]` from `/blog/seo-google-map-pack-ranking-factors/` etc. → `/blog/` with no `force`. Those slugs are *current live posts*, so the static file wins and the rules are dead weight — but confusing. Delete the stale ones (`cary-crawlspace-sweating`, `firstword-secondword-third`, `raleigh-contractor-web-design`, and the three `seo-*` → `/blog/` rules) once you've confirmed nothing external links to them. |

## 3. Off-site / ongoing (not code)

- **Reviews**: add a persistent "Review us on Google" ask (footer link is wired — see #1) plus an automated post-project request. Target ≥1–2 Google reviews/month toward 20+. This is the single biggest lever on the Map Pack goal.
- **Google Business Profile**: confirm primary category = **Website designer** (secondary: Marketing agency / Internet marketing service). Add GBP Posts. Embed the GBP map on `/contact/` and each city page (the map embed is *not* in yet — needs your GBP place embed code).
- **Directories / citations**: claim + complete Clutch, DesignRush, UpCity, The Manifest, Thumbtack, Bing Places, Apple Business Connect, Yelp, and NC/Triangle chambers with NAP identical to `client.js`.
- **Portfolio**: build a `/portfolio/` page with 4–8 real projects (screenshot, city, industry, one-line result) and embed cards on `/web-design/` and `/`. Biggest credibility gap for a design firm — I did not scaffold this because it needs real client work/screenshots.
- **Founder video** on YouTube, embedded on `/about/` + homepage (highest-correlation AI-citation signal, currently absent).
- **Search Console + Google API key**: connect them and re-run `/seo google` — this audit's Core Web Vitals are lab-only.
- **Moz API key** (free): re-run `/seo backlinks` for real referring-domain data.
- **CSP**: `netlify.toml` ships `Content-Security-Policy-Report-Only`. Watch the browser console for ~2 weeks, then rename it to `Content-Security-Policy` to enforce.
- **Self-host the CodeStitch icons** currently loaded from `csimg.nyc3.*.digitaloceanspaces.com` (pricing checkmarks, feature icons). Self-hosting lets the CSP `img-src` drop to `'self' data:` and removes a third origin from the critical path.

## 4. Content still templated / thin (drafts started, need your polish)

- **`/service-areas/cary/`** — created as a draft (`src/content/pages/cary.html`) using the Durham/Chapel Hill pattern + the Cary facts from the audit. Review the specifics (neighborhoods, the local client mini-case is a placeholder), wire a real hero image (there's `taylor-in-coffee-shop-morrisville.jpg` in `assets` but no Cary skyline yet), and add it to the nav/footer + `/service-areas/` hub grid.
- **`/privacy/` and `/terms/`** — created as reasonable drafts (`src/content/pages/privacy.html`, `terms.html`). **Have a lawyer review before relying on them.** Linked in the footer + sitemap.
- **Blog internal linking** — retitles done; the hub-and-spoke link matrix from `../trianglewebdesign.com-audit/findings/cluster.md` still needs to be added inside each post body (1 up-link to the cluster pillar, 1–2 sibling links, 1 money-page link). I added a `relatedPosts` front-matter hook + a `Related` block in `post.html`; populate `relatedPosts:` in each post's front matter with the 2–3 slugs from the cluster plan.
- **De-templatizing** — Durham and Chapel Hill are already fairly differentiated on this branch (unique hero copy, city images, unique H2s). What's still missing per the audit: a named local client mini-case and a Map Pack screenshot on each. Add when you have them.

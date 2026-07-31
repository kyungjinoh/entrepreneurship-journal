<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: Entrepreneurship Journal
description: A personal builder's log — entrepreneurship and engineering, project by project.
---

# Design System: Entrepreneurship Journal

## Overview

**Creative North Star: "The Maker's Workbench"**

A personal website that feels like a maker's own corner of the web — a headshot and a hello up top, then the work laid out as bold, photographed build-logs you can browse the way you'd flip through someone's project shelf. It's personal and documentary, but confidently alive: image cards, an animated name marquee, and purposeful motion give it energy without shouting.

Primary references: [thijs.gg](https://thijs.gg/) (headshot intro, animated name marquee, "Now / Previously" bio, image-led project grid with year tags and star-featured cards) and [derrickbassey.com](https://www.derrickbassey.com/) (headshot, structured work sections, evolving project record). Secondary sensibility from personal Substacks and Are.na (individual voice, curated visual browsing).

This system explicitly rejects dark SaaS / AI-tool aesthetics — no purple gradients, glass cards, glow effects, or hustle-energy chrome. Energy comes from imagery, type, and motion, not from neon.

**Key Characteristics:**
- Headshot + short intro opens the page; work follows immediately
- Image-led build-log cards — one real photo per entry, title, year, and status
- Serif display for personality, sans body and metadata for clarity
- Pure white surface; teal accent on links, focus, star-featured marks, and hover
- Cards with subtle depth are welcome — bold and tactile, never glassy
- Purposeful motion: animated name marquee, hover lifts, tasteful entrance reveals, subtle moving background pattern

## Colors

**The Restrained Rule.** Tinted neutrals and one accent on ≤10% of any screen. The surface stays pure; the brand lives in typography and small deliberate color moments.

Hue family anchored to mineral teal / oxidized copper (cool blue-green, ~200° hue) — resolved during implementation from the brand seed. Not aquatic-cute; austere and personal.

### Primary
- **Builder's Teal** `[to be resolved during implementation]`: Links, focus rings, small accent marks. Never a full-bleed hero wash.

### Neutral
- **Paper** `[to be resolved during implementation]`: Pure white background — `oklch(1.000 0.000 0)`. Not warm cream, not sand.
- **Ink** `[to be resolved during implementation]`: Body text. Must hit ≥7:1 against Paper.
- **Muted** `[to be resolved during implementation]`: Secondary text, dates, metadata. ≥4.5:1 against Paper.
- **Surface** `[to be resolved during implementation]`: Subtle section differentiation — Paper pulled slightly toward Ink (~10–15% mix).

### Named Rules
**The No-Cream Rule.** Warmth comes from voice, imagery, and typography, not from a tinted body background. If the bg reads as parchment, sand, or linen, it's wrong.

**The One Accent Rule.** Primary teal appears on links, focus states, star-featured marks, hover states, and thin accent rules — never as a full-bleed section wash or a gradient. Photography carries the color on the page.

## Typography

**Display Font:** `Fraunces` — optical-size serif, literary but not fussy. For the hero name, entry titles, and section headers.

**Body Font:** `Inter` — neutral humanist sans. For prose, project descriptions, and metadata.

**Mono Accent:** `Space Mono` — for the nav wordmark, the hero role eyebrow, and the rotating name ring around the portrait.

**Character:** Matched to the thijs.gg identity — Fraunces display + Inter body + Space Mono labels. Serif warmth against sans clarity against monospace texture, paired on contrast, not similarity.

### Hierarchy
- **Display** (light weight, clamped size, tight line-height): Site title, featured entry headline. Max clamp ≤ 6rem.
- **Headline** (medium weight, stepped size): Section headers ("Projects", "Writing", "Now").
- **Title** (medium weight, smaller step): Project names, entry titles in lists.
- **Body** (regular weight, 1rem–1.125rem, 1.6–1.7 line-height): Journal prose. Max 65–75ch per column.
- **Label** (small size, normal case): Dates, tags, metadata. No tiny uppercase tracked eyebrows on every section.

### Named Rules
**The Reading Column Rule.** Long prose lives in a single comfortable column. Sidebars and multi-column layouts are for navigation and project grids, not journal text.

## Elevation

Cards are a first-class affordance here. Build-log cards sit on the pure-white surface with a soft, low shadow at rest and lift on hover — tactile, like physical prints on a desk. Depth stays subtle and clean: no heavy drop shadows, no glass blur, no glow. The image inside a card carries most of the visual weight; the shadow just separates it from the page.

### Shadow Vocabulary
- **Card resting** (`box-shadow: 0 1px 3px oklch(0 0 0 / 0.08), 0 8px 24px oklch(0 0 0 / 0.05)`): Default for build-log cards. Soft, barely-there separation.
- **Card hover** (`box-shadow: 0 4px 12px oklch(0 0 0 / 0.10), 0 16px 40px oklch(0 0 0 / 0.08)`): Paired with a small `translateY(-4px)` lift and a scale on the card image.

**The Tactile-Not-Glassy Rule.** Depth is a print sitting on a desk, never a frosted pane floating in space. If a surface needs `backdrop-filter` to look good, it's the wrong surface.

## Components

No code exists yet, so these are the intended primitives to build. Re-run `/impeccable document` after implementation to capture real tokens.

### Headshot + Intro (hero)
- Author headshot near the top (rounded, not a full-bleed banner), paired with the site title and a 2–3 sentence first-person intro.
- Optional "Now / Previously" line à la thijs.gg. Personal and warm, not a corporate profile hero.

### Name Marquee
- A horizontally scrolling repeated name/wordmark (thijs.gg style) as a piece of moving type. Slow, continuous, `prefers-reduced-motion`-aware (pauses/stills when reduced).

### Build-Log Card (signature component)
- **One real project image** filling the top (or full card, title overlaid) — image is required, never a colored placeholder.
- **Bold title** (serif), one-line description (sans), **year tag** and optional **status** ("Building" / "Shipped"), and a **star** mark on featured entries (thijs.gg convention).
- Soft resting shadow → hover lift + image scale (see Elevation). Rounded corners (~12–16px).
- Featured entries render larger/more prominent; the rest flow in a responsive grid: `repeat(auto-fit, minmax(280px, 1fr))`.

### Navigation
- Minimal top bar: name/home left, a couple of links right (projects, contact). Quiet until needed; teal on hover.

### Moving Background Pattern (subtle)
- An optional low-contrast animated pattern (e.g. slow drifting grain, dot grid, or gradient-free geometric motion) behind the intro. Barely perceptible; never competes with content; disabled under reduced motion.

## Do's and Don'ts

### Do:
- **Do** open with the author's headshot + short intro, then lead with featured build-logs — like thijs.gg and derrickbassey.com, not a SaaS landing page.
- **Do** give every build-log one real project image; the archive should be scannable visually before it's read.
- **Do** use bold image cards with soft depth and a hover lift; star-mark featured entries and tag each with its year.
- **Do** add purposeful motion — an animated name marquee, hover/entrance transitions, and a subtle moving background pattern — using exponential ease-out curves.
- **Do** let the author pin/featured-order what appears first; visual hierarchy should reflect editorial priority.
- **Do** use serif for display moments and sans for body and metadata.
- **Do** respect `prefers-reduced-motion: reduce` — still the marquee and background pattern, crossfade instead of choreographed entrances.

### Don't:
- **Don't** use dark-mode AI tool aesthetics — purple gradients, glass cards, glow effects, neon accents.
- **Don't** deploy SaaS landing clichés — hero metrics, gradient text, eyebrow kickers on every section, or *identical soulless* card grids (bold, distinct image cards are the goal; sameness is the enemy).
- **Don't** substitute stock photos or colored `<div>` placeholders for the author's real project images.
- **Don't** tint the body background warm cream/sand/parchment — that's the 2026 AI default, not this brand.
- **Don't** add side-stripe borders, numbered section markers (01/02/03) as default scaffolding, or conversion-theater CTAs.
- **Don't** make cards glassy or float them on heavy shadows — depth is a print on a desk, subtle and tactile.

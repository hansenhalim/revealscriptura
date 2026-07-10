---
version: alpha
name: "Hillsong Church – Welcome Home"
description: "Hillsong Church's site uses a cinematic full-bleed hero photograph overlaid with white headline text to create an immersive, welcoming first impression. A two-tier navigation system. a slim utility bar (#f2f2f2) above a white primary nav. organises global and site-level links. The palette is near-monochrome (#464646 body text, #000000 nav links, #ffffff reversed text) with a single sky-blue accent (#289fd8) for interactive links. Typography is exclusively Proxima Nova (via Adobe Typekit) with a clear weight ladder: w300 body, w700 labels/headings, w800 display. No shadows are used; hierarchy is achieved through colour contrast, weight, and spatial rhythm built on a 10px base grid."
colors:
  pure-white: "#ffffff"
  utility-bar-gray: "#f2f2f2"
  body-text: "#464646"
  dark-navy: "#393b59"
  ink-black: "#000000"
  mid-gray: "#898989"
  sky-blue-accent: "#289fd8"
  light-border-gray: "#c1c1c1"
  near-white-surface: "#eeeeee"
typography:
  hero-heading:
    fontFamily: "proxima-nova"
    fontSize: "40px"
    fontWeight: "700"
  display-heading:
    fontFamily: "proxima-nova"
    fontSize: "36px"
    fontWeight: "700"
    lineHeight: "44px"
    letterSpacing: "-0.72px"
  large-subheading:
    fontFamily: "proxima-nova"
    fontSize: "32px"
    fontWeight: "300"
    lineHeight: "40px"
    letterSpacing: "-0.64px"
  card-heading:
    fontFamily: "proxima-nova"
    fontSize: "28px"
    fontWeight: "800"
    lineHeight: "32px"
    letterSpacing: "0.28px"
  section-heading:
    fontFamily: "proxima-nova"
    fontSize: "18px"
    fontWeight: "700"
    lineHeight: "24px"
  nav-label:
    fontFamily: "proxima-nova"
    fontSize: "16px"
    fontWeight: "700"
    lineHeight: "18px"
    letterSpacing: "0.24px"
  eyebrow-label:
    fontFamily: "proxima-nova"
    fontSize: "13px"
    fontWeight: "700"
    lineHeight: "15px"
    letterSpacing: "2.6px"
  body-regular:
    fontFamily: "proxima-nova"
    fontSize: "15px"
    fontWeight: "300"
    lineHeight: "19px"
    letterSpacing: "0.23px"
  body-large:
    fontFamily: "proxima-nova"
    fontSize: "18px"
    fontWeight: "300"
    lineHeight: "29px"
  caption-meta:
    fontFamily: "proxima-nova"
    fontSize: "13px"
    fontWeight: "400"
    lineHeight: "14px"
    letterSpacing: "0.18px"
rounded:
  pill: "25px"
  sm: "3px"
  md: "8px"
spacing:
  xs: "2px"
  sm: "5px"
  md-sm: "7px"
  base: "10px"
  md: "15px"
  lg: "20px"
  xl: "25px"
  2xl: "30px"
  3xl: "40px"
  4xl: "100px"
  5xl: "190px"
---

## Overview

Hillsong Church's site uses a cinematic full-bleed hero photograph overlaid with white headline text to create an immersive, welcoming first impression. A two-tier navigation system. a slim utility bar (#f2f2f2) above a white primary nav. organises global and site-level links. The palette is near-monochrome (#464646 body text, #000000 nav links, #ffffff reversed text) with a single sky-blue accent (#289fd8) for interactive links. Typography is exclusively Proxima Nova (via Adobe Typekit) with a clear weight ladder: w300 body, w700 labels/headings, w800 display. No shadows are used; hierarchy is achieved through colour contrast, weight, and spatial rhythm built on a 10px base grid.

**Signature traits:**
- Single-family weight hierarchy: Builds hierarchy from proxima-nova across 4 weights rather than multiple families.
- Soft, rounded geometry: Generous corner rounding up to 25px.

## Colors

The palette uses 9 validated color tokens across 1 theme profile. Semantic roles stay attached to observed usage so generation agents can choose accents without inventing new color meaning.

**Semantic naming:**
- **content-text** maps to `body-text`: Role "text" is grounded by usage context "Primary body copy, nav items, footer text — highest frequency color (462 hits)".
- **surface-background** maps to `pure-white`: Role "background" is grounded by usage context "Primary nav bar background, card surfaces, reversed text on hero".
- **action-text** maps to `ink-black`: Role "text" is grounded by usage context "Site nav links (a.site-nav-link), high-contrast headings".
- **border-border** maps to `light-border-gray`: Role "border" is grounded by usage context "Dividers, subtle borders in footer".

### Text Scale
- **Body Text** (#464646): Primary body copy, nav items, footer text — highest frequency color (462 hits). Role: text. {authored: rgb(70, 70, 70), space: rgb}
- **Dark Navy** (#393b59): Occasional accent surface or text in header/unknown zones. Role: text. {authored: rgb(57, 59, 89), space: rgb}
- **Ink Black** (#000000): Site nav links (a.site-nav-link), high-contrast headings. Role: text. {authored: rgb(0, 0, 0), space: rgb, alpha: 0.3}
- **Mid Gray** (#898989): Secondary/muted text, footer metadata. Role: text. {authored: rgb(137, 137, 137), space: rgb, alpha: 0.5}
- **Sky Blue Accent** (#289fd8): Interactive links, CTA text color — probe-confirmed on <a> elements. Role: text. {authored: rgb(40, 159, 216), space: rgb}

### Interactive
- **Light Border Gray** (#c1c1c1): Dividers, subtle borders in footer. Role: border. {authored: rgb(193, 193, 193), space: rgb}
- **Near-White Surface** (#eeeeee): Hairline borders, subtle separators. Role: border. {authored: rgb(238, 238, 238), space: rgb}

### Surface & Shadows
- **Pure White** (#ffffff): Primary nav bar background, card surfaces, reversed text on hero. Role: background. {authored: rgb(255, 255, 255), space: rgb, alpha: 0.55}
- **Utility Bar Gray** (#f2f2f2): Global utility nav bar background (#global-nav) — probe-confirmed. Role: background. {authored: rgb(242, 242, 242), space: rgb}

## Typography

Typography uses proxima-nova across extracted hierarchy roles. Keep hierarchy mapped to these token rows before adding decorative type styles.

Uses proxima-nova throughout for a uniform feel. Weight range spans bold, light, regular. Sizes range from 13px to 40px.

### Font Roles
- **Headline Font**: proxima-nova
- **Body Font**: proxima-nova

### Type Scale Evidence
| Role | Font | Size | Weight | Line Height | Letter Spacing | Stack / Features | Notes |
|------|------|------|--------|-------------|----------------|------------------|-------|
| Full-bleed hero H1 — probe-confirmed at 40px, white on dark overlay | proxima-nova | 40px | 700 | normal | normal | proxima-nova, Helvetica Neue, Helvetica, Arial, sans-serif | Extracted token |
| Section display headings (H2-level) | proxima-nova | 36px | 700 | 44px | -0.72px | proxima-nova, Helvetica Neue, Helvetica, Arial, sans-serif | Extracted token |
| Light-weight large subheadings, section intros | proxima-nova | 32px | 300 | 40px | -0.64px | proxima-nova, Helvetica Neue, Helvetica, Arial, sans-serif | Extracted token |
| Card or feature block headings | proxima-nova | 28px | 800 | 32px | 0.28px | proxima-nova, Helvetica Neue, Helvetica, Arial, sans-serif | Extracted token |
| Sub-section headings, card titles | proxima-nova | 18px | 700 | 24px | normal | proxima-nova, Helvetica Neue, Helvetica, Arial, sans-serif | Extracted token |
| Primary navigation links — probe-confirmed on sub-nav-item and site-nav-link | proxima-nova | 16px | 700 | 18px | 0.24px | proxima-nova, Helvetica Neue, Helvetica, Arial, sans-serif | Extracted token |
| Uppercase eyebrow labels, category tags — wide tracking | proxima-nova | 13px | 700 | 15px | 2.6px | proxima-nova, Helvetica Neue, Helvetica, Arial, sans-serif | Extracted token |
| Primary body copy — highest frequency tuple (235 hits) | proxima-nova | 15px | 300 | 19px | 0.23px | proxima-nova, Helvetica Neue, Helvetica, Arial, sans-serif | Extracted token |
| Larger body paragraphs, hero subtitle | proxima-nova | 18px | 300 | 29px | normal | proxima-nova, Helvetica Neue, Helvetica, Arial, sans-serif | Extracted token |
| Captions, metadata, footer fine print | proxima-nova | 13px | 400 | 14px | 0.18px | proxima-nova, Helvetica Neue, Helvetica, Arial, sans-serif | Extracted token |

## Layout

Responsive system uses 3 breakpoint tier(s): mobile, tablet, desktop.

This system uses a 10px base grid with scale values 2, 5, 7, 10, 15, 20, 25, 30, 40, 100, 190.

### Responsive Strategy
- **mobile (400-900px)**: Constrain layout for small viewports and prioritize vertical stacking.
- **tablet (769-1023px)**: Increase spacing and column structure for medium-width viewports.
- **desktop (1024-1279px)**: Expand layout density and horizontal composition for wide viewports.

### Spacing System
| Token | Value | Px | Notes |
|------|-------|----|-------|
| xs | 2px | 2 | Extracted spacing token |
| sm | 5px | 5 | Extracted spacing token |
| md-sm | 7px | 7 | Extracted spacing token |
| base | 10px | 10 | Extracted spacing token |
| md | 15px | 15 | Extracted spacing token |
| lg | 20px | 20 | Extracted spacing token |
| xl | 25px | 25 | Extracted spacing token |
| 2xl | 30px | 30 | Extracted spacing token |
| 3xl | 40px | 40 | Extracted spacing token |
| 4xl | 100px | 100 | Extracted spacing token |
| 5xl | 190px | 190 | Extracted spacing token |

## Elevation & Depth

Keep depth flat unless validated shadow or interaction evidence appears in the extraction payload. Do not invent shadows beyond this evidence boundary.

### Shadow Evidence
| Shadow Token | Layers | Details |
|--------------|--------|---------|
| n/a | 0 | No validated shadow payload |

### Interaction Signals
| Theme | Signal | Evidence |
|-------|--------|----------|
| Light | outline-color | rgb(70, 70, 70) ; rgb(255, 255, 255) ; rgb(0, 0, 0) |
| Light | outline-width | 0px ; 3px |
| Light | outline-offset | 0px |
| Light | transform | matrix(-0.707107, -0.707107, 0.707107, -0.707107, 0, 0) ; matrix(1, 0, 0, 1, 0, -36) |

## Shapes

Shape language maps directly to rounded tokens. Keep component corners consistent with the role mapping below before introducing bespoke geometry.

### Radius Roles
| Token | Value | Px | Role Mapping |
|------|-------|----|--------------|
| sm | 3px | 3 | Subtle corner |
| md | 8px | 8 | Control corner |
| pill | 25px | 25 | Large surface corner |

### Geometry Evidence
| Radius Token | Shape | Units |
|--------------|-------|-------|
| pill | 25px | px |
| sm | 3px | px |
| md | 8px | px |

## Components

(none detected)

## Do's and Don'ts

Guardrails protect Single-family weight hierarchy, Soft, rounded geometry without adding unsupported visual claims.

| Do | Don't |
|----|---------|
| Do maintain consistent spacing using the base grid | Don't make unsupported claims about absent visual features |
| Do maintain WCAG AA contrast ratios (4.5:1 for normal text) | Don't mix rounded and sharp corners in the same view |
| Do use the primary color only for the single most important action per screen |  |
| Do verify evidence before writing new design-system guidance |  |

## Responsive Evidence

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <= 425px | only screen and (max-width: 425px) |
| Mobile | <= 476px | only screen and (max-width: 476px) |
| Mobile | <= 500px | (max-width: 500px) |
| Mobile | <= 530px | only screen and (max-width: 530px) |
| Mobile | <= 599px | (max-width: 599px) |
| Mobile | <= 600px | (max-width: 600px) |
| Breakpoint 7 | <= 896px | only screen and (max-width: 896px) and (max-height: 425px) and (orientation: landscape) |
| Breakpoint 8 | <= 900px | only screen and (max-width: 900px) |
| Mobile | >= 400px | (min-width: 400px) |
| Mobile | 426-896px | only screen and (min-width: 426px) and (max-width: 896px) |
| Mobile | >= 500px | (min-width: 500px) |
| Mobile | >= 501px | (min-width: 501px) |
| Mobile | >= 550px | (min-width: 550px) |
| Mobile | 600-781px | (min-width: 600px) and (max-width: 781px) |
| Mobile | >= 600px | (min-width: 600px) |
| Tablet | >= 769px | (min-width: 769px) |
| Tablet | >= 782px | (min-width: 782px) |
| Tablet | 897-1023px | only screen and (min-width: 897px) and (max-width: 1023px) |
| Desktop | 1024-1279px | only screen and (min-width: 1024px) and (max-width: 1279px) |
| Desktop | >= 1280px | only screen and (min-width: 1280px) |

## Agent Prompt Guide

### Example Component Prompts
- Create button component using validated primary color role and spacing tokens.
- Create card component with mapped radius role and evidence-backed elevation.
- Create form input component using inferred typography hierarchy and border roles.

### Iteration Guide
1. Start with extracted palette and typography roles only.
2. Map spacing and radius directly from token tables before visual polish.
3. Apply component patterns one section at a time and compare against source intent.
4. Keep elevation claims tied to explicit evidence in output.
5. Iterate with smallest diffs and re-check section hierarchy after each change.

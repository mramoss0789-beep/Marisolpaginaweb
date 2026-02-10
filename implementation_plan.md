# Implementation Plan - Marisol Ramos (Bespoke Luxury Redesign)

We are pivoting from a template-based approach to a fully custom, high-end design implementation. This focuses on "Aesthetics", "Premium Feel", and strict adherence to the Gemini/ChatGPT strategic briefs.

## Design Philosophy (The "Luxury" Vibe)
- **Minimalism**: Extensive whitespace/padding (`py-24`, `py-32`).
- **Typography**: `Playfair Display` for bold, elegant headers. `Manrope` or `Inter` for clean, readable body text.
- **Colors**:
  - **Terracotta Premium**: `#d35c6a` (Primary Brand)
  - **Soft Sand**: `#f0e6e0` (Backgrounds)
  - **Charcoal**: `#1a1a1a` (Text - softer than pure black)
  - **Gold/Bronze Accent**: `#C5A065` (Subtle highlights)
- **Interactions**: Smooth scroll, fade-ins, parallax images (using Framer Motion).

## Technical Changes

### 1. Reset Configuration
- Remove `@relume_io/relume-tailwind` preset to regain full control over Tailwind.
- Configure custom `font-serif` and `font-sans` in `tailwind.config.ts`.
- Define custom color palette in generic Tailwind config.

### 2. Bespoke Components (No templates)
#### **Navbar**
- Transparent on top, solid white on scroll.
- Centered logo, elegant link spacing.

#### **Hero Section**
- Split screen or Full-width background image with overlay.
- "Cinematic" typography presentation.
- Primary CTA: "Solicitar Valuación" (Gold/Terracotta).

#### **Authority Section (Bio)**
- "Editorial" layout: Image on one side, text overlapping or offset.
- Emphasis on "20 Years", "Director".

#### **NEW: Stats & Results**
- Dark background (`bg-charcoal` or `bg-brand-dark`).
- Large typography for numbers ("20 Años", "800+").
- Text: "Resultados: Dos décadas de excelencia".

#### **NEW: Benefits Grid**
- 4-column icon grid.
- Icons: Mentoría, Tecnología, Negociación, Análisis.
- Clean, minimal style (SVG Line icons).

#### **NEW: Detailed Timeline**
- Vertical layout with alternating images/text.
- Steps: Exposición -> Evaluar -> Explorar.
- **Photos**: Placeholder for now, waiting for user uploads.

#### **NEW: Risks Section**
- "Why use an expert?"
- Card-based layout revealing specific risks (Fraud, Low Value).

#### **NEW: Testimonials Grid**
- 2-column or 3-column masonry grid.
- Cards with 5 stars, quote, and user details (Name, Role, Location).

#### **NEW: Benefits Split**
- Left: Large aspect-ratio image.
- Right: 2x2 grid of benefits (Tranquilidad, Plusvalía, Cierre, Acompañamiento).
- Icons + Titles + Descriptions.

#### **NEW: Marketing Feature**
- "Visibilidad Estratégica" section.
- Minimal text top, large visual bottom.

#### **Refined Footer**
- Huge "Company Name" (MARISOL RAMOS) at the bottom.
- Clean columns for links.

#### **Services ("The Method")**
- Interactive Accordion or "Hover Reveal" cards.
- Focus on the *process* (Valuation -> Marketing -> Negotiation -> Closing).

#### **Trust & Social Proof**
- Logos in monochrome/silver opacity.
- Testimonials as a clean, slow-moving carousel.

### 3. Lead Capture (Evaluation)
- A multi-step form or a very clean single-column form.
- High-end inputs (underlined or floating labels).

## Verification
- Visual check: Does it look expensive?
- Mobile check: Does it stack elegantly?

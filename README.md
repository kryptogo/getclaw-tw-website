# GetClaw Taiwan Website

Marketing website for GetClaw (輕量科技) — Virtual CTO services for SMEs.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Noto Sans TC via `next/font/google`
- **Deployment**: Vercel (standalone output)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx          # Root layout (metadata, fonts)
  page.tsx            # Home page (assembles all sections)
  globals.css         # Tailwind directives + design tokens
components/
  Navbar.tsx          # Fixed navbar with mobile drawer (client)
  HeroAnimation.tsx   # Canvas scroll-driven frame animation (client)
  ScrollReveal.tsx    # IntersectionObserver reveal wrapper (client)
  ProblemSection.tsx  # Problem statement section
  ServicesSection.tsx # Services grid
  HowItWorksSection.tsx # 4-step process
  AdvantagesSection.tsx # Why choose us
  CTASection.tsx      # Call to action
  Footer.tsx          # Site footer
public/assets/
  hero-frames/        # 189 PNG frames for scroll animation
  getclaw-logo-*.png  # Logo variants
  favicon.*           # Favicons
```

## Build

```bash
pnpm build
pnpm start
```

## Hero Animation

The hero section uses a scroll-driven canvas animation with 189 PNG frames. As the user scrolls through the `300vh` hero section, frames are drawn to a canvas element creating a smooth unboxing animation. Frame loading is batched (10 at a time) with a progress bar overlay.

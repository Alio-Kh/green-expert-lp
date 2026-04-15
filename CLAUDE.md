# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Green Expert landing page — a French-language marketing site for a Moroccan landscaping business (greenexpert.ma). Single-page Next.js 15 app with sections: hero, services, process, projects showcase, partners, contact form, and footer.

## Commands

- **Dev server:** `npm run dev` (uses Turbopack)
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Start production:** `npm start`

## Architecture

- **Framework:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 3 with `tailwindcss-animate`, CSS variables for theming (defined in `app/globals.css`)
- **UI components:** shadcn/ui (configured via `components.json`) — primitives live in `components/ui/`
- **Animations:** Framer Motion — used extensively across page sections
- **Email:** Resend SDK via API route at `app/api/contact/route.tsx` with templates in `email-templates.tsx`
- **Images:** External images from Cloudinary and fal.media (configured in `next.config.ts`)

## Key Design Decisions

- **Single-page app:** All content is in `app/page.tsx` which composes section components. Navigation uses smooth scroll via anchor IDs (`#services`, `#projets`, `#contact`).
- **Color scheme:** Dark green background `#1a2821` with accent `#9bbb2d`. Keep this palette consistent.
- **Language:** All user-facing text is in French. Maintain French for any new copy.
- **Path aliases:** `@/` maps to project root (components, lib, hooks directories).
- **Toast system:** Uses Radix UI toast via `hooks/use-toast.ts` and `components/ui/toaster.tsx`.

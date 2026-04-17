# Customization & Theming

Components reference semantic CSS variable tokens. Change the variables to change every component.

## How It Works

1. CSS variables live in `:root` and `.dark`
2. Tailwind maps them to utilities like `bg-primary`
3. Components use those utilities

## Color Variables

Use semantic variables for:

- background / foreground
- card
- primary / primary-foreground
- secondary
- muted
- accent
- destructive
- border
- input
- ring
- chart colors
- sidebar colors
- surface colors

Prefer OKLCH values.

## Dark Mode

Class-based dark mode with `next-themes` is the default recommendation.

```tsx
import { ThemeProvider } from "next-themes";

<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>;
```

## Changing the Theme

Use presets or edit CSS variables directly in the global CSS file.

```bash
npx shadcn@latest init --preset a2r6bw --force
npx shadcn@latest init --preset radix-nova --force
```

## Adding Custom Colors

Define variables in the project's Tailwind CSS file from `npx shadcn@latest info`. Do not create a new CSS file.

Register custom colors through `@theme inline` for Tailwind v4, or `tailwind.config.js` for v3.

## Border Radius

`--radius` controls border radius globally and downstream component radii derive from it.

## Customizing Components

Prefer these approaches in order:

1. Built-in variants
2. `className` for layout
3. Add a new variant
4. Wrapper components

## Checking for Updates

Use:

```bash
npx shadcn@latest add button --diff
```

Use `--dry-run` and `--diff` to preview all CSS and component changes before updating.

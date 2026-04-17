# Styling & Customization

See `../customization.md` for theming, CSS variables, and custom colors.

## Rules

- Use semantic colors
- Prefer built-in variants first
- Use `className` for layout, not visual overrides
- Use `gap-*` instead of `space-x-*` / `space-y-*`
- Prefer `size-*` when width and height are equal
- Prefer `truncate`
- Avoid manual `dark:` color overrides
- Use `cn()` for conditional classes
- Avoid manual z-index on overlay components

## Status Colors

Use `Badge` variants, semantic tokens, or theme variables instead of raw Tailwind success/error colors.

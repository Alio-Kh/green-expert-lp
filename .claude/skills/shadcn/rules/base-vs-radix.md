# Base vs Radix

API differences between `base` and `radix`. Check the `base` field from `npx shadcn@latest info`.

## Composition

Radix uses `asChild`. Base uses `render`. Do not wrap triggers in extra elements.

## Button / Trigger as Non-Button Element

Base requires `nativeButton={false}` when `render` swaps to a non-button element. Radix uses `asChild`.

## Select

- Base requires an `items` prop
- Radix uses inline JSX items
- Base handles placeholders differently
- Content positioning differs
- Base supports multiple selection and object values

## ToggleGroup

- Base uses `multiple`
- Radix uses `type="single"` / `type="multiple"`

## Slider

- Base accepts a scalar for single-thumb sliders
- Radix always uses arrays

## Accordion

- Base uses arrays and optional `multiple`
- Radix requires `type` and uses string values for single mode

# shadcn CLI Reference

Configuration is read from `components.json`.

> **IMPORTANT:** Always run commands using the project's package runner: `npx shadcn@latest`, `pnpm dlx shadcn@latest`, or `bunx --bun shadcn@latest`.

## Commands

### `init`

```bash
npx shadcn@latest init [components...] [options]
```

Use `init` to initialize or create a project. `create` is an alias.

### `add`

```bash
npx shadcn@latest add [components...] [options]
```

Use `--dry-run`, `--diff`, or `--view` to preview changes before writing files.

**Use dry-run when:**

- The user asks what will change
- You need to inspect updates before overwriting
- You need to review third-party registry code before installing

Prefer `add --dry-run/--diff/--view` over `view` when you care about project-specific resolved paths.

### `search`

```bash
npx shadcn@latest search <registries...> [options]
```

### `view`

```bash
npx shadcn@latest view <items...> [options]
```

### `docs`

```bash
npx shadcn@latest docs <components...> [options]
```

Use this to get documentation and example URLs before implementing component work.

### `info`

```bash
npx shadcn@latest info [options]
```

Run this first to discover:

- `framework`
- `frameworkVersion`
- `isRSC`
- `isTsx`
- `tailwindVersion`
- `tailwindCssFile`
- `aliasPrefix`
- `packageManager`
- `base`
- `iconLibrary`
- `resolvedPaths`
- `registries`

### `build`

```bash
npx shadcn@latest build [registry] [options]
```

Builds a custom registry.

## Templates

- `next`
- `vite`
- `start`
- `react-router`
- `astro`
- `laravel`

## Presets

Three preset forms:

1. Named presets like `base-nova`
2. Code presets like `a2r6bw`
3. URL presets from `ui.shadcn.com`

Never decode or resolve preset codes manually.

## Switching Presets

Ask the user whether they want to:

- reinstall
- merge
- skip

Use:

- `--reinstall` to overwrite components
- `--no-reinstall` with smart per-component merging when local customizations exist

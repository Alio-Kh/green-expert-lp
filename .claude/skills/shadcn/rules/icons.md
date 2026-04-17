# Icons

## Rules

- Always use the project's configured `iconLibrary`
- Icons inside `Button` use `data-icon="inline-start"` or `data-icon="inline-end"`
- Do not add sizing classes to icons inside components unless explicitly requested
- Pass icons as component objects, not string keys

## Examples

```tsx
<Button>
  <SearchIcon data-icon="inline-start" />
  Search
</Button>
```

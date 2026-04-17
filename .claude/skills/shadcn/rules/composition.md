# Component Composition

## Rules

- Items must always live inside their Group component
- Callouts use `Alert`
- Empty states use `Empty`
- Toasts use `sonner`
- Choose the right overlay component for the task
- Dialog, Sheet, and Drawer require a Title
- Use full Card composition
- `Button` has no built-in loading prop
- `TabsTrigger` belongs inside `TabsList`
- `Avatar` must include `AvatarFallback`
- Use `Separator` instead of ad hoc separators
- Use `Skeleton` for loading placeholders
- Use `Badge` instead of custom styled spans

## Overlay Selection

| Use case                     | Component     |
| ---------------------------- | ------------- |
| Focused task requiring input | `Dialog`      |
| Destructive confirmation     | `AlertDialog` |
| Side panel                   | `Sheet`       |
| Mobile-first bottom panel    | `Drawer`      |
| Hover info                   | `HoverCard`   |
| Small contextual content     | `Popover`     |

## Card Structure

Use `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, and `CardFooter` instead of dropping everything into `CardContent`.

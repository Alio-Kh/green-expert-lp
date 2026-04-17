# Forms & Inputs

## Rules

- Forms use `FieldGroup` + `Field`
- `InputGroup` requires `InputGroupInput` / `InputGroupTextarea`
- Buttons inside inputs use `InputGroup` + `InputGroupAddon`
- Option sets with 2-7 choices use `ToggleGroup`
- Use `FieldSet` + `FieldLegend` for related groups
- Validation requires both field-level and control-level invalid states

## Choosing Form Controls

- Simple text → `Input`
- Predefined options → `Select`
- Searchable dropdown → `Combobox`
- No-JS native select → `native-select`
- Boolean toggle → `Switch` or `Checkbox`
- Single choice → `RadioGroup`
- Small option set → `ToggleGroup`
- OTP → `InputOTP`
- Multi-line → `Textarea`

## Validation

- `data-invalid` on `Field`
- `aria-invalid` on the control
- `data-disabled` on `Field`
- `disabled` on the control

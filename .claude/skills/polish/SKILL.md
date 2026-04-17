---
name: polish
description: Add the final 20% of polish to an interface. Fix spacing, alignment, hierarchy, consistency, and interaction details that make the difference between functional and exceptional. Use after the core implementation works and the UI needs to feel finished.
license: Apache 2.0. Based on Anthropic's frontend-design skill. See NOTICE.md for attribution.
---

This skill helps take an interface from "works fine" to "feels exceptional." It's for the last 20%: fixing visual inconsistencies, improving hierarchy, smoothing interactions, and adding the subtle details that create a sense of craft.

## Context Gathering Protocol

Before polishing, you MUST know the design direction and user context.

**Required context**:

- **Target audience**: Who uses this and in what context?
- **Use cases**: What are they trying to accomplish?
- **Brand personality/tone**: How should it feel?
- **Design direction**: What's the aesthetic goal?

**Gathering order:**

1. **Check current instructions**: If loaded instructions already contain a **Design Context** section, use it.
2. **Check `.impeccable.md`**: Read from project root if instructions don't have context.
3. **Run `/teach-impeccable`**: If neither source contains context, stop and run it. Don't polish without knowing what "good" means for this product.

## When To Use

Use this skill when:

- The implementation is functionally complete but feels "off"
- Visual inconsistencies make the UI feel unfinished
- Spacing, alignment, or hierarchy need refinement
- Interactions work but lack smoothness or clarity
- The interface needs a final pass before review or release

Do NOT use this skill when:

- Core functionality is still missing
- Major layout or architecture decisions are unresolved
- The design direction is unclear

## Polish Checklist

### Visual Consistency

- Check spacing rhythm and remove arbitrary one-off values
- Align edges and baselines so groups feel intentional
- Normalize radii, shadows, borders, and icon treatments
- Ensure typography scale, weights, and line-heights feel consistent
- Remove decorative elements that do not reinforce the concept

### Hierarchy

- Strengthen the primary action and soften secondary actions
- Make the page structure scannable at a glance
- Reduce redundant labels, helper text, and explanatory copy
- Improve contrast between important and supporting information

### Interaction

- Verify hover, focus, active, disabled, loading, success, and error states
- Tighten transitions and use motion to clarify state changes
- Make loading and empty states feel purposeful, not like placeholders
- Confirm keyboard navigation and focus visibility still feel deliberate

### UX Writing

- Replace vague CTA labels with specific outcome-focused labels
- Rewrite error messages to explain what happened and how to fix it
- Make empty states useful and action-oriented
- Remove duplicate or filler copy

## Working Style

1. Review the implemented interface holistically before editing details.
2. Identify the few changes that will create the biggest quality lift.
3. Make precise, minimal refinements instead of rewriting everything.
4. Keep the existing design direction coherent rather than introducing a new one.
5. Re-check the result for consistency after the first pass.

## Output Standard

The final result should feel:

- More intentional
- More consistent
- More readable
- More refined
- More finished

If the user can point to obvious polish issues after your pass, the work is not done yet.

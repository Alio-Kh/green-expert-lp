# shadcn MCP Server

The CLI includes an MCP server that lets AI assistants search, browse, view, and install components from registries.

## Setup

```bash
shadcn mcp
shadcn mcp init
```

Editor config files:

- Claude Code: `.mcp.json`
- Cursor: `.cursor/mcp.json`
- VS Code: `.vscode/mcp.json`
- OpenCode: `opencode.json`

## Tools

Use CLI `info` for project configuration and MCP tools for registry operations.

Available tools include:

- `shadcn:get_project_registries`
- `shadcn:list_items_in_registries`
- `shadcn:search_items_in_registries`
- `shadcn:view_items_in_registries`
- `shadcn:get_item_examples_from_registries`
- `shadcn:get_add_command_for_items`
- `shadcn:get_audit_checklist`

## Configuring Registries

Registries are set in `components.json`.

```json
{
  "registries": {
    "@acme": "https://acme.com/r/{name}.json"
  }
}
```

Names must start with `@` and URLs must contain `{name}`.

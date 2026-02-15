# Addon Template

[日本語版 README はこちら](https://github.com/shizuku86/addon-template/blob/main/README-ja.md)

This repository is a template for developing Minecraft Bedrock Addons using the Stable Script API.

It provides:

- Automated manifest generation
- TypeScript + esbuild bundling
- Automatic deployment to the Minecraft development directory

---

## Project Structure

This template follows the standard Bedrock Addon layout:

```
BP/   # Behavior Pack
RP/   # Resource Pack
```

These directories are automatically generated when running the build command for the first time.

After generation, you can place:

- Behavior pack assets in BP/
- Resource pack assets in RP/
- Script source files in scripts/

---

## Getting Started

1. Install dependencies

    This template is designed for **pnpm only**.

    ```
    pnpm install
    ```

2. Configure properties

    `scripts/properties.ts` intentionally contains invalid `#` markers in the initial template.
    Edit the lines marked with `#`, then confirm there are no TypeScript errors before proceeding.

3. Build the Addon

    ```
    pnpm build
    ```

### What the Build Command Does

Running the build command performs the following:

- Generates `manifest.json` for both BP/ and RP/ using `properties.ts`
- Bundles all TypeScript files into a single `index.js`
- Outputs compiled scripts to `BP/scripts/index.js`
- Copies `pack_icon.png` from the project root into both BP/ and RP/
- Deploys `BP/` and `RP/` into Minecraft’s development folder (Windows only)

## Using Script API Beta Versions

This template is configured to use Stable Script API modules by default.
If you want to use Beta (Preview) Script API modules, you must manually update the versions in `package.json`.
For example:

```
"@minecraft/server": "1.0.0-beta.x.x.x-preview.x"
```

After modifying package.json, reinstall dependencies.

## Build System

This template uses:

- **TypeScript** for type checking (tsc --noEmit)
- **esbuild** for fast bundling

All entry points inside scripts/ are bundled into a single optimized output file.

## Requirements

- Node.js (v18+ recommended)

## Minecraft Modules

The following modules are configured in `package.json`:

- `@minecraft/server`: `^2.5.0`
- `@minecraft/server-ui`: `^2.0.0`

Additional optional modules:

- `@minecraft/common`
- `@minecraft/debug-utilities`
- `@minecraft/diagnostics`
- `@minecraft/server-admin`
- `@minecraft/server-editor`
- `@minecraft/server-gametest`
- `@minecraft/server-net`
- `@minecraft/server-graphics`
- `@minecraft/vanilla-data`
- `@minecraft/math`

## Performance Considerations

This template includes **fast-json-stringify** for high-performance JSON serialization.

When storing structured data using `setDynamicProperty()`

it is recommended to use fast-json-stringify instead of JSON.stringify() for better performance and predictable schema-based serialization.

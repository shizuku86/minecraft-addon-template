# Addon Template

[日本語版 README はこちら](https://github.com/shizuku86/addon-template/blob/main/README-ja.md)

This repository is a template for developing Minecraft Bedrock Addons.

---

## Project Structure

This template uses the standard Bedrock Addon structure with two root-level directories:

- `BP/` (Behavior Pack)
- `RP/` (Resource Pack)

These folders are automatically created when you run `npm run build` for the first time.

After they are generated, you can develop your addon normally by placing behavior pack and resource pack assets inside `BP/` and `RP/`.

---

## Getting Started

After cloning, run the following command to install node_modules:

- `npm install`

Next, edit the lines marked with `#` in `scripts/properties.ts` and resolve any TypeScript errors.
Then run:

- `npm run build`

### What `npm run build` Does

Running the build command will:

- Automatically generate `manifest.json` in both BP/ and RP/ based on `properties.ts`
- Compile TypeScript files in `scripts/` into JavaScript under `BP/scripts/`
- Copy `pack_icon.png` from the project root into both BP/ and RP/
- Copy the completed `BP/` and `RP/` into Minecraft’s development folder

## Build System

This template uses `esbuild` to bundle all TypeScript entry points into a single `index.js` file under `BP/scripts/`.

## Requirements

- Node.js (for development and TypeScript build)

## Minecraft Modules

The following Minecraft modules are defined in `package.json`:

- `@minecraft/server`: `^2.5.0`
- `@minecraft/server-ui`: `^2.0.0`

Other available Minecraft modules include:

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

This template includes `fast-json-stringify` for high-performance JSON serialization.

When storing objects using `setDynamicProperty()`, it is recommended to serialize them using `fast-json-stringify` instead of `JSON.stringify` for better performance.

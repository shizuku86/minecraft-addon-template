import path from "path";
import esbuild from "esbuild";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname);

await esbuild.build({
    entryPoints: [
        path.join(rootDir, "scripts", "index.ts"),
        path.join(rootDir, "scripts", "properties.ts"),
    ],
    bundle: true,
    format: "esm",
    platform: "neutral",
    target: "es2020",
    outdir: path.join(rootDir, "BP", "scripts"),
    sourcemap: false,

    mainFields: ["module", "main"],

    external: [
        "@minecraft/common",
        "@minecraft/debug-utilities",
        "@minecraft/diagnostics",
        "@minecraft/server",
        "@minecraft/server-admin",
        "@minecraft/server-editor",
        "@minecraft/server-gametest",
        "@minecraft/server-net",
        "@minecraft/server-ui",
        "@minecraft/server-graphics",
    ],
});

/**
 * 初期値です。公開前に必ず変更してください。
 * Default values. Change these before publishing.
 */
export const properties = {
    id: "addon-template", // a-z & 0-9 - _
    metadata: {
        /** 製作者の名前 */
        authors: ["your-name"],
    },
    header: {
        name: "Addon Template",
        description: "A starter template for developing Minecraft Bedrock addons.",
        version: {
            major: 1,
            minor: 0,
            patch: 0,
            // prerelease: "preview.1",
            // build: "abc123",
        },
        min_engine_version: [1, 21, 132],
    },
    dependencies: [
        {
            module_name: "@minecraft/server",
            version: "2.5.0",
        },
        {
            module_name: "@minecraft/server-ui",
            version: "2.0.0",
        },
    ],
};

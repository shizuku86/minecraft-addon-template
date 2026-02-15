/**
 * 文末に # が記述されている箇所を適宜修正して使用します。
 * Modify and use where # is written at the end of the sentence as appropriate
 */
export const properties = {
    id: "addon-template", # // a-z & 0-9 - _
    metadata: {
        /** 製作者の名前 */
        authors: [
            //"shizuku86"
        ],
    },
    header: {
        name: "Addon-template", #
        description:
            "A starter template for developing Minecraft Bedrock addons.", #
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
            version: "2.5.0", #
        },
        {
            module_name: "@minecraft/server-ui",
            version: "2.0.0", #
        },
    ],
};

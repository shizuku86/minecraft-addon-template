# Minecraft Addon Template

[English README is here](README.md)

このリポジトリは、安定板の ScriptAPI を使用する統合版マインクラフトのアドオン用テンプレートです。

このテンプレートには以下が含まれます：

- `manifest.json` の自動生成
- TypeScript + esbuild によるバンドル
- Minecraft 開発フォルダへの自動デプロイ

---

## プロジェクト構成

このテンプレートでは、ルート直下に以下の2つのディレクトリを作成し使用します。

```
BP/   # Behavior Pack
RP/   # Resource Pack
```

これらのフォルダは、`pnpm build` を初めて実行した際に自動生成されます。

生成後は以下のように開発を行います：

- ScriptAPI のコード -> ルート直下の `scripts/` 以下に TypeScript で記述
- BP のファイル -> ルート直下の `BP/` に scripts 以外を記述
- RP のファイル -> ルート直下の `RP/` に記述

---

## Getting Started

1. 依存関係のインストール

    このテンプレートは **pnpm 専用** です。

    ```
    pnpm install
    ```

2. プロパティの設定

    初期テンプレートの `scripts/properties.ts` には、意図的に不正な `#` マーカーが含まれています。
    `#` が付いている箇所を編集したうえで、TypeScript のエラーが無いことを確認してください。

3. Addon のビルド

    ```
    pnpm build
    ```

### ビルドコマンドの動作内容

ビルドを実行すると、以下の処理が行われます：

- `properties.ts` を基に BP/ と RP/ の `manifest.json` を自動生成
- ビルドのたびに `manifest.json` の `patch` バージョンを自動でインクリメント
- `scripts/` 内の TypeScript ファイルをすべてバンドル
- 出力ファイルを以下へ生成：
    ```
    BP/scripts/index.js
    ```
- プロジェクトルートの `pack_icon.png` を BP/ と RP/ にコピー
- `BP/` と `RP/` を Minecraft の開発フォルダへデプロイ（Windows のみ対応）

## ScriptAPI の実験版を使用する場合

このテンプレートはデフォルトで 安定板のScriptAPI を使用する設定になっています。

Beta（Preview）版の Script API を使用する場合は、
`package.json` を自身で編集してください。

例:

```
"@minecraft/server": "1.0.0-beta.x.x.x-preview.x"
```

`package.json` を変更した後は、依存関係を再インストールしてください。

## ビルドシステム

このテンプレートは以下を使用しています：

- **TypeScript** による型チェック（tsc --noEmit）
- **esbuild** による高速バンドル

scripts/ 内のすべてのエントリーポイントは、最適化された単一の index.js として出力されます。

## 動作環境

- Node.js（v18 以上推奨）

## Minecraft Modules

`package.json` には以下のモジュールが定義されています：

- `@minecraft/server`: `^2.5.0`
- `@minecraft/server-ui`: `^2.0.0`

その他利用可能なモジュール：

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

## パフォーマンス関連

このテンプレートには、高速な JSON シリアライズを行うために `fast-json-stringify` が含まれています。

`setDynamicProperty()` を使用してオブジェクトを保存する際は、パフォーマンス向上のため、標準の `JSON.stringify` ではなく `fast-json-stringify` を使用することを推奨します。

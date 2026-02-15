# Addon Template

[English README is here](README.md)

このリポジトリは、統合版マインクラフトのアドオンを開発するためのテンプレートです。

---

## プロジェクト構成

このテンプレートでは、ルート直下に以下の2つのディレクトリを作成し使用します。

- `BP/`（Behavior Pack）
- `RP/`（Resource Pack）

これらのフォルダは、`npm run build` を初めて実行した際に自動生成されます。
生成後は、`BP/` と `RP/` の中にビヘイビアパックおよびリソースパックのファイルを通常通り記述して開発できます。

---

## Getting Started

`npm install`

次に、`scripts/properties.ts` 内の `#` が付いている箇所を適切に編集して、
TypeScript のエラーが解消するようにしましょう。

その後、以下のコマンドを実行します
`npm run build`

### `npm run build` で行われること

`npm run build` を実行すると、以下の処理が自動的に行われます。

- `properties.ts` の情報を元に、BP/ と RP/ の両方に `manifest.json` を自動生成
- `scripts/` 内のTypeScript をトランスパイルし、`BP/scripts/` に JavaScript として出力
- ルート直下の `pack_icon.png` を BP/ と RP/ の両方にコピー
- 完成した BP/ と RP/ を Minecraft の development フォルダへコピー

## ビルドシステム

このテンプレートでは、`esbuild` を使用してすべての TypeScript エントリーポイントを `BP/scripts/` 配下の単一の `index.js` ファイルへバンドルしています。

## 動作環境

- Node.js (デプロイとTypeScriptビルド用)

## Minecraft Modules

`package.json` には以下の Minecraft モジュールが含まれています。

- `@minecraft/server`: `^2.5.0`
- `@minecraft/server-ui`: `^2.0.0`

他にも、以下のモジュールが利用可能です

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

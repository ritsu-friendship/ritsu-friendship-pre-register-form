# AI Coding Agent Instructions for Pre-Register Form

このドキュメントは、Pre-Register Form プロジェクトのAIコーディングエージェント向けの重要な情報を提供します。

## プロジェクト概要

- Next.js App Router ベースの事前登録フォームアプリケーション
- TypeScript + Tailwind CSS を使用
- App Directory構造採用（`src/app/`ベース）

## 重要なアーキテクチャパターン

### ディレクトリ構造

```
src/
  app/            # Next.js App Router のメインディレクトリ
    page.tsx      # ホームページコンポーネント
    layout.tsx    # ルートレイアウト
    globals.css   # グローバルスタイル
public/          # 静的アセット（画像など）
```

### スタイリング規約

- Tailwind CSS クラスを使用（utility-first approach）
- レスポンシブデザインには `sm:` プレフィックスを使用
- ダークモード対応には `dark:` プレフィックスを使用
- Grid/Flexboxベースのレイアウト構築

例（`page.tsx`より）:
```tsx
<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
```

## 開発ワークフロー

### 開発サーバーの起動

```bash
npm run dev   # http://localhost:3000 でサーバーが起動
```

### コードの品質管理

- ESLintによる静的解析: `npm run lint`
- TypeScriptの型チェック: `tsc --noEmit`

### デプロイ

- Vercel Platformを使用した自動デプロイ
- プロダクションビルド: `npm run build`
- プロダクション実行: `npm run start`

## 主要な依存関係

- Next.js 15.5.6
- React 19.1.0
- TypeScript
- Tailwind CSS 4.x

## 命名規則とパターン

- コンポーネント: PascalCase（例: `Home`）
- ファイル名: kebab-case
- 画像参照: `next/image`コンポーネントを使用し、パフォーマンス最適化

## ベストプラクティス

1. 画像最適化
   - 必ず`next/image`を使用
   - 重要な画像には`priority`プロパティを設定

2. アクセシビリティ
   - 装飾的画像には`aria-hidden`を使用
   - 意味のある画像には適切な`alt`テキストを設定

3. レスポンシブデザイン
   - モバイルファーストアプローチ
   - `sm:`ブレークポイントで適切に調整

4. パフォーマンス
   - 外部リンクには`rel="noopener noreferrer"`を使用
   - 適切なフォント最適化（next/font使用）
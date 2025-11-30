import { defineConfig } from "vitepress";

const themeConfig = {
  // https://vitepress.dev/reference/default-theme-config
  nav: [{ text: "Home", link: "/" }],
  sidebar: [
    {
      text: "Workspace",
      items: [
        { text: "Workspace files", link: "/workspace-files" },
        { text: "Local workspace", link: "/workspace-local" },
      ],
    },
    {
      text: "Shapes",
      items: [
        { text: "Lines", link: "/shape-line" },
        { text: "Line connections", link: "/shape-line-connection" },
        { text: "Line attachments", link: "/shape-line-attachment" },
        { text: "Vector networks", link: "/shape-vector-network" },
        { text: "Texts", link: "/shape-text" },
        { text: "Symbol", link: "/shape-symbol" },
        { text: "Sheet images", link: "/shape-sheet-image" },
        { text: "Align box", link: "/shape-alignbox" },
        { text: "Advanced properties", link: "/shape-advanced-properties" },
      ],
    },
    {
      text: "Frames", link: "/frames/frame"
    },
    {
      text: "Export",
      link: "/export",
    },
    {
      text: "Settings",
      items: [
        { text: "Grid", link: "/settings/grid" },
        { text: "Snap", link: "/settings/snap" },
        { text: "Preview dialog", link: "/settings/preview-dialog" },
      ],
    },
    {
      text: "Offline support",
      link: "/offline",
    },
  ],
};
type ThemeConfig = typeof themeConfig;

const themeConfigJA: ThemeConfig = {
  nav: [{ text: "ホーム", link: "/ja" }],
  sidebar: [
    {
      text: "ワークスペース",
      items: [
        { text: "ワークスペースファイル", link: "/ja/workspace-files" },
        { text: "ローカルワークスペース", link: "/ja/workspace-local" },
      ],
    },
    {
      text: "シェイプ",
      items: [
        { text: "ライン", link: "/ja/shape-line" },
        { text: "ラインコネクション", link: "/ja/shape-line-connection" },
        { text: "ラインアタッチメント", link: "/ja/shape-line-attachment" },
        { text: "ベクターネットワーク", link: "/ja/shape-vector-network" },
        { text: "テキスト", link: "/ja/shape-text" },
        { text: "シンボル", link: "/ja/shape-symbol" },
        { text: "シートイメージ", link: "/ja/shape-sheet-image" },
        { text: "アラインボックス", link: "/ja/shape-alignbox" },
        {
          text: "高度なプロパティ",
          link: "/ja/shape-advanced-properties",
        },
      ],
    },
    {
      text: "フレーム", link: "/ja/frames/frame"
    },
    {
      text: "エクスポート",
      link: "/ja/export",
    },
    {
      text: "設定",
      items: [
        { text: "グリッド", link: "/ja/settings/grid" },
        { text: "スナップ", link: "/ja/settings/snap" },
        {
          text: "プレビューダイアログ",
          link: "/ja/settings/preview-dialog",
        },
      ],
    },
    {
      text: "オフラインサポート",
      link: "/ja/offline",
    },
  ],
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "./src",
  sitemap: {
    hostname: "https://doc.no-mans-folly.com",
  },
  title: "No-man's folly",
  description: "Documentation for No-man's folly",
  head: [["link", { rel: "icon", href: "/no-mans-folly.svg" }]],
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    ja: {
      label: "Japanese",
      lang: "ja",
      link: "/ja/",
      description: "No-man's folly ドキュメンテーション",
      themeConfig: themeConfigJA,
    },
  },
  themeConfig: {
    ...themeConfig,
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/miyanokomiya/no-mans-folly",
      },
    ],
  },
});

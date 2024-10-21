import { defineConfig } from "vitepress";

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
      themeConfig: {
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
              {
                text: "高度なプロパティ",
                link: "/ja/shape-advanced-properties",
              },
            ],
          },
          {
            text: "エクスポート",
            link: "/ja/export",
          },
          {
            text: "設定",
            items: [
              { text: "グリッド", link: "/ja/settings/grid" },
              {
                text: "プレビューダイアログ",
                link: "/ja/settings/preview-dialog",
              },
            ],
          },
        ],
      },
    },
  },
  themeConfig: {
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
          { text: "Advanced properties", link: "/shape-advanced-properties" },
        ],
      },
      {
        text: "Export",
        link: "/export",
      },
      {
        text: "Settings",
        items: [
          { text: "Grid", link: "/settings/grid" },
          { text: "Preview dialog", link: "/settings/preview-dialog" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/miyanokomiya/no-mans-folly",
      },
    ],
  },
});

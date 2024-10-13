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
              { text: "プレビューダイアログ", link: "/ja/settings/preview-dialog" },
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
        items: [{ text: "Preview dialog", link: "/settings/preview-dialog" }],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/miyanokomiya/no-mans-folly-doc",
      },
    ],
  },
});

import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "./src",
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
              {
                text: "高度な属性値",
                link: "/ja/shape-advanced-properties",
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
        text: "Shapes",
        items: [
          { text: "Advanced properties", link: "/shape-advanced-properties" },
        ],
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

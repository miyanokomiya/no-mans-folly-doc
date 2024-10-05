import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  title: "No-man's folly",
  description: "Documentation for No-man's folly",
  head: [['link', { rel: 'icon', href: '/no-mans-folly.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Shapes',
        items: [
          { text: 'Advanced properties', link: '/shape-advanced-properties' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/miyanokomiya/no-mans-folly-doc' }
    ]
  }
})

import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-cn",
  title: "红楼梦笔记",

  lastUpdated: true,
  cleanUrls: "without-subfolders",

  head: [["meta", { name: "theme-color", content: "#3c8772" }]],

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    editLink: {
      pattern: "https://github.com/kirklin/dream-of-red-mansions-note/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/kirklin/dream-of-red-mansions-note" },
    ],

    footer: {
      message: "Released under the CC0 License.",
      copyright: "Copyright © 2023-present Kirk Lin",
    },
  },
});

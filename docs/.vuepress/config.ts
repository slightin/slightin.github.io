import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  lang: "zh-CN",
  title: "万事可乐",
  description: "万事可乐的博客",
  base: "/",

  theme,
});

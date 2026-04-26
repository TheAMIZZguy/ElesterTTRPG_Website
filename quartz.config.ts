import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Elester TTRPG",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "localhost:8080",
    ignorePatterns: [
      "private", 
      "templates", 
      ".obsidian",
      "y_Generators",
      "z_Templates",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",       
        body: "Inter", 
        code: "Fira Code", 
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#2d2d2d",
          dark: "#1a1a1a",
          secondary: "#b91c1c",
          tertiary: "#dc2626",
          highlight: "rgba(185, 28, 28, 0.08)",
          textHighlight: "#ffe066",
        },
        darkMode: {
          light:          "#0e0e10",    // page background
          lightgray:      "#242428",    // borders
          gray:           "#555558",    // secondary text
          darkgray:       "#c8c8cc",    // body text
          dark:           "#e8e8ec",    // headings
          secondary:      "#c0392b",    // links (fire red — change to suit)
          tertiary:       "#e05040",    // hover (ice blue)
          highlight:      "#rgba(192, 57, 43, 0.10)",    // selection highlight
          textHighlight:  "#7a3a00",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest", markBroken: false, prettyLinks: true }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      //Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages()
    ],
  },
}

export default config

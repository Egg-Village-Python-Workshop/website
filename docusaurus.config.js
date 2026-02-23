// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "蛋蛋村🥚",
  tagline: "歡迎來到蛋蛋村",
  favicon: "img/eggbign.png",

  // Set the production url of your site here
  url: "https://egg.lychicken.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Egg-Village-Python-Workshop", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["zh-Hant"],
  },
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Egg-Village-Python-Workshop/website/tree/main/",
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Egg-Village-Python-Workshop/website/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-7Q3N39GPVB",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/egglogo.png",

      metadata: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { property: "og:title", content: "蛋蛋村" },
        { property: "og:url", content: "https://egg.lychicken.com" },
        { property: "og:site_name", content: "蛋蛋村" },
        { property: "og:description", content: "歡迎來到蛋蛋村" },
        { property: "og:locale", content: "zh_TW" },
        { property: "article:author", content: "Egg Village" },
        { property: "article:tag", content: "蛋" },
        { property: "article:tag", content: "蛋蛋村" },
        { property: "article:tag", content: "Egg" },
        { property: "article:tag", content: "Egg Village" },
        { property: "article:tag", content: "Python" },
        {
          property: "article:tag",
          content:
            "前端, 後端, 全端, 網頁, 開發, 技術, 網頁開發, 前端開發, 後端開發, 全端開發, Python, JavaScript, HTML, CSS, 經驗分享, 手札, 筆記",
        },
        {
          property: "article:tag",
          content:
            "frontend, backend, web, Python, JavaScript, HTML, CSS, 經驗分享, 手札, note",
        },
      ],
      navbar: {
        title: "蛋蛋村",
        logo: {
          alt: "Egg Village Logo",
          src: "img/egglogo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "蛋村歷史",
          },
          { to: "/blog", label: "新聞", position: "left" },
          { to: "/finance", label: "金融大小事", position: "left" },
          {
            href: "https://github.com/Egg-Village-Python-Workshop/website",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Egg Village, Inc. Built with Python.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      mermaid: {
        theme: { light: "neutral" },
      },
    }),
  plugins: [
    // function cytoscapeAlias() {
    //   return {
    //     name: "cytoscape-umd-alias",
    //     configureWebpack() {
    //       return {
    //         resolve: {
    //           alias: {
    //             "cytoscape/dist/cytoscape.umd.js": require("path").resolve(
    //               __dirname,
    //               "node_modules/cytoscape/dist/cytoscape.umd.js",
    //             ),
    //           },
    //         },
    //       };
    //     },
    //   };
    // },
    [
      require.resolve("docusaurus-lunr-search"),
      {
        languages: ["zh"],
      },
    ],
    // 👇 加入以下這段來建立「金融大小事」專區 👇
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "finance", // 這個 ID 很重要，用來區分預設的 blog
        routeBasePath: "finance", // 網址會變成 https://egg.lychicken.com/finance
        path: "./finance", // 對應你專案根目錄下的資料夾名稱
        blogSidebarTitle: "蛋蛋金融大小事", // 側邊欄顯示的標題
        blogSidebarCount: "ALL", // 顯示所有文章列表
        showReadingTime: true,
      },
    ],
  ],
};

module.exports = config;

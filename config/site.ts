export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "独立开发者工具导航",
  description: "收录独立开发者出海技术栈和工具",
  mainNav: [],
  links: {
    twitter: "https://twitter.com/example",
    github: "https://github.com/yaolifeng0629/Awesome-independent-tools"
  }
};

export interface NavLink {
  /** 图标URLs */
  icons: {
    clearbit: string;
    favicon: string;
    google: string;
  };
  /** 站点名称 */
  title: string;
  /** 站点描述 */
  desc: string;
  /** 站点链接 */
  link: string;
  /** 域名 */
  domain: string;
}

type NavData = {
  title: string;
  items: NavLink[];
};

export const NavData: NavData[] = [
  {
    "title": "🔍 关键特点：",
    "items": [
      {
        "icons": "/default-icon.png",
        "title": "Web 开发框架或模板",
        "desc": "[Chrome 插件开发](#chrome插件开发)",
        "link": "#web开发框架或模板",
        "domain": ""
      },
      {
        "icons": "/default-icon.png",
        "title": "前端开发",
        "desc": "[后端开发](#后端开发)",
        "link": "#前端开发",
        "domain": ""
      },
      {
        "icons": "/default-icon.png",
        "title": "数据库管理",
        "desc": "[对象关系映射（ORM）](#对象关系映射)",
        "link": "#数据库管理",
        "domain": ""
      },
      {
        "icons": "/default-icon.png",
        "title": "样式与 UI 框架",
        "desc": "[原型设计](#原型设计)",
        "link": "#样式与ui框架",
        "domain": ""
      },
      {
        "icons": "/default-icon.png",
        "title": "认证与授权",
        "desc": "[支付集成](#支付集成)",
        "link": "#认证与授权",
        "domain": ""
      },
      {
        "icons": "/default-icon.png",
        "title": "邮件服务",
        "desc": "[网站分析](#网站分析)",
        "link": "#邮件服务",
        "domain": ""
      },
      {
        "icons": "/default-icon.png",
        "title": "在线客服和反馈服务",
        "desc": "[部署与托管](#部署与托管)",
        "link": "#在线客服和反馈服务",
        "domain": ""
      },
      {
        "icons": "/default-icon.png",
        "title": "网站管理",
        "desc": "[域名注册](#域名注册)",
        "link": "#网站管理",
        "domain": ""
      },
      {
        "icons": "/default-icon.png",
        "title": "文档管理",
        "desc": "[协议生成](#协议生成)",
        "link": "#文档管理",
        "domain": ""
      },
      {
        "icons": "/default-icon.png",
        "title": "图标资源",
        "desc": "[字体资源](#字体资源)",
        "link": "#图标资源",
        "domain": ""
      },
      {
        "icons": "/default-icon.png",
        "title": "图片视频素材",
        "desc": "[图片视频处理工具](#图片视频处理工具)",
        "link": "#图片视频素材",
        "domain": ""
      },
      {
        "icons": "/default-icon.png",
        "title": "屏幕录制",
        "desc": "[短链或长链](#短链或长链)",
        "link": "#屏幕录制",
        "domain": ""
      },
      {
        "icons": "/default-icon.png",
        "title": "信息渠道",
        "desc": "[产品发布](#产品发布)",
        "link": "#信息渠道",
        "domain": ""
      },
      {
        "icons": "/default-icon.png",
        "title": "Logo 设计",
        "desc": "[项目管理](#项目管理)",
        "link": "#logo设计",
        "domain": ""
      },
      {
        "icons": "/default-icon.png",
        "title": "其他工具",
        "desc": "其他工具",
        "link": "#其他工具",
        "domain": ""
      }
    ]
  },
  {
    "title": "Web 开发框架或模板",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "smart-excel-ai",
        "desc": "(免费) 基于 Next.js, 集成了登录、支付（lemon squeezy）、AI 功能",
        "link": "https://github.com/weijunext/smart-excel-ai",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "Opensaas",
        "desc": "(免费) 基于 React + Node.js，集成了登录、支付（stripe）、邮件、AI 功能",
        "link": "https://github.com/wasp-lang/open-saas/",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/shipfa.st",
          "favicon": "https://api.iowen.cn/favicon/shipfa.st.png",
          "google": "https://www.google.com/s2/favicons?domain=shipfa.st&sz=128"
        },
        "title": "Shipfast",
        "desc": "(付费) 基于 Next.js，集成了登录、支付（stripe）、邮件、AI 功能",
        "link": "https://shipfa.st/",
        "domain": "shipfa.st"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/supastarter.dev",
          "favicon": "https://api.iowen.cn/favicon/supastarter.dev.png",
          "google": "https://www.google.com/s2/favicons?domain=supastarter.dev&sz=128"
        },
        "title": "SupaStarter",
        "desc": "(付费) 有 Next.js 和 Nuxt 两种模板，功能比较齐全",
        "link": "https://supastarter.dev",
        "domain": "supastarter.dev"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/opensaas.sh",
          "favicon": "https://api.iowen.cn/favicon/opensaas.sh.png",
          "google": "https://www.google.com/s2/favicons?domain=opensaas.sh&sz=128"
        },
        "title": "Opensaas",
        "desc": "React + Node.js。集成了登录、支付（stripe）、邮件、AI 功能",
        "link": "https://opensaas.sh/",
        "domain": "opensaas.sh"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/react-saas.com",
          "favicon": "https://api.iowen.cn/favicon/react-saas.com.png",
          "google": "https://www.google.com/s2/favicons?domain=react-saas.com&sz=128"
        },
        "title": "SaaS-Boilerplate",
        "desc": "一款开源的 SaaS 模板，非常适合构建自己的 SaaS 应用",
        "link": "https://react-saas.com/",
        "domain": "react-saas.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/vercel.app",
          "favicon": "https://api.iowen.cn/favicon/vercel.app.png",
          "google": "https://www.google.com/s2/favicons?domain=vercel.app&sz=128"
        },
        "title": "nextjs subscription payments",
        "desc": "Vercel 开源的，支付采用的是 Stripe",
        "link": "https://subscription-payments.vercel.app/",
        "domain": "vercel.app"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/boilerplatelist.com",
          "favicon": "https://api.iowen.cn/favicon/boilerplatelist.com.png",
          "google": "https://www.google.com/s2/favicons?domain=boilerplatelist.com&sz=128"
        },
        "title": "boilerplatelist",
        "desc": "超过 130 个最佳 SaaS 样板和入门套件，并提供了评估和选择最适合项目需求的 SaaS 样板的指导",
        "link": "https://boilerplatelist.com/",
        "domain": "boilerplatelist.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "Taxonomy",
        "desc": "基于 Next.js 13 和 React 18 构建的开源 Web 应用实验项目",
        "link": "https://github.com/shadcn-ui/taxonomy",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "unibest",
        "desc": "unibest 是由 uniapp + Vue3 + Ts + Vite4 + UnoCss + UniUI 驱动的跨端快速启动模板",
        "link": "https://github.com/codercup/unibest",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "mp-html",
        "desc": "小程序富文本组件，支持渲染和编辑 html，支持在微信、QQ、百度、支付宝、头条和 uni-app 平台使用",
        "link": "https://github.com/jin-yufeng/mp-html",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "lucky-canvas 抽奖插件",
        "desc": "基于 TS + Canvas 抽奖插件，🌈 一套源码适配多端框架 JS / Vue / React / Taro / UniApp / 微信小程序等",
        "link": "https://github.com/buuing/lucky-canvas",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "NotionNext",
        "desc": "NotionNext，Notion 免费开源建站工具，将笔记转化为高性能静态网站",
        "link": "https://github.com/tangly1024/NotionNext",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/capacitorjs.com",
          "favicon": "https://api.iowen.cn/favicon/capacitorjs.com.png",
          "google": "https://www.google.com/s2/favicons?domain=capacitorjs.com&sz=128"
        },
        "title": "capacitorjs.com",
        "desc": "直接将 Next.js 包裹到原生应用中",
        "link": "https://capacitorjs.com/",
        "domain": "capacitorjs.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/discourse.org",
          "favicon": "https://api.iowen.cn/favicon/discourse.org.png",
          "google": "https://www.google.com/s2/favicons?domain=discourse.org&sz=128"
        },
        "title": "discourse",
        "desc": "社区讨论的平台",
        "link": "https://www.discourse.org/",
        "domain": "discourse.org"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "umami",
        "desc": "简单、快速、注重隐私的 Google Analytics 替代方案",
        "link": "https://github.com/umami-software/umami",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/free-for.dev",
          "favicon": "https://api.iowen.cn/favicon/free-for.dev.png",
          "google": "https://www.google.com/s2/favicons?domain=free-for.dev&sz=128"
        },
        "title": "Free for Developers",
        "desc": "一个专门为开发者收集整理免费在线工具资源的网站",
        "link": "https://free-for.dev/#/",
        "domain": "free-for.dev"
      }
    ]
  },
  {
    "title": "Chrome 插件开发",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/wxt.dev",
          "favicon": "https://api.iowen.cn/favicon/wxt.dev.png",
          "google": "https://www.google.com/s2/favicons?domain=wxt.dev&sz=128"
        },
        "title": "wxt.dev",
        "desc": "支持 Vue、Svelte 等多种前端框架",
        "link": "https://wxt.dev/",
        "domain": "wxt.dev"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/plasmo.com",
          "favicon": "https://api.iowen.cn/favicon/plasmo.com.png",
          "google": "https://www.google.com/s2/favicons?domain=plasmo.com&sz=128"
        },
        "title": "Plasmo Framework",
        "desc": "Plasmo 是一个浏览器扩展开发平台，帮助你构建、发布和管理浏览器扩展。只使用 Framework 开发的话是免费的。支持 React/Typescript",
        "link": "https://docs.plasmo.com/framework",
        "domain": "plasmo.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/responsiveviewer.org",
          "favicon": "https://api.iowen.cn/favicon/responsiveviewer.org.png",
          "google": "https://www.google.com/s2/favicons?domain=responsiveviewer.org&sz=128"
        },
        "title": "Responsive Viewer",
        "desc": "chrome 插件。可以一键验证多端响应式布局状态",
        "link": "https://responsiveviewer.org/",
        "domain": "responsiveviewer.org"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "vitesse-webext",
        "desc": "一个为 WebExtension 提供快速开发基础的 Vite 启动模板，支持 Vue 3、TypeScript、UnoCSS 等现代前端技术",
        "link": "https://github.com/antfu-collective/vitesse-webext",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "chrome-extension-boilerplate-react-vite",
        "desc": "一个用于创建 Chrome 扩展程序的模板，使用 React 和 TypeScript 构建。重点在于利用 Vite(Rollup)和 Turborepo 提高构建速度和开发体验",
        "link": "https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "chrome-extension-typescript-starter",
        "desc": "[crxjs](https://github.com/crxjs/chrome-extension-tools) - 是一个旨在简化 Chrome 扩展程序捆绑过程的工具库",
        "link": "https://github.com/chibat/chrome-extension-typescript-starter",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "extension.js",
        "desc": "一个无需配置、跨浏览器的扩展开发工具，支持 TypeScript、WebAssembly、React 和现代 JavaScript，专为实用性和快速原型设计而设计",
        "link": "https://github.com/extension-js/extension.js",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/chrome-stats.com",
          "favicon": "https://api.iowen.cn/favicon/chrome-stats.com.png",
          "google": "https://www.google.com/s2/favicons?domain=chrome-stats.com&sz=128"
        },
        "title": "Chrome Stats",
        "desc": "挖掘 Chrome 扩展需求神器",
        "link": "https://chrome-stats.com/",
        "domain": "chrome-stats.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/twitter.com",
          "favicon": "https://api.iowen.cn/favicon/twitter.com.png",
          "google": "https://www.google.com/s2/favicons?domain=twitter.com&sz=128"
        },
        "title": "给你谷歌插件增加 🏅“精选”徽章标识？",
        "desc": "给你谷歌插件增加 🏅“精选”徽章标识？",
        "link": "https://x.com/HongyuanCao/status/1821558568132497629",
        "domain": "twitter.com"
      }
    ]
  },
  {
    "title": "前端开发",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/nextjs.org",
          "favicon": "https://api.iowen.cn/favicon/nextjs.org.png",
          "google": "https://www.google.com/s2/favicons?domain=nextjs.org&sz=128"
        },
        "title": "Next.js",
        "desc": "基于 React",
        "link": "https://nextjs.org/",
        "domain": "nextjs.org"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/nuxt.com",
          "favicon": "https://api.iowen.cn/favicon/nuxt.com.png",
          "google": "https://www.google.com/s2/favicons?domain=nuxt.com&sz=128"
        },
        "title": "Nuxt",
        "desc": "基于 Vue",
        "link": "https://nuxt.com/",
        "domain": "nuxt.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/remix.run",
          "favicon": "https://api.iowen.cn/favicon/remix.run.png",
          "google": "https://www.google.com/s2/favicons?domain=remix.run&sz=128"
        },
        "title": "Remix",
        "desc": "基于 React 的全栈框架",
        "link": "https://remix.run/",
        "domain": "remix.run"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/createapp.dev",
          "favicon": "https://api.iowen.cn/favicon/createapp.dev.png",
          "google": "https://www.google.com/s2/favicons?domain=createapp.dev&sz=128"
        },
        "title": "Webpack Config Tool",
        "desc": "一键帮你生成 webpack.config.js",
        "link": "https://createapp.dev/webpack/no-library",
        "domain": "createapp.dev"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/autoxjs.com",
          "favicon": "https://api.iowen.cn/favicon/autoxjs.com.png",
          "google": "https://www.google.com/s2/favicons?domain=autoxjs.com&sz=128"
        },
        "title": "AutoX.js",
        "desc": "不需要 Root 权限 的 JavaScript 自动化软件",
        "link": "http://doc.autoxjs.com/",
        "domain": "autoxjs.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/cypress.io",
          "favicon": "https://api.iowen.cn/favicon/cypress.io.png",
          "google": "https://www.google.com/s2/favicons?domain=cypress.io&sz=128"
        },
        "title": "Cypress",
        "desc": "最完整的端到端解决方案",
        "link": "https://www.cypress.io/",
        "domain": "cypress.io"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/xrender.fun",
          "favicon": "https://api.iowen.cn/favicon/xrender.fun.png",
          "google": "https://www.google.com/s2/favicons?domain=xrender.fun&sz=128"
        },
        "title": "XRender",
        "desc": "一个很易用的中后台「表单 / 表格 / 图表」解决方案。",
        "link": "https://xrender.fun/",
        "domain": "xrender.fun"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/pptr.dev",
          "favicon": "https://api.iowen.cn/favicon/pptr.dev.png",
          "google": "https://www.google.com/s2/favicons?domain=pptr.dev&sz=128"
        },
        "title": "Puppeteer",
        "desc": "一个 JavaScript 库，提供了一个高级 API 来控制 Chrome 或 Firefox 通过 DevTools Protocol 或 WebDriver BiDi",
        "link": "https://pptr.dev/",
        "domain": "pptr.dev"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/ice.work",
          "favicon": "https://api.iowen.cn/favicon/ice.work.png",
          "google": "https://www.google.com/s2/favicons?domain=ice.work&sz=128"
        },
        "title": "ice",
        "desc": "基于 React 的应用研发框架，开箱即用，同时支持移动端和桌面端",
        "link": "https://v3.ice.work/docs/guide/start/",
        "domain": "ice.work"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.io",
          "favicon": "https://api.iowen.cn/favicon/github.io.png",
          "google": "https://www.google.com/s2/favicons?domain=github.io&sz=128"
        },
        "title": "Notiflix",
        "desc": "纯 JavaScript 库，用于客户端非阻塞通知、弹出框、加载指示",
        "link": "https://notiflix.github.io",
        "domain": "github.io"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/driverjs.com",
          "favicon": "https://api.iowen.cn/favicon/driverjs.com.png",
          "google": "https://www.google.com/s2/favicons?domain=driverjs.com&sz=128"
        },
        "title": "driver.js",
        "desc": "快速实现产品导览，亮点，上下文帮助等等。",
        "link": "https://driverjs.com/",
        "domain": "driverjs.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/netlify.app",
          "favicon": "https://api.iowen.cn/favicon/netlify.app.png",
          "google": "https://www.google.com/s2/favicons?domain=netlify.app&sz=128"
        },
        "title": "3D model",
        "desc": "基于 Vue3 3D 模型展示组件",
        "link": "https://vue-3d-model.netlify.app/zh/guide/installation/",
        "domain": "netlify.app"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/netlify.app",
          "favicon": "https://api.iowen.cn/favicon/netlify.app.png",
          "google": "https://www.google.com/s2/favicons?domain=netlify.app&sz=128"
        },
        "title": "wcf.js",
        "desc": "一款强大、快速、开源的微信机器人框架",
        "link": "https://wcferry.netlify.app/",
        "domain": "netlify.app"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "Pagefind",
        "desc": "博客/文档的静态搜索",
        "link": "https://github.com/CloudCannon/pagefind",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/payloadcms.com",
          "favicon": "https://api.iowen.cn/favicon/payloadcms.com.png",
          "google": "https://www.google.com/s2/favicons?domain=payloadcms.com&sz=128"
        },
        "title": "payloadcms",
        "desc": "无头 CMS 和应用程序框架",
        "link": "https://payloadcms.com/",
        "domain": "payloadcms.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "apprise",
        "desc": "适用于几乎所有平台的推送通知",
        "link": "https://github.com/caronc/apprise",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/google.com",
          "favicon": "https://api.iowen.cn/favicon/google.com.png",
          "google": "https://www.google.com/s2/favicons?domain=google.com&sz=128"
        },
        "title": "SEO 优化指南",
        "desc": "[叫你如何做 SEO 优化？](https://magickseo.com/)",
        "link": "https://developers.google.com/search/docs?hl=zh-cn",
        "domain": "google.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/aitdk.com",
          "favicon": "https://api.iowen.cn/favicon/aitdk.com.png",
          "google": "https://www.google.com/s2/favicons?domain=aitdk.com&sz=128"
        },
        "title": "AITDK SEO Extension",
        "desc": "一款免费的 All-in-One SEO 插件",
        "link": "https://aitdk.com/extension",
        "domain": "aitdk.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/player.style",
          "favicon": "https://api.iowen.cn/favicon/player.style.png",
          "google": "https://www.google.com/s2/favicons?domain=player.style&sz=128"
        },
        "title": "Web 上实现视频和音频播放器",
        "desc": "Web 上实现视频和音频播放器",
        "link": "https://player.style/",
        "domain": "player.style"
      }
    ]
  },
  {
    "title": "后端开发",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/nestjs.com",
          "favicon": "https://api.iowen.cn/favicon/nestjs.com.png",
          "google": "https://www.google.com/s2/favicons?domain=nestjs.com&sz=128"
        },
        "title": "Nest.js",
        "desc": "基于 Node.js",
        "link": "https://docs.nestjs.com/",
        "domain": "nestjs.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/midwayjs.org",
          "favicon": "https://api.iowen.cn/favicon/midwayjs.org.png",
          "google": "https://www.google.com/s2/favicons?domain=midwayjs.org&sz=128"
        },
        "title": "Midway.js",
        "desc": "基于 Node.js",
        "link": "https://midwayjs.org/",
        "domain": "midwayjs.org"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/djangoproject.com",
          "favicon": "https://api.iowen.cn/favicon/djangoproject.com.png",
          "google": "https://www.google.com/s2/favicons?domain=djangoproject.com&sz=128"
        },
        "title": "Django",
        "desc": "基于 Python, 全栈框架，内置管理后台，安全特性完善，国际化支持强，适合快速开发复杂 web 应用",
        "link": "https://www.djangoproject.com/",
        "domain": "djangoproject.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/koajs.com",
          "favicon": "https://api.iowen.cn/favicon/koajs.com.png",
          "google": "https://www.google.com/s2/favicons?domain=koajs.com&sz=128"
        },
        "title": "Koa",
        "desc": "基于 Node.js, 轻量级，灵活性高，适合构建小型应用和 API",
        "link": "https://koajs.com/",
        "domain": "koajs.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/actix.rs",
          "favicon": "https://api.iowen.cn/favicon/actix.rs.png",
          "google": "https://www.google.com/s2/favicons?domain=actix.rs&sz=128"
        },
        "title": "Actix",
        "desc": "基于 Rust, 超高性能，内存安全，适合构建高并发、低延迟的 web 服务",
        "link": "https://actix.rs/",
        "domain": "actix.rs"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/labstack.com",
          "favicon": "https://api.iowen.cn/favicon/labstack.com.png",
          "google": "https://www.google.com/s2/favicons?domain=labstack.com&sz=128"
        },
        "title": "Echo",
        "desc": "基于 Go，高性能，简洁易用，适合构建 RESTful API 和微服务",
        "link": "https://echo.labstack.com/",
        "domain": "labstack.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/gin-gonic.com",
          "favicon": "https://api.iowen.cn/favicon/gin-gonic.com.png",
          "google": "https://www.google.com/s2/favicons?domain=gin-gonic.com&sz=128"
        },
        "title": "Gin",
        "desc": "基于 Go，高性能，轻量级，适合构建微服务和高并发 API",
        "link": "https://gin-gonic.com/",
        "domain": "gin-gonic.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "supabase",
        "desc": "基于开源的后端开发解决方案平台",
        "link": "https://github.com/supabase/supabase",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "appwrite",
        "desc": "用于开发 Web 和移动应用程序的后端平台",
        "link": "https://github.com/appwrite/appwrite",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "notify",
        "desc": "Go 语言，用于向各种消息服务发送通知",
        "link": "https://github.com/nikoksr/notify",
        "domain": "github.com"
      }
    ]
  },
  {
    "title": "数据库管理",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/mongodb.com",
          "favicon": "https://api.iowen.cn/favicon/mongodb.com.png",
          "google": "https://www.google.com/s2/favicons?domain=mongodb.com&sz=128"
        },
        "title": "Mongodb",
        "desc": "官方提供的一个免费数据库",
        "link": "https://www.mongodb.com/products/platform/cloud",
        "domain": "mongodb.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/tidbcloud.com",
          "favicon": "https://api.iowen.cn/favicon/tidbcloud.com.png",
          "google": "https://www.google.com/s2/favicons?domain=tidbcloud.com&sz=128"
        },
        "title": "TiDB Cloud",
        "desc": "免费，5GB 内免费",
        "link": "https://auth.tidbcloud.com",
        "domain": "tidbcloud.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/mongodb.com",
          "favicon": "https://api.iowen.cn/favicon/mongodb.com.png",
          "google": "https://www.google.com/s2/favicons?domain=mongodb.com&sz=128"
        },
        "title": "Realm",
        "desc": "SQLite 的替代方案",
        "link": "https://www.mongodb.com/docs/atlas/device-sdks/",
        "domain": "mongodb.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/mysql.com",
          "favicon": "https://api.iowen.cn/favicon/mysql.com.png",
          "google": "https://www.google.com/s2/favicons?domain=mysql.com&sz=128"
        },
        "title": "MySQL",
        "desc": "最流行的开源的关系型数据库",
        "link": "https://www.mysql.com",
        "domain": "mysql.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/postgresql.org",
          "favicon": "https://api.iowen.cn/favicon/postgresql.org.png",
          "google": "https://www.google.com/s2/favicons?domain=postgresql.org&sz=128"
        },
        "title": "PostgreSQL",
        "desc": "一个功能强大的开源对象关系数据库系统",
        "link": "https://www.postgresql.org",
        "domain": "postgresql.org"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/redis.io",
          "favicon": "https://api.iowen.cn/favicon/redis.io.png",
          "google": "https://www.google.com/s2/favicons?domain=redis.io&sz=128"
        },
        "title": "Redis",
        "desc": "一个开源（BSD 许可）的，内存中的数据结构存储系统，它可以用作数据库、缓存和消息中间件",
        "link": "https://redis.io",
        "domain": "redis.io"
      }
    ]
  },
  {
    "title": "对象关系映射",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/prisma.io",
          "favicon": "https://api.iowen.cn/favicon/prisma.io.png",
          "google": "https://www.google.com/s2/favicons?domain=prisma.io&sz=128"
        },
        "title": "Prisma",
        "desc": "[TypeORM](https://github.com/typeorm/typeorm)",
        "link": "https://prisma.io/",
        "domain": "prisma.io"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/sequelize.org",
          "favicon": "https://api.iowen.cn/favicon/sequelize.org.png",
          "google": "https://www.google.com/s2/favicons?domain=sequelize.org&sz=128"
        },
        "title": "Sequelize",
        "desc": "最老牌的 Node.js ORM 库，支持多种数据库",
        "link": "https://sequelize.org/",
        "domain": "sequelize.org"
      }
    ]
  },
  {
    "title": "样式与 UI 框架",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/tailwindcss.com",
          "favicon": "https://api.iowen.cn/favicon/tailwindcss.com.png",
          "google": "https://www.google.com/s2/favicons?domain=tailwindcss.com&sz=128"
        },
        "title": "Tailwind CSS",
        "desc": "[Shadcn/ui](https://ui.shadcn.com/)",
        "link": "https://tailwindcss.com/",
        "domain": "tailwindcss.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/nextui.org",
          "favicon": "https://api.iowen.cn/favicon/nextui.org.png",
          "google": "https://www.google.com/s2/favicons?domain=nextui.org&sz=128"
        },
        "title": "NextUI",
        "desc": "[radix-ui](https://www.radix-ui.com/)",
        "link": "https://nextui.org/",
        "domain": "nextui.org"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/midday.ai",
          "favicon": "https://api.iowen.cn/favicon/midday.ai.png",
          "google": "https://www.google.com/s2/favicons?domain=midday.ai&sz=128"
        },
        "title": "midday.ai",
        "desc": "企业财务自动化，关联了各大银行账单，将重复的会计工作程序化、生成财务报告、发票开具。",
        "link": "https://midday.ai/",
        "domain": "midday.ai"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/hyperui.dev",
          "favicon": "https://api.iowen.cn/favicon/hyperui.dev.png",
          "google": "https://www.google.com/s2/favicons?domain=hyperui.dev&sz=128"
        },
        "title": "hyperui.dev",
        "desc": "免费的 Tailwind CSS 组件的集合",
        "link": "https://www.hyperui.dev/",
        "domain": "hyperui.dev"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/magicui.design",
          "favicon": "https://api.iowen.cn/favicon/magicui.design.png",
          "google": "https://www.google.com/s2/favicons?domain=magicui.design&sz=128"
        },
        "title": "magicui",
        "desc": "专业动画组件",
        "link": "https://magicui.design/",
        "domain": "magicui.design"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/devdojo.com",
          "favicon": "https://api.iowen.cn/favicon/devdojo.com.png",
          "google": "https://www.google.com/s2/favicons?domain=devdojo.com&sz=128"
        },
        "title": "TailwindCSS Buttons",
        "desc": "TailwindCSS 按钮的独特集合",
        "link": "https://devdojo.com/tailwindcss/buttons",
        "domain": "devdojo.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/twitter.com",
          "favicon": "https://api.iowen.cn/favicon/twitter.com.png",
          "google": "https://www.google.com/s2/favicons?domain=twitter.com&sz=128"
        },
        "title": "tailwindtoolbox",
        "desc": "提供了一系列免费的 Tailwind CSS 模板、组件和资源",
        "link": "https://www.tailwindtoolbox.com/",
        "domain": "twitter.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/nextjstemplates.com",
          "favicon": "https://api.iowen.cn/favicon/nextjstemplates.com.png",
          "google": "https://www.google.com/s2/favicons?domain=nextjstemplates.com&sz=128"
        },
        "title": "nextjstemplates",
        "desc": "Next.js Templates 提供多样化专业模板",
        "link": "https://nextjstemplates.com/",
        "domain": "nextjstemplates.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/tailwindawesome.com",
          "favicon": "https://api.iowen.cn/favicon/tailwindawesome.com.png",
          "google": "https://www.google.com/s2/favicons?domain=tailwindawesome.com&sz=128"
        },
        "title": "tailwindawesome",
        "desc": "基于 TailwindCSS 的 300+模版，有免费的，有收费的",
        "link": "https://www.tailwindawesome.com/?price=free&type=template",
        "domain": "tailwindawesome.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/uiverse.io",
          "favicon": "https://api.iowen.cn/favicon/uiverse.io.png",
          "google": "https://www.google.com/s2/favicons?domain=uiverse.io&sz=128"
        },
        "title": "uiverse",
        "desc": "适用于任何项目的开源 UI 元素",
        "link": "https://uiverse.io/",
        "domain": "uiverse.io"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "canvas-confetti",
        "desc": "只要一行代码就能添加特效，支持撒花、放烟花、下雪多种特效，也可以自定义撒花的元素。",
        "link": "https://github.com/catdad/canvas-confetti",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/onepagelove.com",
          "favicon": "https://api.iowen.cn/favicon/onepagelove.com.png",
          "google": "https://www.google.com/s2/favicons?domain=onepagelove.com&sz=128"
        },
        "title": "onepagelove",
        "desc": "自 2008 年以来一直在收集单页网站的平台，目前已收集了 8375 个单页网站",
        "link": "https://onepagelove.com/",
        "domain": "onepagelove.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/tailspark.co",
          "favicon": "https://api.iowen.cn/favicon/tailspark.co.png",
          "google": "https://www.google.com/s2/favicons?domain=tailspark.co&sz=128"
        },
        "title": "tailspark.co",
        "desc": "Tailwind CSS 中内置的漂亮组件和模板",
        "link": "https://tailspark.co/",
        "domain": "tailspark.co"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/framer.com",
          "favicon": "https://api.iowen.cn/favicon/framer.com.png",
          "google": "https://www.google.com/s2/favicons?domain=framer.com&sz=128"
        },
        "title": "Framer Motion",
        "desc": "提供了一组高级动画和交互组件，适合快速构建复杂动画和交互效果",
        "link": "https://www.framer.com/motion/",
        "domain": "framer.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/brumm.af",
          "favicon": "https://api.iowen.cn/favicon/brumm.af.png",
          "google": "https://www.google.com/s2/favicons?domain=brumm.af&sz=128"
        },
        "title": "Smooth Shadow",
        "desc": "平滑的阴影生成器",
        "link": "https://shadows.brumm.af/",
        "domain": "brumm.af"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/hype4.academy",
          "favicon": "https://api.iowen.cn/favicon/hype4.academy.png",
          "google": "https://www.google.com/s2/favicons?domain=hype4.academy&sz=128"
        },
        "title": "claymorphism",
        "desc": "磨砂玻璃效果",
        "link": "https://hype4.academy/tools/claymorphism-generator",
        "domain": "hype4.academy"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/aceternity.com",
          "favicon": "https://api.iowen.cn/favicon/aceternity.com.png",
          "google": "https://www.google.com/s2/favicons?domain=aceternity.com&sz=128"
        },
        "title": "aceternity",
        "desc": "各种好看 UI 的样式",
        "link": "https://ui.aceternity.com/",
        "domain": "aceternity.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/animata.design",
          "favicon": "https://api.iowen.cn/favicon/animata.design.png",
          "google": "https://www.google.com/s2/favicons?domain=animata.design&sz=128"
        },
        "title": "animata",
        "desc": "收藏了各种交互动画和效果",
        "link": "https://animata.design/",
        "domain": "animata.design"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/spark-ui.dev",
          "favicon": "https://api.iowen.cn/favicon/spark-ui.dev.png",
          "google": "https://www.google.com/s2/favicons?domain=spark-ui.dev&sz=128"
        },
        "title": "spark-ui",
        "desc": "构建动画组件 UI",
        "link": "https://spark-ui.dev/",
        "domain": "spark-ui.dev"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/magicui.design",
          "favicon": "https://api.iowen.cn/favicon/magicui.design.png",
          "google": "https://www.google.com/s2/favicons?domain=magicui.design&sz=128"
        },
        "title": "magicui",
        "desc": "50 多个免费开源动画组件，使用 React、Typescript、Tailwind CSS 和 Framer Motion 构建",
        "link": "https://magicui.design/",
        "domain": "magicui.design"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/tailwind-generator.com",
          "favicon": "https://api.iowen.cn/favicon/tailwind-generator.com.png",
          "google": "https://www.google.com/s2/favicons?domain=tailwind-generator.com&sz=128"
        },
        "title": "通过图形化编辑器轻松创建和自定义各种网页组件",
        "desc": "[一个专门处理数字动画的 React 组件](https://github.com/barvian/number-flow)",
        "link": "https://tailwind-generator.com/",
        "domain": "tailwind-generator.com"
      }
    ]
  },
  {
    "title": "原型设计",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/modao.cc",
          "favicon": "https://api.iowen.cn/favicon/modao.cc.png",
          "google": "https://www.google.com/s2/favicons?domain=modao.cc&sz=128"
        },
        "title": "墨刀",
        "desc": "国内产品原型设计工具",
        "link": "https://modao.cc/",
        "domain": "modao.cc"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/figma.com",
          "favicon": "https://api.iowen.cn/favicon/figma.com.png",
          "google": "https://www.google.com/s2/favicons?domain=figma.com&sz=128"
        },
        "title": "Figma",
        "desc": "国外产品原型设计工具",
        "link": "https://www.figma.com/",
        "domain": "figma.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "penpot",
        "desc": "可平替 Figma 的开源免费工具",
        "link": "https://github.com/penpot/penpot",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/sketch.com",
          "favicon": "https://api.iowen.cn/favicon/sketch.com.png",
          "google": "https://www.google.com/s2/favicons?domain=sketch.com&sz=128"
        },
        "title": "Sketch",
        "desc": "国外产品原型设计工具",
        "link": "https://www.sketch.com/",
        "domain": "sketch.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/adobe.com",
          "favicon": "https://api.iowen.cn/favicon/adobe.com.png",
          "google": "https://www.google.com/s2/favicons?domain=adobe.com&sz=128"
        },
        "title": "Adobe XD",
        "desc": "国外产品原型设计工具",
        "link": "https://www.adobe.com/products/xd.html",
        "domain": "adobe.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/v0.dev",
          "favicon": "https://api.iowen.cn/favicon/v0.dev.png",
          "google": "https://www.google.com/s2/favicons?domain=v0.dev&sz=128"
        },
        "title": "V0",
        "desc": "Text to UI",
        "link": "https://v0.dev/chat",
        "domain": "v0.dev"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/canva.com",
          "favicon": "https://api.iowen.cn/favicon/canva.com.png",
          "google": "https://www.google.com/s2/favicons?domain=canva.com&sz=128"
        },
        "title": "Canva",
        "desc": "图形设计平台",
        "link": "https://www.canva.com/",
        "domain": "canva.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/designspells.com",
          "favicon": "https://api.iowen.cn/favicon/designspells.com.png",
          "google": "https://www.google.com/s2/favicons?domain=designspells.com&sz=128"
        },
        "title": "designspells",
        "desc": "收集了 N 多的产品设计细节，做产品没有思路的时候可以上去看看别人是怎么做的",
        "link": "https://www.designspells.com/",
        "domain": "designspells.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/uidesign.tips",
          "favicon": "https://api.iowen.cn/favicon/uidesign.tips.png",
          "google": "https://www.google.com/s2/favicons?domain=uidesign.tips&sz=128"
        },
        "title": "uidesign.tips",
        "desc": "了解如何通过这些简单的 UI 技巧设计更好的用户界面并让您的用户更满意",
        "link": "https://www.uidesign.tips/ui-tips",
        "domain": "uidesign.tips"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "OpenUI",
        "desc": "与 v0.dev 相似，但是是基于 Prompt 构建 UI 组件",
        "link": "https://github.com/wandb/openui",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/happyhues.co",
          "favicon": "https://api.iowen.cn/favicon/happyhues.co.png",
          "google": "https://www.google.com/s2/favicons?domain=happyhues.co&sz=128"
        },
        "title": "happyhues",
        "desc": "网站配色方案",
        "link": "https://www.happyhues.co/palettes/13",
        "domain": "happyhues.co"
      }
    ]
  },
  {
    "title": "认证与授权",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/logto.io",
          "favicon": "https://api.iowen.cn/favicon/logto.io.png",
          "google": "https://www.google.com/s2/favicons?domain=logto.io&sz=128"
        },
        "title": "Logto",
        "desc": "[Lucia](https://lucia-auth.com/)",
        "link": "https://logto.io/",
        "domain": "logto.io"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/authjs.dev",
          "favicon": "https://api.iowen.cn/favicon/authjs.dev.png",
          "google": "https://www.google.com/s2/favicons?domain=authjs.dev&sz=128"
        },
        "title": "Auth.js",
        "desc": "支持 Nuxt, SolidStart, Astro 等",
        "link": "https://authjs.dev/",
        "domain": "authjs.dev"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/js.org",
          "favicon": "https://api.iowen.cn/favicon/js.org.png",
          "google": "https://www.google.com/s2/favicons?domain=js.org&sz=128"
        },
        "title": "Next Auth.js",
        "desc": "支持 Next.js",
        "link": "https://next-auth.js.org/",
        "domain": "js.org"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/clerk.com",
          "favicon": "https://api.iowen.cn/favicon/clerk.com.png",
          "google": "https://www.google.com/s2/favicons?domain=clerk.com&sz=128"
        },
        "title": "Clerk",
        "desc": "免费用户有 5000 MAU",
        "link": "https://clerk.com/",
        "domain": "clerk.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "NextAuth",
        "desc": "用户系统, 网络身份验证",
        "link": "https://github.com/nextauthjs/next-auth",
        "domain": "github.com"
      }
    ]
  },
  {
    "title": "支付集成",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/stripe.com",
          "favicon": "https://api.iowen.cn/favicon/stripe.com.png",
          "google": "https://www.google.com/s2/favicons?domain=stripe.com&sz=128"
        },
        "title": "Stripe",
        "desc": "需要企业资质,开发者友好,API 强大",
        "link": "https://stripe.com/",
        "domain": "stripe.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/paddle.com",
          "favicon": "https://api.iowen.cn/favicon/paddle.com.png",
          "google": "https://www.google.com/s2/favicons?domain=paddle.com&sz=128"
        },
        "title": "Paddle",
        "desc": "手续费低，一体化支付基础设施，可简化和自动化您的计费操作，因此您可以专注于增长。",
        "link": "https://www.paddle.com/",
        "domain": "paddle.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/lemonsqueezy.com",
          "favicon": "https://api.iowen.cn/favicon/lemonsqueezy.com.png",
          "google": "https://www.google.com/s2/favicons?domain=lemonsqueezy.com&sz=128"
        },
        "title": "Lemon Squeezy",
        "desc": "一个全球支付平台，申请流程简单，不需要公司资质。提供微信、支付宝、Visa/Master 信用卡、PayPal 等多种支付方式，覆盖 130 多个国家。其核心功能包括备智能营收分析、客户跟踪系统、Affiliate 联盟营销工具、折扣码系统和支付失败恢复机制。",
        "link": "https://www.lemonsqueezy.com/",
        "domain": "lemonsqueezy.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/paypal.com",
          "favicon": "https://api.iowen.cn/favicon/paypal.com.png",
          "google": "https://www.google.com/s2/favicons?domain=paypal.com&sz=128"
        },
        "title": "PayPal",
        "desc": "个人账户即可使用,全球覆盖范围大",
        "link": "https://www.paypal.com/",
        "domain": "paypal.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/payoneer.com",
          "favicon": "https://api.iowen.cn/favicon/payoneer.com.png",
          "google": "https://www.google.com/s2/favicons?domain=payoneer.com&sz=128"
        },
        "title": "Payoneer",
        "desc": "个人账户可用,支持全球付款",
        "link": "https://www.payoneer.com/",
        "domain": "payoneer.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/wise.com",
          "favicon": "https://api.iowen.cn/favicon/wise.com.png",
          "google": "https://www.google.com/s2/favicons?domain=wise.com&sz=128"
        },
        "title": "Wise",
        "desc": "个人账户可用,汇率优惠,适合跨境转账",
        "link": "https://wise.com/",
        "domain": "wise.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/fastspring.com",
          "favicon": "https://api.iowen.cn/favicon/fastspring.com.png",
          "google": "https://www.google.com/s2/favicons?domain=fastspring.com&sz=128"
        },
        "title": "FastSpring",
        "desc": "需要企业资质,提供全方位电商解决方案",
        "link": "https://fastspring.com/",
        "domain": "fastspring.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/ko-fi.com",
          "favicon": "https://api.iowen.cn/favicon/ko-fi.com.png",
          "google": "https://www.google.com/s2/favicons?domain=ko-fi.com&sz=128"
        },
        "title": "Ko-fi",
        "desc": "一个让创作者可以从粉丝那里获得打赏 💰、会员订阅 📚、商品销售 🛒 等收入的平台",
        "link": "https://ko-fi.com/",
        "domain": "ko-fi.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/bewildcard.com",
          "favicon": "https://api.iowen.cn/favicon/bewildcard.com.png",
          "google": "https://www.google.com/s2/favicons?domain=bewildcard.com&sz=128"
        },
        "title": "WildCard",
        "desc": "国内首选，86 手机号注册，一个可以开通虚拟卡服务的第三方",
        "link": "https://bewildcard.com/i/DOMR3S7H",
        "domain": "bewildcard.com"
      }
    ]
  },
  {
    "title": "邮件服务",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "Nodemailer",
        "desc": "Node.js 的邮件发送库",
        "link": "https://github.com/nodemailer/nodemailer",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/resend.com",
          "favicon": "https://api.iowen.cn/favicon/resend.com.png",
          "google": "https://www.google.com/s2/favicons?domain=resend.com&sz=128"
        },
        "title": "Resend",
        "desc": "[React Mail](https://react.email/)",
        "link": "https://resend.com/",
        "domain": "resend.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "postmark templates",
        "desc": "电子邮件模板编辑工具",
        "link": "https://github.com/activecampaign/postmark-templates",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/linshiyouxiang.net",
          "favicon": "https://api.iowen.cn/favicon/linshiyouxiang.net.png",
          "google": "https://www.google.com/s2/favicons?domain=linshiyouxiang.net&sz=128"
        },
        "title": "临时邮箱",
        "desc": "[临时 Gmail 邮箱](https://22.do/)",
        "link": "https://www.linshiyouxiang.net/",
        "domain": "linshiyouxiang.net"
      }
    ]
  },
  {
    "title": "网站分析",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/microsoft.com",
          "favicon": "https://api.iowen.cn/favicon/microsoft.com.png",
          "google": "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128"
        },
        "title": "Clarity",
        "desc": "微软出品的分析工具",
        "link": "https://clarity.microsoft.com/",
        "domain": "microsoft.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/umami.is",
          "favicon": "https://api.iowen.cn/favicon/umami.is.png",
          "google": "https://www.google.com/s2/favicons?domain=umami.is&sz=128"
        },
        "title": "Umami",
        "desc": "开源可自部署",
        "link": "https://umami.is/",
        "domain": "umami.is"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/google.com",
          "favicon": "https://api.iowen.cn/favicon/google.com.png",
          "google": "https://www.google.com/s2/favicons?domain=google.com&sz=128"
        },
        "title": "Google Analytics",
        "desc": "谷歌提供的",
        "link": "https://analytics.google.com/analytics/web/#/p384838690/reports/intelligenthome",
        "domain": "google.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/plausible.io",
          "favicon": "https://api.iowen.cn/favicon/plausible.io.png",
          "google": "https://www.google.com/s2/favicons?domain=plausible.io&sz=128"
        },
        "title": "Plausible",
        "desc": "直观，轻量，开源",
        "link": "https://plausible.io/",
        "domain": "plausible.io"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/openpanel.dev",
          "favicon": "https://api.iowen.cn/favicon/openpanel.dev.png",
          "google": "https://www.google.com/s2/favicons?domain=openpanel.dev&sz=128"
        },
        "title": "openpanel",
        "desc": "缝合了 Mixpanel 和 Plausible 优点,访问分析+实时数据+可视化统计+用户行为洞察",
        "link": "https://openpanel.dev/",
        "domain": "openpanel.dev"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/wappalyzer.com",
          "favicon": "https://api.iowen.cn/favicon/wappalyzer.com.png",
          "google": "https://www.google.com/s2/favicons?domain=wappalyzer.com&sz=128"
        },
        "title": "wappalyzer",
        "desc": "Wappalyzer 是一个网站技术分析工具，可以识别网站使用的技术栈，包括 CMS、电子商务平台、支付处理器等",
        "link": "https://www.wappalyzer.com/",
        "domain": "wappalyzer.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "netdata",
        "desc": "实时监控服务器、容器和应用程序",
        "link": "https://github.com/netdata/netdata",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/ahrefs.com",
          "favicon": "https://api.iowen.cn/favicon/ahrefs.com.png",
          "google": "https://www.google.com/s2/favicons?domain=ahrefs.com&sz=128"
        },
        "title": "ahrefs",
        "desc": "用于查询关键词难度、查看反链统计",
        "link": "https://ahrefs.com/",
        "domain": "ahrefs.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/google.com",
          "favicon": "https://api.iowen.cn/favicon/google.com.png",
          "google": "https://www.google.com/s2/favicons?domain=google.com&sz=128"
        },
        "title": "Google Search Console",
        "desc": "Google Search Console 是一个强大的免费工具，帮助站长优化网站在 Google 搜索中的表现",
        "link": "https://search.google.com/search-console/about",
        "domain": "google.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/microsoft.com",
          "favicon": "https://api.iowen.cn/favicon/microsoft.com.png",
          "google": "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128"
        },
        "title": "Microsoft Clarity",
        "desc": "一款优秀的网站用户体验分析工具、流量分析工具",
        "link": "https://clarity.microsoft.com/",
        "domain": "microsoft.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/aitdk.com",
          "favicon": "https://api.iowen.cn/favicon/aitdk.com.png",
          "google": "https://www.google.com/s2/favicons?domain=aitdk.com&sz=128"
        },
        "title": "AITDK SEO Extension",
        "desc": "一款多功能浏览器扩展，旨在提供全面的网站分析",
        "link": "https://aitdk.com/zh/extension",
        "domain": "aitdk.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/googleadsensealternatives.com",
          "favicon": "https://api.iowen.cn/favicon/googleadsensealternatives.com.png",
          "google": "https://www.google.com/s2/favicons?domain=googleadsensealternatives.com&sz=128"
        },
        "title": "Google AdSense 替代品，并且展示了替代平台的发布商数量、广告主数量和月访问量等",
        "desc": "Google AdSense 替代品，并且展示了替代平台的发布商数量、广告主数量和月访问量等",
        "link": "https://googleadsensealternatives.com/",
        "domain": "googleadsensealternatives.com"
      }
    ]
  },
  {
    "title": "在线客服和反馈服务",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/qq.com",
          "favicon": "https://api.iowen.cn/favicon/qq.com.png",
          "google": "https://www.google.com/s2/favicons?domain=qq.com&sz=128"
        },
        "title": "腾讯兔小巢",
        "desc": "国内产品反馈平台",
        "link": "https://txc.qq.com/",
        "domain": "qq.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/tawk.to",
          "favicon": "https://api.iowen.cn/favicon/tawk.to.png",
          "google": "https://www.google.com/s2/favicons?domain=tawk.to&sz=128"
        },
        "title": "Tawk",
        "desc": "在线客服",
        "link": "https://tawk.to/",
        "domain": "tawk.to"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/insigh.to",
          "favicon": "https://api.iowen.cn/favicon/insigh.to.png",
          "google": "https://www.google.com/s2/favicons?domain=insigh.to&sz=128"
        },
        "title": "公共用户反馈跟踪器",
        "desc": "公共用户反馈跟踪器",
        "link": "https://insigh.to/",
        "domain": "insigh.to"
      }
    ]
  },
  {
    "title": "部署与托管",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/vercel.com",
          "favicon": "https://api.iowen.cn/favicon/vercel.com.png",
          "google": "https://www.google.com/s2/favicons?domain=vercel.com&sz=128"
        },
        "title": "Vercel",
        "desc": "首选，国内大部分访问不了",
        "link": "https://vercel.com/dashboard",
        "domain": "vercel.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/aliyun.com",
          "favicon": "https://api.iowen.cn/favicon/aliyun.com.png",
          "google": "https://www.google.com/s2/favicons?domain=aliyun.com&sz=128"
        },
        "title": "阿里云",
        "desc": "国内云",
        "link": "https://www.aliyun.com/minisite/goods",
        "domain": "aliyun.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/qcloud.com",
          "favicon": "https://api.iowen.cn/favicon/qcloud.com.png",
          "google": "https://www.google.com/s2/favicons?domain=qcloud.com&sz=128"
        },
        "title": "腾讯云",
        "desc": "国内云，经常有优惠",
        "link": "https://curl.qcloud.com/lsJFImqi",
        "domain": "qcloud.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "Github Pages",
        "desc": "免费",
        "link": "https://pages.github.com/",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/cloudflare.com",
          "favicon": "https://api.iowen.cn/favicon/cloudflare.com.png",
          "google": "https://www.google.com/s2/favicons?domain=cloudflare.com&sz=128"
        },
        "title": "Cloudflare Pages",
        "desc": "[AirCode](https://aircode.io/) - 字节出品",
        "link": "https://developers.cloudflare.com/pages/",
        "domain": "cloudflare.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/netlify.com",
          "favicon": "https://api.iowen.cn/favicon/netlify.com.png",
          "google": "https://www.google.com/s2/favicons?domain=netlify.com&sz=128"
        },
        "title": "Netlify",
        "desc": "[Zeabur](https://zeabur.com/) - 一个提供一键部署、无限扩展的云平台",
        "link": "https://www.netlify.com/",
        "domain": "netlify.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "inngest",
        "desc": "Inngest 是一个开发者平台，将事件流、队列和持久执行结合在一起，形成一个单一的可靠性层。",
        "link": "https://github.com/inngest/inngest",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "Sink",
        "desc": "一个简单/快速/安全的链接缩短器，带有分析功能，100% 运行在 Cloudflare 上。",
        "link": "https://github.com/ccbikai/Sink",
        "domain": "github.com"
      }
    ]
  },
  {
    "title": "网站管理",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/chinaz.com",
          "favicon": "https://api.iowen.cn/favicon/chinaz.com.png",
          "google": "https://www.google.com/s2/favicons?domain=chinaz.com&sz=128"
        },
        "title": "speedtest",
        "desc": "(免费) 网站速度测试, 支持：Ping 测试，国内、国外测速，网站速度查询，DNS 查询，DNS 污染检测",
        "link": "https://tool.chinaz.com/speedtest",
        "domain": "chinaz.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/17ce.com",
          "favicon": "https://api.iowen.cn/favicon/17ce.com.png",
          "google": "https://www.google.com/s2/favicons?domain=17ce.com&sz=128"
        },
        "title": "17ce",
        "desc": "(免费) 网站速度测试",
        "link": "https://www.17ce.com/",
        "domain": "17ce.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/webpagetest.org",
          "favicon": "https://api.iowen.cn/favicon/webpagetest.org.png",
          "google": "https://www.google.com/s2/favicons?domain=webpagetest.org&sz=128"
        },
        "title": "webpagetest",
        "desc": "(免费) 网站速度测试",
        "link": "https://www.webpagetest.org/",
        "domain": "webpagetest.org"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/twitter.com",
          "favicon": "https://api.iowen.cn/favicon/twitter.com.png",
          "google": "https://www.google.com/s2/favicons?domain=twitter.com&sz=128"
        },
        "title": "gtmetrix",
        "desc": "(免费) 网站速度测试",
        "link": "https://gtmetrix.com/",
        "domain": "twitter.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/sentry.io",
          "favicon": "https://api.iowen.cn/favicon/sentry.io.png",
          "google": "https://www.google.com/s2/favicons?domain=sentry.io&sz=128"
        },
        "title": "Sentry",
        "desc": "免费额度应该是够用的，同样也有开源 版本。",
        "link": "https://sentry.io/welcome/",
        "domain": "sentry.io"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/locust.io",
          "favicon": "https://api.iowen.cn/favicon/locust.io.png",
          "google": "https://www.google.com/s2/favicons?domain=locust.io&sz=128"
        },
        "title": "Locust",
        "desc": "一个开源的负载测试工具。",
        "link": "https://locust.io/",
        "domain": "locust.io"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/chinaz.com",
          "favicon": "https://api.iowen.cn/favicon/chinaz.com.png",
          "google": "https://www.google.com/s2/favicons?domain=chinaz.com&sz=128"
        },
        "title": "chinaz",
        "desc": "多种集合站长工具",
        "link": "https://tool.chinaz.com/",
        "domain": "chinaz.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/ohttps.com?invitationCode=17xk289exdm09d43",
          "favicon": "https://api.iowen.cn/favicon/ohttps.com?invitationCode=17xk289exdm09d43.png",
          "google": "https://www.google.com/s2/favicons?domain=ohttps.com?invitationCode=17xk289exdm09d43&sz=128"
        },
        "title": "OHTTPS",
        "desc": "免费 HTTPS 证书、自动更新、自动部署",
        "link": "https://www.ohttps.com?invitationCode=17xk289exdm09d43",
        "domain": "ohttps.com?invitationCode=17xk289exdm09d43"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "acme.sh",
        "desc": "免费 SSL 证书一键生成",
        "link": "https://github.com/acmesh-official/acme.sh",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/1txm.com",
          "favicon": "https://api.iowen.cn/favicon/1txm.com.png",
          "google": "https://www.google.com/s2/favicons?domain=1txm.com&sz=128"
        },
        "title": "易条形",
        "desc": "一款专业的在线条形码生成工具",
        "link": "https://www.1txm.com/",
        "domain": "1txm.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/similarsites.com",
          "favicon": "https://api.iowen.cn/favicon/similarsites.com.png",
          "google": "https://www.google.com/s2/favicons?domain=similarsites.com&sz=128"
        },
        "title": "SimilarGroup",
        "desc": "输入网站地址搜索相似网站",
        "link": "https://www.similarsites.com/",
        "domain": "similarsites.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/hackreels.com",
          "favicon": "https://api.iowen.cn/favicon/hackreels.com.png",
          "google": "https://www.google.com/s2/favicons?domain=hackreels.com&sz=128"
        },
        "title": "Hackreels",
        "desc": "让你的代码动起来",
        "link": "https://www.hackreels.com/",
        "domain": "hackreels.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/osfipin.com",
          "favicon": "https://api.iowen.cn/favicon/osfipin.com.png",
          "google": "https://www.google.com/s2/favicons?domain=osfipin.com&sz=128"
        },
        "title": "SSL 证书免费申请",
        "desc": "[Certimate](https://github.com/usual2970/certimate) - 一款开源的 SSL 证书管理工具, 支持自动申请、部署 SSL 证书，并在证书过期前自动续期",
        "link": "https://letsencrypt.osfipin.com/jump/share?code=DX09YW76",
        "domain": "osfipin.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/zhale.me",
          "favicon": "https://api.iowen.cn/favicon/zhale.me.png",
          "google": "https://www.google.com/s2/favicons?domain=zhale.me&sz=128"
        },
        "title": "炸了么",
        "desc": "一款为运维人员和站长提供的在线网络拨测工具，拥有全球 1000 多个节点，模拟用户访问域名/IP，免费提供网站速度测试、网络速度检测、多地区在线 ping 测试、dns 查询、路由跟踪查询、ipv6 网站测试等站长工具",
        "link": "https://zhale.me/",
        "domain": "zhale.me"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/aizrf.com",
          "favicon": "https://api.iowen.cn/favicon/aizrf.com.png",
          "google": "https://www.google.com/s2/favicons?domain=aizrf.com&sz=128"
        },
        "title": "使用 Cloudflare Pages 部署 UptimeRobot API 在线状态面板：`教程`",
        "desc": "[使用 Cloudflare Pages 部署 UptimeRobot API 在线状态面板：`项目`](https://github.com/shaoyouvip/uptime)",
        "link": "https://blog.aizrf.com/p/62",
        "domain": "aizrf.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/igeekbb.com",
          "favicon": "https://api.iowen.cn/favicon/igeekbb.com.png",
          "google": "https://www.google.com/s2/favicons?domain=igeekbb.com&sz=128"
        },
        "title": "利用 CNAME 域名提高网站访问速度",
        "desc": "利用 CNAME 域名提高网站访问速度",
        "link": "https://www.igeekbb.com/2024/09/26/cloudflare-saas/",
        "domain": "igeekbb.com"
      }
    ]
  },
  {
    "title": "域名注册",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/aliyun.com",
          "favicon": "https://api.iowen.cn/favicon/aliyun.com.png",
          "google": "https://www.google.com/s2/favicons?domain=aliyun.com&sz=128"
        },
        "title": "阿里云",
        "desc": "[Cloudflare](https://cloudflare.com)",
        "link": "https://wanwang.aliyun.com/domain",
        "domain": "aliyun.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/namesilo.com",
          "favicon": "https://api.iowen.cn/favicon/namesilo.com.png",
          "google": "https://www.google.com/s2/favicons?domain=namesilo.com&sz=128"
        },
        "title": "Namesilo",
        "desc": "自动屏蔽 whois",
        "link": "https://www.namesilo.com",
        "domain": "namesilo.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/tld-list.com",
          "favicon": "https://api.iowen.cn/favicon/tld-list.com.png",
          "google": "https://www.google.com/s2/favicons?domain=tld-list.com&sz=128"
        },
        "title": "tld-list",
        "desc": "域名购买比价网，比较 54 个注册商的每个域名后缀的价格",
        "link": "https://tld-list.com/",
        "domain": "tld-list.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/dynadot.com",
          "favicon": "https://api.iowen.cn/favicon/dynadot.com.png",
          "google": "https://www.google.com/s2/favicons?domain=dynadot.com&sz=128"
        },
        "title": "Dynadot",
        "desc": "提供了域名注册和管理、以及邮箱的一站式解决方案",
        "link": "https://www.dynadot.com/",
        "domain": "dynadot.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/godaddy.com",
          "favicon": "https://api.iowen.cn/favicon/godaddy.com.png",
          "google": "https://www.google.com/s2/favicons?domain=godaddy.com&sz=128"
        },
        "title": "Godaddy",
        "desc": "狗爹，懂的都懂",
        "link": "https://www.godaddy.com/zh-sg",
        "domain": "godaddy.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/volcengine.com",
          "favicon": "https://api.iowen.cn/favicon/volcengine.com.png",
          "google": "https://www.google.com/s2/favicons?domain=volcengine.com&sz=128"
        },
        "title": "字节火山引擎",
        "desc": "国内平台，cn 域名首选平台",
        "link": "https://www.volcengine.com/product/domain-service",
        "domain": "volcengine.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/tencent.com",
          "favicon": "https://api.iowen.cn/favicon/tencent.com.png",
          "google": "https://www.google.com/s2/favicons?domain=tencent.com&sz=128"
        },
        "title": "腾讯云",
        "desc": "国内平台，cn 域名首选平台",
        "link": "https://cloud.tencent.com/act/pro/domain-sale",
        "domain": "tencent.com"
      }
    ]
  },
  {
    "title": "文档管理",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/vuejs.org",
          "favicon": "https://api.iowen.cn/favicon/vuejs.org.png",
          "google": "https://www.google.com/s2/favicons?domain=vuejs.org&sz=128"
        },
        "title": "VitePress",
        "desc": "基于 Vite & Vue 驱动的静态站点生成器",
        "link": "https://vitepress.vuejs.org",
        "domain": "vuejs.org"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/notion.so",
          "favicon": "https://api.iowen.cn/favicon/notion.so.png",
          "google": "https://www.google.com/s2/favicons?domain=notion.so&sz=128"
        },
        "title": "Notion",
        "desc": "[Astro Starlight](https://starlight.astro.build/) - Astro 框架的文档主题站点",
        "link": "https://notion.so",
        "domain": "notion.so"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/mintlify.com",
          "favicon": "https://api.iowen.cn/favicon/mintlify.com.png",
          "google": "https://www.google.com/s2/favicons?domain=mintlify.com&sz=128"
        },
        "title": "mintlify",
        "desc": "轻松获取产品文档",
        "link": "https://mintlify.com/",
        "domain": "mintlify.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "Docusaurus",
        "desc": "易于维护的开源文档网站",
        "link": "https://github.com/facebook/docusaurus",
        "domain": "github.com"
      }
    ]
  },
  {
    "title": "协议生成",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/freeprivacypolicy.com",
          "favicon": "https://api.iowen.cn/favicon/freeprivacypolicy.com.png",
          "google": "https://www.google.com/s2/favicons?domain=freeprivacypolicy.com&sz=128"
        },
        "title": "freeprivacypolicy",
        "desc": "一个在线隐私政策生成器，提供免费、轻松且符合各类隐私法规(CPRA, CCPA, GDPR 等)的模板",
        "link": "https://app.freeprivacypolicy.com/",
        "domain": "freeprivacypolicy.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/shopify.com",
          "favicon": "https://api.iowen.cn/favicon/shopify.com.png",
          "google": "https://www.google.com/s2/favicons?domain=shopify.com&sz=128"
        },
        "title": "shopify policy generator",
        "desc": "提供了网站隐私政策模板",
        "link": "https://www.shopify.com/zh/tools/policy-generator",
        "domain": "shopify.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/1ts.fun",
          "favicon": "https://api.iowen.cn/favicon/1ts.fun.png",
          "google": "https://www.google.com/s2/favicons?domain=1ts.fun&sz=128"
        },
        "title": "privacy 1ts fun",
        "desc": "App / 网站所需隐私政策免费生成, 可以导出 txt 或 html 格式",
        "link": "https://privacy.1ts.fun/",
        "domain": "1ts.fun"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/termsfeed.com",
          "favicon": "https://api.iowen.cn/favicon/termsfeed.com.png",
          "google": "https://www.google.com/s2/favicons?domain=termsfeed.com&sz=128"
        },
        "title": "TermsFeed",
        "desc": "隐私协议（Privacy Policy）和使用协议（Terms and Conditions）自动生成工具",
        "link": "https://www.termsfeed.com/",
        "domain": "termsfeed.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/termly.io",
          "favicon": "https://api.iowen.cn/favicon/termly.io.png",
          "google": "https://www.google.com/s2/favicons?domain=termly.io&sz=128"
        },
        "title": "Termly",
        "desc": "隐私协议（Privacy Policy）和使用协议（Terms and Conditions）自动生成工具",
        "link": "https://termly.io/products/privacy-policy-generator/",
        "domain": "termly.io"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/toolsnav.top",
          "favicon": "https://api.iowen.cn/favicon/toolsnav.top.png",
          "google": "https://www.google.com/s2/favicons?domain=toolsnav.top&sz=128"
        },
        "title": "开源许可证选择器",
        "desc": "开源许可证选择器",
        "link": "https://open-source-license-chooser.toolsnav.top/zh/",
        "domain": "toolsnav.top"
      }
    ]
  },
  {
    "title": "图标资源",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/iconify.design",
          "favicon": "https://api.iowen.cn/favicon/iconify.design.png",
          "google": "https://www.google.com/s2/favicons?domain=iconify.design&sz=128"
        },
        "title": "iconify",
        "desc": "[fontawesome](https://fontawesome.com/icons)",
        "link": "https://iconify.design/",
        "domain": "iconify.design"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/svgl.app",
          "favicon": "https://api.iowen.cn/favicon/svgl.app.png",
          "google": "https://www.google.com/s2/favicons?domain=svgl.app&sz=128"
        },
        "title": "svgl",
        "desc": "提供丰富的 Logo 的 SVG 图标库、一键搜索下载功能，重点是支持直接复制为代码",
        "link": "https://svgl.app/",
        "domain": "svgl.app"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/aspose.app",
          "favicon": "https://api.iowen.cn/favicon/aspose.app.png",
          "google": "https://www.google.com/s2/favicons?domain=aspose.app&sz=128"
        },
        "title": "aspose-png-to-svg",
        "desc": "PNG 转 SVG 工具支持批量上传",
        "link": "https://products.aspose.app/pdf/zh/conversion/png-to-svg",
        "domain": "aspose.app"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/fontawesome.com",
          "favicon": "https://api.iowen.cn/favicon/fontawesome.com.png",
          "google": "https://www.google.com/s2/favicons?domain=fontawesome.com&sz=128"
        },
        "title": "fontawesome",
        "desc": "提供超过 30,013 个可用于各种项目的图标",
        "link": "https://fontawesome.com/icons",
        "domain": "fontawesome.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/mingcute.com",
          "favicon": "https://api.iowen.cn/favicon/mingcute.com.png",
          "google": "https://www.google.com/s2/favicons?domain=mingcute.com&sz=128"
        },
        "title": "MingCute",
        "desc": "一个为设计师和开发者准备的简洁而精致的开源图标库，非常适合在网页和移动设备上使用",
        "link": "https://www.mingcute.com/",
        "domain": "mingcute.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/iconbuddy.com",
          "favicon": "https://api.iowen.cn/favicon/iconbuddy.com.png",
          "google": "https://www.google.com/s2/favicons?domain=iconbuddy.com&sz=128"
        },
        "title": "iconbuddy",
        "desc": "一个提供超过 200,000 个开源 SVG 图标的搜索引擎，允许你免费搜索、下载、自定义和编辑图标",
        "link": "https://iconbuddy.com/",
        "domain": "iconbuddy.com"
      }
    ]
  },
  {
    "title": "字体资源",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/wangchujiang.com",
          "favicon": "https://api.iowen.cn/favicon/wangchujiang.com.png",
          "google": "https://www.google.com/s2/favicons?domain=wangchujiang.com&sz=128"
        },
        "title": "免费【中文】字体",
        "desc": "免费可商用【中文】字体",
        "link": "https://wangchujiang.com/free-font/",
        "domain": "wangchujiang.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/freefaces.gallery",
          "favicon": "https://api.iowen.cn/favicon/freefaces.gallery.png",
          "google": "https://www.google.com/s2/favicons?domain=freefaces.gallery&sz=128"
        },
        "title": "免费【英文】字体",
        "desc": "免费可商用【英文】字体",
        "link": "https://www.freefaces.gallery/",
        "domain": "freefaces.gallery"
      }
    ]
  },
  {
    "title": "图片视频素材",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/vectorcraftr.com",
          "favicon": "https://api.iowen.cn/favicon/vectorcraftr.com.png",
          "google": "https://www.google.com/s2/favicons?domain=vectorcraftr.com&sz=128"
        },
        "title": "vectorCraftr",
        "desc": "大量免费的插图素材",
        "link": "https://vectorcraftr.com/?utm_source=gapis.money",
        "domain": "vectorcraftr.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/pexels.com",
          "favicon": "https://api.iowen.cn/favicon/pexels.com.png",
          "google": "https://www.google.com/s2/favicons?domain=pexels.com&sz=128"
        },
        "title": "pexels",
        "desc": "免费素材高清图片",
        "link": "https://www.pexels.com/zh-cn/",
        "domain": "pexels.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/vectorizer.com",
          "favicon": "https://api.iowen.cn/favicon/vectorizer.com.png",
          "google": "https://www.google.com/s2/favicons?domain=vectorizer.com&sz=128"
        },
        "title": "vectorizer",
        "desc": "图片矢量化",
        "link": "https://vectorizer.com/zh/",
        "domain": "vectorizer.com"
      }
    ]
  },
  {
    "title": "图片视频处理工具",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/tinypng.com",
          "favicon": "https://api.iowen.cn/favicon/tinypng.com.png",
          "google": "https://www.google.com/s2/favicons?domain=tinypng.com&sz=128"
        },
        "title": "Tinypng",
        "desc": "图片压缩工具",
        "link": "https://tinypng.com/",
        "domain": "tinypng.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/tiny-img.com",
          "favicon": "https://api.iowen.cn/favicon/tiny-img.com.png",
          "google": "https://www.google.com/s2/favicons?domain=tiny-img.com&sz=128"
        },
        "title": "tiny-img",
        "desc": "PNG、JPG 格式压缩并转换为 WEBP",
        "link": "https://tiny-img.com/webp/",
        "domain": "tiny-img.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/removebg.one",
          "favicon": "https://api.iowen.cn/favicon/removebg.one.png",
          "google": "https://www.google.com/s2/favicons?domain=removebg.one&sz=128"
        },
        "title": "在线 AI 抠图工具",
        "desc": "[Upscayl Upscayl](https://github.com/upscayl/upscayl) - 免费开源 AI 图像放大器",
        "link": "https://removebg.one/",
        "domain": "removebg.one"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/ezgif.com",
          "favicon": "https://api.iowen.cn/favicon/ezgif.com.png",
          "google": "https://www.google.com/s2/favicons?domain=ezgif.com&sz=128"
        },
        "title": "video 转 gif",
        "desc": "[MediaGo](https://github.com/caorushizi/mediago) - m3u8 视频在线提取工具",
        "link": "https://ezgif.com/video-to-gif",
        "domain": "ezgif.com"
      }
    ]
  },
  {
    "title": "屏幕录制",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/obsproject.com",
          "favicon": "https://api.iowen.cn/favicon/obsproject.com.png",
          "google": "https://www.google.com/s2/favicons?domain=obsproject.com&sz=128"
        },
        "title": "OBS Studio",
        "desc": "开源工具，跨平台：windows、mac、linux",
        "link": "https://obsproject.com/",
        "domain": "obsproject.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "QuickRecorder",
        "desc": "多功能、轻量化、高性能的开源 macOS 屏幕录制工具",
        "link": "https://github.com/lihaoyun6/QuickRecorder",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "screenity",
        "desc": "一款开源的屏幕录制和标注工具，提供隐私保护且无任何使用限制",
        "link": "https://github.com/alyssaxuu/screenity",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/gemoo.com",
          "favicon": "https://api.iowen.cn/favicon/gemoo.com.png",
          "google": "https://www.google.com/s2/favicons?domain=gemoo.com&sz=128"
        },
        "title": "focusee",
        "desc": "一个一站式平台，简化了视频的创建、编辑和分享流程，让每个人都能在几分钟内制作视频并传播自己的创意",
        "link": "https://gemoo.com/focusee/",
        "domain": "gemoo.com"
      }
    ]
  },
  {
    "title": "短链或长链",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/bnyer.cn",
          "favicon": "https://api.iowen.cn/favicon/bnyer.cn.png",
          "google": "https://www.google.com/s2/favicons?domain=bnyer.cn&sz=128"
        },
        "title": "links",
        "desc": "短链接生成器",
        "link": "https://link.bnyer.cn/",
        "domain": "bnyer.cn"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/soo.run",
          "favicon": "https://api.iowen.cn/favicon/soo.run.png",
          "google": "https://www.google.com/s2/favicons?domain=soo.run&sz=128"
        },
        "title": "soo",
        "desc": "短网址，短链接工具",
        "link": "https://soo.run/",
        "domain": "soo.run"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/biubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiu.com",
          "favicon": "https://api.iowen.cn/favicon/biubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiu.com.png",
          "google": "https://www.google.com/s2/favicons?domain=biubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiu.com&sz=128"
        },
        "title": "长链接生成器",
        "desc": "长链接生成器",
        "link": "https://biubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiu.com/index-real.html",
        "domain": "biubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiu.com"
      }
    ]
  },
  {
    "title": "信息渠道",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/gapis.money",
          "favicon": "https://api.iowen.cn/favicon/gapis.money.png",
          "google": "https://www.google.com/s2/favicons?domain=gapis.money&sz=128"
        },
        "title": "信息差",
        "desc": "经常更新的独立开发者出海周刊",
        "link": "https://gapis.money/",
        "domain": "gapis.money"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/producthunt.com",
          "favicon": "https://api.iowen.cn/favicon/producthunt.com.png",
          "google": "https://www.google.com/s2/favicons?domain=producthunt.com&sz=128"
        },
        "title": "Product Hunt",
        "desc": "新产品榜单聚集地",
        "link": "https://www.producthunt.com/",
        "domain": "producthunt.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/w2solo.com",
          "favicon": "https://api.iowen.cn/favicon/w2solo.com.png",
          "google": "https://www.google.com/s2/favicons?domain=w2solo.com&sz=128"
        },
        "title": "W2Solo",
        "desc": "中文独立开发者社区",
        "link": "https://w2solo.com/",
        "domain": "w2solo.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/chuhaituan.com",
          "favicon": "https://api.iowen.cn/favicon/chuhaituan.com.png",
          "google": "https://www.google.com/s2/favicons?domain=chuhaituan.com&sz=128"
        },
        "title": "出海团",
        "desc": "专注于分享优秀的出海产品",
        "link": "https://chuhaituan.com/",
        "domain": "chuhaituan.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/chuhaiqu.club",
          "favicon": "https://api.iowen.cn/favicon/chuhaiqu.club.png",
          "google": "https://www.google.com/s2/favicons?domain=chuhaiqu.club&sz=128"
        },
        "title": "出海 Blog",
        "desc": "出海经验博客分享",
        "link": "https://blogs.chuhaiqu.club/",
        "domain": "chuhaiqu.club"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/1000userguide.com",
          "favicon": "https://api.iowen.cn/favicon/1000userguide.com.png",
          "google": "https://www.google.com/s2/favicons?domain=1000userguide.com&sz=128"
        },
        "title": "1000UserGuide",
        "desc": "300 多个独立开发者的免费推广渠道清单",
        "link": "https://1000userguide.com/#/",
        "domain": "1000userguide.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/visalist.io",
          "favicon": "https://api.iowen.cn/favicon/visalist.io.png",
          "google": "https://www.google.com/s2/favicons?domain=visalist.io&sz=128"
        },
        "title": "全球签证指南门户网站",
        "desc": "[出海网站经验总结](https://github.com/princehuang/overseas-website-note)",
        "link": "https://visalist.io/",
        "domain": "visalist.io"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/notion.site",
          "favicon": "https://api.iowen.cn/favicon/notion.site.png",
          "google": "https://www.google.com/s2/favicons?domain=notion.site&sz=128"
        },
        "title": "出海小炒本",
        "desc": "[Chief AI Office](https://www.chiefaioffice.xyz/) - 一个专注于跟踪 AI 初创公司融资动态的情报平台。每天为 5000+ 来自 OpenAI、a16z、Google 等顶级机构的读者提供最新 AI 融资情报，助你洞悉行业趋势,把握投资机遇",
        "link": "https://minibook.notion.site/b39d0ac975a44f3089639215d96135a0",
        "domain": "notion.site"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/toolify.ai",
          "favicon": "https://api.iowen.cn/favicon/toolify.ai.png",
          "google": "https://www.google.com/s2/favicons?domain=toolify.ai&sz=128"
        },
        "title": "Toolify.ai",
        "desc": "轻松发现和了解当下最火热的 AI 应用和服务，帮助你把握 AI 发展趋势，发现潜在的商机",
        "link": "https://www.toolify.ai/",
        "domain": "toolify.ai"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "中国独立开发者项目列表",
        "desc": "中国独立开发者项目列表",
        "link": "https://github.com/1c7/chinese-independent-developer",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/github.com",
          "favicon": "https://api.iowen.cn/favicon/github.com.png",
          "google": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        "title": "中国独立开发者项目列表-程序员版",
        "desc": "中国独立开发者项目列表",
        "link": "https://github.com/1c7/chinese-independent-developer/blob/master/README-Programmer-Edition.md",
        "domain": "github.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/semrush.com",
          "favicon": "https://api.iowen.cn/favicon/semrush.com.png",
          "google": "https://www.google.com/s2/favicons?domain=semrush.com&sz=128"
        },
        "title": "Semrush",
        "desc": "一款功能强大的关键词研究工具",
        "link": "https://www.semrush.com/",
        "domain": "semrush.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/trendingkeywords.net",
          "favicon": "https://api.iowen.cn/favicon/trendingkeywords.net.png",
          "google": "https://www.google.com/s2/favicons?domain=trendingkeywords.net&sz=128"
        },
        "title": "TrendingKeywords",
        "desc": "一个强大的关键词趋势分析工具，用于发现即将爆发的热门关键词",
        "link": "https://trendingkeywords.net/",
        "domain": "trendingkeywords.net"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/youtube.com",
          "favicon": "https://api.iowen.cn/favicon/youtube.com.png",
          "google": "https://www.google.com/s2/favicons?domain=youtube.com&sz=128"
        },
        "title": "Cursor 实战",
        "desc": "一个带着你用 Cursor 从零开始做项目的 Youtube 频道",
        "link": "https://www.youtube.com/@realmckaywrigley/videos",
        "domain": "youtube.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/youtube.com",
          "favicon": "https://api.iowen.cn/favicon/youtube.com.png",
          "google": "https://www.google.com/s2/favicons?domain=youtube.com&sz=128"
        },
        "title": "独立开发者之王”Pieter Levels 的整个研发历程",
        "desc": "[72 个全球顶级 AI 信源](https://tidyread.ai/recommended-recipes/ai-reading-list-pro-cn) - 一键订阅 72 个全球顶级 AI 信源，每日自动生成翻译、摘要后的简报推送给你",
        "link": "https://www.youtube.com/watch?v=oFtjKbXKqbg",
        "domain": "youtube.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/chuhaiqu.club",
          "favicon": "https://api.iowen.cn/favicon/chuhaiqu.club.png",
          "google": "https://www.google.com/s2/favicons?domain=chuhaiqu.club&sz=128"
        },
        "title": "chuhaiqu",
        "desc": "出海注册公司、银行开户情况汇总表",
        "link": "https://blogs.chuhaiqu.club/account-open-stats/",
        "domain": "chuhaiqu.club"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/gumroad.com",
          "favicon": "https://api.iowen.cn/favicon/gumroad.com.png",
          "google": "https://www.google.com/s2/favicons?domain=gumroad.com&sz=128"
        },
        "title": "Gumroad",
        "desc": "用于挖掘灵感，了解市场趋势和顾客需求，成为创作和产品开发的重要参考",
        "link": "https://gumroad.com/",
        "domain": "gumroad.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/anotherkeywordtool.com",
          "favicon": "https://api.iowen.cn/favicon/anotherkeywordtool.com.png",
          "google": "https://www.google.com/s2/favicons?domain=anotherkeywordtool.com&sz=128"
        },
        "title": "免费关键字工具网站",
        "desc": "[海外虚拟信用卡开卡平台推荐 Top10 虚拟数字银行卡汇总](https://topstip.com/best-virtual-credit-card/)",
        "link": "https://www.anotherkeywordtool.com/",
        "domain": "anotherkeywordtool.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/twitter.com",
          "favicon": "https://api.iowen.cn/favicon/twitter.com.png",
          "google": "https://www.google.com/s2/favicons?domain=twitter.com&sz=128"
        },
        "title": "如何认真做营销？",
        "desc": "[20 个经过验证的微型 SaaS 创意](https://x.com/chuhaiqu/status/1839114602849906815)",
        "link": "https://x.com/desmondhth/status/1824450807162700262",
        "domain": "twitter.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/okjike.com",
          "favicon": "https://api.iowen.cn/favicon/okjike.com.png",
          "google": "https://www.google.com/s2/favicons?domain=okjike.com&sz=128"
        },
        "title": "踩了 stripe 有一个坑",
        "desc": "[一行代码降低 Vercel 40 倍成本](https://www.memfree.me/zh/blog/reduce-vercel-costs)",
        "link": "https://m.okjike.com/originalPosts/67172b0d32f03efa77c74ccb",
        "domain": "okjike.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/okjike.com",
          "favicon": "https://api.iowen.cn/favicon/okjike.com.png",
          "google": "https://www.google.com/s2/favicons?domain=okjike.com&sz=128"
        },
        "title": "一个获取 stripe 高权重外链（DR93）的方法",
        "desc": "[关键词分析网站](https://ahrefs.com/zh/keywords-explorer)",
        "link": "https://m.okjike.com/originalPosts/66df00babe1b0f6ab7a4f8d7",
        "domain": "okjike.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/weixin.qq.com",
          "favicon": "https://api.iowen.cn/favicon/weixin.qq.com.png",
          "google": "https://www.google.com/s2/favicons?domain=weixin.qq.com&sz=128"
        },
        "title": "我跑通了全球收付款的流程",
        "desc": "我跑通了全球收付款的流程",
        "link": "https://mp.weixin.qq.com/s/y_XRFa8pzkgV-GqttSotqw",
        "domain": "weixin.qq.com"
      }
    ]
  },
  {
    "title": "产品发布",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/poweredbyai.app",
          "favicon": "https://api.iowen.cn/favicon/poweredbyai.app.png",
          "google": "https://www.google.com/s2/favicons?domain=poweredbyai.app&sz=128"
        },
        "title": "PoweredByAI",
        "desc": "免费提交产品",
        "link": "https://poweredbyai.app/",
        "domain": "poweredbyai.app"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/pinterest.com",
          "favicon": "https://api.iowen.cn/favicon/pinterest.com.png",
          "google": "https://www.google.com/s2/favicons?domain=pinterest.com&sz=128"
        },
        "title": "Pinterest",
        "desc": "发布的视频可能会被 Google 收录且免",
        "link": "https://www.pinterest.com",
        "domain": "pinterest.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/indiehackers.com",
          "favicon": "https://api.iowen.cn/favicon/indiehackers.com.png",
          "google": "https://www.google.com/s2/favicons?domain=indiehackers.com&sz=128"
        },
        "title": "Indie Hackers",
        "desc": "一个社区平台，它连接开发者们共同分享他们的公司和副业背后的策略和收入数据",
        "link": "https://www.indiehackers.com/",
        "domain": "indiehackers.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/tweeteasy.io",
          "favicon": "https://api.iowen.cn/favicon/tweeteasy.io.png",
          "google": "https://www.google.com/s2/favicons?domain=tweeteasy.io&sz=128"
        },
        "title": "Tweeteasy",
        "desc": "一款易于使用的 Twitter AI 工具，可以让你轻松创建引人入胜的帖子、获取回复想法、添加表情符号、更改语气、修复拼写和语法以及翻译成英语",
        "link": "https://tweeteasy.io",
        "domain": "tweeteasy.io"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/shushiai.com",
          "favicon": "https://api.iowen.cn/favicon/shushiai.com.png",
          "google": "https://www.google.com/s2/favicons?domain=shushiai.com&sz=128"
        },
        "title": "流光卡片",
        "desc": "一款文字排版海报生成推广工具",
        "link": "https://fireflycard.shushiai.com/en",
        "domain": "shushiai.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/codepen.io",
          "favicon": "https://api.iowen.cn/favicon/codepen.io.png",
          "google": "https://www.google.com/s2/favicons?domain=codepen.io&sz=128"
        },
        "title": "在线英文签名",
        "desc": "[AdsDog](https://adsdog.ai/) - 通过一个 URL 就可以由 AI 生成高质量的数字人广告宣传视频",
        "link": "https://codepen.io/kiranpate1/full/ExBpaeW",
        "domain": "codepen.io"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/highpayingaffiliateprograms.com",
          "favicon": "https://api.iowen.cn/favicon/highpayingaffiliateprograms.com.png",
          "google": "https://www.google.com/s2/favicons?domain=highpayingaffiliateprograms.com&sz=128"
        },
        "title": "High Paying Affiliate Programs",
        "desc": "帮助市场人员在推广这些项目, 佣金基本上都是 30% 以上",
        "link": "https://highpayingaffiliateprograms.com/",
        "domain": "highpayingaffiliateprograms.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/weixin.qq.com",
          "favicon": "https://api.iowen.cn/favicon/weixin.qq.com.png",
          "google": "https://www.google.com/s2/favicons?domain=weixin.qq.com&sz=128"
        },
        "title": "Product Hunt 冲榜前三攻略",
        "desc": "[310 个网站小众点的网站宣传自己的产品](https://x.com/lxfater/status/1866339428773572992)",
        "link": "https://mp.weixin.qq.com/s/Nlth1disb61qyK722x5C_A",
        "domain": "weixin.qq.com"
      }
    ]
  },
  {
    "title": "Logo 设计",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/realfavicongenerator.net",
          "favicon": "https://api.iowen.cn/favicon/realfavicongenerator.net.png",
          "google": "https://www.google.com/s2/favicons?domain=realfavicongenerator.net&sz=128"
        },
        "title": "favicon generator 1",
        "desc": "生成多平台多种类 logo(ico、PNG、SVG)",
        "link": "https://realfavicongenerator.net/",
        "domain": "realfavicongenerator.net"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/websiteplanet.com",
          "favicon": "https://api.iowen.cn/favicon/websiteplanet.com.png",
          "google": "https://www.google.com/s2/favicons?domain=websiteplanet.com&sz=128"
        },
        "title": "favicon generator 2",
        "desc": "生成多平台多种类 logo(ico、PNG、SVG)",
        "link": "https://www.websiteplanet.com/webtools/favicon-generator/",
        "domain": "websiteplanet.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/bitbug.net",
          "favicon": "https://api.iowen.cn/favicon/bitbug.net.png",
          "google": "https://www.google.com/s2/favicons?domain=bitbug.net&sz=128"
        },
        "title": "bit bug",
        "desc": "PNG/JPG 转 ico",
        "link": "https://www.bitbug.net/",
        "domain": "bitbug.net"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/logo.surf",
          "favicon": "https://api.iowen.cn/favicon/logo.surf.png",
          "google": "https://www.google.com/s2/favicons?domain=logo.surf&sz=128"
        },
        "title": "Logo.surf",
        "desc": "文本 Logo 生成器",
        "link": "https://www.logo.surf/",
        "domain": "logo.surf"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/vwood.xyz",
          "favicon": "https://api.iowen.cn/favicon/vwood.xyz.png",
          "google": "https://www.google.com/s2/favicons?domain=vwood.xyz&sz=128"
        },
        "title": "favicon",
        "desc": "快速通过 URL 获取站点 Favicon 图标",
        "link": "https://favicon.vwood.xyz/",
        "domain": "vwood.xyz"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/logoai.com",
          "favicon": "https://api.iowen.cn/favicon/logoai.com.png",
          "google": "https://www.google.com/s2/favicons?domain=logoai.com&sz=128"
        },
        "title": "Logo AI",
        "desc": "一款 AI 驱动的 Logo 制作工具",
        "link": "https://www.logoai.com",
        "domain": "logoai.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/favicon.im",
          "favicon": "https://api.iowen.cn/favicon/favicon.im.png",
          "google": "https://www.google.com/s2/favicons?domain=favicon.im&sz=128"
        },
        "title": "Favicon.im",
        "desc": "一键通过 URL 获取某个网站的 icon",
        "link": "https://favicon.im/?utm_source=gapis.money",
        "domain": "favicon.im"
      }
    ]
  },
  {
    "title": "项目管理",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/trello.com",
          "favicon": "https://api.iowen.cn/favicon/trello.com.png",
          "google": "https://www.google.com/s2/favicons?domain=trello.com&sz=128"
        },
        "title": "Trello",
        "desc": "灵活的可视化项目管理工具",
        "link": "https://trello.com/",
        "domain": "trello.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/notion.so",
          "favicon": "https://api.iowen.cn/favicon/notion.so.png",
          "google": "https://www.google.com/s2/favicons?domain=notion.so&sz=128"
        },
        "title": "Notion",
        "desc": "集笔记、文档和任务管理于一体的工作空间",
        "link": "https://www.notion.so/",
        "domain": "notion.so"
      }
    ]
  },
  {
    "title": "其他工具",
    "items": [
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/mackext.com",
          "favicon": "https://api.iowen.cn/favicon/mackext.com.png",
          "google": "https://www.google.com/s2/favicons?domain=mackext.com&sz=128"
        },
        "title": "黑苹果软件园",
        "desc": "[截图工具](https://www.snipaste.com/)",
        "link": "https://mackext.com/",
        "domain": "mackext.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/pixpinapp.com",
          "favicon": "https://api.iowen.cn/favicon/pixpinapp.com.png",
          "google": "https://www.google.com/s2/favicons?domain=pixpinapp.com&sz=128"
        },
        "title": "截图工具",
        "desc": "解决了 Snipaste 长截图，gif 图问题",
        "link": "https://pixpinapp.com/",
        "domain": "pixpinapp.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/pkeytool.com",
          "favicon": "https://api.iowen.cn/favicon/pkeytool.com.png",
          "google": "https://www.google.com/s2/favicons?domain=pkeytool.com&sz=128"
        },
        "title": "PKeyToolWeb",
        "desc": "微软产品激活工具箱",
        "link": "https://pkeytool.com/ShareKeys",
        "domain": "pkeytool.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/ahhhhfs.com",
          "favicon": "https://api.iowen.cn/favicon/ahhhhfs.com.png",
          "google": "https://www.google.com/s2/favicons?domain=ahhhhfs.com&sz=128"
        },
        "title": "Window 激活",
        "desc": "Windows 激活工具大全 免费安全的 Windows 激活软件",
        "link": "https://www.ahhhhfs.com/15133/",
        "domain": "ahhhhfs.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/neatdownloadmanager.com",
          "favicon": "https://api.iowen.cn/favicon/neatdownloadmanager.com.png",
          "google": "https://www.google.com/s2/favicons?domain=neatdownloadmanager.com&sz=128"
        },
        "title": "neatdownloadmanager",
        "desc": "IDM 的替代软件",
        "link": "https://www.neatdownloadmanager.com/index.php/en/",
        "domain": "neatdownloadmanager.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/kms.cx",
          "favicon": "https://api.iowen.cn/favicon/kms.cx.png",
          "google": "https://www.google.com/s2/favicons?domain=kms.cx&sz=128"
        },
        "title": "KMS",
        "desc": "KMS 一键激活 windows/office",
        "link": "https://kms.cx/#",
        "domain": "kms.cx"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/cobalt.tools",
          "favicon": "https://api.iowen.cn/favicon/cobalt.tools.png",
          "google": "https://www.google.com/s2/favicons?domain=cobalt.tools&sz=128"
        },
        "title": "cobalt",
        "desc": "各类资源下载神器，只需一个 URL",
        "link": "https://cobalt.tools/",
        "domain": "cobalt.tools"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/tosound.com",
          "favicon": "https://api.iowen.cn/favicon/tosound.com.png",
          "google": "https://www.google.com/s2/favicons?domain=tosound.com&sz=128"
        },
        "title": "toSound",
        "desc": "免费音效素材资源下载",
        "link": "https://www.tosound.com/",
        "domain": "tosound.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/fakexy.com",
          "favicon": "https://api.iowen.cn/favicon/fakexy.com.png",
          "google": "https://www.google.com/s2/favicons?domain=fakexy.com&sz=128"
        },
        "title": "美国虚拟地址生成器",
        "desc": "[code share](https://codeshare.io/) - 实时代码共享工具",
        "link": "https://www.fakexy.com/fake-address-generator-ca",
        "domain": "fakexy.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/google.com",
          "favicon": "https://api.iowen.cn/favicon/google.com.png",
          "google": "https://www.google.com/s2/favicons?domain=google.com&sz=128"
        },
        "title": "Monica",
        "desc": "针对每个网站推荐常用的 AI 工具，一点即用",
        "link": "https://chromewebstore.google.com/detail/monica-your-ai-copilot-po/ofpnmcalabcbjgholdjcjblkibolbppb?hl=zh-CN&utm_source=ext_sidebar",
        "domain": "google.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/quicktype.io",
          "favicon": "https://api.iowen.cn/favicon/quicktype.io.png",
          "google": "https://www.google.com/s2/favicons?domain=quicktype.io&sz=128"
        },
        "title": "QuickType",
        "desc": "一键可以将一个 JSON 结构生成对应的类型",
        "link": "https://quicktype.io/",
        "domain": "quicktype.io"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/linear.app",
          "favicon": "https://api.iowen.cn/favicon/linear.app.png",
          "google": "https://www.google.com/s2/favicons?domain=linear.app&sz=128"
        },
        "title": "Linear",
        "desc": "Linear 是一个项目管理和任务跟踪软件",
        "link": "https://linear.app/",
        "domain": "linear.app"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/remotion.dev",
          "favicon": "https://api.iowen.cn/favicon/remotion.dev.png",
          "google": "https://www.google.com/s2/favicons?domain=remotion.dev&sz=128"
        },
        "title": "Remotion",
        "desc": "一个通过编码创建视频的工具",
        "link": "https://www.remotion.dev/",
        "domain": "remotion.dev"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/screenshotone.com",
          "favicon": "https://api.iowen.cn/favicon/screenshotone.com.png",
          "google": "https://www.google.com/s2/favicons?domain=screenshotone.com&sz=128"
        },
        "title": "制作一个基于 API 的工具来拍摄网站快照",
        "desc": "[Cursor V0 开发步骤](https://x.com/aiwarts/status/1839986188255670602)",
        "link": "https://screenshotone.com/",
        "domain": "screenshotone.com"
      },
      {
        "icons": {
          "clearbit": "https://logo.clearbit.com/cursor.directory",
          "favicon": "https://api.iowen.cn/favicon/cursor.directory.png",
          "google": "https://www.google.com/s2/favicons?domain=cursor.directory&sz=128"
        },
        "title": "Cursor 规则使用指南",
        "desc": "Cursor 规则使用指南",
        "link": "https://cursor.directory/",
        "domain": "cursor.directory"
      }
    ]
  }
];

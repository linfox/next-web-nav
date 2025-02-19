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
  /** 站点图标 */
  icon: string;
  /** 站点名称 */
  title: string;
  /** 站点描述 */
  desc: string;
  /** 站点链接 */
  link: string;
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
        "icon": "https://logo.clearbit.com/default.com",
        "title": "Web 开发框架或模板",
        "desc": "[Chrome 插件开发](#chrome插件开发)",
        "link": "#web开发框架或模板"
      },
      {
        "icon": "https://logo.clearbit.com/default.com",
        "title": "前端开发",
        "desc": "[后端开发](#后端开发)",
        "link": "#前端开发"
      },
      {
        "icon": "https://logo.clearbit.com/default.com",
        "title": "数据库管理",
        "desc": "[对象关系映射（ORM）](#对象关系映射)",
        "link": "#数据库管理"
      },
      {
        "icon": "https://logo.clearbit.com/default.com",
        "title": "样式与 UI 框架",
        "desc": "[原型设计](#原型设计)",
        "link": "#样式与ui框架"
      },
      {
        "icon": "https://logo.clearbit.com/default.com",
        "title": "认证与授权",
        "desc": "[支付集成](#支付集成)",
        "link": "#认证与授权"
      },
      {
        "icon": "https://logo.clearbit.com/default.com",
        "title": "邮件服务",
        "desc": "[网站分析](#网站分析)",
        "link": "#邮件服务"
      },
      {
        "icon": "https://logo.clearbit.com/default.com",
        "title": "在线客服和反馈服务",
        "desc": "[部署与托管](#部署与托管)",
        "link": "#在线客服和反馈服务"
      },
      {
        "icon": "https://logo.clearbit.com/default.com",
        "title": "网站管理",
        "desc": "[域名注册](#域名注册)",
        "link": "#网站管理"
      },
      {
        "icon": "https://logo.clearbit.com/default.com",
        "title": "文档管理",
        "desc": "[协议生成](#协议生成)",
        "link": "#文档管理"
      },
      {
        "icon": "https://logo.clearbit.com/default.com",
        "title": "图标资源",
        "desc": "[字体资源](#字体资源)",
        "link": "#图标资源"
      },
      {
        "icon": "https://logo.clearbit.com/default.com",
        "title": "图片视频素材",
        "desc": "[图片视频处理工具](#图片视频处理工具)",
        "link": "#图片视频素材"
      },
      {
        "icon": "https://logo.clearbit.com/default.com",
        "title": "屏幕录制",
        "desc": "[短链或长链](#短链或长链)",
        "link": "#屏幕录制"
      },
      {
        "icon": "https://logo.clearbit.com/default.com",
        "title": "信息渠道",
        "desc": "[产品发布](#产品发布)",
        "link": "#信息渠道"
      },
      {
        "icon": "https://logo.clearbit.com/default.com",
        "title": "Logo 设计",
        "desc": "[项目管理](#项目管理)",
        "link": "#logo设计"
      },
      {
        "icon": "https://logo.clearbit.com/default.com",
        "title": "其他工具",
        "desc": "其他工具",
        "link": "#其他工具"
      }
    ]
  },
  {
    "title": "Web 开发框架或模板",
    "items": [
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "smart-excel-ai",
        "desc": "(免费) 基于 Next.js, 集成了登录、支付（lemon squeezy）、AI 功能",
        "link": "https://github.com/weijunext/smart-excel-ai"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "Opensaas",
        "desc": "(免费) 基于 React + Node.js，集成了登录、支付（stripe）、邮件、AI 功能",
        "link": "https://github.com/wasp-lang/open-saas/"
      },
      {
        "icon": "https://logo.clearbit.com/shipfa.st",
        "title": "Shipfast",
        "desc": "(付费) 基于 Next.js，集成了登录、支付（stripe）、邮件、AI 功能",
        "link": "https://shipfa.st/"
      },
      {
        "icon": "https://logo.clearbit.com/supastarter.dev",
        "title": "SupaStarter",
        "desc": "(付费) 有 Next.js 和 Nuxt 两种模板，功能比较齐全",
        "link": "https://supastarter.dev"
      },
      {
        "icon": "https://logo.clearbit.com/opensaas.sh",
        "title": "Opensaas",
        "desc": "React + Node.js。集成了登录、支付（stripe）、邮件、AI 功能",
        "link": "https://opensaas.sh/"
      },
      {
        "icon": "https://logo.clearbit.com/react-saas.com",
        "title": "SaaS-Boilerplate",
        "desc": "一款开源的 SaaS 模板，非常适合构建自己的 SaaS 应用",
        "link": "https://react-saas.com/"
      },
      {
        "icon": "https://logo.clearbit.com/subscription-payments.vercel.app",
        "title": "nextjs subscription payments",
        "desc": "Vercel 开源的，支付采用的是 Stripe",
        "link": "https://subscription-payments.vercel.app/"
      },
      {
        "icon": "https://logo.clearbit.com/boilerplatelist.com",
        "title": "boilerplatelist",
        "desc": "超过 130 个最佳 SaaS 样板和入门套件，并提供了评估和选择最适合项目需求的 SaaS 样板的指导",
        "link": "https://boilerplatelist.com/"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "Taxonomy",
        "desc": "基于 Next.js 13 和 React 18 构建的开源 Web 应用实验项目",
        "link": "https://github.com/shadcn-ui/taxonomy"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "unibest",
        "desc": "unibest 是由 uniapp + Vue3 + Ts + Vite4 + UnoCss + UniUI 驱动的跨端快速启动模板",
        "link": "https://github.com/codercup/unibest"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "mp-html",
        "desc": "小程序富文本组件，支持渲染和编辑 html，支持在微信、QQ、百度、支付宝、头条和 uni-app 平台使用",
        "link": "https://github.com/jin-yufeng/mp-html"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "lucky-canvas 抽奖插件",
        "desc": "基于 TS + Canvas 抽奖插件，🌈 一套源码适配多端框架 JS / Vue / React / Taro / UniApp / 微信小程序等",
        "link": "https://github.com/buuing/lucky-canvas"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "NotionNext",
        "desc": "NotionNext，Notion 免费开源建站工具，将笔记转化为高性能静态网站",
        "link": "https://github.com/tangly1024/NotionNext"
      },
      {
        "icon": "https://logo.clearbit.com/capacitorjs.com",
        "title": "capacitorjs.com",
        "desc": "直接将 Next.js 包裹到原生应用中",
        "link": "https://capacitorjs.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.discourse.org",
        "title": "discourse",
        "desc": "社区讨论的平台",
        "link": "https://www.discourse.org/"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "umami",
        "desc": "简单、快速、注重隐私的 Google Analytics 替代方案",
        "link": "https://github.com/umami-software/umami"
      },
      {
        "icon": "https://logo.clearbit.com/free-for.dev",
        "title": "Free for Developers",
        "desc": "一个专门为开发者收集整理免费在线工具资源的网站",
        "link": "https://free-for.dev/#/"
      }
    ]
  },
  {
    "title": "Chrome 插件开发",
    "items": [
      {
        "icon": "https://logo.clearbit.com/wxt.dev",
        "title": "wxt.dev",
        "desc": "支持 Vue、Svelte 等多种前端框架",
        "link": "https://wxt.dev/"
      },
      {
        "icon": "https://logo.clearbit.com/docs.plasmo.com",
        "title": "Plasmo Framework",
        "desc": "Plasmo 是一个浏览器扩展开发平台，帮助你构建、发布和管理浏览器扩展。只使用 Framework 开发的话是免费的。支持 React/Typescript",
        "link": "https://docs.plasmo.com/framework"
      },
      {
        "icon": "https://logo.clearbit.com/responsiveviewer.org",
        "title": "Responsive Viewer",
        "desc": "chrome 插件。可以一键验证多端响应式布局状态",
        "link": "https://responsiveviewer.org/"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "vitesse-webext",
        "desc": "一个为 WebExtension 提供快速开发基础的 Vite 启动模板，支持 Vue 3、TypeScript、UnoCSS 等现代前端技术",
        "link": "https://github.com/antfu-collective/vitesse-webext"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "chrome-extension-boilerplate-react-vite",
        "desc": "一个用于创建 Chrome 扩展程序的模板，使用 React 和 TypeScript 构建。重点在于利用 Vite(Rollup)和 Turborepo 提高构建速度和开发体验",
        "link": "https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "chrome-extension-typescript-starter",
        "desc": "[crxjs](https://github.com/crxjs/chrome-extension-tools) - 是一个旨在简化 Chrome 扩展程序捆绑过程的工具库",
        "link": "https://github.com/chibat/chrome-extension-typescript-starter"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "extension.js",
        "desc": "一个无需配置、跨浏览器的扩展开发工具，支持 TypeScript、WebAssembly、React 和现代 JavaScript，专为实用性和快速原型设计而设计",
        "link": "https://github.com/extension-js/extension.js"
      },
      {
        "icon": "https://logo.clearbit.com/chrome-stats.com",
        "title": "Chrome Stats",
        "desc": "挖掘 Chrome 扩展需求神器",
        "link": "https://chrome-stats.com/"
      },
      {
        "icon": "https://logo.clearbit.com/x.com",
        "title": "给你谷歌插件增加 🏅“精选”徽章标识？",
        "desc": "给你谷歌插件增加 🏅“精选”徽章标识？",
        "link": "https://x.com/HongyuanCao/status/1821558568132497629"
      }
    ]
  },
  {
    "title": "前端开发",
    "items": [
      {
        "icon": "https://logo.clearbit.com/nextjs.org",
        "title": "Next.js",
        "desc": "基于 React",
        "link": "https://nextjs.org/"
      },
      {
        "icon": "https://logo.clearbit.com/nuxt.com",
        "title": "Nuxt",
        "desc": "基于 Vue",
        "link": "https://nuxt.com/"
      },
      {
        "icon": "https://logo.clearbit.com/remix.run",
        "title": "Remix",
        "desc": "基于 React 的全栈框架",
        "link": "https://remix.run/"
      },
      {
        "icon": "https://logo.clearbit.com/createapp.dev",
        "title": "Webpack Config Tool",
        "desc": "一键帮你生成 webpack.config.js",
        "link": "https://createapp.dev/webpack/no-library"
      },
      {
        "icon": "https://logo.clearbit.com/doc.autoxjs.com",
        "title": "AutoX.js",
        "desc": "不需要 Root 权限 的 JavaScript 自动化软件",
        "link": "http://doc.autoxjs.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.cypress.io",
        "title": "Cypress",
        "desc": "最完整的端到端解决方案",
        "link": "https://www.cypress.io/"
      },
      {
        "icon": "https://logo.clearbit.com/xrender.fun",
        "title": "XRender",
        "desc": "一个很易用的中后台「表单 / 表格 / 图表」解决方案。",
        "link": "https://xrender.fun/"
      },
      {
        "icon": "https://logo.clearbit.com/pptr.dev",
        "title": "Puppeteer",
        "desc": "一个 JavaScript 库，提供了一个高级 API 来控制 Chrome 或 Firefox 通过 DevTools Protocol 或 WebDriver BiDi",
        "link": "https://pptr.dev/"
      },
      {
        "icon": "https://logo.clearbit.com/v3.ice.work",
        "title": "ice",
        "desc": "基于 React 的应用研发框架，开箱即用，同时支持移动端和桌面端",
        "link": "https://v3.ice.work/docs/guide/start/"
      },
      {
        "icon": "https://logo.clearbit.com/notiflix.github.io",
        "title": "Notiflix",
        "desc": "纯 JavaScript 库，用于客户端非阻塞通知、弹出框、加载指示",
        "link": "https://notiflix.github.io"
      },
      {
        "icon": "https://logo.clearbit.com/driverjs.com",
        "title": "driver.js",
        "desc": "快速实现产品导览，亮点，上下文帮助等等。",
        "link": "https://driverjs.com/"
      },
      {
        "icon": "https://logo.clearbit.com/vue-3d-model.netlify.app",
        "title": "3D model",
        "desc": "基于 Vue3 3D 模型展示组件",
        "link": "https://vue-3d-model.netlify.app/zh/guide/installation/"
      },
      {
        "icon": "https://logo.clearbit.com/wcferry.netlify.app",
        "title": "wcf.js",
        "desc": "一款强大、快速、开源的微信机器人框架",
        "link": "https://wcferry.netlify.app/"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "Pagefind",
        "desc": "博客/文档的静态搜索",
        "link": "https://github.com/CloudCannon/pagefind"
      },
      {
        "icon": "https://logo.clearbit.com/payloadcms.com",
        "title": "payloadcms",
        "desc": "无头 CMS 和应用程序框架",
        "link": "https://payloadcms.com/"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "apprise",
        "desc": "适用于几乎所有平台的推送通知",
        "link": "https://github.com/caronc/apprise"
      },
      {
        "icon": "https://logo.clearbit.com/developers.google.com",
        "title": "SEO 优化指南",
        "desc": "[叫你如何做 SEO 优化？](https://magickseo.com/)",
        "link": "https://developers.google.com/search/docs?hl=zh-cn"
      },
      {
        "icon": "https://logo.clearbit.com/aitdk.com",
        "title": "AITDK SEO Extension",
        "desc": "一款免费的 All-in-One SEO 插件",
        "link": "https://aitdk.com/extension"
      },
      {
        "icon": "https://logo.clearbit.com/player.style",
        "title": "Web 上实现视频和音频播放器",
        "desc": "Web 上实现视频和音频播放器",
        "link": "https://player.style/"
      }
    ]
  },
  {
    "title": "后端开发",
    "items": [
      {
        "icon": "https://logo.clearbit.com/docs.nestjs.com",
        "title": "Nest.js",
        "desc": "基于 Node.js",
        "link": "https://docs.nestjs.com/"
      },
      {
        "icon": "https://logo.clearbit.com/midwayjs.org",
        "title": "Midway.js",
        "desc": "基于 Node.js",
        "link": "https://midwayjs.org/"
      },
      {
        "icon": "https://logo.clearbit.com/www.djangoproject.com",
        "title": "Django",
        "desc": "基于 Python, 全栈框架，内置管理后台，安全特性完善，国际化支持强，适合快速开发复杂 web 应用",
        "link": "https://www.djangoproject.com/"
      },
      {
        "icon": "https://logo.clearbit.com/koajs.com",
        "title": "Koa",
        "desc": "基于 Node.js, 轻量级，灵活性高，适合构建小型应用和 API",
        "link": "https://koajs.com/"
      },
      {
        "icon": "https://logo.clearbit.com/actix.rs",
        "title": "Actix",
        "desc": "基于 Rust, 超高性能，内存安全，适合构建高并发、低延迟的 web 服务",
        "link": "https://actix.rs/"
      },
      {
        "icon": "https://logo.clearbit.com/echo.labstack.com",
        "title": "Echo",
        "desc": "基于 Go，高性能，简洁易用，适合构建 RESTful API 和微服务",
        "link": "https://echo.labstack.com/"
      },
      {
        "icon": "https://logo.clearbit.com/gin-gonic.com",
        "title": "Gin",
        "desc": "基于 Go，高性能，轻量级，适合构建微服务和高并发 API",
        "link": "https://gin-gonic.com/"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "supabase",
        "desc": "基于开源的后端开发解决方案平台",
        "link": "https://github.com/supabase/supabase"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "appwrite",
        "desc": "用于开发 Web 和移动应用程序的后端平台",
        "link": "https://github.com/appwrite/appwrite"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "notify",
        "desc": "Go 语言，用于向各种消息服务发送通知",
        "link": "https://github.com/nikoksr/notify"
      }
    ]
  },
  {
    "title": "数据库管理",
    "items": [
      {
        "icon": "https://logo.clearbit.com/www.mongodb.com",
        "title": "Mongodb",
        "desc": "官方提供的一个免费数据库",
        "link": "https://www.mongodb.com/products/platform/cloud"
      },
      {
        "icon": "https://logo.clearbit.com/auth.tidbcloud.com",
        "title": "TiDB Cloud",
        "desc": "免费，5GB 内免费",
        "link": "https://auth.tidbcloud.com"
      },
      {
        "icon": "https://logo.clearbit.com/www.mongodb.com",
        "title": "Realm",
        "desc": "SQLite 的替代方案",
        "link": "https://www.mongodb.com/docs/atlas/device-sdks/"
      },
      {
        "icon": "https://logo.clearbit.com/www.mysql.com",
        "title": "MySQL",
        "desc": "最流行的开源的关系型数据库",
        "link": "https://www.mysql.com"
      },
      {
        "icon": "https://logo.clearbit.com/www.postgresql.org",
        "title": "PostgreSQL",
        "desc": "一个功能强大的开源对象关系数据库系统",
        "link": "https://www.postgresql.org"
      },
      {
        "icon": "https://logo.clearbit.com/redis.io",
        "title": "Redis",
        "desc": "一个开源（BSD 许可）的，内存中的数据结构存储系统，它可以用作数据库、缓存和消息中间件",
        "link": "https://redis.io"
      }
    ]
  },
  {
    "title": "对象关系映射",
    "items": [
      {
        "icon": "https://logo.clearbit.com/prisma.io",
        "title": "Prisma",
        "desc": "[TypeORM](https://github.com/typeorm/typeorm)",
        "link": "https://prisma.io/"
      },
      {
        "icon": "https://logo.clearbit.com/sequelize.org",
        "title": "Sequelize",
        "desc": "最老牌的 Node.js ORM 库，支持多种数据库",
        "link": "https://sequelize.org/"
      }
    ]
  },
  {
    "title": "样式与 UI 框架",
    "items": [
      {
        "icon": "https://logo.clearbit.com/tailwindcss.com",
        "title": "Tailwind CSS",
        "desc": "[Shadcn/ui](https://ui.shadcn.com/)",
        "link": "https://tailwindcss.com/"
      },
      {
        "icon": "https://logo.clearbit.com/nextui.org",
        "title": "NextUI",
        "desc": "[radix-ui](https://www.radix-ui.com/)",
        "link": "https://nextui.org/"
      },
      {
        "icon": "https://logo.clearbit.com/midday.ai",
        "title": "midday.ai",
        "desc": "企业财务自动化，关联了各大银行账单，将重复的会计工作程序化、生成财务报告、发票开具。",
        "link": "https://midday.ai/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hyperui.dev",
        "title": "hyperui.dev",
        "desc": "免费的 Tailwind CSS 组件的集合",
        "link": "https://www.hyperui.dev/"
      },
      {
        "icon": "https://logo.clearbit.com/magicui.design",
        "title": "magicui",
        "desc": "专业动画组件",
        "link": "https://magicui.design/"
      },
      {
        "icon": "https://logo.clearbit.com/devdojo.com",
        "title": "TailwindCSS Buttons",
        "desc": "TailwindCSS 按钮的独特集合",
        "link": "https://devdojo.com/tailwindcss/buttons"
      },
      {
        "icon": "https://logo.clearbit.com/www.tailwindtoolbox.com",
        "title": "tailwindtoolbox",
        "desc": "提供了一系列免费的 Tailwind CSS 模板、组件和资源",
        "link": "https://www.tailwindtoolbox.com/"
      },
      {
        "icon": "https://logo.clearbit.com/nextjstemplates.com",
        "title": "nextjstemplates",
        "desc": "Next.js Templates 提供多样化专业模板",
        "link": "https://nextjstemplates.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tailwindawesome.com",
        "title": "tailwindawesome",
        "desc": "基于 TailwindCSS 的 300+模版，有免费的，有收费的",
        "link": "https://www.tailwindawesome.com/?price=free&type=template"
      },
      {
        "icon": "https://logo.clearbit.com/uiverse.io",
        "title": "uiverse",
        "desc": "适用于任何项目的开源 UI 元素",
        "link": "https://uiverse.io/"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "canvas-confetti",
        "desc": "只要一行代码就能添加特效，支持撒花、放烟花、下雪多种特效，也可以自定义撒花的元素。",
        "link": "https://github.com/catdad/canvas-confetti"
      },
      {
        "icon": "https://logo.clearbit.com/onepagelove.com",
        "title": "onepagelove",
        "desc": "自 2008 年以来一直在收集单页网站的平台，目前已收集了 8375 个单页网站",
        "link": "https://onepagelove.com/"
      },
      {
        "icon": "https://logo.clearbit.com/tailspark.co",
        "title": "tailspark.co",
        "desc": "Tailwind CSS 中内置的漂亮组件和模板",
        "link": "https://tailspark.co/"
      },
      {
        "icon": "https://logo.clearbit.com/www.framer.com",
        "title": "Framer Motion",
        "desc": "提供了一组高级动画和交互组件，适合快速构建复杂动画和交互效果",
        "link": "https://www.framer.com/motion/"
      },
      {
        "icon": "https://logo.clearbit.com/shadows.brumm.af",
        "title": "Smooth Shadow",
        "desc": "平滑的阴影生成器",
        "link": "https://shadows.brumm.af/"
      },
      {
        "icon": "https://logo.clearbit.com/hype4.academy",
        "title": "claymorphism",
        "desc": "磨砂玻璃效果",
        "link": "https://hype4.academy/tools/claymorphism-generator"
      },
      {
        "icon": "https://logo.clearbit.com/ui.aceternity.com",
        "title": "aceternity",
        "desc": "各种好看 UI 的样式",
        "link": "https://ui.aceternity.com/"
      },
      {
        "icon": "https://logo.clearbit.com/animata.design",
        "title": "animata",
        "desc": "收藏了各种交互动画和效果",
        "link": "https://animata.design/"
      },
      {
        "icon": "https://logo.clearbit.com/spark-ui.dev",
        "title": "spark-ui",
        "desc": "构建动画组件 UI",
        "link": "https://spark-ui.dev/"
      },
      {
        "icon": "https://logo.clearbit.com/magicui.design",
        "title": "magicui",
        "desc": "50 多个免费开源动画组件，使用 React、Typescript、Tailwind CSS 和 Framer Motion 构建",
        "link": "https://magicui.design/"
      },
      {
        "icon": "https://logo.clearbit.com/tailwind-generator.com",
        "title": "通过图形化编辑器轻松创建和自定义各种网页组件",
        "desc": "[一个专门处理数字动画的 React 组件](https://github.com/barvian/number-flow)",
        "link": "https://tailwind-generator.com/"
      }
    ]
  },
  {
    "title": "原型设计",
    "items": [
      {
        "icon": "https://logo.clearbit.com/modao.cc",
        "title": "墨刀",
        "desc": "国内产品原型设计工具",
        "link": "https://modao.cc/"
      },
      {
        "icon": "https://logo.clearbit.com/www.figma.com",
        "title": "Figma",
        "desc": "国外产品原型设计工具",
        "link": "https://www.figma.com/"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "penpot",
        "desc": "可平替 Figma 的开源免费工具",
        "link": "https://github.com/penpot/penpot"
      },
      {
        "icon": "https://logo.clearbit.com/www.sketch.com",
        "title": "Sketch",
        "desc": "国外产品原型设计工具",
        "link": "https://www.sketch.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.adobe.com",
        "title": "Adobe XD",
        "desc": "国外产品原型设计工具",
        "link": "https://www.adobe.com/products/xd.html"
      },
      {
        "icon": "https://logo.clearbit.com/v0.dev",
        "title": "V0",
        "desc": "Text to UI",
        "link": "https://v0.dev/chat"
      },
      {
        "icon": "https://logo.clearbit.com/www.canva.com",
        "title": "Canva",
        "desc": "图形设计平台",
        "link": "https://www.canva.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.designspells.com",
        "title": "designspells",
        "desc": "收集了 N 多的产品设计细节，做产品没有思路的时候可以上去看看别人是怎么做的",
        "link": "https://www.designspells.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.uidesign.tips",
        "title": "uidesign.tips",
        "desc": "了解如何通过这些简单的 UI 技巧设计更好的用户界面并让您的用户更满意",
        "link": "https://www.uidesign.tips/ui-tips"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "OpenUI",
        "desc": "与 v0.dev 相似，但是是基于 Prompt 构建 UI 组件",
        "link": "https://github.com/wandb/openui"
      },
      {
        "icon": "https://logo.clearbit.com/www.happyhues.co",
        "title": "happyhues",
        "desc": "网站配色方案",
        "link": "https://www.happyhues.co/palettes/13"
      }
    ]
  },
  {
    "title": "认证与授权",
    "items": [
      {
        "icon": "https://logo.clearbit.com/logto.io",
        "title": "Logto",
        "desc": "[Lucia](https://lucia-auth.com/)",
        "link": "https://logto.io/"
      },
      {
        "icon": "https://logo.clearbit.com/authjs.dev",
        "title": "Auth.js",
        "desc": "支持 Nuxt, SolidStart, Astro 等",
        "link": "https://authjs.dev/"
      },
      {
        "icon": "https://logo.clearbit.com/next-auth.js.org",
        "title": "Next Auth.js",
        "desc": "支持 Next.js",
        "link": "https://next-auth.js.org/"
      },
      {
        "icon": "https://logo.clearbit.com/clerk.com",
        "title": "Clerk",
        "desc": "免费用户有 5000 MAU",
        "link": "https://clerk.com/"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "NextAuth",
        "desc": "用户系统, 网络身份验证",
        "link": "https://github.com/nextauthjs/next-auth"
      }
    ]
  },
  {
    "title": "支付集成",
    "items": [
      {
        "icon": "https://logo.clearbit.com/stripe.com",
        "title": "Stripe",
        "desc": "需要企业资质,开发者友好,API 强大",
        "link": "https://stripe.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.paddle.com",
        "title": "Paddle",
        "desc": "手续费低，一体化支付基础设施，可简化和自动化您的计费操作，因此您可以专注于增长。",
        "link": "https://www.paddle.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.lemonsqueezy.com",
        "title": "Lemon Squeezy",
        "desc": "一个全球支付平台，申请流程简单，不需要公司资质。提供微信、支付宝、Visa/Master 信用卡、PayPal 等多种支付方式，覆盖 130 多个国家。其核心功能包括备智能营收分析、客户跟踪系统、Affiliate 联盟营销工具、折扣码系统和支付失败恢复机制。",
        "link": "https://www.lemonsqueezy.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.paypal.com",
        "title": "PayPal",
        "desc": "个人账户即可使用,全球覆盖范围大",
        "link": "https://www.paypal.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.payoneer.com",
        "title": "Payoneer",
        "desc": "个人账户可用,支持全球付款",
        "link": "https://www.payoneer.com/"
      },
      {
        "icon": "https://logo.clearbit.com/wise.com",
        "title": "Wise",
        "desc": "个人账户可用,汇率优惠,适合跨境转账",
        "link": "https://wise.com/"
      },
      {
        "icon": "https://logo.clearbit.com/fastspring.com",
        "title": "FastSpring",
        "desc": "需要企业资质,提供全方位电商解决方案",
        "link": "https://fastspring.com/"
      },
      {
        "icon": "https://logo.clearbit.com/ko-fi.com",
        "title": "Ko-fi",
        "desc": "一个让创作者可以从粉丝那里获得打赏 💰、会员订阅 📚、商品销售 🛒 等收入的平台",
        "link": "https://ko-fi.com/"
      },
      {
        "icon": "https://logo.clearbit.com/bewildcard.com",
        "title": "WildCard",
        "desc": "国内首选，86 手机号注册，一个可以开通虚拟卡服务的第三方",
        "link": "https://bewildcard.com/i/DOMR3S7H"
      }
    ]
  },
  {
    "title": "邮件服务",
    "items": [
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "Nodemailer",
        "desc": "Node.js 的邮件发送库",
        "link": "https://github.com/nodemailer/nodemailer"
      },
      {
        "icon": "https://logo.clearbit.com/resend.com",
        "title": "Resend",
        "desc": "[React Mail](https://react.email/)",
        "link": "https://resend.com/"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "postmark templates",
        "desc": "电子邮件模板编辑工具",
        "link": "https://github.com/activecampaign/postmark-templates"
      },
      {
        "icon": "https://logo.clearbit.com/www.linshiyouxiang.net",
        "title": "临时邮箱",
        "desc": "[临时 Gmail 邮箱](https://22.do/)",
        "link": "https://www.linshiyouxiang.net/"
      }
    ]
  },
  {
    "title": "网站分析",
    "items": [
      {
        "icon": "https://logo.clearbit.com/clarity.microsoft.com",
        "title": "Clarity",
        "desc": "微软出品的分析工具",
        "link": "https://clarity.microsoft.com/"
      },
      {
        "icon": "https://logo.clearbit.com/umami.is",
        "title": "Umami",
        "desc": "开源可自部署",
        "link": "https://umami.is/"
      },
      {
        "icon": "https://logo.clearbit.com/analytics.google.com",
        "title": "Google Analytics",
        "desc": "谷歌提供的",
        "link": "https://analytics.google.com/analytics/web/#/p384838690/reports/intelligenthome"
      },
      {
        "icon": "https://logo.clearbit.com/plausible.io",
        "title": "Plausible",
        "desc": "直观，轻量，开源",
        "link": "https://plausible.io/"
      },
      {
        "icon": "https://logo.clearbit.com/openpanel.dev",
        "title": "openpanel",
        "desc": "缝合了 Mixpanel 和 Plausible 优点,访问分析+实时数据+可视化统计+用户行为洞察",
        "link": "https://openpanel.dev/"
      },
      {
        "icon": "https://logo.clearbit.com/www.wappalyzer.com",
        "title": "wappalyzer",
        "desc": "Wappalyzer 是一个网站技术分析工具，可以识别网站使用的技术栈，包括 CMS、电子商务平台、支付处理器等",
        "link": "https://www.wappalyzer.com/"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "netdata",
        "desc": "实时监控服务器、容器和应用程序",
        "link": "https://github.com/netdata/netdata"
      },
      {
        "icon": "https://logo.clearbit.com/ahrefs.com",
        "title": "ahrefs",
        "desc": "用于查询关键词难度、查看反链统计",
        "link": "https://ahrefs.com/"
      },
      {
        "icon": "https://logo.clearbit.com/search.google.com",
        "title": "Google Search Console",
        "desc": "Google Search Console 是一个强大的免费工具，帮助站长优化网站在 Google 搜索中的表现",
        "link": "https://search.google.com/search-console/about"
      },
      {
        "icon": "https://logo.clearbit.com/clarity.microsoft.com",
        "title": "Microsoft Clarity",
        "desc": "一款优秀的网站用户体验分析工具、流量分析工具",
        "link": "https://clarity.microsoft.com/"
      },
      {
        "icon": "https://logo.clearbit.com/aitdk.com",
        "title": "AITDK SEO Extension",
        "desc": "一款多功能浏览器扩展，旨在提供全面的网站分析",
        "link": "https://aitdk.com/zh/extension"
      },
      {
        "icon": "https://logo.clearbit.com/googleadsensealternatives.com",
        "title": "Google AdSense 替代品，并且展示了替代平台的发布商数量、广告主数量和月访问量等",
        "desc": "Google AdSense 替代品，并且展示了替代平台的发布商数量、广告主数量和月访问量等",
        "link": "https://googleadsensealternatives.com/"
      }
    ]
  },
  {
    "title": "在线客服和反馈服务",
    "items": [
      {
        "icon": "https://logo.clearbit.com/txc.qq.com",
        "title": "腾讯兔小巢",
        "desc": "国内产品反馈平台",
        "link": "https://txc.qq.com/"
      },
      {
        "icon": "https://logo.clearbit.com/tawk.to",
        "title": "Tawk",
        "desc": "在线客服",
        "link": "https://tawk.to/"
      },
      {
        "icon": "https://logo.clearbit.com/insigh.to",
        "title": "公共用户反馈跟踪器",
        "desc": "公共用户反馈跟踪器",
        "link": "https://insigh.to/"
      }
    ]
  },
  {
    "title": "部署与托管",
    "items": [
      {
        "icon": "https://logo.clearbit.com/vercel.com",
        "title": "Vercel",
        "desc": "首选，国内大部分访问不了",
        "link": "https://vercel.com/dashboard"
      },
      {
        "icon": "https://logo.clearbit.com/www.aliyun.com",
        "title": "阿里云",
        "desc": "国内云",
        "link": "https://www.aliyun.com/minisite/goods"
      },
      {
        "icon": "https://logo.clearbit.com/curl.qcloud.com",
        "title": "腾讯云",
        "desc": "国内云，经常有优惠",
        "link": "https://curl.qcloud.com/lsJFImqi"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "Github Pages",
        "desc": "免费",
        "link": "https://pages.github.com/"
      },
      {
        "icon": "https://logo.clearbit.com/developers.cloudflare.com",
        "title": "Cloudflare Pages",
        "desc": "[AirCode](https://aircode.io/) - 字节出品",
        "link": "https://developers.cloudflare.com/pages/"
      },
      {
        "icon": "https://logo.clearbit.com/www.netlify.com",
        "title": "Netlify",
        "desc": "[Zeabur](https://zeabur.com/) - 一个提供一键部署、无限扩展的云平台",
        "link": "https://www.netlify.com/"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "inngest",
        "desc": "Inngest 是一个开发者平台，将事件流、队列和持久执行结合在一起，形成一个单一的可靠性层。",
        "link": "https://github.com/inngest/inngest"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "Sink",
        "desc": "一个简单/快速/安全的链接缩短器，带有分析功能，100% 运行在 Cloudflare 上。",
        "link": "https://github.com/ccbikai/Sink"
      }
    ]
  },
  {
    "title": "网站管理",
    "items": [
      {
        "icon": "https://logo.clearbit.com/tool.chinaz.com",
        "title": "speedtest",
        "desc": "(免费) 网站速度测试, 支持：Ping 测试，国内、国外测速，网站速度查询，DNS 查询，DNS 污染检测",
        "link": "https://tool.chinaz.com/speedtest"
      },
      {
        "icon": "https://logo.clearbit.com/www.17ce.com",
        "title": "17ce",
        "desc": "(免费) 网站速度测试",
        "link": "https://www.17ce.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.webpagetest.org",
        "title": "webpagetest",
        "desc": "(免费) 网站速度测试",
        "link": "https://www.webpagetest.org/"
      },
      {
        "icon": "https://logo.clearbit.com/gtmetrix.com",
        "title": "gtmetrix",
        "desc": "(免费) 网站速度测试",
        "link": "https://gtmetrix.com/"
      },
      {
        "icon": "https://logo.clearbit.com/sentry.io",
        "title": "Sentry",
        "desc": "免费额度应该是够用的，同样也有开源 版本。",
        "link": "https://sentry.io/welcome/"
      },
      {
        "icon": "https://logo.clearbit.com/locust.io",
        "title": "Locust",
        "desc": "一个开源的负载测试工具。",
        "link": "https://locust.io/"
      },
      {
        "icon": "https://logo.clearbit.com/tool.chinaz.com",
        "title": "chinaz",
        "desc": "多种集合站长工具",
        "link": "https://tool.chinaz.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.ohttps.com?invitationCode=17xk289exdm09d43",
        "title": "OHTTPS",
        "desc": "免费 HTTPS 证书、自动更新、自动部署",
        "link": "https://www.ohttps.com?invitationCode=17xk289exdm09d43"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "acme.sh",
        "desc": "免费 SSL 证书一键生成",
        "link": "https://github.com/acmesh-official/acme.sh"
      },
      {
        "icon": "https://logo.clearbit.com/www.1txm.com",
        "title": "易条形",
        "desc": "一款专业的在线条形码生成工具",
        "link": "https://www.1txm.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.similarsites.com",
        "title": "SimilarGroup",
        "desc": "输入网站地址搜索相似网站",
        "link": "https://www.similarsites.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.hackreels.com",
        "title": "Hackreels",
        "desc": "让你的代码动起来",
        "link": "https://www.hackreels.com/"
      },
      {
        "icon": "https://logo.clearbit.com/letsencrypt.osfipin.com",
        "title": "SSL 证书免费申请",
        "desc": "[Certimate](https://github.com/usual2970/certimate) - 一款开源的 SSL 证书管理工具, 支持自动申请、部署 SSL 证书，并在证书过期前自动续期",
        "link": "https://letsencrypt.osfipin.com/jump/share?code=DX09YW76"
      },
      {
        "icon": "https://logo.clearbit.com/zhale.me",
        "title": "炸了么",
        "desc": "一款为运维人员和站长提供的在线网络拨测工具，拥有全球 1000 多个节点，模拟用户访问域名/IP，免费提供网站速度测试、网络速度检测、多地区在线 ping 测试、dns 查询、路由跟踪查询、ipv6 网站测试等站长工具",
        "link": "https://zhale.me/"
      },
      {
        "icon": "https://logo.clearbit.com/blog.aizrf.com",
        "title": "使用 Cloudflare Pages 部署 UptimeRobot API 在线状态面板：`教程`",
        "desc": "[使用 Cloudflare Pages 部署 UptimeRobot API 在线状态面板：`项目`](https://github.com/shaoyouvip/uptime)",
        "link": "https://blog.aizrf.com/p/62"
      },
      {
        "icon": "https://logo.clearbit.com/www.igeekbb.com",
        "title": "利用 CNAME 域名提高网站访问速度",
        "desc": "利用 CNAME 域名提高网站访问速度",
        "link": "https://www.igeekbb.com/2024/09/26/cloudflare-saas/"
      }
    ]
  },
  {
    "title": "域名注册",
    "items": [
      {
        "icon": "https://logo.clearbit.com/wanwang.aliyun.com",
        "title": "阿里云",
        "desc": "[Cloudflare](https://cloudflare.com)",
        "link": "https://wanwang.aliyun.com/domain"
      },
      {
        "icon": "https://logo.clearbit.com/www.namesilo.com",
        "title": "Namesilo",
        "desc": "自动屏蔽 whois",
        "link": "https://www.namesilo.com"
      },
      {
        "icon": "https://logo.clearbit.com/tld-list.com",
        "title": "tld-list",
        "desc": "域名购买比价网，比较 54 个注册商的每个域名后缀的价格",
        "link": "https://tld-list.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.dynadot.com",
        "title": "Dynadot",
        "desc": "提供了域名注册和管理、以及邮箱的一站式解决方案",
        "link": "https://www.dynadot.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.godaddy.com",
        "title": "Godaddy",
        "desc": "狗爹，懂的都懂",
        "link": "https://www.godaddy.com/zh-sg"
      },
      {
        "icon": "https://logo.clearbit.com/www.volcengine.com",
        "title": "字节火山引擎",
        "desc": "国内平台，cn 域名首选平台",
        "link": "https://www.volcengine.com/product/domain-service"
      },
      {
        "icon": "https://logo.clearbit.com/cloud.tencent.com",
        "title": "腾讯云",
        "desc": "国内平台，cn 域名首选平台",
        "link": "https://cloud.tencent.com/act/pro/domain-sale"
      }
    ]
  },
  {
    "title": "文档管理",
    "items": [
      {
        "icon": "https://logo.clearbit.com/vitepress.vuejs.org",
        "title": "VitePress",
        "desc": "基于 Vite & Vue 驱动的静态站点生成器",
        "link": "https://vitepress.vuejs.org"
      },
      {
        "icon": "https://logo.clearbit.com/notion.so",
        "title": "Notion",
        "desc": "[Astro Starlight](https://starlight.astro.build/) - Astro 框架的文档主题站点",
        "link": "https://notion.so"
      },
      {
        "icon": "https://logo.clearbit.com/mintlify.com",
        "title": "mintlify",
        "desc": "轻松获取产品文档",
        "link": "https://mintlify.com/"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "Docusaurus",
        "desc": "易于维护的开源文档网站",
        "link": "https://github.com/facebook/docusaurus"
      }
    ]
  },
  {
    "title": "协议生成",
    "items": [
      {
        "icon": "https://logo.clearbit.com/app.freeprivacypolicy.com",
        "title": "freeprivacypolicy",
        "desc": "一个在线隐私政策生成器，提供免费、轻松且符合各类隐私法规(CPRA, CCPA, GDPR 等)的模板",
        "link": "https://app.freeprivacypolicy.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.shopify.com",
        "title": "shopify policy generator",
        "desc": "提供了网站隐私政策模板",
        "link": "https://www.shopify.com/zh/tools/policy-generator"
      },
      {
        "icon": "https://logo.clearbit.com/privacy.1ts.fun",
        "title": "privacy 1ts fun",
        "desc": "App / 网站所需隐私政策免费生成, 可以导出 txt 或 html 格式",
        "link": "https://privacy.1ts.fun/"
      },
      {
        "icon": "https://logo.clearbit.com/www.termsfeed.com",
        "title": "TermsFeed",
        "desc": "隐私协议（Privacy Policy）和使用协议（Terms and Conditions）自动生成工具",
        "link": "https://www.termsfeed.com/"
      },
      {
        "icon": "https://logo.clearbit.com/termly.io",
        "title": "Termly",
        "desc": "隐私协议（Privacy Policy）和使用协议（Terms and Conditions）自动生成工具",
        "link": "https://termly.io/products/privacy-policy-generator/"
      },
      {
        "icon": "https://logo.clearbit.com/open-source-license-chooser.toolsnav.top",
        "title": "开源许可证选择器",
        "desc": "开源许可证选择器",
        "link": "https://open-source-license-chooser.toolsnav.top/zh/"
      }
    ]
  },
  {
    "title": "图标资源",
    "items": [
      {
        "icon": "https://logo.clearbit.com/iconify.design",
        "title": "iconify",
        "desc": "[fontawesome](https://fontawesome.com/icons)",
        "link": "https://iconify.design/"
      },
      {
        "icon": "https://logo.clearbit.com/svgl.app",
        "title": "svgl",
        "desc": "提供丰富的 Logo 的 SVG 图标库、一键搜索下载功能，重点是支持直接复制为代码",
        "link": "https://svgl.app/"
      },
      {
        "icon": "https://logo.clearbit.com/products.aspose.app",
        "title": "aspose-png-to-svg",
        "desc": "PNG 转 SVG 工具支持批量上传",
        "link": "https://products.aspose.app/pdf/zh/conversion/png-to-svg"
      },
      {
        "icon": "https://logo.clearbit.com/fontawesome.com",
        "title": "fontawesome",
        "desc": "提供超过 30,013 个可用于各种项目的图标",
        "link": "https://fontawesome.com/icons"
      },
      {
        "icon": "https://logo.clearbit.com/www.mingcute.com",
        "title": "MingCute",
        "desc": "一个为设计师和开发者准备的简洁而精致的开源图标库，非常适合在网页和移动设备上使用",
        "link": "https://www.mingcute.com/"
      },
      {
        "icon": "https://logo.clearbit.com/iconbuddy.com",
        "title": "iconbuddy",
        "desc": "一个提供超过 200,000 个开源 SVG 图标的搜索引擎，允许你免费搜索、下载、自定义和编辑图标",
        "link": "https://iconbuddy.com/"
      }
    ]
  },
  {
    "title": "字体资源",
    "items": [
      {
        "icon": "https://logo.clearbit.com/wangchujiang.com",
        "title": "免费【中文】字体",
        "desc": "免费可商用【中文】字体",
        "link": "https://wangchujiang.com/free-font/"
      },
      {
        "icon": "https://logo.clearbit.com/www.freefaces.gallery",
        "title": "免费【英文】字体",
        "desc": "免费可商用【英文】字体",
        "link": "https://www.freefaces.gallery/"
      }
    ]
  },
  {
    "title": "图片视频素材",
    "items": [
      {
        "icon": "https://logo.clearbit.com/vectorcraftr.com",
        "title": "vectorCraftr",
        "desc": "大量免费的插图素材",
        "link": "https://vectorcraftr.com/?utm_source=gapis.money"
      },
      {
        "icon": "https://logo.clearbit.com/www.pexels.com",
        "title": "pexels",
        "desc": "免费素材高清图片",
        "link": "https://www.pexels.com/zh-cn/"
      },
      {
        "icon": "https://logo.clearbit.com/vectorizer.com",
        "title": "vectorizer",
        "desc": "图片矢量化",
        "link": "https://vectorizer.com/zh/"
      }
    ]
  },
  {
    "title": "图片视频处理工具",
    "items": [
      {
        "icon": "https://logo.clearbit.com/tinypng.com",
        "title": "Tinypng",
        "desc": "图片压缩工具",
        "link": "https://tinypng.com/"
      },
      {
        "icon": "https://logo.clearbit.com/tiny-img.com",
        "title": "tiny-img",
        "desc": "PNG、JPG 格式压缩并转换为 WEBP",
        "link": "https://tiny-img.com/webp/"
      },
      {
        "icon": "https://logo.clearbit.com/removebg.one",
        "title": "在线 AI 抠图工具",
        "desc": "[Upscayl Upscayl](https://github.com/upscayl/upscayl) - 免费开源 AI 图像放大器",
        "link": "https://removebg.one/"
      },
      {
        "icon": "https://logo.clearbit.com/ezgif.com",
        "title": "video 转 gif",
        "desc": "[MediaGo](https://github.com/caorushizi/mediago) - m3u8 视频在线提取工具",
        "link": "https://ezgif.com/video-to-gif"
      }
    ]
  },
  {
    "title": "屏幕录制",
    "items": [
      {
        "icon": "https://logo.clearbit.com/obsproject.com",
        "title": "OBS Studio",
        "desc": "开源工具，跨平台：windows、mac、linux",
        "link": "https://obsproject.com/"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "QuickRecorder",
        "desc": "多功能、轻量化、高性能的开源 macOS 屏幕录制工具",
        "link": "https://github.com/lihaoyun6/QuickRecorder"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "screenity",
        "desc": "一款开源的屏幕录制和标注工具，提供隐私保护且无任何使用限制",
        "link": "https://github.com/alyssaxuu/screenity"
      },
      {
        "icon": "https://logo.clearbit.com/gemoo.com",
        "title": "focusee",
        "desc": "一个一站式平台，简化了视频的创建、编辑和分享流程，让每个人都能在几分钟内制作视频并传播自己的创意",
        "link": "https://gemoo.com/focusee/"
      }
    ]
  },
  {
    "title": "短链或长链",
    "items": [
      {
        "icon": "https://logo.clearbit.com/link.bnyer.cn",
        "title": "links",
        "desc": "短链接生成器",
        "link": "https://link.bnyer.cn/"
      },
      {
        "icon": "https://logo.clearbit.com/soo.run",
        "title": "soo",
        "desc": "短网址，短链接工具",
        "link": "https://soo.run/"
      },
      {
        "icon": "https://logo.clearbit.com/biubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiu.com",
        "title": "长链接生成器",
        "desc": "长链接生成器",
        "link": "https://biubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiubiu.com/index-real.html"
      }
    ]
  },
  {
    "title": "信息渠道",
    "items": [
      {
        "icon": "https://logo.clearbit.com/gapis.money",
        "title": "信息差",
        "desc": "经常更新的独立开发者出海周刊",
        "link": "https://gapis.money/"
      },
      {
        "icon": "https://logo.clearbit.com/www.producthunt.com",
        "title": "Product Hunt",
        "desc": "新产品榜单聚集地",
        "link": "https://www.producthunt.com/"
      },
      {
        "icon": "https://logo.clearbit.com/w2solo.com",
        "title": "W2Solo",
        "desc": "中文独立开发者社区",
        "link": "https://w2solo.com/"
      },
      {
        "icon": "https://logo.clearbit.com/chuhaituan.com",
        "title": "出海团",
        "desc": "专注于分享优秀的出海产品",
        "link": "https://chuhaituan.com/"
      },
      {
        "icon": "https://logo.clearbit.com/blogs.chuhaiqu.club",
        "title": "出海 Blog",
        "desc": "出海经验博客分享",
        "link": "https://blogs.chuhaiqu.club/"
      },
      {
        "icon": "https://logo.clearbit.com/1000userguide.com",
        "title": "1000UserGuide",
        "desc": "300 多个独立开发者的免费推广渠道清单",
        "link": "https://1000userguide.com/#/"
      },
      {
        "icon": "https://logo.clearbit.com/visalist.io",
        "title": "全球签证指南门户网站",
        "desc": "[出海网站经验总结](https://github.com/princehuang/overseas-website-note)",
        "link": "https://visalist.io/"
      },
      {
        "icon": "https://logo.clearbit.com/minibook.notion.site",
        "title": "出海小炒本",
        "desc": "[Chief AI Office](https://www.chiefaioffice.xyz/) - 一个专注于跟踪 AI 初创公司融资动态的情报平台。每天为 5000+ 来自 OpenAI、a16z、Google 等顶级机构的读者提供最新 AI 融资情报，助你洞悉行业趋势,把握投资机遇",
        "link": "https://minibook.notion.site/b39d0ac975a44f3089639215d96135a0"
      },
      {
        "icon": "https://logo.clearbit.com/www.toolify.ai",
        "title": "Toolify.ai",
        "desc": "轻松发现和了解当下最火热的 AI 应用和服务，帮助你把握 AI 发展趋势，发现潜在的商机",
        "link": "https://www.toolify.ai/"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "中国独立开发者项目列表",
        "desc": "中国独立开发者项目列表",
        "link": "https://github.com/1c7/chinese-independent-developer"
      },
      {
        "icon": "https://logo.clearbit.com/github.com",
        "title": "中国独立开发者项目列表-程序员版",
        "desc": "中国独立开发者项目列表",
        "link": "https://github.com/1c7/chinese-independent-developer/blob/master/README-Programmer-Edition.md"
      },
      {
        "icon": "https://logo.clearbit.com/www.semrush.com",
        "title": "Semrush",
        "desc": "一款功能强大的关键词研究工具",
        "link": "https://www.semrush.com/"
      },
      {
        "icon": "https://logo.clearbit.com/trendingkeywords.net",
        "title": "TrendingKeywords",
        "desc": "一个强大的关键词趋势分析工具，用于发现即将爆发的热门关键词",
        "link": "https://trendingkeywords.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.youtube.com",
        "title": "Cursor 实战",
        "desc": "一个带着你用 Cursor 从零开始做项目的 Youtube 频道",
        "link": "https://www.youtube.com/@realmckaywrigley/videos"
      },
      {
        "icon": "https://logo.clearbit.com/www.youtube.com",
        "title": "独立开发者之王”Pieter Levels 的整个研发历程",
        "desc": "[72 个全球顶级 AI 信源](https://tidyread.ai/recommended-recipes/ai-reading-list-pro-cn) - 一键订阅 72 个全球顶级 AI 信源，每日自动生成翻译、摘要后的简报推送给你",
        "link": "https://www.youtube.com/watch?v=oFtjKbXKqbg"
      },
      {
        "icon": "https://logo.clearbit.com/blogs.chuhaiqu.club",
        "title": "chuhaiqu",
        "desc": "出海注册公司、银行开户情况汇总表",
        "link": "https://blogs.chuhaiqu.club/account-open-stats/"
      },
      {
        "icon": "https://logo.clearbit.com/gumroad.com",
        "title": "Gumroad",
        "desc": "用于挖掘灵感，了解市场趋势和顾客需求，成为创作和产品开发的重要参考",
        "link": "https://gumroad.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.anotherkeywordtool.com",
        "title": "免费关键字工具网站",
        "desc": "[海外虚拟信用卡开卡平台推荐 Top10 虚拟数字银行卡汇总](https://topstip.com/best-virtual-credit-card/)",
        "link": "https://www.anotherkeywordtool.com/"
      },
      {
        "icon": "https://logo.clearbit.com/x.com",
        "title": "如何认真做营销？",
        "desc": "[20 个经过验证的微型 SaaS 创意](https://x.com/chuhaiqu/status/1839114602849906815)",
        "link": "https://x.com/desmondhth/status/1824450807162700262"
      },
      {
        "icon": "https://logo.clearbit.com/m.okjike.com",
        "title": "踩了 stripe 有一个坑",
        "desc": "[一行代码降低 Vercel 40 倍成本](https://www.memfree.me/zh/blog/reduce-vercel-costs)",
        "link": "https://m.okjike.com/originalPosts/67172b0d32f03efa77c74ccb"
      },
      {
        "icon": "https://logo.clearbit.com/m.okjike.com",
        "title": "一个获取 stripe 高权重外链（DR93）的方法",
        "desc": "[关键词分析网站](https://ahrefs.com/zh/keywords-explorer)",
        "link": "https://m.okjike.com/originalPosts/66df00babe1b0f6ab7a4f8d7"
      },
      {
        "icon": "https://logo.clearbit.com/mp.weixin.qq.com",
        "title": "我跑通了全球收付款的流程",
        "desc": "我跑通了全球收付款的流程",
        "link": "https://mp.weixin.qq.com/s/y_XRFa8pzkgV-GqttSotqw"
      }
    ]
  },
  {
    "title": "产品发布",
    "items": [
      {
        "icon": "https://logo.clearbit.com/poweredbyai.app",
        "title": "PoweredByAI",
        "desc": "免费提交产品",
        "link": "https://poweredbyai.app/"
      },
      {
        "icon": "https://logo.clearbit.com/www.pinterest.com",
        "title": "Pinterest",
        "desc": "发布的视频可能会被 Google 收录且免",
        "link": "https://www.pinterest.com"
      },
      {
        "icon": "https://logo.clearbit.com/www.indiehackers.com",
        "title": "Indie Hackers",
        "desc": "一个社区平台，它连接开发者们共同分享他们的公司和副业背后的策略和收入数据",
        "link": "https://www.indiehackers.com/"
      },
      {
        "icon": "https://logo.clearbit.com/tweeteasy.io",
        "title": "Tweeteasy",
        "desc": "一款易于使用的 Twitter AI 工具，可以让你轻松创建引人入胜的帖子、获取回复想法、添加表情符号、更改语气、修复拼写和语法以及翻译成英语",
        "link": "https://tweeteasy.io"
      },
      {
        "icon": "https://logo.clearbit.com/fireflycard.shushiai.com",
        "title": "流光卡片",
        "desc": "一款文字排版海报生成推广工具",
        "link": "https://fireflycard.shushiai.com/en"
      },
      {
        "icon": "https://logo.clearbit.com/codepen.io",
        "title": "在线英文签名",
        "desc": "[AdsDog](https://adsdog.ai/) - 通过一个 URL 就可以由 AI 生成高质量的数字人广告宣传视频",
        "link": "https://codepen.io/kiranpate1/full/ExBpaeW"
      },
      {
        "icon": "https://logo.clearbit.com/highpayingaffiliateprograms.com",
        "title": "High Paying Affiliate Programs",
        "desc": "帮助市场人员在推广这些项目, 佣金基本上都是 30% 以上",
        "link": "https://highpayingaffiliateprograms.com/"
      },
      {
        "icon": "https://logo.clearbit.com/mp.weixin.qq.com",
        "title": "Product Hunt 冲榜前三攻略",
        "desc": "[310 个网站小众点的网站宣传自己的产品](https://x.com/lxfater/status/1866339428773572992)",
        "link": "https://mp.weixin.qq.com/s/Nlth1disb61qyK722x5C_A"
      }
    ]
  },
  {
    "title": "Logo 设计",
    "items": [
      {
        "icon": "https://logo.clearbit.com/realfavicongenerator.net",
        "title": "favicon generator 1",
        "desc": "生成多平台多种类 logo(ico、PNG、SVG)",
        "link": "https://realfavicongenerator.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.websiteplanet.com",
        "title": "favicon generator 2",
        "desc": "生成多平台多种类 logo(ico、PNG、SVG)",
        "link": "https://www.websiteplanet.com/webtools/favicon-generator/"
      },
      {
        "icon": "https://logo.clearbit.com/www.bitbug.net",
        "title": "bit bug",
        "desc": "PNG/JPG 转 ico",
        "link": "https://www.bitbug.net/"
      },
      {
        "icon": "https://logo.clearbit.com/www.logo.surf",
        "title": "Logo.surf",
        "desc": "文本 Logo 生成器",
        "link": "https://www.logo.surf/"
      },
      {
        "icon": "https://logo.clearbit.com/favicon.vwood.xyz",
        "title": "favicon",
        "desc": "快速通过 URL 获取站点 Favicon 图标",
        "link": "https://favicon.vwood.xyz/"
      },
      {
        "icon": "https://logo.clearbit.com/www.logoai.com",
        "title": "Logo AI",
        "desc": "一款 AI 驱动的 Logo 制作工具",
        "link": "https://www.logoai.com"
      },
      {
        "icon": "https://logo.clearbit.com/favicon.im",
        "title": "Favicon.im",
        "desc": "一键通过 URL 获取某个网站的 icon",
        "link": "https://favicon.im/?utm_source=gapis.money"
      }
    ]
  },
  {
    "title": "项目管理",
    "items": [
      {
        "icon": "https://logo.clearbit.com/trello.com",
        "title": "Trello",
        "desc": "灵活的可视化项目管理工具",
        "link": "https://trello.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.notion.so",
        "title": "Notion",
        "desc": "集笔记、文档和任务管理于一体的工作空间",
        "link": "https://www.notion.so/"
      }
    ]
  },
  {
    "title": "其他工具",
    "items": [
      {
        "icon": "https://logo.clearbit.com/mackext.com",
        "title": "黑苹果软件园",
        "desc": "[截图工具](https://www.snipaste.com/)",
        "link": "https://mackext.com/"
      },
      {
        "icon": "https://logo.clearbit.com/pixpinapp.com",
        "title": "截图工具",
        "desc": "解决了 Snipaste 长截图，gif 图问题",
        "link": "https://pixpinapp.com/"
      },
      {
        "icon": "https://logo.clearbit.com/pkeytool.com",
        "title": "PKeyToolWeb",
        "desc": "微软产品激活工具箱",
        "link": "https://pkeytool.com/ShareKeys"
      },
      {
        "icon": "https://logo.clearbit.com/www.ahhhhfs.com",
        "title": "Window 激活",
        "desc": "Windows 激活工具大全 免费安全的 Windows 激活软件",
        "link": "https://www.ahhhhfs.com/15133/"
      },
      {
        "icon": "https://logo.clearbit.com/www.neatdownloadmanager.com",
        "title": "neatdownloadmanager",
        "desc": "IDM 的替代软件",
        "link": "https://www.neatdownloadmanager.com/index.php/en/"
      },
      {
        "icon": "https://logo.clearbit.com/kms.cx",
        "title": "KMS",
        "desc": "KMS 一键激活 windows/office",
        "link": "https://kms.cx/#"
      },
      {
        "icon": "https://logo.clearbit.com/cobalt.tools",
        "title": "cobalt",
        "desc": "各类资源下载神器，只需一个 URL",
        "link": "https://cobalt.tools/"
      },
      {
        "icon": "https://logo.clearbit.com/www.tosound.com",
        "title": "toSound",
        "desc": "免费音效素材资源下载",
        "link": "https://www.tosound.com/"
      },
      {
        "icon": "https://logo.clearbit.com/www.fakexy.com",
        "title": "美国虚拟地址生成器",
        "desc": "[code share](https://codeshare.io/) - 实时代码共享工具",
        "link": "https://www.fakexy.com/fake-address-generator-ca"
      },
      {
        "icon": "https://logo.clearbit.com/chromewebstore.google.com",
        "title": "Monica",
        "desc": "针对每个网站推荐常用的 AI 工具，一点即用",
        "link": "https://chromewebstore.google.com/detail/monica-your-ai-copilot-po/ofpnmcalabcbjgholdjcjblkibolbppb?hl=zh-CN&utm_source=ext_sidebar"
      },
      {
        "icon": "https://logo.clearbit.com/quicktype.io",
        "title": "QuickType",
        "desc": "一键可以将一个 JSON 结构生成对应的类型",
        "link": "https://quicktype.io/"
      },
      {
        "icon": "https://logo.clearbit.com/linear.app",
        "title": "Linear",
        "desc": "Linear 是一个项目管理和任务跟踪软件",
        "link": "https://linear.app/"
      },
      {
        "icon": "https://logo.clearbit.com/www.remotion.dev",
        "title": "Remotion",
        "desc": "一个通过编码创建视频的工具",
        "link": "https://www.remotion.dev/"
      },
      {
        "icon": "https://logo.clearbit.com/screenshotone.com",
        "title": "制作一个基于 API 的工具来拍摄网站快照",
        "desc": "[Cursor V0 开发步骤](https://x.com/aiwarts/status/1839986188255670602)",
        "link": "https://screenshotone.com/"
      },
      {
        "icon": "https://logo.clearbit.com/cursor.directory",
        "title": "Cursor 规则使用指南",
        "desc": "Cursor 规则使用指南",
        "link": "https://cursor.directory/"
      }
    ]
  }
];

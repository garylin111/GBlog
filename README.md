## 🚀 **AstroVerse**: 一款用于视觉叙事的Astro主题

AstroVerse是专为引人入胜的图文叙事而设计的Astro主题。

它无缝地融合了视觉和文字内容，赋予创作者以使用高影响力图像传递引人入胜叙事的能力。

适用于希望通过引人注目的视觉效果和引人入胜的散文使自己的故事脱颖而出的博客作者和内容创作者，AstroVerse为创造沉浸式和具有影响力的数字体验提供了平台。


## 🎉 特色功能

- ✅ 基于Astro技术
- ✅ 使用Tailwind CSS和Preline UI进行开发
- ✅ 完全响应式设计
- ✅ 完美的100/100网站性能评分
- ✅ SEO优化
- ✅ 内置站点搜索功能
- ✅ 支持站点地图和RSS订阅
- ✅ 支持Markdown和MDX
- ✅ 标签统计和最后修改时间显示
- ✅ 图像处理优化
- ✅ 明暗模式切换
- ✅ 分页以方便导航
- ✅ 一键使用Prettier格式化代码


## 💻 本地运行

**VSCode推荐扩展:**

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)。
- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)。

1. 派生或使用此[模板](https://github.com/isooosi/astroverse)。

2. 安装依赖项:

```bash
pnpm install
```

3. 运行开发服务器:

```bash
pnpm run dev
```

## 📄 添加文章

添加文章就像将.md或.mdx文件添加到路径为**src/content/posts**的博客文件夹一样简单。

## 🧞 命令

所有命令都从项目的根目录，在终端中运行：

| 命令             | 动作                                         |
| :---------------- | :------------------------------------------- |
| `npm install`     | 安装依赖项                        |
| `npm run dev`     | 在 `localhost:4321` 启动本地开发服务器  |
| `npm run build`   | 将您的生产站点构建到 `./dist/`      |
| `npm run preview` | 在部署之前在本地预览您的构建 |
| `npm run format`  | 使用prettier格式化代码                |

### 🔧配置

基本配置文件: `./src/consts.ts`

```ts
// 将任何全局数据放入此文件。
// 您可以使用 `import` 关键字从站点的任何位置导入此数据。

// 基本页面元数据, src/layouts/BaseLayout.astro
export const BRAND_NAME = "AstroVerse";
export const SITE_TITLE = "AstroVerse";
export const SITE_DESCRIPTION = "一款用于视觉叙事的Astro主题";

// 标签页面元数据, src/pages/tags/index.astro
export const Tags_TITLE = "AstroVerse - 所有标签";
export const Tags_DESCRIPTION =
  "AstroVerse - 所有标签以及与每个标签相关的文章数量";

// 标签页面元数据, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `在AstroVerse中 '${tag}' 标签的所有文章`,
    description: `探索有关${tag}的文章，了解不同的观点和深度分析。`,
  };
}

// 分类页面元数据, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `在AstroVerse中 '${category}' 类别的所有文章`,
    description: `在AstroVerse中浏览所有属于${category}类别的文章`,
  };
}

// 头部链接, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/origami/1/", title: "origami" },
  { href: "/category/code/1/", title: "code" },
  { href: "/category/note/1/", title: "note" },
  { href: "/category/life/1/", title: "life" },
    
  }
];

// 底部链接, src/components/Footer.astro
export const FooterLinks = [
  { href: "/posts/我的個人博客/", title: "自我介紹" },
  { href: "/posts/tailwind-typography/", title: "Tailwind" },
  { href: "/tags/", title: "Tags" },
];

// 社交链接, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://twitter.com/astrodotbuild",
    icon: "tabler:brand-twitter",
    label: "Twitter",
  },
  {
    href: "https://github.com/isooosi",
    icon: "tabler:brand-github",
    label: "GitHub",
  },
];

// 搜索页面元数据, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - 站点搜索`;
export const SEARCH_PAGE_DESCRIPTION = `在${SITE

_TITLE}上搜索所有内容`;
```


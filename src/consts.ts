// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "Gary's Blog";
export const SITE_TITLE = "Gary's Blog";
export const SITE_DESCRIPTION = "An Astro Theme for Visual Storytelling";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "Gary's Blog - All Tags";
export const Tags_DESCRIPTION =
  "Gary's Blog - All tags and the count of articles related to each tag";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag in Gary's Blog`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category in Gary's Blog`,
    description: `Browse all articles under the ${category} category in Gary's Blog`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/life/1/", title: "生活" },
  { href: "/category/note/1/", title: "筆記" },
  { href: "/category/origami/1/", title: "折紙" },
  { href: "/category/beetles/1/", title: "甲蟲" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/posts/aboutme/", title: "關於我" },
  // { href: "/posts/tailwind-typography/", title: "Tailwind" },
  { href: "/tags/", title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://space.bilibili.com/21138820",
    icon: "tabler:brand-bilibili",
    label: "bilibili",
  },
  {
    href: "https://github.com/garylin111",
    icon: "tabler:brand-github",
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/garylin413/",
    icon: "tabler:brand-instagram",
    label: "instagram",
  },
  {
    href: "https://tieba.baidu.com/home/main?un=%E7%AD%89%E4%BC%9A%E5%90%83%E5%95%A5%E5%91%A2&fr=home&id=tb.1.1f037584.eLjFEx48FacT5qO_zUxRCw",
    icon: "tabler:brand-baidu",
    label: "baidu",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;

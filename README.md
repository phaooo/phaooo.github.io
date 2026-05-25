# Phaooo's Blog

这里是 Phaooo 的个人博客网站，使用 [Astro](https://astro.build/) 构建，并通过 GitHub Pages 发布。

站点地址：https://phaooo.github.io/

## 项目信息

- 框架：Astro 5
- 样式：Tailwind CSS
- 内容：Markdown / MDX
- 包管理器：pnpm
- 部署：GitHub Actions + GitHub Pages
- 语言：English / 中文 / 日本語

## 本地开发

首次准备环境：

```bash
corepack enable
pnpm install
```

启动本地开发服务：

```bash
pnpm dev
```

构建静态站点：

```bash
pnpm build
```

预览构建结果：

```bash
pnpm preview
```

## 内容目录

- `src/content/blog/`：正式博客文章
- `src/content/feed/`：短动态、碎片记录
- `src/pages/en/`：英文页面路由
- `src/pages/zh-cn/`：中文页面路由
- `src/pages/ja/`：日文页面路由
- `src/pages/{lang}/about/about.md`：关于页面正文
- `src/consts.ts`：站点标题、头像、导航、社交链接、评论与统计配置
- `public/`：头像、图标、二维码等静态资源

博客文章使用 frontmatter 描述元信息：

```md
---
title: "文章标题"
description: "文章摘要"
lang: en
translationKey: post-id
date: 2026-05-25
tags: ["tag"]
category: "uncategorized"
draft: false
---
```

`lang` 可选值为 `en`、`zh-cn`、`ja`。`translationKey` 用来标记同一篇文章的不同语言版本，后续翻译文章时建议保持一致。

如果某个语言还没有对应内容，页面会先回退显示英文内容，避免中文或日文界面出现空列表。

## 发布流程

推送到 `main` 分支后，GitHub Actions 会自动安装依赖、构建 Astro 站点，并发布到 GitHub Pages。

手动发布也可以在 GitHub 仓库的 Actions 页面运行 `Deploy to GitHub Pages` 工作流。

## 维护备忘

- 新文章优先放在 `src/content/blog/`。
- 如果只是日常片段或短记录，放在 `src/content/feed/`。
- 新增或调整页面时，需要同步检查 `src/pages/en/`、`src/pages/zh-cn/`、`src/pages/ja/`。
- 修改站点资料、导航和社交链接时，优先检查 `src/consts.ts`。
- 部分早期文章内容存在编码遗留问题，后续可以逐篇整理和润色。

# Phaooo

个人全息名片（holographic business card），纯静态单页，通过 GitHub Pages 发布。

站点地址：https://phaooo.github.io/

## 项目信息

- 形式：单个静态 HTML 页面，无需构建、无依赖
- 部署：GitHub Pages（Deploy from a branch → `main` / `root`）
- 字体：Google Fonts（运行时按需加载）

## 文件结构

- `index.html`：名片本体（正面：姓名 / 职位；背面：头像、座右铭、兴趣、研究方向、邮箱）
- `photo.jpg`：头像，同时用作网站图标（favicon）和分享缩略图（og:image）
- `.nojekyll`：让 GitHub Pages 直接按原样提供文件，不经过 Jekyll 处理

## 本地预览

无需任何工具链，直接用浏览器打开 `index.html` 即可。

## 修改与发布

1. 编辑 `index.html`（名片文字、兴趣/研究关键词、邮箱等都在 HTML 里）。
2. 提交并推送到 `main`：

   ```bash
   git add -A
   git commit -m "说明你的改动"
   git push
   ```

3. 推送后 GitHub Pages 会自动重新部署，约 1–2 分钟生效，网址不变。

## 维护备忘

- 换头像：替换 `photo.jpg`（保持文件名不变即可）。
- 改标题 / 缩略图：见 `index.html` 的 `<head>`（`<title>` 与 `og:image` / favicon）。
- 名片交互（鼠标倾斜、点击翻面）与样式均内联在 `index.html` 中，集中维护。

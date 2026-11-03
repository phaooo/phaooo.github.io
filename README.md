# Peng Hao 个人主页

中日英三语的个人主页，纯静态单页，通过 GitHub Pages 发布。

站点地址：https://phaooo.github.io/

## 项目信息

- 形式：单个 HTML 页面加一个图片文件夹，无需构建、无依赖
- 语言：英文 / 日文 / 中文，首次访问按浏览器语言自动选择，之后记住访客的选择
- 主题：浅色 / 深色，默认跟随系统，右上角可切换
- 部署：GitHub Pages（Deploy from a branch → `main` / `root`）
- 字体：Google Fonts（运行时按需加载）
- 访问统计：GoatCounter（`index.html` 末尾的脚本）

## 页面结构

| 区块 | 内容 |
| --- | --- |
| 首屏 | 姓名（随语言切换）、研究简介，以及可交互的 Fig. 1：MP×2CR 反交叉吸收谱（滑块调节耦合强度 g/ω₀） |
| 亮点 | 修士研究、学部研究、CycleSafe 三张卡片 |
| 自我介绍 | 简历要点、语言、兴趣照片 |
| 研究 | 研究简介、检测原理概念图（Fig. 2）、两种激发的动画图解（Fig. 3）、超强耦合刻度尺、待解问题与研究目标、学部研究（Fig. 4） |
| 项目 | CycleSafe 案例，以及其他项目卡片 |
| 经历 / 技能 / 联系 | 时间线、技能分组、邮箱与东京当前时间 |

## 文件结构

- `index.html`：页面本体，样式、脚本和三语文案都在这一个文件里
- `img/`：页面用到的照片和图表（WebP，已压缩并去除 EXIF 等元数据）
- `photo.jpg`：分享缩略图（og:image）和 iOS 主屏图标
- `.nojekyll`：让 GitHub Pages 直接按原样提供文件，不经过 Jekyll 处理

## 修改内容

所有文字都在 `index.html` 底部脚本开头的 **CONTENT** 区，每条文案都有 `en` / `ja` / `zh` 三个版本：

| 想改的内容 | 位置 |
| --- | --- |
| 邮箱 | `SITE.email`（运行时拼接，避免被简单的爬虫抓取） |
| GitHub、LinkedIn、researchmap 等链接 | `SITE.links`，填上 `url` 才会显示 |
| CycleSafe 的代码链接 | `SITE.cycleSafeCode` |
| 各区块文案、标题、图注 | `T`（键名与 HTML 里的 `data-t` / `data-th` 对应；`data-th` 的文案可以含 `<i>`、`<sub>` 等简单标签） |
| 其他项目卡片 | `PROJECTS` |
| 经历时间线 | `TIMELINE` |
| 技能分组 | `TOOLBOX` |

换图片：替换 `img/` 里的同名文件即可；新增图片时同时修改 `index.html` 里对应的 `src`。

## 本地预览

直接用浏览器打开 `index.html`。字体需要联网加载，离线时会退回系统字体，其余功能都能使用。

## 发布

1. 修改文件。
2. 提交并推送到 `main`：

   ```bash
   git add -A
   git commit -m "说明你的改动"
   git push
   ```

3. 推送后 GitHub Pages 会自动重新部署，约 1–2 分钟生效，网址不变。

## 维护备忘

- 网页标签页标题和分享信息在 `<head>` 里（`<title>`、`og:*`）。
- 之前的"全息名片"版本保存在 git 历史中（提交 `dded16b`），需要时可以取回。

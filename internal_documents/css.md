# Styling and CSS Guide for HPC Docs

This file documents the significant modifications made in `custom.css` and other styling files that differ from the base Docusaurus build configuration. The `custom.css` file serves as the global stylesheet override for the site, building on top of Infima — the CSS framework bundled with Docusaurus that is designed for content-centric websites.

## Purpose of `custom.css`

 `custom.css` allows for changing the look of the HPC documentation site to match UC Merced branding. It also allows us to improve readability for technical content (especially tables and code), and ensure a polished experience in both light and dark modes. Every rule in this file either overrides an Infima default or adds styling for custom components used across the docs.

## `custom.css` Feature Breakdown

### 1. UC Merced Color Theme

The `:root` and `[data-theme='dark']` blocks override Infima's default color palette with UC Merced-branded colors. The primary color in light mode is a deep navy (`#0F2D52`) with gold (`#DAA900`) as the dark accent. Dark mode uses a teal primary (`#0091b3`) for better contrast on dark backgrounds.

| Variable                          | Light Mode | Dark Mode  | Role                          |
| --------------------------------- | ---------- | ---------- | ----------------------------- |
| `--ifm-color-primary`             | `#0F2D52`  | `#0091b3`  | Primary brand color           |
| `--ifm-color-primary-dark`        | `#DAA900`  | `#21af90`  | Hover accents, dark variant   |
| `--ifm-color-link`                | `#0F2D52`  | `#6db3f2`  | Default link color            |
| `--ifm-color-link--hover`         | `#DAA900`  | `#f8fa4f`  | Link hover color              |
| `--docusaurus-highlighted-code-line-bg` | `rgba(0,0,0,0.1)` | `#f18a00` | Highlighted code line background |

### 2. Link Styling

Links use the primary color by default and transition smoothly on hover. External links (those starting with `http`) are styled in turquoise (`#27a9cd` light / `#5dc8e8` dark) to visually distinguish them from internal navigation links. Footer links are excluded from external link styling.

| Selector                                  | Purpose                        | Visual Effect                                      |
| ----------------------------------------- | ------------------------------ | -------------------------------------------------- |
| `a`                                       | Base link style                | Primary color with 0.2s color transition           |
| `a:hover`                                 | Hover feedback                 | Changes to gold (light) or teal (dark)             |
| `a[href^="http"]:not(footer a)`           | External link differentiation  | Turquoise color to distinguish from internal links |
| `[data-theme='dark'] .footer a:hover`     | Footer hover in dark mode      | Uses light primary variant for visibility          |

### 3. Table Enhancements

Tables have been refined for readability, which is important given the dense technical and data aspects of the documentation.

| Feature              | Selector                             | Visual Effect                                             |
| -------------------- | ------------------------------------ | --------------------------------------------------------- |
| Zebra striping       | `table tbody tr:nth-child(odd)`      | Light gray background (`rgba(0,0,0,0.03)`) on odd rows    |
| Dark mode striping   | `[data-theme='dark'] ... :nth-child(odd)` | Subtle white overlay (`rgba(255,255,255,0.05)`)      |
| Row hover            | `table tbody tr:hover`               | Primary-tinted highlight for easier row tracking          |
| Header styling       | `table thead tr`                     | Primary color background with white bold text             |
| Dark mode headers    | `[data-theme='dark'] table thead tr` | Dark navy background (`#1a3a5c`) with light text          |
| Cell padding         | `table td`                           | `0.6rem 1rem` padding for comfortable reading             |
| Cell borders         | `table td, table th`                 | 1px solid borders between all cells                       |

### 4. Tab Container Styling

Tabs are given a distinct bordered container so users can clearly identify where tabbed content begins and ends.

| Selector                       | Purpose                       | Visual Effect                                                                    |
| ------------------------------ | ----------------------------- | -------------------------------------------------------------------------------- |
| `.tabs-container`              | Main container for tab groups | 3px bordered container with rounded corners, light background, and subtle shadow |
| `.tabs__item`                  | Individual tab styling        | Bold, 20% larger text with padding and pointer cursor                            |
| `.tabs__item:hover`            | Interactive feedback          | Background color change with shadow on hover                                     |
| `.tabs__item--active`          | Active tab indicator          | Distinct background with 5px bottom border in the active theme color             |
| `.tabs__content`               | Content area styling          | 3px top border with 1rem internal padding                                        |

### 5. Video Container

A responsive wrapper for embedded videos that maintains a 16:9 aspect ratio at any screen width.

| Selector                  | Purpose                   | Visual Effect                                           |
| ------------------------- | ------------------------- | ------------------------------------------------------- |
| `.video-container`        | Responsive video wrapper  | Full-width container with 16:9 aspect ratio             |
| `.video-container iframe` | Video element positioning | Absolute positioning with full dimensions and no border |

### 6. Blockquote and Admonition Styling

Blockquotes and note admonitions are given distinct colors to stand out from body text.

| Element          | Light Mode                                      | Dark Mode                                        |
| ---------------- | ----------------------------------------------- | ------------------------------------------------ |
| Blockquote       | Purple left border (`#9b59b6`), lavender background (`#f9f0ff`) | Purple border (`#bb86fc`), dark purple background (`#2d1f3d`) |
| Note admonition  | Orange border and icon (`#dd7825`), peach background (`#fff1e6`) | Amber border and icon (`#ffb74d`), dark amber background (`#3d2a1f`) |

### 7. Inline Code Styling

Inline `code` spans receive a subtle background to distinguish them from surrounding text, with appropriate contrast in both themes. Code blocks (`pre code`) are excluded so that syntax-highlighted blocks are not affected.

| Selector                     | Visual Effect                                        |
| ---------------------------- | ---------------------------------------------------- |
| `code`                       | Light gray background with rounded corners           |
| `[data-theme='dark'] code`   | Dark translucent background with light text           |
| `pre code`                   | Transparent background — no override on code blocks  |

> **Note (1/27/2026):** The `pre code` reset was added to prevent inline code styles from bleeding into fenced code blocks.

### 8. Table of Contents Customization

The right-hand table of contents is made sticky so it follows the reader as they scroll, and the currently active section is highlighted with a bold font and left border.

| Selector                              | Purpose                     | Visual Effect                                         |
| ------------------------------------- | --------------------------- | ----------------------------------------------------- |
| `.table-of-contents`                  | Sticky positioning          | Sticks below the navbar, scrollable within viewport   |
| `.table-of-contents__link--active`    | Active section highlight    | Bold text, primary-colored left border                |

On mobile (below 996px), the ToC switches from sticky sidebar to a collapsible block above the content with a rounded background.

### 9. Hero Banner Dark Mode Fix

The default Docusaurus hero banner can lose contrast in dark mode. This fix applies a gradient background (`#1a1a2e` -> `#16213e`-> `#0f3460`) and ensures title text and buttons remain readable.

| Selector                                      | Purpose                 | Visual Effect                                    |
| --------------------------------------------- | ----------------------- | ------------------------------------------------ |
| `[data-theme='dark'] .hero`                   | Dark mode hero bg       | Deep blue gradient background                    |
| `[data-theme='dark'] .hero__title/subtitle`   | Text readability        | Forced white text                                |
| `[data-theme='dark'] .hero .button--secondary` | Button contrast        | White background with dark text, gray on hover   |

### 10. Long Title Wrapping

The `.docItemContainer h1` rule ensures long page titles wrap naturally instead of being clipped, which is common with verbose HPC topic names.

## File Location

```
src/css/custom.css
```

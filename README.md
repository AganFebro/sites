# febro.one

This repository contains the source for `febro.one`, a Vite + React website with two primary surfaces:

- A portfolio-style landing experience at `/`
- A markdown-driven blog at `/blog` and `/blog/:slug`

The project is intentionally lightweight. It does not depend on a CMS, a database, or runtime server-side rendering. Content is maintained directly in the repository, and the production build generates the static assets required by the site.

## Tech Stack

- React 18
- React Router 6
- Vite 5
- `marked` for markdown-to-HTML rendering
- ESLint for code quality checks
- A custom Vite plugin to import markdown files as raw strings

## Application Structure

Key files and directories:

```text
src/
  App.jsx                 # Portfolio landing page
  AppRouter.jsx           # Route definitions
  blog.css                # Blog list and post styling
  App.css                 # Portfolio styling
  lib/
    posts.js              # Blog post loading, parsing, and asset resolution
  pages/
    BlogList.jsx          # Blog index page
    BlogPost.jsx          # Single post page
  posts/                  # Markdown posts and local post assets
scripts/
  generate-static-social-pages.mjs
index.html               # Base HTML template and default metadata
vite.config.js           # Vite config + raw markdown loader
vercel.json              # SPA rewrite configuration for Vercel
```

## Routing Model

Routes are defined in `src/AppRouter.jsx`.

- `/` renders the portfolio landing page
- `/blog` renders the list of blog posts
- `/blog/:slug` renders a single post
- Any unknown route redirects back to `/`

The application is implemented as a client-side React app, but the build process also generates static HTML files for blog social previews so crawlers can read the correct metadata.

## Portfolio Surface

The portfolio lives in `src/App.jsx`.

### Interaction model

The landing page is implemented as a slideshow-style experience driven by local React state.

- `activeIndex` tracks the current slide
- Left and right arrow keys move between slides
- Previous and next buttons provide pointer-based navigation
- A live region announces the current slide for accessibility

### Content model

The portfolio content is currently hardcoded in arrays inside `src/App.jsx`.

Examples include:

- `slides` for section labels and accessibility text
- `metrics` for headline stats
- `roles` for experience items
- `workItems` for selected work
- `socialLinks` for outbound profile links
- `orbStates` for the animated background state on each slide

This keeps the landing page self-contained and avoids introducing an external content system, while also making content updates code-driven.

### Visual system

The portfolio styling is primarily handled in `src/App.css`, while the component logic stays in `src/App.jsx`.

The page uses:

- Animated ambient background elements
- A framed slide layout
- Keyboard-friendly navigation
- Inline SVG icons for social links and controls

## Blog Surface

The blog is a file-based content system built on top of markdown files stored under `src/posts`.

### Post discovery

`src/lib/posts.js` uses `import.meta.glob` to eagerly import:

- All markdown files under `src/posts/**/*.md`
- All image assets under `src/posts/**/*.{png,jpg,jpeg,gif,webp,svg,avif}`
- All local HTML demo files under `src/posts/**/*.html`

This allows the application to construct the post index at build time without adding backend infrastructure.

### Frontmatter format

Posts use a simple frontmatter format parsed by custom code in `src/lib/posts.js`.

Supported fields:

- `title`
- `date`
- `description`
- `coverImage`

Example:

```md
---
title: "My Post"
date: "2026-05-03"
description: "Short summary for cards and previews."
coverImage: "./assets/banner.jpg"
---
```

### Blog list

`src/pages/BlogList.jsx` renders the blog index by calling `getAllPosts()`.

That helper:

- Parses every markdown file into a post object
- Computes the slug from the file path
- Resolves the cover image if one exists
- Sorts posts in reverse chronological order

### Single post rendering

`src/pages/BlogPost.jsx` is responsible for rendering an individual post.

The rendering flow is:

1. Resolve the post by slug with `getPostBySlug()`
2. Inject any custom demo embed markup into the markdown source
3. Convert the markdown to HTML with `marked`
4. Rewrite embedded asset URLs so local image and demo references work correctly at runtime
5. Render the resulting HTML with `dangerouslySetInnerHTML`

### Local assets and demo embeds

Relative asset references inside post content are resolved through `resolvePostAssetUrl()` in `src/lib/posts.js`.

This supports co-locating post content with its own assets, for example:

```text
src/posts/my-post/
  my-post.md
  assets/
    banner.jpg
    screenshot.png
    demo/
      example.html
```

The blog also supports a custom inline demo syntax:

```md
::demo[Demo Title](./assets/demo/example.html)
```

That syntax is transformed into an iframe block before markdown is passed to `marked`.

## Metadata and Social Preview Strategy

The site uses two metadata layers:

### Default site metadata

`index.html` contains the default metadata for the root site, including:

- Description
- Open Graph tags
- Twitter card tags
- Canonical URL

These tags describe the main `febro.one` homepage.

### Per-post metadata generation

Because the site is delivered as a client-side SPA, a crawler would otherwise only see the default metadata from `index.html`.

To fix that, the production build runs `scripts/generate-static-social-pages.mjs` after `vite build`.

That script:

- Reads the built `dist/index.html` as a template
- Scans all markdown posts in `src/posts`
- Parses each post frontmatter and content
- Builds a post-specific title, description, and image
- Writes a static HTML file to `dist/blog/<slug>/index.html`
- Copies the post cover image next to the generated HTML when needed
- Copies `src/assets/logo_colored.png` to `dist/logo_colored.png` as the site-wide fallback preview image

This provides link unfurlers and social crawlers with a static HTML document that contains the correct preview metadata for each blog post.

## Build and Development Workflow

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

The build pipeline performs two steps:

1. Runs the standard Vite production build
2. Generates static social preview pages for blog posts

Preview the built output locally:

```bash
npm run preview
```

Deploy using the existing GitHub Pages script:

```bash
npm run deploy
```

## Vite Configuration

`vite.config.js` includes a custom plugin named `vite-md-raw`.

Its purpose is to transform every `.md` file into a JavaScript module that exports the raw file contents as a string. This makes it possible to keep posts in markdown while still loading them through the standard Vite module graph.

## Deployment

### Vercel

`vercel.json` rewrites all incoming paths to `/`, which keeps the client-side router working in production.

### Static metadata output

Even with the SPA rewrite in place, the generated `dist/blog/<slug>/index.html` files are important for social previews and crawlers that request the final built output directly.

## Contributing

Contributions should remain focused, documented, and consistent with the existing content pipeline.

General contribution guidelines:

- Keep changes scoped to a single concern when possible
- Update documentation when behavior, routing, or authoring rules change
- Keep blog assets co-located with the post that uses them
- Run a production build after changing blog loading, routing, metadata, or post structure

### Adding a Blog Post

Use the following folder structure for new posts:

```text
src/posts/post-slug/
  post-slug.md
  assets/
    banner.jpg
    screenshot-1.png
    demo/
      prototype.html
```

Recommended workflow:

1. Create a new folder under `src/posts` using the final slug
2. Add a markdown file that matches the folder name when using a folder-based post structure
3. Add frontmatter with `title`, `date`, and `description`
4. Add `coverImage` when the post should produce a banner-based social preview
5. Store banners, screenshots, and demo files inside the local `assets` directory
6. Reference images and demos with relative paths only

Minimum frontmatter example:

```md
---
title: "Post Title"
date: "2026-05-03"
description: "Short summary used for cards and metadata."
coverImage: "./assets/banner.jpg"
---
```

### Authoring Checklist

Before considering a post ready, verify the following:

- The slug is stable and uses a directory name that is safe for URLs
- The markdown file is located under `src/posts`
- The `date` field uses ISO format: `YYYY-MM-DD`
- The post includes a concise `description` suitable for cards and social metadata
- The `coverImage` path is relative and points to a file that exists
- Image, HTML demo, and other local asset references are relative and resolve inside the post folder
- Asset filenames avoid unnecessary spaces or ambiguous naming
- The post renders correctly in `/blog` and `/blog/:slug`
- `npm run build` completes successfully after the content is added
- If the post uses a banner, the generated preview metadata in `dist/blog/<slug>/index.html` points to the expected image

### Pull Request Notes

If this repository is maintained through pull requests, include the following in the change description:

- What was added or changed
- Whether the portfolio surface, blog pipeline, or metadata flow was affected
- What validation was performed

## Design Goals

The current setup is optimized for a small personal site that needs:

- Fast local iteration
- Repository-based content editing
- Rich blog posts with local assets
- No backend dependency
- Better social sharing previews than a plain SPA would normally provide

The result is a runtime that stays simple while still covering the two main content types in the site: the portfolio landing page and the blog.
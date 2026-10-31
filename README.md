[![Netlify Status](https://api.netlify.com/api/v1/badges/8b7e80c1-17cc-4387-9342-ccc179268d8e/deploy-status)](https://app.netlify.com/sites/prasetyodev/deploys)

<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="src/assets/icons/brands/brand.png" alt="Logo" width="auto" height="200">
  </a>

  <h3 align="center">Dimas Prasetyo </h3>

  <p align="center">
    Welcome to prasetyodev a professional site portofolio & blog
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#architechture">Software Architecture</a></li>
        <li><a href="#jamstack-architecture">JAMstack Architecture</a></li>
        <li><a href="#project-structure">Project Structure</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The purpose of this application is to create a professional portfolio and blog.

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [Gatsby React Framework](https://www.gatsbyjs.com)
- [CSS Prepocessor ( SCSS )](https://sass-lang.com)
- [Markdown](https://www.markdownguide.org)
- [Gatsby Cloud](https://www.gatsbyjs.com/dashboard/login)
- [Jamstack](https://jamstack.org)
- [GraphQL](https://graphql.org/)

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. How to running`
   ```
   npm run start / gatsby develop
   ```

## Software Architechture

Software Architecture: In the realm of software development, "software architecture" refers to the high-level structure and organization of a software system. It defines the components, modules, and their relationships within a software application. Software architects make decisions about the system's structure to ensure it meets performance, scalability, and maintainability requirements.

## JAMstack Architecture

**JAMstack** stands for **J**avaScript, **A**PIs, and **M**arkup — a modern web architecture where pages are pre-rendered into static markup at build time instead of being generated on every request by a server.

The core principles:

- **JavaScript** — handles all dynamic behavior on the client (interactivity, state, UI logic).
- **APIs** — any server-side or third-party functionality is abstracted behind reusable APIs instead of a tightly-coupled backend.
- **Markup** — HTML is generated ahead of time (SSG) and served as-is, hydrated with JavaScript when needed.

### How this project implements JAMstack

| Principle | Implementation in this repo |
| --- | --- |
| Pre-rendered Markup | Gatsby builds every page (home, portfolio, blog posts, generator) to static HTML at build time — no runtime server renders pages. |
| JavaScript hydration | React takes over after load: dark mode toggle, page-flip storybook, cover-letter generator, modals, animations. |
| APIs | Content comes from local Markdown (`content/blog/`) and structured data files (`src/data/`) through Gatsby's GraphQL data layer; dynamic work is delegated to Netlify Functions (`netlify/functions/`) and external APIs (GitHub, Formspree). |
| Markup + CDN | The `public/` output is deployed to Netlify's edge CDN (`netlify.toml`), so HTML, optimized images, and assets are served close to the visitor. |
| Progressive Web App | `gatsby-plugin-offline` adds a service worker so pages work offline — app-like behavior without an app server. |

**Why JAMstack here:** faster page loads (pre-rendered HTML from a CDN, no server round-trips), a smaller attack surface (no live database or server code to exploit), cheap scaling (static files on a global CDN), and a Git-based workflow where every deploy is a rebuild from source.

Learn more: [jamstack.org](https://jamstack.org)

## Project Structure

High-level overview of how the codebase is organized:

```
prasetyodev/
├── config/                        # Gatsby plugin & metadata configuration files
├── content/
│   └── blog/                      # Markdown blog posts (one folder per post)
├── netlify/
│   └── functions/                 # Netlify serverless functions (API endpoints)
├── plugins/
│   └── lighthouse-report-json/    # Local Gatsby plugin — Lighthouse score reporting
├── public/                        # Gatsby build output (generated, do not edit)
├── static/                        # Files copied to the site verbatim (favicon, og-image)
├── src/
│   ├── assets/
│   │   ├── icons/                 # Brand, company & skill icons (incl. brand logo)
│   │   └── pdf/                   # Downloadable documents (resume, certificates)
│   ├── components/                # React UI components (layout, sections, cards)
│   │   └── portfolio/             # Portfolio-page-specific components
│   ├── data/                      # Structured content:
│   │   ├── experience.js          #   work experience entries
│   │   ├── portfolioProjects.js   #   project case studies
│   │   ├── sideProjects.js        #   open-source & side projects
│   │   └── skillGroups.js         #   skill categories for the portfolio
│   ├── images/                    # Images processed by gatsby-plugin-image
│   ├── pages/                     # File-system routes:
│   │   ├── index.js               #   / — landing page
│   │   ├── portofolio.js          #   /portofolio/
│   │   ├── blog.js                #   /blog/
│   │   ├── generator.js           #   /generator/ — cover-letter generator
│   │   ├── about.js               #   /about/
│   │   ├── personalities.js       #   /personalities/
│   │   └── 404.js                 #   custom 404 page
│   ├── styles/                    # SCSS partials
│   │   ├── components/            #   per-component styles (storybook, navbar, hero…)
│   │   ├── layout/                #   global layout rules (grid, footer, links)
│   │   ├── pages/                 #   per-page styles (portofolio, generator, blog…)
│   │   ├── utils/animate/         #   animation utilities
│   │   ├── variables/             #   design tokens (color, spacing, typography)
│   │   ├── vendors/               #   third-party CSS (Bootstrap)
│   │   └── core.scss              #   single entry point that imports everything
│   ├── templates/
│   │   └── blog-post.js           # template used by gatsby-node for each blog post
│   └── utils/
│       └── jobParser.js           # heuristic parser for the cover-letter generator
├── gatsby-browser.js              # client-side APIs (wrap, on-route changes)
├── gatsby-config.js               # plugins & site metadata
├── gatsby-node.js                 # page creation, blog-post node mapping
├── gatsby-ssr.js                  # SSR APIs (dark-mode theme bootstrap)
└── netlify.toml                   # Netlify build & deploy settings
```

### Where things live, in practice

- **Content** — add a blog post in `content/blog/<slug>/index.md`; update portfolio, experience, or skills data in `src/data/`.
- **Routes** — each file in `src/pages/` becomes a URL; `src/templates/blog-post.js` renders every post under `/blog/` via `gatsby-node.js`.
- **Components** — reusable UI lives in `src/components/`; portfolio-page pieces go in `src/components/portfolio/`.
- **Styling** — design tokens in `src/styles/variables/`, component styles in `src/styles/components/`, page styles in `src/styles/pages/`; everything is assembled through `src/styles/core.scss`.
- **Dynamic behavior** — interactive components (storybook, generator, theme toggle) are client-side React; edge/dynamic logic goes to `netlify/functions/`.

## Usage

If you want to use the project template that I use, I will share it for free. I have tweaked or customized the settings according to your needs. I use Gatsby framework technology. If you are interested in learning, you can directly check the official documentation.

_For more examples, please refer to the [Documentation](https://www.gatsbyjs.com/)_

## Contact

Linkedin : [@Dimas Prasetyo](https://www.linkedin.com/in/dimas-prasetyo)

Email : dimasprasetyo485@gmail.com

## Holopin

Digital badges, but actually cool.
Reward & collect verifiable digital badges for skills, achievements, and memories. Build collections and create your own badge board. Show off via LinkedIn, Twitter, GitHub and GitLab.

[![An image of @prasetyodimas's Holopin badges, which is a link to view their full Holopin profile](https://holopin.me/prasetyodimas)](https://holopin.io/@prasetyodimas)

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/prasetyodimas)

<a href="https://trakteer.id/prasetyo_tech" target="_blank"><img id="wse-buttons-preview" src="https://cdn.trakteer.id/images/embed/trbtn-red-1.png?date=18-11-2023" height="40" style="border:0px;height:40px;" alt="Trakteer Saya"></a>

[![Peerlist](https://github-readme-badge.peerlist.io/api/prasetyodimas?style=for-the-badge)](https://peerlist.io/prasetyodimas)

# My portfolio website
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#development">Development</a></li>
        <li><a href="#hosting">Hosting</a></li>
        <li><a href="#site-performance">Site Performance</a></li>
      </ul>
    </li>
  </ol>
</details>

## About The Project
A site designed to show off all the projects I have worked on!

### Built With
- React
- Vite and TypeScript
- Tailwind CSS 4
- [Liquid Glass UI](https://github.com/bilalgursen/liquid-glass) for the glass surfaces, career filters, grouped profile links, skills popovers, and mobile menu

The MIT-licensed Liquid Glass sources in `src/components/liquid-glass` are installed with shadcn.
Portfolio styles and Tailwind theme tokens live in `src/index.css`.
The tabs, popovers, and menu use UI SDK. The production build includes both third-party notices at
`/liquid-glass-license.txt` and `/ui-sdk-license.txt`.

### Development

Use Node.js 22.13 or later in the 22.x line, or Node.js 24 LTS.

- `npm ci` installs dependencies from the lockfile.
- `npm start` runs the development server on port 3000.
- `npm test` runs the interaction tests.
- `npm run build` checks TypeScript and creates the static production site in `build/`.
- `npm run preview` serves the production build locally.

### Portfolio content

Add or edit project summaries and stacks in `src/data/projects.mjs`. Add case-study sections and images by project slug in `src/data/caseStudies.mjs`.
A link such as `/?project=meal-planner` opens a case study over the portfolio.
Update `src/data/career.js` to
add a season, change a career milestone, or link it to a case study by slug.

### Update Liquid Glass

Preview updates to the five registry entries used by the site. Review the output before replacing
the checked-in component files.

```sh
npx shadcn@4.23.0 add --dry-run --path src/components/liquid-glass \
  https://onemorethink.dev/r/card.json \
  https://onemorethink.dev/r/tabs.json \
  https://onemorethink.dev/r/button-group.json \
  https://onemorethink.dev/r/popover.json \
  https://onemorethink.dev/r/dropdown-menu.json
```

### Hosting

AWS Amplify rebuilds the site when changes are pushed to GitHub. Its build environment needs
a supported Node.js version and should publish `build/` after running `npm run build`.

### Site Performance
The site performs relatively well on desktop, on mobile however, the reCaptcha significantly slows the site, from looking online I could possibly change the reCaptcha to only initialise when the form is interacted with.

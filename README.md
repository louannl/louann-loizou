# My portfolio website
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#functionality">Functionality</a></li>
        <li><a href="#site-performance">Site Performance</a></li>
      </ul>
    </li>
  </ol>
</details>

## About The Project
A site designed to show off all the projects I have worked on!

### Built With
- React
- Tailwind
- [Liquid Glass UI](https://github.com/bilalgursen/liquid-glass) for the navigation, intro, timeline cards, and primary controls

The MIT-licensed Liquid Glass source in `src/components/liquid-glass` is copied from upstream revision
[`1201f4d`](https://github.com/bilalgursen/liquid-glass/tree/1201f4db5ac081de46bbeb9a9c6b3c9671e866af).
Portfolio styles, including the Tailwind 3 equivalents for the card's CSS fallback, live in `src/index.css`.

### Functionality 
- AWS Amplify
  - The site will automatically rebuild upon pushing to GitHub

### Site Performance
The site performs relatively well on desktop, on mobile however, the reCaptcha significantly slows the site, from looking online I could possibly change the reCaptcha to only initialise when the form is interacted with.

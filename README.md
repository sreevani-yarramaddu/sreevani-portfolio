# Sreevani Y · Portfolio

A responsive, single-page React + TypeScript portfolio with Motion animations and a centralized three-shade blue theme. The design uses a dark navy canvas, a layered portrait composition, alternating project showcases, and a responsive skills grid. No backend, database, email credentials, or contact form is needed.

## Development

```sh
npm install
npm run dev
```

`npm run build` runs strict TypeScript checks and creates the production build in `dist`. `npm run preview` serves that build locally.

## Structure

```text
public/                  Static resume and personal images
src/
  app/                   Application composition
  components/
    layout/              Header and footer
    ui/                  Shared section, button link, and tag components
  data/                  Typed resume content and navigation
  features/portfolio/    Portfolio sections and feature-specific presentation
  hooks/                 Shared active-section behavior
  styles/                Shared theme tokens and responsive styles
  types/                 Shared domain interfaces
```

## Personalize

- Change the three blue tokens in `src/styles/theme.css` to recolor the complete site. Neutral tokens, typography, and container width are also centralized there.
- Use the Day / Night toggle in the header to switch modes. The first visit follows the device preference; a chosen mode is remembered in localStorage. Both palettes are centralized in `src/styles/theme.css`, and theme behavior lives in `src/theme/theme.ts`.
- Edit personal details, project links, and section data in `src/data/portfolio.ts`.
- Add a portrait and set `profile.image` in `src/data/portfolio.ts` to use it in the hero.
- Replace `public/Sree_Resume.pdf` when updating the resume.
- Each project has a manual slideshow with three locally bundled sample screens. These SVG images are illustrative demos with fictional data, not screenshots of the live applications. Click or tap the left/right half of an image to go to the previous/next slide. Small clickable dots underneath indicate the active slide. Keyboard navigation and screen-reader announcements are supported without autoplay.
- Replace the slide paths, alt text, and captions in `src/data/portfolio.ts` when real screenshots are available. Sample images live in `public/images/projects` and can be regenerated with `node scripts/generate-project-previews.mjs`.
- Slides display directly without nested viewer borders or fake browser chrome. Sample provenance remains in the image metadata and descriptive alt text.
- Technology logos are bundled from Devicon, with LoopBack branding from its official website. REST APIs uses a generic network symbol because it is a concept rather than a product. Logos sit on neutral white tiles to stay legible in both themes. Skills data is maintained in `src/data/skills.ts`.
- OpenAI and LangChain use Lobe Icons SVG brand assets. Qdrant uses the symbol from its official website logo, with the viewport set to the symbol. AI & retrieval follows Developer tools in the Skills section.
- Experience symbols are stored in `public/images/companies` and configured on each experience in `src/data/portfolio.ts`. All three use official website icons converted to PNG: `growthpanda.co/favicon.ico`, `sreeviaai.com/favicon.ico`, and `metapointer.com/images/favicon.ico`. Company names are displayed separately from the symbols.

Navigation uses standard section anchors, supports direct section URLs, and highlights the visible section. Motion powers reusable scroll reveals and a reading-progress bar. Animations respect reduced-motion preferences. The mobile navigation exposes its expanded state to assistive technology and closes with Escape when focus is inside it.

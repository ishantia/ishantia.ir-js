# Shantia Eslami — Portfolio (React)

A React + Vite refactor of the original static HTML/CSS/JS portfolio. All
behavior from `script.js` (theme toggle, mobile nav, scroll reveal, active-nav
highlighting, magnetic buttons, parallax, particle background, dynamic
project grid, contact form) has been reimplemented as React components and
hooks. The visual design is unchanged — `src/index.css` is the original
`style.css`.

## Project structure

```
src/
  main.jsx              Entry point
  App.jsx                Page layout
  index.css               Original stylesheet (unchanged)
  data/projects.json      Project list (same data as before)
  hooks/
    useTheme.js            Dark/light theme + localStorage
    useMediaQuery.js        matchMedia helper (mobile breakpoint)
    useReveal.js            IntersectionObserver-based scroll reveal
    useMagnetic.js           Pointer-follow magnetic button effect
    useActiveSection.js      Highlights the nav link for the visible section
    useScrollEffects.js      Parallax + back-to-top visibility
  components/
    AmbientBackground.jsx   Aurora + animated particle canvas
    Header.jsx               Nav, theme toggle, mobile menu
    Hero.jsx, About.jsx, Skills.jsx, Projects.jsx, Contact.jsx, Footer.jsx
    ProjectCard.jsx, BackToTop.jsx
    Reveal.jsx, Magnetic.jsx  Small reusable wrapper components
```

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build      # production build to dist/
npm run preview    # preview the production build
```

## Note on the avatar image

The original site referenced `assets/images/mybot.webp`, which wasn't part
of the uploaded files. Add your image at `public/assets/images/mybot.webp`
(referenced from `Hero.jsx` and `About.jsx` as `/assets/images/mybot.webp`)
before building — otherwise the `<img>` tags will just show broken-image
placeholders.

## Contact form

The contact form still posts to the same Formspree endpoint
(`https://formspree.io/f/xldwlwpb`) that the original `script.js` used. If
this isn't your form, swap `FORM_ACTION` in `src/components/Contact.jsx`.

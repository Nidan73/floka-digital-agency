# Floka Digital Agency

Live: https://floka-digitat-agent.netlify.app/

A one-page landing site for a fictional creative agency, built with React and Vite. It closes with a React Three Fiber particle scene that forms text and reacts to the mouse.

## Features

- Sections: hero, intro, portfolio, expertise, fun facts, client logos and reel, testimonials, contact, awards, team, FAQ, insights.
- Particle scene (`src/components/Common/ParticleLogo.jsx`): 18,000 points whose targets are sampled from text drawn on a canvas, with spring return and mouse repulsion.
- Custom cursor smoothed with Framer Motion springs.
- Scroll-linked motion with `useScroll` and `useTransform`, parallax images, and an SVG turbulence hover effect on images.
- Scroll-to-top button with a circular SVG progress ring.
- Portfolio, expertise and awards content loaded from `public/data/*.json`.
- The contact form is visual only and does not submit anywhere.

## Stack

React 19, Vite 7, React Router 7, Tailwind CSS 4, DaisyUI 5, Framer Motion 12, Three.js, React Three Fiber, drei, react-countup, react-fast-marquee.

## Run locally

```bash
git clone https://github.com/Nidan73/floka-digital-agency.git
cd floka-digital-agency
npm install
npm run dev
```

## Scripts

- `npm run dev`: Vite dev server
- `npm run build`: production build
- `npm run preview`: preview the build
- `npm run lint`: ESLint

## Project structure

```
public/data/          JSON content for portfolio, expertise, awards, team
src/Layout/Home.jsx   page composition
src/Section/          page sections
src/components/       shared UI and motion components, particle scene
src/route/            router
```

## Deployment

Deployed on Netlify. The site has a single route, so no SPA redirect rule is needed.

## Author

Nidan Alam: https://nidanalam.dev, https://github.com/Nidan73

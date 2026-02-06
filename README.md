# TimeTravel Agency — Demo Frontend

A small, responsive React demo for a fictional "TimeTravel Agency". It showcases a dark-luxury themed landing page with interactive destination cards, a destination details modal, a floating chatbot widget (mocked), and a quick quiz that recommends a destination.

## Project description

This repository contains a lightweight single-page React app (Vite) built to demonstrate a clear component structure and modern UI patterns. It emphasizes clarity, responsiveness and accessibility-ready components. The UI uses Tailwind CSS for rapid styling and small custom utilities.

Use-cases:
- Prototype for a travel/experiential site with immersive destination cards.
- Demo of UI components: header, hero, cards, modal, floating chat widget, and a guided quiz.
- Starting point for hooking up real backends (bookings, chat, analytics).

## Tech stack

- React 19
- Vite (dev server / build)
- Tailwind CSS (utility-first styling)
- PostCSS + Autoprefixer
- Plain JavaScript (JSX) and modern browser APIs (IntersectionObserver)

Files of interest
- `src/components/` — main UI components (Header, Hero, Destinations, DestinationModal, Footer, ChatWidget, Quiz, etc.)
- `src/hooks/useInView.jsx` — small IntersectionObserver hook for fade-in on scroll
- `src/index.css` — Tailwind entry + a few custom utility rules
- `tailwind.config.cjs`, `postcss.config.cjs` — Tailwind/PostCSS configuration

## Features

- Responsive Header with CTA
- Hero section with large background image and CTAs
- Destinations grid with interactive cards and hover effects
- Destination details modal with image, description and CTA
- Floating Chat Widget (bottom-right) with toggle button, message list, input field and rule-based mock responses
- 4-question Quiz that recommends a destination with a personalized explanation
- Subtle animations: fade-in on scroll, button/hover transitions
- Placeholder images (sourced from Unsplash) are included under `src/assets/images`

## How to run

Prerequisites: Node 16+ recommended.

From the project root:

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## AI tools used

This project was scaffolded and edited with assistance from AI tools to speed up development and produce example components. Tools used during authoring:

- OpenAI (ChatGPT) for generating component code, small utilities, and prose (README content, commit-style edits).

If you or your team prefer not to use AI-generated code, review the components in `src/components/` and replace or refactor any parts as desired.

## Transparency about generated content

Many files in this repository were created or modified programmatically as part of this session. Specifically, the following files were generated or substantially edited by the assistant and should be reviewed by a human developer before production use:

- `src/components/Header.jsx`
- `src/components/Hero.jsx`
- `src/components/Destinations.jsx`
- `src/components/DestinationModal.jsx`
- `src/components/Footer.jsx`
- `src/components/ChatWidget.jsx`
- `src/components/Quiz.jsx`
- `src/hooks/useInView.jsx`
- `src/index.css`
- `tailwind.config.cjs`
- `postcss.config.cjs`

Notes and recommendations:
- Accessibility: the components include basic accessibility features (focusable controls, ARIA labels). Consider adding keyboard focus traps for modals, ARIA live regions for chat announcements, and comprehensive keyboard navigation tests.
- Security & backend: the ChatWidget is mock-only. Do not treat it as a production chat integration — hook it to a proper backend or messaging API before sending real user data.
- Tests: add unit and integration tests (React Testing Library / Vitest) before deploying.

## Asset credits

Placeholder images in `src/assets/images` are from Unsplash photographers (file names include the original credit). They are provided here for demo purposes — replace with your licensed assets for production.

## License

This project is released under the MIT License. See `LICENSE` for details.

---

If you'd like, I can also add a small `LICENSE` file, a CONTRIBUTING guide, or automated ESLint / Prettier configuration.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

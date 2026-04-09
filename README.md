# 🌌 Floka Digital Agency

A high-performance, visually immersive digital agency landing page. This project combines modern frontend architecture with premium motion design and 3D particle simulations to create a luxury digital experience.

🔗 **Live Demo:** ([https://sm-tech-task.netlify.app/](https://floka-digitat-agent.netlify.app/))

🔗 **GitHub Repository:** [Nidan73/floka-digital-agency](https://github.com/Nidan73/floka-digital-agency)

---

## ✨ Key Features

- **Premium UI/UX:** A minimalist dark aesthetic inspired by top-tier creative agencies.
- **3D Particle Logo:** Custom interactive particle system built with **React Three Fiber** and **Three.js**.
- **Typographic Preloader:** Smooth black-screen entry with a precise progress scan-line effect.
- **Dynamic Scroll Interactions:** SVG-based circular progress tracker for scroll-to-top interaction.
- **Modern Layouts:** Includes portfolio, expertise, awards, testimonials, contact, and blog-style insight sections.
- **Smooth Animations:** Rich transitions and motion effects powered by **Framer Motion**.
- **Fully Responsive:** Optimized for mobile, tablet, laptop, and large displays.

---

## 🛠️ Tech Stack

### Core

- **React 19**
- **Vite**
- **React Router**

### Styling & Animation

- **Tailwind CSS v4**
- **DaisyUI**
- **Framer Motion**

### 3D & Creative Coding

- **Three.js**
- **React Three Fiber**
- **@react-three/drei**
- **Lucide React**
- **React Icons**

### Additional Libraries

- **React CountUp**
- **React Fast Marquee**
- **clsx**
- **tailwind-merge**

---

## 📂 Project Structure

```bash
floka-digital-agency/
├── public/                # Static assets and Netlify redirects
├── src/
│   ├── assets/            # Images, SVGs, and visual resources
│   ├── components/
│   │   └── Common/        # Reusable UI components
│   ├── Layout/            # Layout wrappers
│   ├── lib/               # Utility helpers
│   ├── route/             # Routing configuration
│   ├── Section/           # Page sections
│   │   ├── AvengersSection.jsx
│   │   ├── AwardsSection.jsx
│   │   ├── ClientLogosSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── ExpertiseSection.jsx
│   │   ├── FaqSection.jsx
│   │   ├── FunFactsSection.jsx
│   │   ├── Hero.jsx
│   │   ├── InsightsSection.jsx
│   │   ├── IntroSection.jsx
│   │   ├── PortfolioSection.jsx
│   │   └── UserFeedbackSection.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Nidan73/floka-digital-agency.git
cd floka-digital-agency
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

---

## 📦 Scripts

- `npm run dev` — Start the Vite development server
- `npm run build` — Create the production build
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint

---

## 🌐 Deployment

This project is deployed on **Netlify**.

For SPA routing on Netlify, add a `_redirects` file inside the `public/` folder with the following rule:

```txt
/*    /index.html   200
```

---

## 👤 Author

**Nidan Alam**

- **Portfolio:** [nidanalam.netlify.app](https://nidanalam.netlify.app/)
- **LinkedIn:** [linkedin.com/in/nidan-alam-7428a3231](https://www.linkedin.com/in/nidan-alam-7428a3231)
- **GitHub:** [github.com/Nidan73](https://github.com/Nidan73)

---

## 📄 License

This project is for demonstration and portfolio purposes. All rights reserved.

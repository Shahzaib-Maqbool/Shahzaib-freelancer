# Shahzaib Portfolio — React + Vite + Bootstrap 5 + Framer Motion

## Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Notes

- **Profile photo**: add your photo as `public/shahzaib.png` (referenced in `src/components/Hero.jsx` as `/shahzaib.png`). It wasn't included in the original upload, so drop your image into the `public/` folder with that exact name, or update the `src` path in `Hero.jsx`.
- **Contact form (EmailJS)**: the form in `src/components/Contact.jsx` uses `@emailjs/browser`. Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` with your own EmailJS credentials (see comment block in that file, or https://www.emailjs.com).
- **Animations**: Framer Motion is used throughout — staggered entrance animations in the hero, scroll-triggered reveals (`whileInView`) for each section, hover/tap micro-interactions on buttons and cards, a floating animation on the hero's tech tags, and animated open/close transitions for the mobile menu and WhatsApp dropdown.
- **Styling**: Bootstrap 5 provides the grid/layout utilities (`container`, `row`, `col-*`, flex utilities), while the original dark theme, custom colors, and component styling are preserved in `src/index.css` using the same CSS variables as the original design.

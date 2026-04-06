# Godrej Aveline – Luxury Real Estate Website

A production-ready luxury real estate landing page built with React + Vite, Tailwind CSS, Framer Motion, Swiper.js, and Web3Forms.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## ⚙️ Configuration

### Web3Forms (Contact Form)

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email to get a free access key
3. Open `src/components/ContactForm.jsx`
4. Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your actual key:

```js
const WEB3FORMS_KEY = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
```

---

## 📁 Project Structure

```
godrej-aveline/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navbar with mobile menu
│   │   ├── Hero.jsx            # Fullscreen hero with animations
│   │   ├── About.jsx           # 2-col about section
│   │   ├── Highlights.jsx      # Project highlights grid
│   │   ├── Amenities.jsx       # 12 amenities card grid
│   │   ├── Location.jsx        # Location advantages + map
│   │   ├── Gallery.jsx         # Swiper.js image gallery
│   │   ├── ContactForm.jsx     # Web3Forms enquiry form
│   │   ├── Footer.jsx          # Footer with branding
│   │   └── ScrollProgress.jsx  # Scroll progress bar
│   ├── hooks/
│   │   └── useScrollReveal.js  # Framer Motion scroll animations
│   ├── pages/
│   │   └── Home.jsx            # Main page composition
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Global styles + Tailwind
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🎨 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 + Vite | Frontend framework & build tool |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Scroll animations & transitions |
| Swiper.js | Gallery slider |
| Lucide React | Icons |
| Web3Forms | Form submission (no backend needed) |

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the `dist/` folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the `dist/` folder
```

---

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to change the color palette:
```js
colors: {
  gold: {
    DEFAULT: '#B8965A',   // Main gold
    light: '#D4B483',     // Light gold
    dark: '#8A6D3B',      // Dark gold
  },
}
```

### Content
- **Project details** → `src/components/Highlights.jsx`
- **Amenities list** → `src/components/Amenities.jsx`
- **Location advantages** → `src/components/Location.jsx`
- **Gallery images** → `src/components/Gallery.jsx`
- **Contact details** → `src/components/ContactForm.jsx` & `Footer.jsx`
- **RERA number** → `src/components/Highlights.jsx` & `Footer.jsx`

### Images
Replace Unsplash URLs in each component with your own hosted images for production use.

---

## 📋 RERA Compliance

Update RERA numbers in:
- `src/components/Highlights.jsx` (card #08)
- `src/components/Footer.jsx` (RERA badge)

---

## 📞 Support

For customization or deployment help, contact LogIN Realty.

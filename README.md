# Kunjan Shah — Portfolio Website

> Built with React 18 + Vite 6 · Deployed on GitHub Pages · Zero backend

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add your photo
# Copy your photo to public/photo.jpg

# 3. Start development server
npm run dev
# → http://localhost:5173
```

## ✏️ How to Edit Content (CRUD)

**All content lives in one file:**

```
src/data/portfolio.js
```

Open it and edit the exported objects:

| Export              | What it controls                        |
|---------------------|-----------------------------------------|
| `meta`              | Name, email, photo, social links        |
| `hero`              | Taglines, badges, open-source highlight |
| `about`             | Paragraphs, collaboration points        |
| `skillCategories`   | All skills with levels (0–100)          |
| `projects`          | Project cards, links, tags              |
| `experience`        | Work history timeline                   |
| `education`         | Degree cards                            |
| `publications`      | Papers and blog posts                   |

Save the file → the browser hot-reloads instantly.

## 📧 Enable Contact Form (Formspree)

1. Sign up free at [formspree.io](https://formspree.io)
2. Create a new form → copy the form ID (looks like `xabc1234`)
3. In `src/data/portfolio.js`, set:
   ```js
   formspreeId: 'xabc1234',
   ```

Free tier: 50 submissions/month.

## 🌐 Deploy to GitHub Pages

### Option A — Automatic (recommended)

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source** → select **GitHub Actions**
3. Push to `main` → the Actions workflow deploys automatically

### Option B — Manual

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

### ⚙️ Important: Set your repo name

In `vite.config.js`:
```js
const REPO_NAME = '/your-repo-name/'
// If using custom domain (e.g. kunjanshah.dev): base: '/'
```

## 🗂️ Project Structure

```
portfolio/
├── public/
│   ├── photo.jpg          ← ADD YOUR PHOTO HERE
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── data/
│   │   └── portfolio.js   ← ✏️  EDIT THIS FILE FOR ALL CONTENT
│   ├── components/
│   │   ├── AnimatedSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Publications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css          ← 🎨  EDIT CSS VARIABLES TO RETHEME
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Retheme in Seconds

Edit the CSS variables at the top of `src/index.css`:

```css
:root {
  --cyan:   #00d4ff;   /* primary accent */
  --green:  #00ff9d;   /* secondary accent */
  --violet: #8b5cf6;   /* tertiary */
  --bg:     #06090f;   /* main background */
}
```

## 📦 Dependencies

| Package                      | Purpose                       |
|------------------------------|-------------------------------|
| react + react-dom            | UI framework                  |
| vite + @vitejs/plugin-react  | Build tool                    |
| react-icons                  | Icon library (optional)       |
| gh-pages                     | Manual GitHub Pages deploy    |

No CSS framework (Tailwind etc.) needed — pure CSS with variables.

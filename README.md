# Innovations Advisory — Static Site

A lightweight static site you can deploy on **GitHub Pages**.

## Quick Start

1. Create a new GitHub repository (public is fine).
2. Upload all files from this folder to the repo root (keep folder structure).
3. Commit & push.
4. In the repo: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main** (or `master`) — **/ (root)**
5. Wait ~1–2 minutes. Your site will be live at:
   - `https://<your-username>.github.io/<repo-name>/`

## Customize

- Update contact details in `index.html` (Contact section & JSON-LD block).
- Replace `assets/img/og-image.png` for richer social previews.
- Adjust colors and layout in `assets/css/styles.css`.

## Local Preview

Open `index.html` directly in your browser, or use any static server:
```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

© 2025 Innovations Advisory
# Innovations-Advisory

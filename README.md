# Innovations Advisory — Static Site (Formspree)

Production-like static site ready for **GitHub Pages** with a functional contact form via **Formspree**.

## Deploy on GitHub Pages

1. Create a new GitHub repository (public).
2. Upload all files from this folder to the repo root (keep folder structure).
3. Commit & push.
4. In the repo: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main** (or `master`) — **/ (root)**
5. Your site will be live at `https://<your-username>.github.io/<repo-name>/`

## Configure Theme Colors
Edit `assets/css/theme.css` and change `--primary`, `--on-primary`, and `--accent` to match your logo brand colors.

## Add Your Logo
Replace `assets/img/logo.png` (and `logo.svg` if you prefer vector) with your actual logo file **using the same filename**.

## Formspree
The contact form posts to your endpoint:
- `https://formspree.io/f/movnpova`

You can customize subject line and fields in `index.html`.

## Local Preview
Open `index.html` directly, or run:
```bash
python3 -m http.server 8080
# open http://localhost:8080
```

© 2025 Innovations Advisory

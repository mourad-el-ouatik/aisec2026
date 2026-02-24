# 🛡️ AISEC 2026 — AI & Cybersecurity International Summit

> **5th Edition · 16–18 May 2026 · ENSA Marrakech, Cadi Ayad University · Morocco**

Official website for the **AiSec International Summit**, the premier AI & Cybersecurity event in Africa and the Arab World.

🔗 **Live Site:** [https://mourad-el-ouatik.github.io/aisec2026/](https://mourad-el-ouatik.github.io/aisec2026/)

---

## 📌 About the Event

**AiSec** is an annual international summit dedicated to the intersection of **Artificial Intelligence and Cybersecurity**, hosted at the National School of Applied Science (ENSA), Cadi Ayad University, Marrakech, Morocco.

The summit brings together world-class researchers, industry leaders, government officials, and students from Africa, the Arab World, and beyond.

| Stat | Value |
|------|-------|
| 👥 Attendees | 1000+ |
| 🎤 Speakers | 60+ |
| 📅 Editions | 5 |
| 🗓️ Duration | 3 Days |

---

## 🗂️ Project Structure

```
aisec2026/
├── index.html          # Main landing page
├── style.css           # Global stylesheet
├── script.js           # Interactive JS (navbar, slider, countdown, tabs)
├── images/             # All images (logos, speakers, editions, backgrounds)
├── conference/         # Scientific Conference sub-site
├── ctf/                # CTF Competition sub-site
└── editions/           # Past editions pages (2021–2025)
```

---

## 🧩 Sections

### 🏠 Home / Hero
Countdown timer to the event, key info (date, venue), and animated hero banner.

### ℹ️ About
Overview of what AiSec is, its mission, and the topics covered: AI Security, Machine Learning, Threat Intelligence, CTF, Zero Trust, Research.

### 📅 Event Program
Three-day schedule with tabbed navigation:
- **Day 1** — Opening, Keynotes, Workshops
- **Day 2** — Scientific Conference & Research Papers
- **Day 3** — CTF Finals, Career Fair, Closing Ceremony

### 🎤 Speakers
Two-row sliding carousel featuring **40+ international speakers** including academics, CISOs, government officials, and industry experts from Morocco, Africa, Europe, and North America.

### 🤝 Partners & Sponsors
Organized into three tiers:
- **Event Organizers** — UCA, ENSA Marrakech, LARTID, EMSI, GCDSTE
- **Institutional Sponsors** — Ministère de la Transition Numérique, Ministère de l'Enseignement Supérieur, CNRST
- **Corporate Sponsors** — EBF, Crisis, ShellBoxes, Folyo

### 🎓 Scientific Conference
International peer-reviewed conference with published proceedings, best paper & poster awards, and special PhD sessions. → [`/conference`](conference/index.html)

### 🏆 CTF Competition
Capture The Flag competition open to universities, companies, and independent hackers. Categories: Web, Crypto, Reverse, Forensics, PWN. AI-themed exclusive challenges. → [`/ctf`](ctf/index.html)

### 📜 Past Editions
Slider showcasing all 5 editions (2021–2025) with stats and highlights.

---

## ⚙️ Tech Stack

- **HTML5 / CSS3 / Vanilla JavaScript** — no framework dependency
- **CSS Custom Properties** — full design token system (`--cyan`, `--bg2`, `--font-display`, etc.)
- **Google Fonts** — Syne (display), DM Sans (body), Share Tech Mono (mono)
- **IntersectionObserver API** — scroll-triggered fade-in animations
- **CSS Grid + JS slider** — two-row speaker carousel with auto-advance, touch/swipe, and dot navigation
- **GitHub Pages** — static hosting

---

## 🚀 Local Development

No build step required — pure static site.

```bash
# Clone the repository
git clone https://github.com/mourad-el-ouatik/aisec2026.git

# Open in browser
cd aisec2026
open index.html
# or use a local server:
npx serve .
```

---

## 📬 Contact

- **Email:** [a.abouelkalam@uca.ac.ma](mailto:a.abouelkalam@uca.ac.ma)
- **Venue:** [ENSA Marrakech](https://ensa-marrakech.uca.ma)
- **University:** [Cadi Ayad University](https://uca.ma)

---

## 📄 License

© 2026 AiSec Summit — All rights reserved.
Website built by the [FOLYO Team](https://folyo.ma).

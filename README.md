# BPD Verstehen — Hugo Starter

Gemeinnützige Informationswebsite über Borderline-Persönlichkeitsstörung.

## Tech Stack

- **Hugo** — Static Site Generator
- **Tailwind CSS** — Utility-first Styling
- **Decap CMS** — Content-Pflege via Browser-Interface (folgt in Phase 2)
- **Netlify** — Hosting & CI/CD (kostenlos)

---

## Einrichtung (lokal)

### 1. Voraussetzungen

```bash
# Hugo Extended installieren (wichtig: Extended-Version für PostCSS)
# macOS
brew install hugo

# Windows
scoop install hugo-extended

# Prüfen
hugo version
```

### 2. Abhängigkeiten installieren

```bash
cd bpd-website
npm install
```

### 3. Tailwind CSS kompilieren

```bash
# Einmalig kompilieren
npm run tw:build

# Oder: im Hintergrund mitlaufen lassen (Development)
npm run tw:watch
```

### 4. Hugo Dev-Server starten

```bash
# In einem zweiten Terminal
hugo server --disableFastRender
```

→ Die Seite läuft nun auf **http://localhost:1313**

---

## Projektstruktur

```
bpd-website/
├── hugo.toml                  # Hugo-Konfiguration
├── tailwind.config.js         # Tailwind-Konfiguration
├── package.json               # npm-Abhängigkeiten
│
├── assets/css/main.css        # CSS-Einstiegspunkt (Tailwind + Custom)
├── static/
│   ├── css/compiled.css       # ← wird von Tailwind generiert
│   └── js/main.js             # Minimales JavaScript
│
├── layouts/
│   ├── _default/
│   │   ├── baseof.html        # Globales HTML-Gerüst
│   │   ├── single.html        # Einzelseiten-Template
│   │   └── list.html          # Übersichtsseiten-Template
│   ├── partials/
│   │   ├── nav.html           # Navigation
│   │   └── footer.html        # Footer
│   ├── index.html             # Startseite
│   └── ressourcen/list.html   # Ressourcen-Übersicht (data-driven)
│
├── content/
│   ├── _index.md              # Startseiten-Frontmatter
│   ├── krankheitsbild/        # BPD-Artikel
│   └── ressourcen/            # Ressourcen-Seite
│
└── data/
    └── ressourcen.yaml        # Ressourcen-Daten (ohne Code änderbar)
```

---

## Inhalte bearbeiten

### Artikel hinzufügen

Neue `.md`-Datei in `content/krankheitsbild/` erstellen:

```markdown
---
title: "Titel des Artikels"
description: "Kurze Beschreibung für Übersicht und SEO"
chip: "Kategorie-Label"
weight: 2
---

## Dein Inhalt hier
```

### Ressource hinzufügen

In `data/ressourcen.yaml` einen neuen Eintrag ergänzen:

```yaml
- name: "Name der Anlaufstelle"
  kategorie: beratung   # krise | beratung | therapie | selbsthilfe | information
  beschreibung: "Was diese Stelle anbietet."
  kontakt: "0800 123 456"
  url: "https://beispiel.de"
  kostenlos: true
```

---

## Deployment (Netlify)

1. Repository auf GitHub pushen
2. Auf [netlify.com](https://netlify.com) einloggen → "Add new site" → GitHub-Repo auswählen
3. Build-Einstellungen:
   - **Build command:** `npm run tw:build && hugo --minify`
   - **Publish directory:** `public`
4. Fertig — automatisches Deployment bei jedem `git push`

---

## Nächste Schritte (Phase 2)

- [ ] Decap CMS einrichten (Content-Pflege ohne Code)
- [ ] Discourse-Forum aufsetzen (Hetzner)
- [ ] Impressum & Datenschutz-Seiten anlegen
- [ ] SEO-Metadaten optimieren
- [ ] Barrierefreiheit testen (WAVE, axe)

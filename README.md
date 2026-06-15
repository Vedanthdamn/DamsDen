# DamsDen

Personal portfolio of **Vedanth Dama** — B.Tech CSE (AI & ML) student at SRMIST, Kattankulathur.

Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.
Designed with a space-dark aesthetic: deep void backgrounds, silver-white typography, and deliberate minimalism.

---

## Pages

| Route | Description |
|---|---|
| `/` | Hero — name, title, and entry point |
| `/about` | Background, education, current status |
| `/projects` | SRMiggy, RouteIQ, TeleMac, DriveScore.ai, FlowSense.ai |
| `/experience` | DRDO, DMRC/Deloitte, Microsoft Student Ambassadors, NICSI |
| `/skills` | Technical skills grouped by domain + education |
| `/beyond-the-code` | Interests and values outside engineering |
| `/how-this-was-made` | Design system, palette, typography, principles |
| `/contact` | Email, LinkedIn, GitHub, resume download |

---

## Tech Stack

- **Framework** — Next.js 14 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS
- **Animation** — Framer Motion
- **Icons** — Tabler Icons
- **Audio** — Howler.js
- **Fonts** — Cormorant Garamond, Cinzel, Inter, JetBrains Mono (Google Fonts)
- **Deployment** — Vercel (planned)

---

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| `void` | `#050508` | Page background |
| `silver` | `#E8EAF0` | Primary text |
| `surface` | `#0C0C10` | Card backgrounds |
| `dim` | `rgba(232,234,240,0.45)` | Secondary text |
| `ghost` | `rgba(232,234,240,0.08)` | Subtle fills |
| `edge` | `rgba(232,234,240,0.10)` | Borders |

**Display font:** Cormorant Garamond (Renaissance-cut serif — headings, name)
**Label font:** Cinzel (Roman caps — section labels, nav)
**Body font:** Inter (neutral grotesque — prose, UI)
**Mono font:** JetBrains Mono (technical — tags, dates, data)

---

## Running Locally

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/Vedanthdamn/DamsDen.git
cd DamsDen

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Optional Assets

The site runs without these — missing files show placeholders gracefully.

| File | Purpose |
|---|---|
| `public/audio/ambient.mp3` | Ambient sound (sound toggle in navbar) — download any dark ambient loop from [pixabay.com/music](https://pixabay.com/music) |
| `public/resume/vedanth-dama-resume.pdf` | Resume PDF for the download button |
| `public/images/projects/srmiggy.png` | Project screenshot |
| `public/images/projects/routeiq.png` | Project screenshot |
| `public/images/projects/telemac.png` | Project screenshot |
| `public/images/projects/drivescore.png` | Project screenshot |
| `public/images/projects/flowsense.png` | Project screenshot |

---

## Project Structure

```
DamsDen/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Home / Hero
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── experience/page.tsx
│   ├── skills/page.tsx
│   ├── beyond-the-code/page.tsx
│   ├── how-this-was-made/page.tsx
│   ├── contact/page.tsx
│   └── not-found.tsx
├── components/
│   ├── layout/                 # Navbar, CurtainTransition
│   ├── sections/               # Page section components
│   └── ui/                     # DigitalTwin, SoundToggle, SectionLabel, WaxSealModal
├── context/                    # SoundContext, CurtainContext
├── lib/                        # projects.ts, experience.ts data
└── public/                     # Static assets
```

---

## Build

```bash
npm run build
npm run start
```

---

## Links

- **Live site** — coming soon
- **LinkedIn** — [vedanth-dama](https://www.linkedin.com/in/vedanth-dama)
- **GitHub** — [Vedanthdamn](https://github.com/Vedanthdamn)

---

*Built by Vedanth Dama · 2025*

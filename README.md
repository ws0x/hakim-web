# Hakim Web (حَكِيم)

> **Visual Reading Intelligence & Interactive Knowledge Graph Platform**

Hakim Web is the web client and visual intelligence companion for [Hakim (Kindle to Notion Synchronizer)](https://github.com/ws0x/hakim).

## 🚀 Live Demo & Web App

- **Landing Page**: [https://ws0x.github.io/hakim-web/](https://ws0x.github.io/hakim-web/)
- **Visual Web App**: [https://ws0x.github.io/hakim-web/app.html](https://ws0x.github.io/hakim-web/app.html)

## ✨ Core Features

1. **Interactive 2D Force-Directed Knowledge Graph**:
   - Hardware-accelerated canvas physics engine mapping books, highlights, and shared concepts.
   - Smooth pan, zoom, node drag-and-pin, and topological search.
2. **Reading OS Card Grid & Books Shelf**:
   - Editorial highlight cards with semantic color borders, location tags, and importance indicators.
   - 3-column Reading Kanban Board (`Currently Reading`, `Completed`, `Want to Read`).
3. **Slide-over Reading Detail Drawer**:
   - Deep inspection drawer displaying full original quotes, personal notes, reflections, and Markdown citation exporter.
4. **Aesthetic Social Quote Card Generator**:
   - Real-time canvas artboard generator with customizable gradient themes (*Obsidian*, *Sunset*, *Emerald*, *Minimal*) and multi-aspect ratio framing (`1:1`, `9:16`, `16:9`) for 1-click PNG exports.
5. **3D Active Recall & Spaced Repetition Flashcards**:
   - Interactive 3D flippable flashcard deck with rating feedback (`Again`, `Good`, `Mastered`), keyboard navigation (`Space`, `1`, `2`, `3`), and retention analytics.
6. **Local SQLite Engine Bridge**:
   - Connects directly to the local Hakim SQLite engine (`127.0.0.1:4242`) for instantaneous offline library loading.

## 🛠️ Local Development

```bash
# Clone the repository
git clone https://github.com/ws0x/hakim-web.git
cd hakim-web

# Install dependencies
pnpm install

# Build static bundle into dist/
pnpm build

# Run unit and integration tests
pnpm test
```

## 📄 License

MIT © [ws0x](https://github.com/ws0x)

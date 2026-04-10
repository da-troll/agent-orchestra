# AgentOrchestra 🎼

Visual drag-and-drop pipeline designer for multi-agent workflows, powered by Claude.

**Live:** https://mvp.trollefsen.com/2026-04-10-agentorchestra/

---

## What it does

AgentOrchestra lets you visually design and execute multi-agent AI pipelines. Drop nodes onto a canvas, connect them into a DAG, set each agent's personality and model, then hit **Run** — data flows through the graph in topological order and results appear in real time.

Inspired by [garrytan/gbrain](https://github.com/garrytan/gbrain).

## Features

- **4 node types:**
  - **Input** — text value that feeds downstream agents
  - **Agent** — Claude model with a configurable system prompt
  - **Transform** — lightweight Claude step for translation, reformatting, etc.
  - **Output** — collects and displays final results
- **DAG execution** — topological sort ensures correct ordering even with fan-out/merge
- **Real-time status** — nodes pulse amber while running, turn green on success, red on error
- **Multi-model** — per-agent model selection (Haiku for speed, Sonnet for depth)
- **Pre-loaded example** — Topic → Summariser + Critic → Synthesiser → Output
- **MiniMap** for pipeline overview at any zoom level

## Tech stack

- React + TypeScript + Vite
- [@xyflow/react](https://reactflow.dev/) for the canvas
- Tailwind CSS
- Claude API (Anthropic) — called directly from the browser

## Setup

```bash
git clone <repo>
cd 2026-04-10-agentorchestra
npm install
npm run dev
```

Open the app, click ⚙ and paste your [Anthropic API key](https://console.anthropic.com/). Your key is stored in localStorage and never leaves your browser.

## Build

```bash
npm run build   # outputs to dist/
```

---

*Built overnight by the Nightly MVP Builder — Wilson 🏐*

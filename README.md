# Portfolio

Personal portfolio site — separate from [GlowSync](../glowsync).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

Edit `lib/site.ts` to update:

- Name, title, tagline, email, LinkedIn, GitHub
- Projects (add GlowSync live URL when you have it)
- Skills

## Deploy

1. Create a new GitHub repository (e.g. `portfolio`).
2. Push this folder to that repo (not inside the glowsync repo).
3. In Vercel, add a **new project** and connect the portfolio repo.
4. Production branch: `main`.

## GlowSync

GlowSync lives in a separate project at `../glowsync`. Link to your deployed GlowSync URL in `lib/site.ts` under the GlowSync project `href` field.

# Portfolio

Personal portfolio site (Next.js).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in the terminal).

## Assets

Regenerate GlowSync screenshot and resume PDF:

```bash
npm run capture-assets
```

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (defaults are fine).
4. Deploy. Set `NEXT_PUBLIC_SITE_URL` to your production URL (optional, for Open Graph).

Or from this directory after `npx vercel login`:

```bash
npx vercel --prod
```

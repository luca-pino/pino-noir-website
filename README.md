# Pino Noir website

Code-first website for Pino Noir at `lagypsyjazz.com`. It is a portable Vite/React static site: no visual site builder and no host-specific runtime.

## Local development

Requires Node.js 22 or newer.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. Create a production build with:

```bash
npm run build
```

The deployable output is written to `dist/`.

## Where to edit

- Page structure and copy: `src/App.tsx`
- Colors, type, and global styling: `src/styles.css`
- Audio player: `components/audio-player.tsx`
- Booking handoff: `components/booking-form.tsx`
- Photos and social artwork: `public/images/` and `public/og.png`
- Songs: `public/media/`
- YouTube performance embed: `src/App.tsx`
- Logo: `public/brand/`
- Search and social metadata: `index.html`

The navigation background and logo background use the same `#080808` black.

## Recommended ownership and deployment

1. Luca owns the public GitHub repository for this project. The site contains no secrets, and public-repository contributors can trigger deploys on Netlify's Free and Personal plans.
2. Luca creates his own Netlify account and imports the GitHub repository.
3. Netlify reads `netlify.toml`, runs `npm run build`, and publishes `dist/`.
4. Every push to the production branch builds and deploys automatically. Use Netlify's deploy history to roll back if needed.

Netlify Free is enough for a modest launch. Its monthly usage cap is hard, so Personal is the safer upgrade if the media starts receiving sustained traffic.

## Connect `lagypsyjazz.com` without transferring it from Wix

Do this only after the Netlify URL is live and verified.

1. In Netlify, add `lagypsyjazz.com` and `www.lagypsyjazz.com` as production domains. With Wix kept as external DNS, make `www.lagypsyjazz.com` the primary domain.
2. In Wix, open the DNS records for `lagypsyjazz.com`.
3. Replace only the conflicting website-routing records:
   - `A` record, host blank or `@`, value `75.2.60.5`
   - `CNAME` record, host `www`, value matching the exact Netlify project hostname, such as `PROJECT-NAME.netlify.app`
4. Preserve all MX, TXT, SPF, DKIM, DMARC, verification, and unrelated subdomain records.
5. Keep the old site available until both domain variants load the new deploy over HTTPS. DNS and certificate propagation can take up to 48 hours.

Official references: [Netlify domain setup](https://docs.netlify.com/manage/domains/get-started-with-domains/), [Netlify Git deploys](https://docs.netlify.com/deploy/create-deploys/), and [Wix external-site connection](https://support.wix.com/en/article/connecting-a-wix-domain-to-an-external-site).

# Icon Fitness Zone

Purpose: website/prototype for a gym with a home page, a face-scan check-in kiosk demo and an admin overview. Sample data is invented; replace name, prices and address before publishing.

Stack: React 19 + TypeScript, hash routing (no router library), plain CSS.

Pages: `/` Start (Home.tsx), `/kiosk` Kiosk (Kiosk.tsx), `/admin` Verwaltung (Admin.tsx). Listed in `src/routes.ts`.

Structure: `App.tsx` renders `Header` once and the current page; each page wraps content in `<main className="page">`. Data in `src/data/menu.ts` (MEMBERS, PLANS).

Design tokens (src/styles/globals.css): --color-bg #0b0d12, --color-surface #161a23, --color-accent #ff5a1f, --color-text #f5f6f8, --color-muted #9aa3b2, font Inter/system-ui. Global classes: .container, .btn, .btn-primary, .card, .page-title, .page.

Decisions: UI copy in German; dark theme with orange accent; headings white on dark surfaces.

Image style: photographic, dark gym interiors with glowing orange light; abstract glowing orange-on-dark illustrations.

Media: image lists live in `src/data/media.ts` (feature illustrations, studio gallery).

Android: Capacitor config in `capacitor.config.ts` (webDir `dist`). Build locally: `npm i`, `npm run android:add`, `npm run android:sync`, `npm run android:open`, then build the APK in Android Studio.

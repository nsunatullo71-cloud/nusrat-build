# Nusrat Build — Auth Setup

## 1. Install dependencies
```
npm install @supabase/ssr @supabase/supabase-js
```

## 2. Environment variables (`.env.local`)
```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR-ANON-KEY
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```
Find the URL and anon key in Supabase → Project Settings → API.
In production, set `NEXT_PUBLIC_SITE_URL` to your real domain.

## 3. Supabase Auth settings
In Supabase → Authentication → URL Configuration, add these as **Redirect URLs**:
```
http://localhost:3000/auth/callback
https://yourdomain.com/auth/callback
```

## 4. Run the database schema first
This auth flow expects the `profiles` table and `handle_new_user()` trigger
from `supabase-schema.sql` to already exist — run that file before testing
sign-up.

## 5. File placement
Drop these into a Next.js App Router project exactly at these paths:
```
middleware.ts
lib/supabase/client.ts
lib/supabase/server.ts
lib/supabase/middleware.ts
app/actions/auth.ts
app/auth/callback/route.ts
app/login/page.tsx
app/register/page.tsx
app/forgot-password/page.tsx
app/reset-password/page.tsx
```

## 6. How role-based routing works
- New sign-ups default to `role = 'customer'` (set by the DB trigger).
- Middleware reads the role from `profiles` and confines each role to its
  area: customers → `/account`, employees/managers/admins → `/portal` or
  `/admin`.
- To promote someone to staff, an admin changes their `role` in the
  `profiles` table (via the admin dashboard, once built, or directly in
  Supabase). There is no public way to self-register as staff — that's
  intentional.

## 7. Still needed before this is fully live
- `/admin`, `/portal`, `/account` pages themselves (not built yet)
- Email templates in Supabase (Authentication → Email Templates) — the
  defaults work but don't match your brand yet
- Rate limiting on the login/register actions if you expect abuse

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// Used inside Server Components, Server Actions, and Route Handlers.
export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // setAll is called from a Server Component sometimes — safe to
            // ignore if you have middleware refreshing sessions (see below).
          }
        },
      },
    }
  )
}

// Fetches the signed-in user's role from `profiles`. Returns null if signed out.
export async function getCurrentProfile() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return null

  const { data: profile } = await supabase
    .from('profiles')
    .select('id, role, full_name, avatar_url, is_active')
    .eq('id', user.id)
    .single()

  return profile
}

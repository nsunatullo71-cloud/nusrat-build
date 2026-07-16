'use client'

import { useActionState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { login, type AuthState } from '@/app/actions/auth'

const initialState: AuthState = { error: null }

export default function LoginPage() {
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get('redirectTo') ?? ''
  const justReset = searchParams.get('reset') === 'success'
  const [state, formAction, pending] = useActionState(login, initialState)

  return (
    <div className="min-h-screen bg-[#0a0b0d] text-[#f3efe4] flex items-center justify-center px-6">
      <div className="w-full max-w-[400px]">
        <div className="mb-10 text-center">
          <Link href="/" className="font-serif text-lg tracking-wide">
            <b className="text-[#c8a25c] font-medium">N</b>usrat Build
          </Link>
          <h1 className="mt-6 font-serif text-3xl">Sign in</h1>
          <p className="mt-2 text-sm text-[#c9c4b5] font-light">
            Access your bookings, documents and account.
          </p>
        </div>

        {justReset && (
          <p className="mb-4 rounded-md border border-[#c8a25c]/30 bg-[#c8a25c]/10 px-4 py-3 text-sm text-[#e8c987]">
            Password updated. Sign in with your new password.
          </p>
        )}
        {state.error && (
          <p className="mb-4 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {state.error}
          </p>
        )}

        <form action={formAction} className="space-y-4">
          <input type="hidden" name="redirectTo" value={redirectTo} />

          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-wider text-[#c9c4b5]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none focus:border-[#c8a25c] transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label htmlFor="password" className="block text-xs uppercase tracking-wider text-[#c9c4b5]">
                Password
              </label>
              <Link href="/forgot-password" className="text-xs text-[#c8a25c] hover:text-[#e8c987]">
                Forgot?
              </Link>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none focus:border-[#c8a25c] transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-full bg-gradient-to-br from-[#e8c987] to-[#c8a25c] py-3.5 text-sm font-semibold text-[#0a0b0d] transition-opacity disabled:opacity-60"
          >
            {pending ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-[#c9c4b5]">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-[#c8a25c] hover:text-[#e8c987]">
            Create one
          </Link>
        </p>
      </div>
    </div>
  )
}

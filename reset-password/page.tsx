'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { resetPassword, type AuthState } from '@/app/actions/auth'

const initialState: AuthState = { error: null }

export default function ResetPasswordPage() {
  const [state, formAction, pending] = useActionState(resetPassword, initialState)

  return (
    <div className="min-h-screen bg-[#0a0b0d] text-[#f3efe4] flex items-center justify-center px-6">
      <div className="w-full max-w-[400px]">
        <div className="mb-10 text-center">
          <Link href="/" className="font-serif text-lg tracking-wide">
            <b className="text-[#c8a25c] font-medium">N</b>usrat Build
          </Link>
          <h1 className="mt-6 font-serif text-3xl">Choose a new password</h1>
        </div>

        {state.error && (
          <p className="mb-4 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {state.error}
          </p>
        )}

        <form action={formAction} className="space-y-4">
          <div>
            <label htmlFor="password" className="mb-1.5 block text-xs uppercase tracking-wider text-[#c9c4b5]">
              New password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={8}
              autoComplete="new-password"
              className="w-full rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none focus:border-[#c8a25c] transition-colors"
              placeholder="At least 8 characters"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="mb-1.5 block text-xs uppercase tracking-wider text-[#c9c4b5]">
              Confirm new password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              minLength={8}
              autoComplete="new-password"
              className="w-full rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none focus:border-[#c8a25c] transition-colors"
              placeholder="Repeat password"
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-full bg-gradient-to-br from-[#e8c987] to-[#c8a25c] py-3.5 text-sm font-semibold text-[#0a0b0d] transition-opacity disabled:opacity-60"
          >
            {pending ? 'Updating…' : 'Update password'}
          </button>
        </form>
      </div>
    </div>
  )
}

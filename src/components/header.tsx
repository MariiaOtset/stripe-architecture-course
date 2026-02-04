'use client'

import Link from 'next/link'
import { useAuth } from '@/lib/auth'
import { auth } from '@/lib/firebase'
import { useRouter } from 'next/navigation'

export function Header() {
  const { user } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    await auth.signOut()
    router.push('/')
  }

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <span className="sr-only">SaaS Starter</span>
        <h1 className="text-2xl font-bold">SaaS Starter</h1>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#pricing"
        >
          Pricing
        </Link>
        {user ? (
          <>
            <span className="text-sm font-medium">{user.email}</span>
            <button
              onClick={handleSignOut}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/login"
          >
            Sign In
          </Link>
        )}
      </nav>
    </header>
  )
}

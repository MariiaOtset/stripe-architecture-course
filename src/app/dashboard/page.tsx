'use client'

import Link from 'next/link'
import { useAuth } from '@/lib/auth'
import { auth } from '@/lib/firebase'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const { user } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    await auth.signOut()
    router.push('/')
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading user data…</p>
      </div>
    )
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mt-4">
        <p className="text-lg">
          Welcome, {user.email}! Here you can see your subscription status and manage your billing.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold">Subscription Status</h2>
        <div className="p-4 mt-4 bg-gray-100 rounded-lg">
          <p>You are on the Free plan.</p>
        </div>
      </div>
      <div className="mt-8 flex gap-4">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
          href="/billing"
        >
          Manage Billing
        </Link>
        <button
          onClick={handleSignOut}
          className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}

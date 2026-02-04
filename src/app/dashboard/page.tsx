import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mt-4">
        <p>
          Welcome to your dashboard. Here you can see your subscription status and
          manage your billing.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold">Subscription Status</h2>
        <div className="p-4 mt-4 bg-gray-100 rounded-lg">
          <p>Your are on the Free plan.</p>
        </div>
      </div>
      <div className="mt-8">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
          href="/billing"
        >
          Manage Billing
        </Link>
      </div>
    </div>
  )
}

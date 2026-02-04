import Link from 'next/link'

export function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Pricing for Every Stage
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Choose the plan that&apos;s right for you. Get started for free and
            upgrade when you&apos;re ready.
          </p>
        </div>
        <div className="mx-auto w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center">One-Time</h3>
            <div className="mt-4 text-center text-gray-900">
              <span className="text-4xl font-bold">$49</span>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span>Lifetime access to all features</span>
              </li>
            </ul>
            <Link
              className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
              href="/signup"
            >
              Get Started
            </Link>
          </div>
          <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center">Subscription</h3>
            <div className="mt-4 text-center text-gray-900">
              <span className="text-4xl font-bold">$19</span>
              <span className="text-base font-medium text-gray-500">
                /month
              </span>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span>Access to all features</span>
              </li>
              <li className="flex items-center">
                <span>Priority support</span>
              </li>
            </ul>
            <Link
              className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
              href="/signup"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

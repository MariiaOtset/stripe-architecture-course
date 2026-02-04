export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Everything You Need to Get Started
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              This starter kit comes with a pre-configured stack of modern
              technologies to help you build your SaaS faster.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Stripe Subscriptions</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              One-time payments and recurring subscriptions with Stripe.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Firebase Auth</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Secure user authentication and protected routes with Firebase.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Next.js App Router</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              The latest features of Next.js for a modern web application.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { AuthProvider } from '@/lib/auth'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { Inter as FontSans } from 'next/font/google'
import '@/app/globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`font-sans ${fontSans.variable}`}>
      <body>
        <AuthProvider>
          <Elements stripe={stripePromise}>{children}</Elements>
        </AuthProvider>
      </body>
    </html>
  )
}

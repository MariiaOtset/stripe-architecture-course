'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword, User } from 'firebase/auth'
import { z } from 'zod'
import { app } from '@/lib/firebase'

const AuthSchema = z.object({
  email: z.email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type AuthData = z.infer<typeof AuthSchema>

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
      const validated: AuthData = AuthSchema.parse({ email, password })

      // Firebase login
      const auth = getAuth(app)
      const userCredential = await signInWithEmailAndPassword(auth, validated.email, validated.password)

      router.push('/dashboard')
    } catch (err: unknown) {
      if (err instanceof z.ZodError) {
        setError(err.issues[0]?.message)
      } else if (err instanceof Error) {
        switch ((err as any).code) {
          case 'auth/user-not-found':
            setError('No user found with this email')
            break
          case 'auth/wrong-password':
            setError('Incorrect password')
            break
          case 'auth/too-many-requests':
            setError('Too many failed attempts. Try again later')
            break
          default:
            setError(err.message)
        }
      } else {
        setError('Something went wrong. Please try again')
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Log In</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              className="w-full px-3 py-2 mt-1 border rounded-md"
              type="email"
              name="email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              className="w-full px-3 py-2 mt-1 border rounded-md"
              type="password"
              name="password"
              required
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            className="w-full py-2 font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800"
            type="submit"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-center">
          Don&apos;t have an account?{' '}
          <Link className="text-blue-500 hover:underline" href="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

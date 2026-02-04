'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const getAuthErrorMessage = (code: string) => {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'An account with this email already exists.'
    case 'auth/invalid-email':
      return 'Please enter a valid email address.'
    case 'auth/weak-password':
      return 'Password should be at least 6 characters long.'
    case 'auth/missing-password':
      return 'Please enter a password.'
    case 'auth/network-request-failed':
      return 'Network error. Please check your connection.'
    case 'missing-fields':
      return 'Please fill in both email and password.'
    default:
      return 'Something went wrong. Please try again.'
  }
}

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Проверка на пустые поля
    if (!email || !password) {
      setError(getAuthErrorMessage('missing-fields'))
      return
    }

    // Проверка email
    if (!email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }

    // Проверка длины пароля
    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (data.error) {
        setError(getAuthErrorMessage(data.error))
      } else if (data.user) {
        // ✅ Пользователь успешно создан — сразу на дашборд
        router.replace('/dashboard')
      } else {
        setError('Unexpected error. Please try again.')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              className="w-full px-3 py-2 mt-1 border rounded-md"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              className="w-full px-3 py-2 mt-1 border rounded-md"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            className="w-full py-2 font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 disabled:opacity-50"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Creating account…' : 'Sign Up'}
          </button>
        </form>

        <p className="text-sm text-center">
          Already have an account?{' '}
          <Link className="text-blue-500 hover:underline" href="/login">
            Log In
          </Link>
        </p>
      </div>
    </div>
  )
}
